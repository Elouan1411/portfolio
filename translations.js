document.addEventListener("contentLoaded", function () {
    const translations = {
        fr: {
            title: "Elouan BOITEUX",
            navProjects: "Projets",
            navSkills: "Compétences",
            navHistory: "Parcours",
            navContact: "Contacts",

            homeGreeting: "Bonjour, c'est",
            homeSubtitle: "Stagiaire Développeur Android Kotlin chez Infomaniak",

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

            aboutTitle: "À propos",
            aboutYears: "ans",
            aboutStudy:
                'Étudiant en L3 à <a href="https://www.umlp.fr/" target="_blank">l\'université Marie et Louis Pasteur</a>, je suis inscrit dans le <a href="https://www.umlp.fr/les-cmi/cmi-informatique" target="_blank">Cursus Master en Ingénierie (CMI)</a>.',
            aboutInternship:
                "Actuellement en <strong>stage de 5 mois</strong> chez <strong>Infomaniak</strong>. Je travaille sur le <strong>développement d'application mobile Android</strong> en <strong>Kotlin</strong>.",
            aboutCursus:
                "Ce cursus enrichit ma formation avec des <strong>projets en groupe</strong>, des <strong>cours supplémentaires</strong>, un <strong>stage en entreprise</strong> dès la première année, ainsi que le développement de compétences en <strong>gestion de projets</strong>, <strong>communication professionnelle</strong> et rédaction de documents techniques.",
            aboutPassion:
                "Passionné par la <strong>programmation</strong> et le <strong>développement d’applications</strong>, j’aime transformer mes idées en projets concrets et profiter de chaque opportunité pour <strong>découvrir</strong> et <strong>apprendre</strong> de nouvelles technologies et techniques.",
            aboutDownloadCV: '<i class="fa fa-download"></i> Télécharger mon CV',
            aboutQualitiesTitle: "Mes qualités",
            aboutQualities1: '<i class="fa-solid fa-bolt"></i> Dynamique',
            aboutQualities2: '<i class="fa-solid fa-user-check"></i> Autonome',
            aboutQualities3: '<i class="fa-solid fa-people-group"></i> Coopératif',
            aboutQualities4: '<i class="fa-solid fa-lightbulb"></i> Curieux',
            aboutObjectivesTitle: "Mes objectifs",
            aboutObj1Title: "Apprendre continuellement",
            aboutObj1Desc: "Rester à jour avec les nouvelles technologies",
            aboutObj2Title: "Créer des solutions",
            aboutObj2Desc: "Développer des applications innovantes",
            aboutObj3Title: "Partager et inspirer",
            aboutObj3Desc: "Contribuer à des projets impactants",
            aboutInterestsTitle: "Mes centres d'intérêt",
            aboutInt1: '<i class="fa-solid fa-code"></i> Programmation',
            aboutInt2: '<i class="fa-solid fa-mountain"></i> Sport outdoor',
            aboutInt3: '<i class="fa-solid fa-person-hiking"></i> Escalade',
            aboutInt4: '<i class="fa-solid fa-bicycle"></i> VTT',
            aboutInt5: '<i class="fa-solid fa-route"></i> Trail',

            skillsTitle: "Mes compétences",
            skillsWeb: "Développement web",
            skillsProg: "Langages de programmation",
            skillsSys: "Systèmes et outils",

            historyTitle: "Mon parcours",
            histBacTitle: "Baccalauréat Général Mention Très Bien",
            histBacDesc:
                "Spécialités : Mathématiques, Numérique et Sciences Informatiques<br>Section sportive Escalade<br>Lycée Claude Nicolas Ledoux, Besançon (25)",
            histLicenceTitle: "Licence Informatique",
            histLicenceDate: "Depuis 2023 (actuellement en L3)",
            histLicenceDesc: "Option Cursus Master en Ingénierie<br>Université Marie et Louis Pasteur, Besançon (25)",
            histStageL1Title: "Stage L1 - Développement d'un logiciel",
            histStageL1Date: "2024 - 5 semaines",
            histStageL1Desc:
                "Cibest Solution, Besançon (25)<br>Extraction de données via API<br>Génération de rapports PDF et code-barres 2D<br>Intégration avec un système de gestion pour suivi automatisé",
            histStageInfomaniakTitle: "Stage chez Infomaniak",
            histStageInfomaniakDate: "Avril 2026 - Août 2026",
            histStageInfomaniakDesc: "Développement d'applications mobiles Android natives avec Kotlin.<br>5 mois<br>Genève, Suisse",

            portfolioTitle: "Mes Projets",
            portTuneFlowTitle: "TuneFlow - Découverte Musicale 🎵",
            portTuneFlowDesc:
                "Application Android native développée en Kotlin en 7 jours. TuneFlow propose des recommandations musicales personnalisées, la gestion de playlists et une interface moderne.",
            portCompletionTitle: "Application de Completion semi-automatique",
            portCompletionDesc:
                "Application de complétion semi-automatique développée en Rust et Python. Elle propose des suggestions de mots intelligentes pour l'utilisateur en s’appuyant sur différentes approches.",
            portNuitInfoTitle: "Nuit de l'Info 🌙",
            portNuitInfoDesc:
                "Application web développée durant la Nuit de l'Info 2025, sur le thème du numérique durable. Concept d'une dualité entre l'enfer de Windows 10 (obsolescence programmée) et le paradis Linux.",
            portCanyonRadarTitle: "Canyon Radar 🧗‍♂️",
            portCanyonRadarDesc:
                "Application web pour planifier vos sorties canyoning. Choisissez un lieu ou utilisez votre position actuelle, filtrez les canyons accessibles selon le temps de route et exportez les résultats pour planification.",
            portCentipedeTitle: "Centipede Game 🐛",
            portCentipedeDesc:
                "Jeu Centipede développé en Python avec la bibliothèque Pygame. Contrôlez un nain pour tirer sur différents types d’ennemis à travers plusieurs niveaux de difficulté progressive. Le jeu enregistre automatiquement le meilleur score du joueur.",
            portRnDTitle: "R&D Day - Promo 2025 🎓",
            portRnDDesc:
                "Site web officiel de la Journée Recherche & Développement organisée par notre promotion. L’événement met en avant les avancées en informatique quantique et leur lien avec la physique à travers des stands interactifs et des présentations accessibles à tous.",
            portMoreDetails: '<i class="fa-solid fa-up-right-from-square"></i> Plus de détails',
            portSourceCode: '<i class="fa-brands fa-github"></i> Code source',
            portInDev: "🚧 En développement 🚧",

            modalDownloadApk: '<i class="fa-solid fa-download"></i> Télécharger l\'APK',
            modalViewSite2025: '<i class="fa-solid fa-up-right-from-square"></i> Voir le site (2025)',
            modalViewSite2024: '<i class="fa-solid fa-up-right-from-square"></i> Voir le site (2024)',
            modalViewSite: '<i class="fa-solid fa-up-right-from-square"></i> Voir le site',
            modalDownloadReport: '<i class="fa-solid fa-file-pdf"></i> Télécharger le rapport de recherche',

            modalTuneFlowTitle: "TuneFlow - Découverte Musicale 🎵",
            modalTuneFlowDesc1:
                "<strong>TuneFlow</strong> est une application Android native développée de zéro en <strong>7 jours</strong>. Ce projet était un défi pour apprendre <strong>Kotlin</strong> et l'écosystème <strong>Android</strong> de manière intensive.",
            modalTuneFlowDesc2:
                "L'objectif de ce projet était de maîtriser la syntaxe de Kotlin et les principes fondamentaux du développement Android (Activités, Fragments, Cycles de vie, RecyclerView).",
            modalTuneFlowDesc3: "TuneFlow permet aux utilisateurs de :",
            modalTuneFlowList1: "<strong>Découvrir</strong> de nouvelles musiques basées sur leurs goûts (algorithme de recommandation) ;",
            modalTuneFlowList2: "Créer et gérer des <strong>playlists</strong> ;",
            modalTuneFlowList3: "Partager des playlists avec des amis ;",
            modalTuneFlowList4: "Explorer des musiques par <strong>humeur</strong> ;",
            modalTuneFlowList5: "Profiter d'un mode <strong>clair</strong> et <strong>sombre</strong>.",
            modalTuneFlowDesc4:
                'Plus d\'informations sont disponibles sur le dépôt GitHub, y compris le code source complet et la version <a href="https://github.com/Elouan1411/TuneFlow/releases/tag/v1.0" target="_blank">téléchargeable</a>.',

            modalNuitInfoTitle: "Nuit de l'Info 🌙",
            modalNuitInfoDesc1:
                "La <strong>Nuit de l'Info</strong> est une compétition nationale qui réunit étudiants, enseignants et entreprises pour développer une application web en une nuit, du coucher au lever du soleil.",
            modalNuitInfoSubtitle1: "📅 Édition 2025 : Le Village Numérique Résistant",
            modalNuitInfoDesc2:
                "Pour cette seconde participation, nous avons conçu un projet ambitieux sur le thème : <em>« Le village numérique résistant : L'alternative durable »</em>.",
            modalNuitInfoDesc3: "L'expérience utilisateur est scénarisée en deux temps forts :",
            modalNuitInfoList1:
                "🔥 <strong>L'Enfer Windows 10 :</strong> L'utilisateur commence sur un bureau Windows saturé de bugs : applications qui plantent, messages d'erreur intempestifs, mises à jour bloquées et RAM saturée à 100%. L'obsolescence programmée y est poussée à l'extrême.",
            modalNuitInfoList2:
                "🐧 <strong>La Libération Linux :</strong> Un bouton \"Installer Linux\" permet d'échapper à cet enfer. Une simulation de terminal s'ouvre pour l'installation, puis l'utilisateur bascule sur un environnement Linux fluide. On y retrouve les mêmes applications, mais cette fois-ci parfaitement fonctionnelles et optimisées.",
            modalNuitInfoDesc4:
                "Cette narration interactive démontre par l'exemple les avantages d'un système libre et léger face à l'obsolescence logicielle.",
            modalNuitInfoSubtitle2: "📅 Édition 2024 : Et si l'océan était un corps humain ? (Débutants)",
            modalNuitInfoDesc5:
                "Notre toute première participation ! À l'époque, nous étions de grands débutants en développement web. Nous avons dû apprendre le JavaScript sur le tas, au fil de la nuit.",
            modalNuitInfoDesc6:
                "Malgré le défi technique et notre manque d'expérience, nous avons réussi à produire un site interactif répondant au sujet. Cette première expérience a été fondatrice et nous a motivés à revenir plus forts l'année suivante.",

            modalCompletionTitle: "Application de Completion semi-automatique",
            modalCompletionDesc1:
                "Application de complétion semi-automatique développée en Rust et Python. Elle propose des suggestions de mots intelligentes pour l'utilisateur en s’appuyant sur différentes approches.",
            modalCompletionDesc2:
                "La première étape de ce projet a consisté à réaliser un <strong>travail de recherche approfondi</strong> sur les techniques utilisées dans la complétion semi-automatique de texte. Ce travail, mené en collaboration avec ma camarade <strong>Samia Benali</strong>, s’inscrivait dans le cadre du <strong>Cursus Master Ingénierie (CMI)</strong> durant ma deuxième année de licence (L2).",
            modalCompletionDesc3:
                "Nous avons étudié différentes approches utilisées par les systèmes modernes, notamment les <strong>algorithmes de distance d’édition</strong> tels que celui de <strong>Levenshtein</strong>, ainsi que l’usage des <strong>chaînes de Markov</strong> dans l’adaptation des suggestions en fonction du contexte ou de l’historique de l’utilisateur.",
            modalCompletionDesc4:
                "À la suite de cette phase d’analyse, j’ai conçu et développé une <strong>application de complétion semi-automatique</strong> permettant de mettre en œuvre ces concepts de manière concrète. L’objectif est d’offrir des suggestions pertinentes à partir de mots partiellement saisis.",
            modalCompletionDesc5: "L’application repose sur trois approches principales :",
            modalCompletionList1: "<strong>La distance de Levenshtein</strong> pour mesurer la similarité entre les mots et corriger les fautes de frappe ;",
            modalCompletionList2:
                "<strong>La reconnaissance de préfixes</strong> pour proposer rapidement des complétions adaptées aux premières lettres tapées ;",
            modalCompletionList3: "<strong>La fréquence d’utilisation</strong> pour favoriser les mots les plus couramment employés par l’utilisateur.",
            modalCompletionDesc6:
                "Le cœur du projet est développé en <strong>Rust</strong>, garantissant performance et sécurité mémoire, tandis que <strong>Python</strong> gère la partie interface et automatisation. L’installation et l’exécution sont simplifiées grâce à une commande unique <code>make install</code>.",
            modalCompletionDesc7:
                "Ce projet m’a permis de combiner <strong>travail de recherche</strong> et <strong>développement logiciel</strong>, tout en approfondissant mes connaissances en <strong>traitement du langage naturel</strong>, <strong>optimisation algorithmique</strong> et <strong>programmation système</strong>.",

            modalCentipedeTitle: "Centipede Game 🐛",
            modalCentipedeDesc1:
                "<strong>Centipede Game</strong> est un projet réalisé dans le cadre du <strong>projet semestriel de L1 en CMI Informatique</strong>. Il s’agit de mon <strong>premier projet de développement de jeu vidéo</strong>, entièrement conçu en <strong>Python</strong> à l’aide de <strong>Pygame</strong>.",
            modalCentipedeDesc2:
                "Le joueur incarne un nain et doit éliminer des vagues successives d’ennemis variés. À chaque nouveau niveau, la vitesse et le nombre d’ennemis augmentent, rendant le jeu de plus en plus difficile.",
            modalCentipedeDesc3:
                "Le jeu propose un <strong>système de niveaux</strong> progressif et <strong>une sauvegarde du meilleur score</strong> après chaque partie. La programmation a été réalisée en <strong>POO (Programmation Orientée Objet)</strong> avec l’utilisation de <strong>l’héritage</strong> pour structurer les entités du jeu (joueur, ennemis, projectiles...).",
            modalCentipedeDesc4:
                "Ce projet m’a permis de découvrir le développement de jeux 2D, la gestion d’événements clavier, les collisions, et les boucles principales de jeu.",
            modalCentipedeAcks: "Reconnaissances :",
            modalCentipedeList1: "Samia Benali pour la création des images utilisées dans le jeu ;",
            modalCentipedeList2: "Nos professeurs et mentors pour leur accompagnement pendant le projet.",
            modalCentipedeDesc5:
                "Un <strong>rapport de projet</strong> détaillant la conception, la structure du code et les choix techniques a également été rédigé dans le cadre de cette réalisation.",

            modalRnDTitle: "📌 R&D Day - Promo 2025",
            modalRnDDesc1:
                "Ce site présente la <strong>Journée Recherche & Développement</strong> organisée par notre promotion du CMI Informatique. L’édition met en avant les avancées en <strong>informatique quantique</strong> et leur lien avec la <strong>physique</strong>, sous le thème :",
            modalRnDTheme: "🎭 <em>Physique et informatique quantique : le duo qui redéfinit l’avenir</em>",
            modalRnDDesc2:
                "L’événement met en lumière les travaux de recherche et d’innovation des étudiants à travers des <strong>stands interactifs</strong>, des <strong>présentations scientifiques</strong> et des <strong>activités ouvertes à tous</strong>.",
            modalRnDDesc3:
                "Le site a été <strong>refondu en binôme</strong> avec un camarade afin de <strong>moderniser son interface</strong> et d’améliorer l’<strong>expérience utilisateur</strong>. Nous avons également adapté l’identité visuelle et le contenu au <strong>thème de la journée</strong> que nous avions choisi : <em>« Physique et informatique quantique : le duo qui redéfinit l’avenir »</em>.",
            modalRnDDesc4:
                "Cette refonte avait pour objectif de rendre la navigation plus fluide et de permettre aux visiteurs de <strong>se projeter pleinement dans l’événement</strong> grâce à une présentation claire, immersive et cohérente avec l’esprit de la journée.",
            modalRnDDesc5:
                "Le site offre ainsi une <strong>navigation responsive</strong>, permettant d’accéder facilement au <strong>programme de la journée</strong>, aux <strong>informations pratiques</strong> (lieu, horaires, organisation), ainsi qu’à la <strong>présentation du thème principal</strong>.",
            modalRnDDesc6: "<strong>Fonctionnalités principales :</strong>",
            modalRnDList1: "Présentation du thème et du programme de la journée ;",
            modalRnDList2: "Informations pratiques sur l’organisation de l’événement ;",
            modalRnDList3: "Mise en avant des stands et activités ;",
            modalRnDList4: "Design responsive pour une consultation sur mobile et PC.",
            modalRnDDesc7: '<strong>Déploiement :</strong> le site est hébergé sur <a href="https://rnday.elouanboiteux.fr" target="_blank">ofni.asso.fr</a>.',
            modalRnDDesc8:
                "<strong>Remerciements :</strong> ce site repose sur une base développée par nos prédécesseurs de la promotion précédente, que nous avons adaptée et améliorée pour cette édition. Un grand merci à eux pour leur travail et leur transmission ! 🎓",

            modalCanyonRadarTitle: "Canyon Radar 🧗‍♂️",
            modalCanyonRadarDesc1:
                "Application web pour planifier vos sorties canyoning. Choisissez un lieu ou utilisez votre position actuelle, filtrez les canyons accessibles selon le temps de route et exportez les résultats pour planification.",
            modalCanyonRadarDesc2:
                "Canyon Radar permet de trouver tous les canyons accessibles depuis un point donné en un temps de route maximal. Les résultats peuvent être exportés en CSV ou Excel pour organiser vos sorties.",
            modalCanyonRadarDesc3:
                "Le projet utilise l’API OpenRouteService pour calculer les temps de trajet précis et un backend Node.js hébergé sur Vercel pour sécuriser la clé API.",
            modalCanyonRadarDesc4:
                "Les données des canyons sont stockées dans <code>data.json</code> et filtrées côté frontend pour afficher uniquement les lieux accessibles. Le frontend est développé en HTML, CSS et JavaScript.",
            modalCanyonRadarDesc5: "Canyon Radar intègre plusieurs fonctionnalités clés :",
            modalCanyonRadarList1: "<strong>Choix de la localisation</strong> : position actuelle ou point sur la carte ;",
            modalCanyonRadarList2: "<strong>Filtrage par temps de trajet</strong> : limite les canyons accessibles ;",
            modalCanyonRadarList3: "<strong>Exportation des résultats</strong> : CSV ou Excel pour planification et analyse.",
            modalCanyonRadarDesc6:
                "Ce projet m’a permis d’explorer l’intégration d’API tierces, la gestion de données géographiques et le développement d’une interface web interactive.",

            contactTitle: "Contactez-moi",
            contactNetworks: "Mes réseaux",
            contactFooter: "&copy; 2025 BOITEUX Elouan. Tous droits réservés.",
        },
        en: {
            title: "Elouan BOITEUX",
            navProjects: "Projects",
            navSkills: "Skills",
            navHistory: "Journey",
            navContact: "Contact",

            homeGreeting: "Hello, I am",
            homeSubtitle: "Android Kotlin Developer Intern at Infomaniak",

            termWhoami: "elouan_boiteux",
            termDir: "projects/ presentation.txt",
            termJob: "Intern at Infomaniak",
            termTech: "Android Dev / Kotlin",
            termAccessing: "> Accessing hidden",
            termHidden: "directory...",
            termHiddenFull: "> Accessing hidden directory...",
            termDecoding: "> Decoding link...",
            termSuccess: "> Success: CV located.",
            termAltLink: "Alternatively:",

            aboutTitle: "About me",
            aboutYears: "years old",
            aboutStudy:
                '3rd-year student at <a href="https://www.umlp.fr/" target="_blank">Marie and Louis Pasteur University</a>, enrolled in the <a href="https://www.umlp.fr/les-cmi/cmi-informatique" target="_blank">Master\'s in Engineering Program (CMI)</a>.',
            aboutInternship:
                "Currently on a <strong>5-month internship</strong> at <strong>Infomaniak</strong>. I work on <strong>Android mobile app development</strong> using <strong>Kotlin</strong>.",
            aboutCursus:
                "This program enriches my education with <strong>group projects</strong>, <strong>additional courses</strong>, a <strong>company internship</strong> from the first year, as well as the development of skills in <strong>project management</strong>, <strong>professional communication</strong>, and technical document writing.",
            aboutPassion:
                "Passionate about <strong>programming</strong> and <strong>app development</strong>, I love transforming my ideas into concrete projects and seizing every opportunity to <strong>discover</strong> and <strong>learn</strong> new technologies and techniques.",
            aboutDownloadCV: '<i class="fa fa-download"></i> Download my Resume',
            aboutQualitiesTitle: "My qualities",
            aboutQualities1: '<i class="fa-solid fa-bolt"></i> Dynamic',
            aboutQualities2: '<i class="fa-solid fa-user-check"></i> Autonomous',
            aboutQualities3: '<i class="fa-solid fa-people-group"></i> Cooperative',
            aboutQualities4: '<i class="fa-solid fa-lightbulb"></i> Curious',
            aboutObjectivesTitle: "My goals",
            aboutObj1Title: "Learn continuously",
            aboutObj1Desc: "Stay up to date with new technologies",
            aboutObj2Title: "Create solutions",
            aboutObj2Desc: "Develop innovative applications",
            aboutObj3Title: "Share and inspire",
            aboutObj3Desc: "Contribute to impactful projects",
            aboutInterestsTitle: "My interests",
            aboutInt1: '<i class="fa-solid fa-code"></i> Programming',
            aboutInt2: '<i class="fa-solid fa-mountain"></i> Outdoor sports',
            aboutInt3: '<i class="fa-solid fa-person-hiking"></i> Climbing',
            aboutInt4: '<i class="fa-solid fa-bicycle"></i> Mountain biking',
            aboutInt5: '<i class="fa-solid fa-route"></i> Trail running',

            skillsTitle: "My skills",
            skillsWeb: "Web development",
            skillsProg: "Programming languages",
            skillsSys: "Systems and tools",

            historyTitle: "My journey",
            histBacTitle: "High School Diploma with Highest Honors",
            histBacDesc:
                "Specialties: Mathematics, Digital and Computer Sciences<br>Climbing Sports Section<br>Claude Nicolas Ledoux High School, Besançon (25)",
            histLicenceTitle: "Bachelor's Degree in Computer Science",
            histLicenceDate: "Since 2023 (currently in 3rd year)",
            histLicenceDesc: "Master's in Engineering Program Option<br>Marie and Louis Pasteur University, Besançon (25)",
            histStageL1Title: "1st Year Internship - Software Development",
            histStageL1Date: "2024 - 5 weeks",
            histStageL1Desc:
                "Cibest Solution, Besançon (25)<br>Data extraction via API<br>PDF reports and 2D barcode generation<br>Integration with a management system for automated tracking",
            histStageInfomaniakTitle: "Internship at Infomaniak",
            histStageInfomaniakDate: "April 2026 - August 2026",
            histStageInfomaniakDesc: "Native Android mobile app development with Kotlin.<br>5 months<br>Geneva, Switzerland",

            portfolioTitle: "My Projects",
            portTuneFlowTitle: "TuneFlow - Music Discovery 🎵",
            portTuneFlowDesc:
                "Native Android application developed with Kotlin in 7 days. TuneFlow provides personalized music recommendations, playlist management, and a modern interface.",
            portCompletionTitle: "Semi-automatic Completion Application",
            portCompletionDesc:
                "Semi-automatic completion application developed in Rust and Python. It offers smart word suggestions for the user based on different approaches.",
            portNuitInfoTitle: "Nuit de l'Info 🌙",
            portNuitInfoDesc:
                "Web application developed during 'Nuit de l'Info' 2025, on the theme of sustainable digital technology. Concept of a duality between Windows 10 hell (planned obsolescence) and Linux paradise.",
            portCanyonRadarTitle: "Canyon Radar 🧗‍♂️",
            portCanyonRadarDesc:
                "Web application to plan your canyoning trips. Choose a location or use your current position, filter accessible canyons by driving time, and export the results for planning.",
            portCentipedeTitle: "Centipede Game 🐛",
            portCentipedeDesc:
                "Centipede game developed in Python with the Pygame library. Control a dwarf to shoot various types of enemies across multiple levels of progressive difficulty. The game automatically saves the player's high score.",
            portRnDTitle: "R&D Day - Class of 2025 🎓",
            portRnDDesc:
                "Official website for the Research & Development Day organized by our class. The event highlights advances in quantum computing and their link to physics through interactive booths and presentations accessible to everyone.",
            portMoreDetails: '<i class="fa-solid fa-up-right-from-square"></i> More details',
            portSourceCode: '<i class="fa-brands fa-github"></i> Source code',
            portInDev: "🚧 In development 🚧",

            modalDownloadApk: '<i class="fa-solid fa-download"></i> Download the APK',
            modalViewSite2025: '<i class="fa-solid fa-up-right-from-square"></i> View website (2025)',
            modalViewSite2024: '<i class="fa-solid fa-up-right-from-square"></i> View website (2024)',
            modalViewSite: '<i class="fa-solid fa-up-right-from-square"></i> View website',
            modalDownloadReport: '<i class="fa-solid fa-file-pdf"></i> Download the research report',

            modalTuneFlowTitle: "TuneFlow - Music Discovery 🎵",
            modalTuneFlowDesc1:
                "<strong>TuneFlow</strong> is a native Android application developed from scratch in <strong>7 days</strong>. This project was a challenge to intensively learn <strong>Kotlin</strong> and the <strong>Android</strong> ecosystem.",
            modalTuneFlowDesc2:
                "The goal of this project was to master Kotlin syntax and fundamental Android development principles (Activities, Fragments, Lifecycles, RecyclerView).",
            modalTuneFlowDesc3: "TuneFlow allows users to:",
            modalTuneFlowList1: "<strong>Discover</strong> new music based on their tastes (recommendation algorithm);",
            modalTuneFlowList2: "Create and manage <strong>playlists</strong>;",
            modalTuneFlowList3: "Share playlists with friends;",
            modalTuneFlowList4: "Explore music by <strong>mood</strong>;",
            modalTuneFlowList5: "Enjoy <strong>light</strong> and <strong>dark</strong> modes.",
            modalTuneFlowDesc4:
                'More information is available on the GitHub repository, including the complete source code and a <a href="https://github.com/Elouan1411/TuneFlow/releases/tag/v1.0" target="_blank">downloadable</a> release.',

            modalNuitInfoTitle: "Nuit de l'Info 🌙",
            modalNuitInfoDesc1:
                "The <strong>Nuit de l'Info</strong> is a national competition bringing together students, teachers, and companies to develop a web application in a single night, from sunset to sunrise.",
            modalNuitInfoSubtitle1: "📅 2025 Edition: The Resilient Digital Village",
            modalNuitInfoDesc2:
                "For this second participation, we conceptualized an ambitious project on the theme: <em>“The resilient digital village: The sustainable alternative”</em>.",
            modalNuitInfoDesc3: "The user experience is scripted in two main phases:",
            modalNuitInfoList1:
                "🔥 <strong>The Windows 10 Hell:</strong> The user starts on a bug-ridden Windows desktop: crashing applications, untimely error messages, blocked updates, and 100% RAM usage. Planned obsolescence pushed to the extreme.",
            modalNuitInfoList2:
                '🐧 <strong>The Linux Liberation:</strong> An "Install Linux" button allows escaping this hell. A terminal simulation opens for installation, and the user switches to a smooth Linux environment with the same applications, but perfectly functional and optimized.',
            modalNuitInfoDesc4: "This interactive narrative demonstrates by example the benefits of a free and lightweight system over software obsolescence.",
            modalNuitInfoSubtitle2: "📅 2024 Edition: What if the ocean was a human body? (Beginners)",
            modalNuitInfoDesc5:
                "Our very first participation! Back then, we were total beginners in web development. We had to learn JavaScript on the fly, throughout the night.",
            modalNuitInfoDesc6:
                "Despite the technical challenge and our lack of experience, we managed to produce an interactive site answering the prompt. This foundational experience motivated us to return stronger the next year.",

            modalCompletionTitle: "Semi-automatic Completion Application",
            modalCompletionDesc1:
                "Semi-automatic completion application developed in Rust and Python. It offers smart word suggestions for the user based on different approaches.",
            modalCompletionDesc2:
                "The first step of this project was a <strong>deep research work</strong> on the techniques used in semi-automatic text completion. This work, conducted with my classmate <strong>Samia Benali</strong>, was part of the <strong>Master's in Engineering Program (CMI)</strong> during my second year of bachelor's degree (L2).",
            modalCompletionDesc3:
                "We studied different approaches used by modern systems, notably <strong>edit distance algorithms</strong> such as <strong>Levenshtein</strong>, as well as the use of <strong>Markov chains</strong> in adapting suggestions based on context or user history.",
            modalCompletionDesc4:
                "Following this analysis phase, I designed and developed a <strong>semi-automatic completion application</strong> to concretely implement these concepts. The goal is to offer relevant suggestions from partially typed words.",
            modalCompletionDesc5: "The application relies on three main approaches:",
            modalCompletionList1: "<strong>Levenshtein distance</strong> to measure word similarity and correct typos;",
            modalCompletionList2: "<strong>Prefix recognition</strong> to quickly suggest completions matching the first typed letters;",
            modalCompletionList3: "<strong>Frequency of use</strong> to favor the words most commonly used by the user.",
            modalCompletionDesc6:
                "The core of the project is developed in <strong>Rust</strong>, ensuring performance and memory safety, while <strong>Python</strong> handles the interface and automation. Installation and execution are simplified with a single <code>make install</code> command.",
            modalCompletionDesc7:
                "This project allowed me to combine <strong>research work</strong> and <strong>software development</strong>, while deepening my knowledge in <strong>natural language processing</strong>, <strong>algorithmic optimization</strong>, and <strong>systems programming</strong>.",

            modalCentipedeTitle: "Centipede Game 🐛",
            modalCentipedeDesc1:
                "<strong>Centipede Game</strong> is a project completed for the <strong>L1 semester project in CMI Computer Science</strong>. It's my <strong>first video game development project</strong>, entirely designed in <strong>Python</strong> using <strong>Pygame</strong>.",
            modalCentipedeDesc2:
                "The player controls a dwarf and must eliminate successive waves of diverse enemies. With each new level, the speed and number of enemies increase, making the game increasingly difficult.",
            modalCentipedeDesc3:
                "The game features a progressive <strong>level system</strong> and <strong>saves the high score</strong> after each game. Programming was done using <strong>OOP (Object-Oriented Programming)</strong> with <strong>inheritance</strong> to structure game entities (player, enemies, projectiles...).",
            modalCentipedeDesc4: "This project allowed me to discover 2D game development, keyboard event handling, collisions, and main game loops.",
            modalCentipedeAcks: "Acknowledgments:",
            modalCentipedeList1: "Samia Benali for creating the images used in the game;",
            modalCentipedeList2: "Our teachers and mentors for their guidance during the project.",
            modalCentipedeDesc5:
                "A <strong>project report</strong> detailing the design, code structure, and technical choices was also written as part of this assignment.",

            modalRnDTitle: "📌 R&D Day - Class of 2025",
            modalRnDDesc1:
                "This site presents the <strong>Research & Development Day</strong> organized by our CMI Computer Science class. The edition highlights advances in <strong>quantum computing</strong> and their link to <strong>physics</strong>, under the theme:",
            modalRnDTheme: "🎭 <em>Physics and quantum computing: the duo redefining the future</em>",
            modalRnDDesc2:
                "The event showcases students' research and innovation works through <strong>interactive booths</strong>, <strong>scientific presentations</strong>, and <strong>activities open to all</strong>.",
            modalRnDDesc3:
                "I <strong>redesigned the site in a team of two</strong> with a classmate to <strong>modernize its interface</strong> and improve the <strong>user experience</strong>. We also adapted the visual identity and content to the <strong>theme of the day</strong> we had chosen: <em>“Physics and quantum computing: the duo redefining the future”</em>.",
            modalRnDDesc4:
                "This redesign aimed to make navigation more fluid and allow visitors to <strong>fully immerse themselves in the event</strong> through a clear, immersive presentation matching the day's spirit.",
            modalRnDDesc5:
                "The site offers <strong>responsive navigation</strong>, providing easy access to the <strong>day's schedule</strong>, <strong>practical information</strong> (location, times, organization), and the <strong>main theme presentation</strong>.",
            modalRnDDesc6: "<strong>Main features:</strong>",
            modalRnDList1: "Presentation of the day's theme and schedule;",
            modalRnDList2: "Practical information on the event organization;",
            modalRnDList3: "Highlighting booths and activities;",
            modalRnDList4: "Responsive design for mobile and PC viewing.",
            modalRnDDesc7: '<strong>Deployment:</strong> the site is hosted on <a href="https://rnday.elouanboiteux.fr" target="_blank">ofni.asso.fr</a>.',
            modalRnDDesc8:
                "<strong>Acknowledgments:</strong> this site is based on a foundation developed by our predecessors from the previous class, which we adapted and improved for this edition. A big thank you to them for their work and knowledge transfer! 🎓",

            modalCanyonRadarTitle: "Canyon Radar 🧗‍♂️",
            modalCanyonRadarDesc1:
                "Web application to plan your canyoning trips. Choose a location or use your current position, filter accessible canyons by driving time, and export the results for planning.",
            modalCanyonRadarDesc2:
                "Canyon Radar allows you to find all accessible canyons from a given point within a maximum driving time. The results can be exported to CSV or Excel to organize your trips.",
            modalCanyonRadarDesc3:
                "The project uses the OpenRouteService API to calculate precise travel times and a Node.js backend hosted on Vercel to secure the API key.",
            modalCanyonRadarDesc4:
                "Canyon data is stored in <code>data.json</code> and filtered on the frontend to display only accessible locations. The frontend is developed in HTML, CSS, and JavaScript.",
            modalCanyonRadarDesc5: "Canyon Radar includes several key features:",
            modalCanyonRadarList1: "<strong>Location choice</strong>: current position or a point on the map;",
            modalCanyonRadarList2: "<strong>Driving time filtering</strong>: limits accessible canyons;",
            modalCanyonRadarList3: "<strong>Results export</strong>: CSV or Excel for planning and analysis.",
            modalCanyonRadarDesc6:
                "This project allowed me to explore third-party API integration, geographical data management, and interactive web interface development.",

            contactTitle: "Contact me",
            contactNetworks: "My networks",
            contactFooter: "&copy; 2025 BOITEUX Elouan. All rights reserved.",
        },
    };

    let currentLang = "fr";

    const btn1 = document.querySelector(".language-switcher button:nth-child(1)");
    const btn2 = document.querySelector(".language-switcher button:nth-child(2)");

    // Crée le halo une seule fois
    const halo = document.createElement("div");
    halo.classList.add("halo");
    if (btn1) {
        btn1.style.position = "relative";
        btn1.appendChild(halo); // halo initial sur btn1
        btn1.classList.add("disabled"); // Disable the active button initially
    }

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

        window.currentLang = currentLang;
        window.translations = translations;

        document.querySelectorAll("[data-key]").forEach((elt) => {
            const key = elt.getAttribute("data-key");
            if (translations[currentLang] && translations[currentLang][key]) {
                elt.innerHTML = translations[currentLang][key];
            }
        });

        if (!first) {
            window.dispatchEvent(new Event("languageChanged"));
        }
    }

    write(true);

    if (btn1) {
        btn1.addEventListener("click", () => {
            if (!btn1.classList.contains("disabled")) {
                moveHalo(btn1, btn2);
                write(false);
            }
        });
    }

    if (btn2) {
        btn2.addEventListener("click", () => {
            if (!btn2.classList.contains("disabled")) {
                moveHalo(btn2, btn1);
                write(false);
            }
        });
    }
});
