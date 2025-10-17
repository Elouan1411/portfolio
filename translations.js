document.addEventListener("DOMContentLoaded", function () {
    function calculateAge(birthDate) {
        const birth = new Date(birthDate);
        const today = new Date();
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        return age;
    }

    function updateAge() {
        const elements = document.querySelectorAll(".birthday");
        elements.forEach((el) => {
            const birthDate = el.dataset.birth; // récupérer la date depuis data-birth
            el.innerHTML = calculateAge(birthDate);
        });
    }

    const translations = {
        fr: {
            title: "Elouan BOITEUX",
            fancy_menu_projects: "Projets",
            fancy_menu_skills: "Compétences",
            fancy_menu_career: "Parcours",
            fancy_menu_contacts: "Contacts",
            my_name_who_hello: "Bonjour, c'est",
            my_name_who_name: "ELOUAN",
            my_name_who_student: "Étudiant en Informatique",
            about_text_h2: "À propos",
            about_text_h3: `Elouan Boiteux — <span data-birth="2005-11-14" class="birthday"></span> ans`,
            about_text_paragraph_icon_p1: `Étudiant en L3 à <a href="https://www.umlp.fr/" target="_blank">l'université Marie et Louis Pasteur</a>,
              je suis inscrit dans le <a href="https://www.umlp.fr/les-cmi/cmi-informatique" target="_blank">Cursus
                Master en Ingénierie (CMI)</a>.`,
            about_text_paragraph_icon_p2: `Ce cursus enrichit ma formation avec des <strong>projets en groupe</strong>, des <strong>cours
                supplémentaires</strong>, un <strong>stage en
                entreprise</strong> dès la première année,
              ainsi que le développement de compétences en <strong>gestion de projets</strong>, <strong>communication
                professionnelle</strong> et
              rédaction de documents techniques.`,
            about_text_paragraph_icon_p3: `Passionné par la <strong>programmation</strong> et le <strong>développement d’applications</strong>,
              j’aime transformer mes idées en projets
              concrets
              et profiter de chaque opportunité pour <strong>découvrir</strong> et <strong>apprendre</strong> de
              nouvelles technologies et techniques.`,
            about_text_cv: `<i class="fa fa-download"></i> Télécharger mon CV`,
            about_card_h4_qualities: "Mes qualités",
            about_card_qualities_dynamic: `<i class="fa-solid fa-bolt"></i> Dynamique`,
            about_card_qualities_autonomous: `<i class="fa-solid fa-user-check"></i> Autonome`,
            about_card_qualities_cooperative: `<i class="fa-solid fa-people-group"></i> Coopératif`,
            about_card_qualities_curious: `<i class="fa-solid fa-lightbulb"></i> Curieux`,
            about_card_h4_goal: `Mes objectifs`,
            about_card_goal_learn: `<strong>Apprendre continuellement</strong>
                <p>Rester à jour avec les nouvelles technologies</p>`,
            about_card_goal_create: `<strong>Créer des solutions</strong>
                <p>Développer des applications innovantes</p>`,
            about_card_goal_share: `<strong>Partager et inspirer</strong>
                <p>Contribuer à des projets impactants</p>`,
            about_card_h4_interest: `Mes centres d'intérêt`,
            about_card_interest_programming: `<i class="fa-solid fa-code"></i> Programmation`,
            about_card_interest_sport: `<i class="fa-solid fa-mountain"></i> Sport outdoor`,
            about_card_interest_climbing: `<i class="fa-solid fa-person-hiking"></i> Escalade`,
            about_card_interest_vtt: `<i class="fa-solid fa-bicycle"></i> VTT`,
            about_card_interest_trail: `<i class="fa-solid fa-route"></i> Trail`,
        },
        en: {
            title: "Elouan BOITEUX",
            fancy_menu_projects: "Projects",
            fancy_menu_skills: "Skills",
            fancy_menu_career: "Career",
            fancy_menu_contacts: "Contacts",
            my_name_who_hello: "Hello, I'm",
            my_name_who_name: "ELOUAN",
            my_name_who_student: "Computer Science Student",
            about_text_h2: "About",
            about_text_h3: `Elouan Boiteux — <span data-birth="2005-11-14" class="birthday"></span> years old`,
            about_text_paragraph_icon_p1: `Bachelor's student in the 3rd year at <a href="https://www.umlp.fr/" target="_blank">Université Marie et Louis Pasteur</a>,
            I am enrolled in the <a href="https://www.umlp.fr/les-cmi/cmi-informatique" target="_blank">Master’s Engineering Program (CMI)</a>.`,
            about_text_paragraph_icon_p2: `This program enhances my education with <strong>group projects</strong>, <strong>additional courses</strong>, an <strong>internship in a company</strong> from the first year,
            as well as the development of skills in <strong>project management</strong>, <strong>professional communication</strong>, and <strong>technical documentation</strong>.`,
            about_text_paragraph_icon_p3: `Passionate about <strong>programming</strong> and <strong>application development</strong>,
            I enjoy turning my ideas into concrete projects
            and taking every opportunity to <strong>explore</strong> and <strong>learn</strong> new technologies and techniques.`,
            about_text_cv: `<i class="fa fa-download"></i> Download my CV`,
            about_card_h4_qualities: "My qualities",
            about_card_qualities_dynamic: `<i class="fa-solid fa-bolt"></i> Dynamic`,
            about_card_qualities_autonomous: `<i class="fa-solid fa-user-check"></i> Autonomous`,
            about_card_qualities_cooperative: `<i class="fa-solid fa-people-group"></i> Cooperative`,
            about_card_qualities_curious: `<i class="fa-solid fa-lightbulb"></i> Curious`,
            about_card_h4_goal: "My goals",
            about_card_goal_learn: `<strong>Continuous learning</strong>
            <p>Keep up to date with new technologies</p>`,
            about_card_goal_create: `<strong>Create solutions</strong>
            <p>Develop innovative applications</p>`,
            about_card_goal_share: `<strong>Share and inspire</strong>
            <p>Contribute to impactful projects</p>`,
            about_card_h4_interest: "My interests",
            about_card_interest_programming: `<i class="fa-solid fa-code"></i> Programming`,
            about_card_interest_sport: `<i class="fa-solid fa-mountain"></i> Outdoor sports`,
            about_card_interest_climbing: `<i class="fa-solid fa-person-hiking"></i> Climbing`,
            about_card_interest_vtt: `<i class="fa-solid fa-bicycle"></i> Mountain biking`,
            about_card_interest_trail: `<i class="fa-solid fa-route"></i> Trail running`,
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
            elt.innerHTML = translations[currentLang][key];
        });
        updateAge();
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
