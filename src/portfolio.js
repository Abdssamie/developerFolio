/* Modifiez ce fichier pour créer votre portfolio personnel */

// Pour modifier les couleurs globales du portfolio, allez dans le fichier _globalColor.scss

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Renommez avec le nom de votre fichier pour une animation personnalisée

// Écran de démarrage

const splashScreen = {
  enabled: true, // Mettez false pour désactiver l'écran de démarrage
  animation: splashAnimation,
  duration: 2000 // Définissez la durée de l'animation selon votre animation
};

// Section Résumé et Salutations

const illustration = {
  animated: true // Mettez false pour utiliser un SVG statique
};

const greeting = {
  username: "Abdessamie Elmoubarki",
  title: "Bonjour à tous, je suis Abdessamie",
  subTitle: emoji(
    "Étudiant en génie chimique, spécialisé dans les technologies de l'eau et de l'énergie ⚡, avec des compétences en traitement des eaux, thermodynamique et automatisation. Passionné par l’utilisation de l’IA et du développement logiciel pour résoudre les défis environnementaux et industriels.\n" +
    "\n" +
    "Actuellement à la recherche d’un stage en juillet dans le domaine des technologies de l’eau et de l’énergie pour appliquer mes compétences et contribuer à des projets innovants."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1vdo2UcnreDBu3aG-MzFHEC9Pef0JZYTr/view?usp=sharing", // Remplacez par un CV mis à jour si nécessaire
  displayGreeting: true // Mettez false pour masquer cette section, par défaut true
};

// Liens des réseaux sociaux

const socialMediaLinks = {
  github: "https://github.com/Abdssamie",
  linkedin: "https://www.linkedin.com/in/abdessamaie-el-moubarki-406296310/",
  gmail: "abdessamie.elmoubarki0@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/abdssamie.elmobarki.7",
  medium: "https://medium.com/@abdssamie126",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter et Kaggle sont également pris en charge dans les liens !
  // Pour personnaliser les icônes et les liens sociaux, modifiez src/components/SocialMedia
  display: true // Mettez true pour afficher cette section, par défaut true
};

// Section Compétences

const skillsSection = {
  title: "Ce que je fais",
  subTitle: "ÉTUDIANT EN GÉNIE CHIMIQUE TIRANT PARTI DE L'IA ET DE L'AUTOMATISATION POUR RÉSOUDRE LES DÉFIS INDUSTRIELS",
  skills: [
    emoji(
      "⚡ Expertise en chimie, électrochimie et concepts de génie chimique avec un accent sur les applications industrielles"
    ),
    emoji(
      "⚡ Spécialisation dans les technologies de l'eau et de l'énergie, en mettant l'accent sur les solutions durables et basées sur l'IA"
    ),
    emoji(
      "⚡ Modélisation et simulation de processus à l'aide d'outils comme Aspen Plus, MATLAB et Python"
    ),
    emoji(
      "⚡ Maîtrise de l'automatisation et application de l'IA pour optimiser les processus industriels"
    ),
  ],

  softwareSkills: [
    // Compétences en génie chimique
    {
      skillName: "Aspen Plus",
      fontAwesomeClassname: "fas fa-industry",
    },
    {
      skillName: "Simulation de processus",
      fontAwesomeClassname: "fas fa-cogs",
    },
    {
      skillName: "Traitement de l'eau",
      fontAwesomeClassname: "fas fa-water",
    },
    {
      skillName: "Systèmes énergétiques",
      fontAwesomeClassname: "fas fa-solar-panel",
    },

    // Programmation générale et IA
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "IA et automatisation",
      fontAwesomeClassname: "fas fa-robot",
    },
    {
      skillName: "Développement logiciel",
      fontAwesomeClassname: "fas fa-code",
    },
  ],
  display: true, // Mettez false pour masquer cette section, par défaut true
};

// Section Éducation

