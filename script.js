// Variable globale pour récupérer le QR plus tard
let qrImage;

function preloadQR() {
    return new Promise((resolve, reject) => {
        const qr = new Image();
        qr.src = "https://api.qrserver.com/v1/create-qr-code/?data=https://cv.elouanboiteux.fr&size=150x150";
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

document.addEventListener("DOMContentLoaded", function () {
    const navTrigger = document.querySelector(".navTrigger");
    const fancyMenu = document.querySelector(".fancy-menu");

    navTrigger.addEventListener("click", function () {
        this.classList.toggle("active");
        fancyMenu.classList.toggle("active");
    });

    // Animation du header
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".resume-header");
        if (window.scrollY > 100) {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
            header.style.background = "#fff";
        } else {
            header.style.boxShadow = "none";
            // header.style.background = "transparent";
        }
    });

    // Navigation fluide
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: "smooth",
                });
            }

            // Fermer le menu sur mobile après le clic
            if (window.innerWidth <= 768) {
                navTrigger.classList.remove("active");
                fancyMenu.classList.remove("active");
            }
        });
    });

    window.addEventListener("scroll", function () {
        const header = document.querySelector(".resume-header");

        if (window.scrollY > 0) {
            header.classList.add("shrink"); // réduit le header
        } else {
            header.classList.remove("shrink"); // remet à la taille normale
        }
    });
});

// === Terminal principal + bouton ===
document.addEventListener("DOMContentLoaded", () => {
    function runTerminalEffect(lines, outputId, onFinish) {
        const output = document.getElementById(outputId);
        const cursor = output.querySelector(".cursor") || document.createElement("span");
        cursor.className = "cursor";
        cursor.textContent = "█";

        let lineIndex = 0;
        let charIndex = 0;
        const finishedLines = [];
        let currentLineBuffer = "";

        function applyStyle(text) {
            return text.includes("$") ? `<span class="command-line">${text}</span>` : text;
        }

        // function updateOutput() {
        //     const isLastLineTyping = lineIndex === lines.length - 1;
        //     // output.innerHTML = finishedLines.join("\n") + (finishedLines.length > 0 && !isLastLineTyping ? "\n" : "") + currentLineBuffer + cursor.outerHTML;
        //     // output.innerHTML =
        //     //     finishedLines.join("\n") +
        //     //     (finishedLines.length > 0 ? "\n" : "") + // <- ici : toujours ajouter \n si des lignes finies existent
        //     //     currentLineBuffer +
        //     //     cursor.outerHTML;
        //     const isTyping = lineIndex < lines.length; // on tape encore une ligne
        //     const separator = finishedLines.length > 0 && isTyping ? "\n" : "";
        //     output.innerHTML = finishedLines.join("\n") + separator + currentLineBuffer + cursor.outerHTML;
        // }

        function updateOutput() {
            let content = finishedLines.join("\n"); // lignes déjà terminées

            // Ajouter currentLineBuffer uniquement si elle contient du texte
            if (currentLineBuffer.length > 0) {
                if (content.length > 0) content += "\n"; // saut de ligne avant la ligne en cours
                content += currentLineBuffer;
            }

            // Toujours ajouter le curseur
            output.innerHTML = content + cursor.outerHTML;
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
    const closeBtn = document.querySelector(".close-btn");
    const output = document.getElementById("terminal-text");
    let showingSecret = false;

    // Texte principal
    const mainLines = [
        { text: "$ whoami", instant: false },
        { text: "elouan_boiteux", instant: true },
        { text: "$ cd ~/L3_Informatique", instant: false },
        { text: "$ ls", instant: false },
        { text: "projets/ presentation.txt", instant: true },
        { text: "$ cat presentation.txt", instant: false },
        { text: "A la recherche un stage de 3 mois", instant: true },
        { text: "pour finaliser ma licence", instant: true },
        { text: "$ ", instant: false },
    ];

    // Texte secret (sans [QR Code visible...])
    const secretLines = [
        { text: "> Accessing hidden directory...", instant: false },
        { text: "> Decoding link...", instant: false },
        { text: "> Success: CV located.", instant: false },
        // { text: "", instant: true },
    ];

    runTerminalEffect(mainLines, "terminal-text");

    closeBtn.addEventListener("click", () => {
        output.innerHTML = '<span class="cursor">█</span>';
        const existingQr = document.querySelector("#terminal-text img");
        if (existingQr) existingQr.remove();

        if (!showingSecret) {
            showingSecret = true;

            runTerminalEffect(secretLines, "terminal-text", () => {
                // // Création et insertion du QR code au-dessus de la ligne "Alternatively"
                // const qr = document.createElement("img");
                // qr.src = "https://api.qrserver.com/v1/create-qr-code/?data=https://cv.elouanboiteux.fr&size=150x150";
                // qr.alt = "QR Code vers mon CV";
                // qr.className = "cv-qr";

                // Ligne "Alternatively"
                const alt = document.createElement("div");
                alt.innerHTML = '<p class="cv-link">Alternatively: <a href="https://cv.elouanboiteux.fr" target="_blank">https://cv.elouanboiteux.fr</a></p>';

                // Insérer dans le terminal
                output.appendChild(qrImage);
                output.appendChild(alt);
            });
        } else {
            showingSecret = false;
            runTerminalEffect(mainLines, "terminal-text");
        }
    });
});
