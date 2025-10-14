document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        fr: {
            title: "Elouan BOITEUX",
            aProposQuiJeSuis:
                "Je m’appelle Elouan BOITEUX, étudiant en L3 CMI Informatique à l’Université Marie et Louis Pasteur. Passionné par la programmation et le développement d’applications, j’aime transformer des idées originales en projets concrets.",
            aProposCentresInteret:
                "Curieux et rigoureux, je travaille sur des projets personnels mêlant automatisation et applications ludiques. Mon objectif est de continuer à créer des expériences innovantes tout en explorant de nouvelles solutions techniques.",
        },
        en: {
            title: "Elouan BOITEUX",
        },
    };

    let currentLang = "fr";

    write(true);

    const btn1 = document.querySelector(".language-switcher button:nth-child(1)");
    const btn2 = document.querySelector(".language-switcher button:nth-child(2)");

    // Crée le halo une seule fois
    const halo = document.createElement("div");
    halo.classList.add("halo");
    btn1.style.position = "relative";
    btn1.appendChild(halo); // halo initial sur btn1

    // Fonction pour déplacer le halo
    function moveHalo(toButton, fromButton) {
        if (halo.parentNode) halo.parentNode.removeChild(halo);
        toButton.style.position = "relative";
        toButton.appendChild(halo);

        // Désactive le bouton avec le halo
        toButton.classList.add("disabled");
        fromButton.classList.remove("disabled");
    }

    // Fonction write
    function write(first) {
        if (!first) {
            currentLang = currentLang === "fr" ? "en" : "fr";
        }

        document.querySelectorAll("[data-key]").forEach((elt) => {
            const key = elt.getAttribute("data-key");
            elt.textContent = translations[currentLang][key];
        });
    }

    // Au clic, on ne peut cliquer que sur le bouton sans halo
    btn1.addEventListener("click", () => {
        if (!btn1.classList.contains("disabled")) {
            moveHalo(btn1, btn2);
            write(false);
        }
    });

    btn2.addEventListener("click", () => {
        if (!btn2.classList.contains("disabled")) {
            moveHalo(btn2, btn1);
            write(false);
        }
    });
});