const educationInfo = {
  display: true, // Mettez false pour masquer cette section, par défaut true
  schools: [
    {
      schoolName: "Lycée Moussa Ibn Noussair",
      logo: require("./assets/images/high_school.png"),
      subHeader: "Sciences expérimentales - Sciences physiques",
      duration: "Septembre 2019 - Juin 2022",
      // desc: "Classé dans les 10% supérieurs du programme. A suivi des cours sur l'ingénierie logicielle, la sécurité Web, les systèmes d'exploitation, ..."
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "Ecole nationale supérieure de chimie",
      logo: require("./assets/images/ensck.png"),
      subHeader: "Diplôme d'ingénieur en génie chimique",
      duration: "Septembre 2022 - Juillet 2027",
      desc: "Filière de technologies de l'eau et l'énergie"
      /*descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    }
  ]
};

// Vos 3 principales expériences/technologies maîtrisées

const techStack = {
  viewSkillBars: true, // Mettez true pour afficher la section Compétence
  experience: [
    {
      Stack: "Génie chimique et modélisation de processus",
      progressPercentage: "65%",
    },
    {
      Stack: "Traitement de l'eau et systèmes énergétiques",
      progressPercentage: "43%",
    },
    {
      Stack: "IA et apprentissage automatique pour l'optimisation industrielle",
      progressPercentage: "40%",
    },
    {
      Stack: "Automatisation et programmation",
      progressPercentage: "60%",
    },
  ],
};

// Section Expérience professionnelle

const workExperiences = {
  display: false, // Mettez true pour afficher la section workExperiences
  experience: [
    {
      role: "Ingénieur logiciel",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "Juin 2018 – Aujourd'hui",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Développeur Front-End",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "Mai 2017 – Mai 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Stagiaire Ingénieur logiciel",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Janv 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Votre section Open Source pour afficher vos projets Github épinglés
Pour savoir comment obtenir la clé github, consultez readme.md */

const openSource = {
  showGithubProfile: "false", // Mettez true ou false pour afficher le profil de contact via Github, par défaut true
  display: false // Mettez false pour masquer cette section, par défaut true
};

// Quelques grands projets sur lesquels vous avez travaillé

const bigProjects = {
  title: "Grands Projets",
  subtitle: "PROJETS CONCRETS QUI DÉMONTRENT MON EXPERTISE EN INGÉNIERIE ET EN AUTOMATISATION",
  projects: [
    {
      image: require("./assets/images/aqua_plus_plus.png"), // Utilisez un espace réservé pour l'image
      projectName: "Logiciel de traitement de l'eau et d'opérations",
      projectDesc:
        "Développement d'une solution logicielle pour la conception et la gestion des processus de traitement de l'eau. L'outil utilise l'IA et l'automatisation pour optimiser l'efficacité opérationnelle et l'utilisation des ressources.",
      footerLink: [
        {
          name: "En savoir plus",
          url: "https://aqua-plus-plus.tiiny.site" // Remplacez par un lien réel si disponible
        }
      ]
    },
    {
      image: require("./assets/images/Tripixir_logo.png"), // Remplacez par une image appropriée
      projectName: "Services d'automatisation Tripixir",
      projectDesc:
        "Fondation d'une agence offrant des solutions d'automatisation avancées pour les agents de voyage. Ces automatisations rationalisent les flux de travail, optimisent la gestion des clients et sont adaptables à divers types d'entreprises, y compris la logistique, la vente au détail et les services professionnels.",
      footerLink: [
        {
          name: "Visiter Tripixir",
          url: "https://tripixir.com/"
        }
      ]
    }
  ],
  display: false // Mettez false pour masquer cette section, par défaut true
};

// Section Réalisations
// Inclure les certificats, les conférences, etc.

const achievementSection = {
  title: emoji("Réalisations et Certifications 🏆 "),
  subtitle:
    "Certifications, cours et reconnaissances qui mettent en évidence mon expertise en génie chimique et en IA/ML.",

  achievementsCards: [
    {
      title: "Certifications AIChE en sécurité des processus",
      subtitle:
        "Obtention de plusieurs titres de compétences de l'American Institute of Chemical Engineers (AIChE) en sécurité des processus, couvrant l'évaluation des risques, l'analyse des dangers et les meilleures pratiques de sécurité.",
      image: require("./assets/images/aiche_logo.png"),
      imageAlt: "Logo AIChE",
      footerLink: [
        {
          name: "Voir les certifications",
          url: "https://drive.google.com/drive/folders/1koaTrAcpL3ivznPT5PoYdY_BMT4ero4L?usp=sharing" // Ajoutez le lien réel si disponible
        }
      ]
    },
    {
      title: "Spécialisation en apprentissage automatique par Andrew Ng",
      subtitle:
        "Achèvement de la célèbre spécialisation en apprentissage automatique sur Coursera, couvrant l'apprentissage supervisé/non supervisé, les réseaux de neurones et l'apprentissage profond.",
      image: require("./assets/images/deep_learning.jpeg"),
      imageAlt: "Logo Coursera",
      footerLink: [
        {
          name: "Voir la certification en apprentissage automatique supervisé",
          url: "https://coursera.org/share/151414324a3928f66804842b35ac5407" // Ajoutez le lien réel si disponible
        },
        {
          name: "Voir la certification en algorithmes d'apprentissage avancés",
          url: "https://coursera.org/share/1a1f875be393b1bc595c205eaed9991b" // Ajoutez le lien réel si disponible
        }
      ]
    }
  ],
  display: true // Mettez false pour masquer cette section, par défaut true
};

// Section Blogs

const blogSection = {
  title: "Blogs",
  subtitle:
    "Avec mon amour pour le développement de choses sympas, j'aime écrire et enseigner aux autres ce que j'ai appris.",
  displayMediumBlogs: "false", // Mettez true pour afficher les blogs Medium récupérés au lieu des blogs codés en dur
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Gagnez un t-shirt Google Assistant et 200 $ en crédits Google Cloud",
      description:
        "Voulez-vous gagner 200 $ et un t-shirt Google Assistant en créant une action Google Assistant en moins de 30 min ?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Pourquoi REACT est le meilleur ?",
      description:
        "React est une bibliothèque JavaScript pour la construction d'interfaces utilisateur. Elle est maintenue par Facebook et une communauté de développeurs et d'entreprises individuels."
    }
  ],
  display: false // Mettez false pour masquer cette section, par défaut true
};

// Sections Conférences

const talkSection = {
  title: "CONFÉRENCES",
  subtitle: emoji(
    "J'ADORE PARTAGER MES CONNAISSANCES LIMITÉES ET OBTENIR UN BADGE DE CONFÉRENCIER 😅"
  ),

  talks: [
    {
      title: "Construire des actions pour Google Assistant",
      subtitle: "Codelab au GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Mettez false pour masquer cette section, par défaut true
};

// Section Podcast

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "J'ADORE PARLER DE MOI ET DE LA TECHNOLOGIE",

  // Veuillez fournir le lien intégré de votre podcast
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Mettez false pour masquer cette section, par défaut true
};

// Section CV
const resumeSection = {
  title: "CV",
  subtitle: "N'hésitez pas à télécharger mon CV",

  // Veuillez fournir le lien intégré de votre podcast
  display: true // Mettez false pour masquer cette section, par défaut true
};

const contactInfo = {
  title: emoji("Contactez-moi ☎️"),
  subtitle:
    "Discuter d'un projet ou simplement dire bonjour ? Ma boîte de réception est ouverte à tous.",
  number: "+212-633810593",
  email_address: "abdessamie.elmoubarki@gmail.com"
};

// Section Twitter

const twitterDetails = {
  userName: "twitter", // Remplacez "twitter" par votre nom d'utilisateur Twitter sans @
  display: false // Mettez true pour afficher cette section, par défaut false
};

const isHireable = true; // Mettez false si vous ne cherchez pas d'emploi. isHireable sera également affiché comme Ouvert aux opportunités : Oui/Non dans le pied de page GitHub

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
