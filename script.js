// Menu mobile
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

    // Animation des lettres
    // const wordElement = document.getElementById("word");
    // if (wordElement) {
    //   const words = ["Elouan\u00A0BOITEUX", "DEVELOPPEUR"];
    //   let currentWordIndex = 0;
    //
    //   function animateWord() {
    //     wordElement.textContent = words[currentWordIndex];
    //     currentWordIndex = (currentWordIndex + 1) % words.length;
    //   }
    //
    //   setInterval(animateWord, 3000);
    // }

    // const wordElement = document.getElementById("word");
    // const words = ["Elouan BOITEUX", "DEVELOPPEUR"];
    // let currentWordIndex = 0;
    // let charIndex = words[currentWordIndex].length;
    // let deleting = true;
    //
    // function animateWord() {
    //   if (deleting) {
    //     if (charIndex > 0) {
    //       wordElement.textContent = words[currentWordIndex].slice(
    //         0,
    //         charIndex - 1,
    //       );
    //       charIndex--;
    //       setTimeout(animateWord, 100);
    //     } else {
    //       deleting = false;
    //       currentWordIndex = (currentWordIndex + 1) % words.length;
    //       setTimeout(animateWord, 500);
    //     }
    //   } else {
    //     if (charIndex < words[currentWordIndex].length) {
    //       wordElement.textContent = words[currentWordIndex].slice(
    //         0,
    //         charIndex + 1,
    //       );
    //       charIndex++;
    //       setTimeout(animateWord, 100);
    //     } else {
    //       deleting = true;
    //       setTimeout(animateWord, 3000); // Pause avant suppression
    //     }
    //   }
    // }
    //
    // animateWord();

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
function runTerminalEffect() {
    const lines = [
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

    const output = document.getElementById("terminal-text");
    const cursor = document.querySelector(".cursor");
    let lineIndex = 0;
    let charIndex = 0;
    const finishedLines = [];
    let currentLineBuffer = "";

    function applyStyle(text) {
        return text.includes("$") ? `<span class="command-line">${text}</span>` : text;
    }

    function updateOutput() {
        // Si on est sur la dernière ligne en train d’être tapée,
        // on n'ajoute pas de saut de ligne après currentLineBuffer.
        // Sinon on en ajoute un (quand on a fini une ligne, ou pour les instant lines).
        const isLastLineTyping = lineIndex === lines.length - 1;
        output.innerHTML = finishedLines.join("\n") + (finishedLines.length > 0 && !isLastLineTyping ? "\n" : "") + currentLineBuffer + cursor.outerHTML;
    }

    function typeLine() {
        if (lineIndex >= lines.length) return;

        const currentLine = lines[lineIndex];
        const isLastLine = lineIndex === lines.length - 1;

        if (currentLine.instant) {
            finishedLines.push(applyStyle(currentLine.text));
            updateOutput();
            lineIndex++;
            setTimeout(typeLine, 500);
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

document.addEventListener("DOMContentLoaded", runTerminalEffect);

function calculateAge(birthDateString) {
    const today = new Date();
    const birthDate = new Date(birthDateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

document.querySelectorAll(".age").forEach((el) => {
    const birthDate = el.getAttribute("data-birth");
    if (birthDate) {
        el.textContent = calculateAge(birthDate);
    }
});
