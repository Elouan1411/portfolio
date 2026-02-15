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
        navTrigger.addEventListener("click", function () {
            this.classList.toggle("active");
            fancyMenu.classList.toggle("active");
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

function initTerminal() {
    const output = document.getElementById("terminal-text");
    const closeBtn = document.querySelector(".close-btn");

    if (!output) return;

    function runTerminalEffect(lines, outputId, onFinish) {
        const outputEl = document.getElementById(outputId);
        if (!outputEl) return;

        const cursor = outputEl.querySelector(".cursor") || document.createElement("span");
        cursor.className = "cursor";
        cursor.textContent = "█";

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

    let showingSecret = false;
    let mainLines, secretLines;

    if (window.innerWidth < 768) {
        mainLines = [
            { text: "$ whoami", instant: false },
            { text: "elouan_boiteux", instant: true },
            { text: "$ cd ~/L3_Informatique", instant: false },
            { text: "$ ls", instant: false },
            { text: "projets/ presentation.txt", instant: true },
            { text: "$ cat presentation.txt", instant: false },
            { text: "Stagiaire chez Informaniak", instant: true },
            { text: "Dev Android / Kotlin", instant: true },
            { text: "$ ", instant: false },
        ];
        secretLines = [
            { text: "> Accessing hidden", instant: false },
            { text: "directory...", instant: false },
            { text: "> Decoding link...", instant: false },
            { text: "> Success: CV located.", instant: false },
        ];
    } else {
        mainLines = [
            { text: "$ whoami", instant: false },
            { text: "elouan_boiteux", instant: true },
            { text: "$ cd ~/L3_Informatique", instant: false },
            { text: "$ ls", instant: false },
            { text: "projets/ presentation.txt", instant: true },
            { text: "$ cat presentation.txt", instant: false },
            { text: "Stagiaire chez Informaniak", instant: true },
            { text: "Dev Android / Kotlin", instant: true },
            { text: "$ ", instant: false },
        ];
        secretLines = [
            { text: "> Accessing hidden directory...", instant: false },
            { text: "> Decoding link...", instant: false },
            { text: "> Success: CV located.", instant: false },
        ];
    }

    // Start initial effect
    runTerminalEffect(mainLines, "terminal-text");

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            output.innerHTML = '<span class="cursor">█</span>';
            const existingQr = document.querySelector("#terminal-text img");
            if (existingQr) existingQr.remove();

            if (!showingSecret) {
                showingSecret = true;
                runTerminalEffect(secretLines, "terminal-text", () => {
                    const div = document.createElement("div");
                    const alt = document.createElement("div");
                    alt.innerHTML =
                        '<p class="cv-link">Alternatively:\n<a href="https://cv.elouanboiteux.fr" target="_blank">https://cv.elouanboiteux.fr</a></p>';
                    div.appendChild(qrImage);
                    output.appendChild(div);
                    output.appendChild(alt);
                });
            } else {
                showingSecret = false;
                runTerminalEffect(mainLines, "terminal-text");
            }
        });
    }
}

// === Event Listener for Dynamic Content ===
document.addEventListener("contentLoaded", initScripts);

if (document.querySelector(".navTrigger")) {
    initScripts();
}

document.body.addEventListener("click", (e) => {
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
});

document.body.addEventListener("click", (e) => {
    if (e.target.closest(".close-btn-popup")) {
        const modal = e.target.closest(".modal");
        if (modal) {
            modal.classList.remove("active");
            document.body.style.overflow = "auto";
        }
    }
});

document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
        e.target.classList.remove("active");
        document.body.style.overflow = "auto";
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        const activeModal = document.querySelector(".modal.active");
        if (activeModal) {
            activeModal.classList.remove("active");
            document.body.style.overflow = "auto";
        }
    }
});
