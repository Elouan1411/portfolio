// Variable globale pour récupérer le QR plus tard
let qrImage;

function preloadQR() {
    return new Promise((resolve, reject) => {
        const qr = new Image();
        qr.src = "assets/img/qr.png";
        qr.alt = "QR Code vers mon CV";
        qr.className = "cv-qr";

        qr.onload = () => {
            qrImage = qr; // stocke l'image pour l'utiliser plus tard
            resolve(qr);
        };
        qr.onerror = () => reject("Erreur lors du préchargement du QR Code");
    });
}

// Appel du preload
preloadQR()
    .then(() => console.log("QR Code préchargé et prêt à l’usage"))
    .catch((err) => console.error(err));

function initScripts() {
    console.log("Script.js: Initialisation des composants interactifs...");

    // === Navigation Menu ===
    const navTrigger = document.querySelector(".navTrigger");
    const fancyMenu = document.querySelector(".fancy-menu");

    if (navTrigger && fancyMenu) {
        navTrigger.addEventListener("click", function (e) {
            e.stopPropagation();
            this.classList.toggle("active");
            fancyMenu.classList.toggle("active");
        });

        // Close menu when clicking outside (on the body transparent part)
        document.addEventListener("click", function (e) {
            if (fancyMenu.classList.contains("active") && !fancyMenu.contains(e.target) && !navTrigger.contains(e.target)) {
                navTrigger.classList.remove("active");
                fancyMenu.classList.remove("active");
            }
        });
    }

    // === Header Animation ===
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".resume-header");
        if (!header) return;

        if (window.scrollY > 100) {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
            header.style.background = "#fff";
        } else {
            header.style.boxShadow = "none";
        }

        if (window.scrollY > 0) {
            header.classList.add("shrink");
        } else {
            header.classList.remove("shrink");
        }
    });

    // === Smooth Scroll ===
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            // Ignore modal links
            if (this.hasAttribute("data-modal")) return;

            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: "smooth",
                });
            }

            // Close menu on mobile
            if (window.innerWidth <= 768 && navTrigger && fancyMenu) {
                navTrigger.classList.remove("active");
                fancyMenu.classList.remove("active");
            }
        });
    });

    // === Terminal ===
    initTerminal();
}

let terminalProcessId = 0;
let terminalShowingSecret = false;

function initTerminal() {
    const output = document.getElementById("terminal-text");
    const closeBtn = document.querySelector(".close-btn");

    if (!output) return;

    terminalProcessId++;
    const currentProcess = terminalProcessId;

    const t = window.translations
        ? window.translations[window.currentLang || "fr"]
        : {
              termWhoami: "elouan_boiteux",
              termDir: "projets/ presentation.txt",
              termJob: "Stagiaire chez Infomaniak",
              termTech: "Dev Android / Kotlin",
              termAccessing: "> Accès au répertoire",
              termHidden: "caché...",
              termHiddenFull: "> Accès au répertoire caché...",
              termDecoding: "> Décodage du lien...",
              termSuccess: "> Succès : CV localisé.",
              termAltLink: "Alternativement :",
          };

    function runTerminalEffect(lines, outputId, onFinish) {
        const outputEl = document.getElementById(outputId);
        if (!outputEl) return;

        let cursor = outputEl.querySelector(".cursor");
        if (!cursor) {
            cursor = document.createElement("span");
            cursor.className = "cursor";
            cursor.textContent = "█";
        }

        let lineIndex = 0;
        let charIndex = 0;
        const finishedLines = [];
        let currentLineBuffer = "";

        function applyStyle(text) {
            return text.includes("$") ? `<span class="command-line">${text}</span>` : text;
        }

        function updateOutput() {
            let content = finishedLines.join("\n");
            if (currentLineBuffer.length > 0) {
                if (content.length > 0) content += "\n";
                content += currentLineBuffer;
            }
            outputEl.innerHTML = content + cursor.outerHTML;
        }

        function typeLine() {
            if (currentProcess !== terminalProcessId) return; // Abort if a new process started

            if (lineIndex >= lines.length) {
                if (onFinish) onFinish();
                return;
            }

            const currentLine = lines[lineIndex];
            if (currentLine.instant) {
                finishedLines.push(applyStyle(currentLine.text));
                updateOutput();
                lineIndex++;
                setTimeout(typeLine, 400);
            } else {
                if (charIndex < currentLine.text.length) {
                    currentLineBuffer += currentLine.text[charIndex];
                    charIndex++;
                    updateOutput();
                    setTimeout(typeLine, 30);
                } else {
                    finishedLines.push(applyStyle(currentLineBuffer));
                    currentLineBuffer = "";
                    charIndex = 0;
                    updateOutput();
                    lineIndex++;
                    setTimeout(typeLine, 500);
                }
            }
        }

        updateOutput();
        typeLine();
    }

    let mainLines, secretLines;

    if (window.innerWidth < 768) {
        mainLines = [
            { text: "$ whoami", instant: false },
            { text: t.termWhoami, instant: true },
            { text: "$ cd ~/L3_Informatique", instant: false },
            { text: "$ ls", instant: false },
            { text: t.termDir, instant: true },
            { text: "$ cat presentation.txt", instant: false },
            { text: t.termJob, instant: true },
            { text: t.termTech, instant: true },
            { text: "$ ", instant: false },
        ];
        secretLines = [
            { text: t.termAccessing, instant: false },
            { text: t.termHidden, instant: false },
            { text: t.termDecoding, instant: false },
            { text: t.termSuccess, instant: false },
        ];
    } else {
        mainLines = [
            { text: "$ whoami", instant: false },
            { text: t.termWhoami, instant: true },
            { text: "$ cd ~/L3_Informatique", instant: false },
            { text: "$ ls", instant: false },
            { text: t.termDir, instant: true },
            { text: "$ cat presentation.txt", instant: false },
            { text: t.termJob, instant: true },
            { text: t.termTech, instant: true },
            { text: "$ ", instant: false },
        ];
        secretLines = [
            { text: t.termHiddenFull, instant: false },
            { text: t.termDecoding, instant: false },
            { text: t.termSuccess, instant: false },
        ];
    }

    // Clear output if restarting
    output.innerHTML = '<span class="cursor">█</span>';

    // Start effect based on current state
    if (terminalShowingSecret) {
        runTerminalEffect(secretLines, "terminal-text", () => {
            if (currentProcess !== terminalProcessId) return;
            const div = document.createElement("div");
            const alt = document.createElement("div");
            alt.innerHTML = `<p class="cv-link">${t.termAltLink}\n<a href="https://cv.elouanboiteux.fr" target="_blank">https://cv.elouanboiteux.fr</a></p>`;
            div.appendChild(qrImage);
            output.appendChild(div);
            output.appendChild(alt);
        });
    } else {
        runTerminalEffect(mainLines, "terminal-text");
    }

    if (closeBtn) {
        closeBtn.onclick = () => {
            terminalShowingSecret = !terminalShowingSecret;
            initTerminal();
        };
    }
}

// Re-run terminal translation on language change
window.addEventListener("languageChanged", initTerminal);

// === Event Listener for Dynamic Content ===
document.addEventListener("contentLoaded", initScripts);

if (document.querySelector(".navTrigger")) {
    initScripts();
}

// Helper function to close modal and stop videos
function closeModal(modal) {
    if (!modal) return;

    modal.classList.remove("active");
    document.body.style.overflow = "auto";

    // Stop any playing videos
    const videos = modal.querySelectorAll("video");
    videos.forEach((video) => {
        video.pause();
        video.currentTime = 0;
    });
}

document.body.addEventListener("click", (e) => {
    // Open modal
    const trigger = e.target.closest("[data-modal]");
    if (trigger) {
        e.preventDefault();
        const modalId = trigger.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add("active");
            document.body.style.overflow = "hidden";
        } else {
            console.error("Popup not found:", modalId);
        }
    }

    // Close modal via Close Button
    if (e.target.closest(".close-btn-popup")) {
        const modal = e.target.closest(".modal");
        closeModal(modal);
    }

    // Close modal via Background Click
    if (e.target.classList.contains("modal")) {
        closeModal(e.target);
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        const activeModal = document.querySelector(".modal.active");
        closeModal(activeModal);
    }
});
