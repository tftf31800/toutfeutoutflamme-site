import React, { useEffect, useMemo, useState } from "react";
import {
  Flame,
  ShieldCheck,
  Wrench,
  CalendarDays,
  BadgeCheck,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Star,
  FileSignature,
  Menu,
  X,
  Camera,
  Handshake,
  BookOpen,
  Scale,
  CheckCircle2,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";

const SITE_URL = "https://toutfeutoutflamme.eu";
const RDV_URL = "https://tout-feu-tout-flamme-2.gazoleen.com/rdv";
const SUBSCRIBE_URL = "https://souscrire.toutfeutoutflamme31.fr";
const EMAIL = "benjamin.plessis@toutfeutoutflamme.eu";
const PHONE = "07 61 64 77 65";
const COMPANY = "Tout Feu Tout Flamme";
const CITY = "Saint-Gaudens";
const POSTAL_CODE = "31800";

const theme = {
  navy: "#0b132b",
  navy2: "#1c2541",
  blue: "#3a86ff",
  cyan: "#4cc9f0",
  fire: "#f77f00",
  green: "#1b4332",
};

const headerMainLinks = [
  { label: "Tarifs", path: "#/tarifs" },
];

const headerInfoLinks = [
  { label: "Blog", path: "#/blog", description: "Conseils poêle à granulés" },
  { label: "Galerie", path: "#/galerie", description: "Réalisations et interventions" },
  { label: "Avant / Après", path: "#/avant-apres-entretien-poele-granules", description: "Résultats entretien poêle" },
  { label: "Partenariat", path: "#/partenariat", description: "Devenir partenaire technique" },
  { label: "Contact", path: "#/contact", description: "Coordonnées et demande" },
];

const offers = [
  {
    name: "Essentiel",
    price: "139€",
    monthly: "13,90€ / mois",
    badge: "Entretien annuel",
    color: "from-emerald-400 to-green-700",
    features: [
      "Entretien annuel complet",
      "Ramonage mécanique avec certificat",
      "Contrôles de sécurité",
      "Contrôle combustion standard",
    ],
  },
  {
    name: "Confort",
    price: "189€",
    monthly: "18,90€ / mois",
    badge: "Contrat recommandé",
    color: "from-[#3a86ff] via-[#4cc9f0] to-[#f77f00]",
    featured: true,
    features: [
      "Tout le pack Essentiel",
      "1 intervention dépannage incluse",
      "Main d’œuvre + déplacement compris",
      "Rendez-vous priorisé",
      "Idéal pour éviter les mauvaises surprises",
    ],
  },
  {
    name: "Sérénité",
    price: "249€",
    monthly: "24,90€ / mois",
    badge: "Tranquillité maximale",
    color: "from-sky-400 to-blue-700",
    features: [
      "Tout le pack Confort",
      "Dépannage tout au long de la saison compris",
      "Main d’œuvre incluse, déplacement en sus",
      "Priorité dépannage 24/48h",
      "-15% sur les pièces détachées HT",
      "Accompagnement premium tout l’hiver",
    ],
  },
];

const services = [
  {
    icon: Wrench,
    title: "Entretien poêle à granulés",
    seoTitle: "Entretien poêle à granulés Saint-Gaudens",
    text: "Nettoyage complet, contrôle de sécurité, vérification des composants et réglages standards pour préserver les performances de votre appareil.",
  },
  {
    icon: ShieldCheck,
    title: "Dépannage poêle à granulés",
    seoTitle: "Dépannage poêle à granulés Comminges",
    text: "Diagnostic de panne, recherche de défaut, intervention rapide et remise en service dans la limite des prescriptions fabricant.",
  },
  {
    icon: Flame,
    title: "Ramonage mécanique",
    seoTitle: "Ramonage poêle à granulés Haute-Garonne",
    text: "Ramonage mécanique du conduit avec certificat, nettoyage et contrôle visuel pour une installation plus sûre et plus performante.",
  },
];

const zones = [
  "Saint-Gaudens 31800",
  "Comminges",
  "Haute-Garonne",
  "Cugnaux",
  "Boussens",
  "Carbonne",
  "Montréjeau",
  "Lannemezan",
  "Saint-Girons",
  "100 km autour",
];

const seoCities = [
  "Saint-Gaudens",
  "Montréjeau",
  "Boussens",
  "Carbonne",
  "Cazères",
  "Cugnaux",
  "Muret",
  "Lannemezan",
  "Tarbes",
  "Saint-Girons",
  "Comminges",
  "Haute-Garonne",
  "Ariège",
  "Hautes-Pyrénées",
];

const tariffRows = [
  ["Entretien annuel obligatoire", "Entretien + ramonage conduit, hors pièces éventuelles", "139 € TTC"],
  ["Plus-value période hivernale", "Période de novembre à février", "+30 € TTC"],
  ["Ramonage intermédiaire mi-saison", "Si entretien annuel effectué par notre société", "80 € TTC"],
  ["Déplacement dépannage zone 1", "0 à 30 km", "30 € TTC"],
  ["Déplacement dépannage zone 2", "30 à 60 km", "60 € TTC"],
  ["Déplacement dépannage zone 3", "60 à 90 km", "80 € TTC"],
  ["Au-delà de 90 km", "Sur demande", "Nous consulter"],
  ["Main d’œuvre dépannage", "Forfait 1h puis facturation à la demi-heure commencée", "50 € / heure TTC"],
  ["Pièces détachées", "Selon diagnostic et disponibilité", "En sus"],
];

const blogArticles = [
  {
    slug: "entretien-poele-granules-printemps",
    title: "Pourquoi faire l’entretien de son poêle à granulés au printemps à Saint-Gaudens ?",
    date: "1 avril 2026",
    category: "Entretien",
    image: "/blog/entretien-printemps.jpg",
    excerpt:
      "Le printemps est la meilleure période pour entretenir son poêle à granulés, éviter la corrosion et préparer l’hiver sereinement.",
    content: `
      <p>Le printemps est de retour en Haute-Garonne ! Les températures s’adoucissent dans le Comminges, les jours rallongent et vous venez probablement d’éteindre votre poêle à granulés.</p>
      <p>C’est le moment idéal pour le nettoyer en surface et l’oublier jusqu’à l’automne prochain... N’est-ce pas ?</p>
      <p><strong>Détrompez-vous.</strong> La meilleure période pour réaliser l’entretien annuel est en réalité juste après la période de chauffe : avril, mai ou juin.</p>
      <h2>1. Protéger votre appareil contre la corrosion estivale</h2>
      <p>Pendant l’hiver, la combustion des granulés génère des cendres et de la suie dans le creuset, les passages de fumées et le conduit.</p>
      <p>Pendant l’été, l’humidité peut être présente dans nos vallées pyrénéennes. Si les résidus restent dans l’appareil, ils absorbent cette humidité. Ce mélange peut favoriser la corrosion, la rouille et l’usure prématurée des pièces métalliques.</p>
      <p>Un nettoyage complet au printemps permet de laisser votre poêle propre, sec et prêt à rester à l’arrêt plusieurs mois sans risque inutile.</p>
      <h2>2. Éviter la cohue de l’automne en Haute-Garonne</h2>
      <p>Chaque année, le scénario se répète : dès que les températures chutent à Saint-Gaudens, Lannemezan, Cazères ou dans le Comminges, les demandes d’entretien explosent.</p>
      <ul>
        <li><strong>Flexibilité totale :</strong> vous choisissez plus facilement votre date d’intervention.</li>
        <li><strong>Zéro stress :</strong> pas d’attente de plusieurs semaines en plein froid.</li>
        <li><strong>Travail plus serein :</strong> le technicien peut inspecter votre installation avec davantage de disponibilité.</li>
      </ul>
      <h2>3. Anticiper les réparations et les pièces détachées</h2>
      <p>Lors de l’entretien annuel, plusieurs éléments peuvent être contrôlés : bougie d’allumage, joints, extracteur, ventilateurs, creuset ou état général de l’appareil.</p>
      <p>Si une pièce montre des signes d’usure, le printemps laisse le temps de commander et remplacer sans urgence. En novembre, une rupture de stock peut rapidement vous priver de chauffage pendant plusieurs semaines.</p>
      <h2>4. Sécurité et conformité avant l’hiver</h2>
      <p>L’entretien annuel et le ramonage mécanique du conduit sont essentiels pour utiliser votre poêle à granulés en sécurité.</p>
      <p>En cas de sinistre, votre assurance peut vous demander une attestation d’entretien ou un certificat de ramonage délivré par un professionnel.</p>
      <p>Faire l’entretien dès le printemps permet d’être en règle bien avant la prochaine saison de chauffe.</p>
      <h2>5. Intervention autour de Saint-Gaudens</h2>
      <p>Tout Feu Tout Flamme intervient autour de Saint-Gaudens et dans un rayon d’environ 100 km : Comminges, Luchon, Tarbes, Pamiers, Cazères, Toulouse et alentours.</p>
      <blockquote><p><strong>Conseil d’expert :</strong> pensez à vider entièrement votre réservoir de granulés en fin de saison. Avec l’humidité estivale, les pellets restants peuvent gonfler et bloquer la vis sans fin lors du redémarrage à l’automne.</p></blockquote>
      <h2>Besoin d’un entretien ou d’un ramonage à Saint-Gaudens ?</h2>
      <p>N’attendez pas que le froid revienne. Pour un poêle propre, sécurisé et prêt à redémarrer au quart de tour, prenez rendez-vous dès le printemps.</p>
    `,
  },
  {
    slug: "comment-fonctionne-poele-granules-saint-gaudens",
    title: "Comment fonctionne un poêle à granulés ? Le guide de votre expert à Saint-Gaudens",
    date: "30 mars 2026",
    category: "Conseils",
    image: "/blog/fonctionnement_poele_granules.jpg",
    excerpt:
      "Vis sans fin, bougie d’allumage, extracteur de fumées… découvrez le fonctionnement complet d’un poêle à granulés.",
    content: `
      <p>Vous envisagez d’installer un poêle à granulés en Haute-Garonne, ou vous êtes simplement curieux de comprendre le fonctionnement de ce mode de chauffage moderne ?</p>
      <p>Apprécié pour son confort d’utilisation, le poêle à pellets a révolutionné le chauffage au bois dans le 31 en y apportant une vraie dose de technologie. Fini la corvée de bûches : place à l’automatisation.</p>
      <p>Tout Feu Tout Flamme, votre spécialiste à Saint-Gaudens, vous explique son fonctionnement étape par étape.</p>
      <h2>1. L’approvisionnement : un dosage millimétré</h2>
      <p>Tout commence dans la trémie, le réservoir du poêle, où vous versez vos sacs de granulés.</p>
      <p>L’élément central est la <strong>vis sans fin</strong> : ce système motorisé transporte les pellets vers le creuset.</p>
      <p>Le fonctionnement est entièrement piloté par la carte électronique du poêle.</p>
      <ul>
        <li>Plus la température demandée est élevée, plus la vis tourne rapidement.</li>
        <li>Plus la vis tourne rapidement, plus la combustion est alimentée.</li>
        <li>Le poêle adapte ainsi sa puissance aux besoins de la pièce.</li>
      </ul>
      <h2>2. La combustion : un allumage automatique et sécurisé</h2>
      <p>Une fois les granulés déposés dans le creuset, le poêle gère l’allumage sans intervention manuelle.</p>
      <ul>
        <li><strong>Une bougie d’allumage</strong> chauffe l’air à très haute température.</li>
        <li>L’air chaud enflamme les granulés en quelques minutes.</li>
        <li><strong>Un extracteur de fumées</strong> alimente la combustion et évacue les gaz vers le conduit.</li>
      </ul>
      <p>Ce système permet un démarrage rapide, propre et sécurisé.</p>
      <h2>3. La diffusion : une chaleur homogène dans la pièce</h2>
      <p>Contrairement à une cheminée classique, le poêle à granulés diffuse la chaleur de manière active.</p>
      <p>La flamme chauffe un <strong>échangeur thermique</strong>. Un ventilateur aspire l’air ambiant, le réchauffe au contact de l’échangeur, puis le propulse dans la pièce.</p>
      <p>C’est la convection forcée : une solution idéale pour chauffer rapidement de grands volumes, y compris dans les maisons anciennes du Comminges.</p>
      <h2>4. Le confort de la régulation électronique</h2>
      <p>Le grand point fort du poêle à granulés réside dans sa gestion électronique.</p>
      <p>Grâce à une sonde de température, vous définissez une consigne, par exemple 20°C. Le poêle adapte automatiquement sa puissance et se met en veille lorsque la température est atteinte.</p>
      <blockquote><p><strong>Le saviez-vous ?</strong> À la différence d’une cheminée traditionnelle, un poêle à granulés nécessite une alimentation électrique et un entretien régulier par un professionnel pour garantir sa performance, sa sécurité et sa longévité.</p></blockquote>
      <h2>Installation et entretien autour de Saint-Gaudens</h2>
      <p>Vous habitez à Montréjeau, Lannemezan, Aspet ou Luchon ? Tout Feu Tout Flamme vous accompagne dans votre projet de chauffage aux granulés.</p>
      <p>Nous intervenons dans un rayon d’environ 100 km autour de Saint-Gaudens pour vous conseiller, entretenir votre appareil et vous aider à profiter d’une chaleur fiable tout l’hiver.</p>
    `,
  },
  {
    slug: "entretien-poele-granules-saint-gaudens-prix",
    title: "Entretien poêle à granulés à Saint-Gaudens : prix, fréquence et conseils d’expert",
    date: "5 avril 2026",
    category: "Entretien",
    image: "/blog/prix-entretien.jpg",
    excerpt:
      "Quel est le prix d’un entretien de poêle à granulés à Saint-Gaudens ? Fréquence, obligations et conseils d’expert.",
    content: `
      <p>Vous habitez à Saint-Gaudens ou dans le Comminges et vous vous demandez combien coûte l’entretien d’un poêle à granulés ?</p>
      <p>C’est une question essentielle : un entretien bien réalisé permet de préserver la sécurité, les performances et la durée de vie de votre appareil.</p>
      <h2>Quel est le prix d’un entretien de poêle à granulés ?</h2>
      <p>Le tarif dépend du contenu de l’intervention : nettoyage complet, ramonage mécanique, contrôles de sécurité, déplacement, accès au conduit et état général de l’appareil.</p>
      <p>Chez Tout Feu Tout Flamme, les contrats d’entretien permettent de maîtriser le budget tout en bénéficiant d’un suivi régulier.</p>
      <ul>
        <li><strong>Essentiel :</strong> entretien annuel, ramonage mécanique et contrôles de sécurité.</li>
        <li><strong>Confort :</strong> entretien complet avec intervention dépannage incluse selon contrat.</li>
        <li><strong>Sérénité :</strong> accompagnement premium avec priorité dépannage et remise sur pièces.</li>
      </ul>
      <h2>À quelle fréquence faut-il faire l’entretien ?</h2>
      <p>L’entretien annuel est indispensable pour conserver un appareil propre, sûr et performant.</p>
      <p>La période idéale se situe au printemps, juste après la saison de chauffe, afin de limiter la corrosion et d’éviter la forte demande de l’automne.</p>
      <h2>Pourquoi ne pas attendre l’hiver ?</h2>
      <ul>
        <li>Vous évitez les délais longs en période froide.</li>
        <li>Vous anticipez les pièces à remplacer.</li>
        <li>Vous redémarrez l’hiver avec un appareil propre et contrôlé.</li>
        <li>Vous disposez de vos justificatifs d’entretien et de ramonage.</li>
      </ul>
      <blockquote><p><strong>Conseil d’expert :</strong> un poêle encrassé peut consommer davantage de granulés et provoquer des défauts d’allumage, de tirage ou de ventilation.</p></blockquote>
      <h2>Entretien poêle à granulés autour de Saint-Gaudens</h2>
      <p>Tout Feu Tout Flamme intervient à Saint-Gaudens, Montréjeau, Lannemezan, Aspet, Cazères, Luchon, Tarbes, Pamiers, Toulouse et dans un rayon d’environ 100 km.</p>
      <p>Pour éviter la période de forte demande, prenez rendez-vous dès la fin de saison.</p>
    `,
  },
  {
    slug: "panne-poele-granules-hiver-saint-gaudens",
    title: "Poêle à granulés en panne en hiver : que faire à Saint-Gaudens ?",
    date: "4 avril 2026",
    category: "Dépannage",
    image: "/blog/panne-poele.jpg",
    excerpt:
      "Votre poêle à granulés ne démarre plus ? Causes fréquentes, premiers contrôles et solution rapide autour de Saint-Gaudens.",
    content: `
      <p>Votre poêle à granulés refuse de démarrer en plein hiver ? C’est une situation stressante, surtout lorsque les températures chutent dans le Comminges.</p>
      <p>Avant de paniquer, certains contrôles simples peuvent être réalisés. Mais si la panne persiste, l’intervention d’un professionnel reste la solution la plus sûre.</p>
      <h2>Les pannes les plus fréquentes</h2>
      <ul>
        <li><strong>Bougie d’allumage fatiguée :</strong> les granulés tombent mais ne s’enflamment pas.</li>
        <li><strong>Creuset encrassé :</strong> l’air circule mal et l’allumage échoue.</li>
        <li><strong>Extracteur de fumées défaillant :</strong> le poêle se met en sécurité.</li>
        <li><strong>Vis sans fin bloquée :</strong> les granulés n’arrivent plus correctement.</li>
        <li><strong>Conduit encrassé :</strong> le tirage devient insuffisant.</li>
      </ul>
      <h2>Que faire immédiatement ?</h2>
      <ul>
        <li>Vérifiez qu’il reste des granulés dans la trémie.</li>
        <li>Nettoyez le creuset et retirez les cendres compactées.</li>
        <li>Contrôlez que la porte ferme correctement.</li>
        <li>Relancez un cycle uniquement si l’appareil ne signale pas un défaut de sécurité.</li>
      </ul>
      <p>Si le défaut revient, évitez les démontages hasardeux. Certains composants électriques ou fumisterie nécessitent un diagnostic professionnel.</p>
      <h2>Pourquoi les pannes arrivent souvent en hiver ?</h2>
      <p>Un appareil très sollicité, mal nettoyé ou entretenu trop tard peut accumuler des résidus dans les passages de fumées, l’extracteur ou le creuset.</p>
      <p>Résultat : mauvaise combustion, allumages ratés, bruit anormal, fumée, baisse de rendement ou mise en sécurité.</p>
      <blockquote><p><strong>Astuce :</strong> beaucoup de pannes hivernales peuvent être évitées avec un entretien annuel réalisé dès le printemps ou avant la remise en route.</p></blockquote>
      <h2>Dépannage poêle à granulés à Saint-Gaudens</h2>
      <p>Tout Feu Tout Flamme intervient autour de Saint-Gaudens, Montréjeau, Lannemezan, Aspet, Luchon, Cazères et dans le Comminges pour diagnostiquer les pannes de poêles à granulés.</p>
      <p>Contactez un professionnel dès les premiers signes : allumage difficile, bruit inhabituel, défaut pression, fumées, odeur ou baisse de chauffe.</p>
    `,
  },
  {
    slug: "consommation-poele-granules-maison-saint-gaudens",
    title: "Combien consomme un poêle à granulés ? Calcul réel pour une maison à Saint-Gaudens",
    date: "3 avril 2026",
    category: "Conseils",
    image: "/blog/consommation.jpg",
    excerpt:
      "Consommation réelle de granulés selon la maison, la surface, l’isolation et les réglages du poêle.",
    content: `
      <p>Combien de sacs de granulés consomme un poêle à Saint-Gaudens ? La réponse dépend de votre maison, de votre isolation, de vos réglages et de votre rythme d’utilisation.</p>
      <p>Dans le Comminges, les hivers peuvent être humides et froids. Un poêle bien dimensionné, bien entretenu et bien réglé fait toute la différence.</p>
      <h2>Consommation moyenne d’un poêle à granulés</h2>
      <p>Un poêle à granulés consomme généralement davantage lors des démarrages et des fortes demandes de chauffe, puis réduit sa puissance lorsque la température souhaitée est atteinte.</p>
      <ul>
        <li>Utilisation ponctuelle : consommation faible à modérée.</li>
        <li>Chauffage principal : consommation plus importante, surtout en maison ancienne.</li>
        <li>Maison bien isolée : consommation nettement réduite.</li>
      </ul>
      <h2>Les facteurs qui influencent la consommation</h2>
      <ul>
        <li><strong>La surface à chauffer :</strong> plus le volume est grand, plus le besoin augmente.</li>
        <li><strong>L’isolation :</strong> combles, murs, menuiseries et courants d’air jouent énormément.</li>
        <li><strong>La qualité des granulés :</strong> des pellets de mauvaise qualité encrassent plus vite l’appareil.</li>
        <li><strong>Les réglages :</strong> une combustion mal réglée peut faire consommer davantage.</li>
        <li><strong>L’entretien :</strong> un échangeur encrassé transmet moins bien la chaleur.</li>
      </ul>
      <h2>Exemple concret pour une maison autour de Saint-Gaudens</h2>
      <p>Pour une maison de 90 à 120 m² dans le Comminges, la consommation varie fortement selon l’isolation et l’usage du poêle : chauffage principal, appoint, présence en journée ou programmation.</p>
      <p>Un contrôle professionnel permet de vérifier que l’appareil brûle correctement, que le tirage est adapté et que l’échange thermique reste efficace.</p>
      <h2>Comment réduire sa consommation de granulés ?</h2>
      <ul>
        <li>Réaliser l’entretien annuel complet.</li>
        <li>Nettoyer régulièrement le creuset et la vitre.</li>
        <li>Utiliser des granulés de bonne qualité.</li>
        <li>Éviter les températures de consigne trop élevées.</li>
        <li>Programmer le poêle selon vos horaires de présence.</li>
      </ul>
      <blockquote><p><strong>Conseil d’expert :</strong> un appareil propre, bien réglé et bien utilisé chauffe mieux tout en limitant la consommation de granulés.</p></blockquote>
      <h2>Optimisation poêle à granulés à Saint-Gaudens</h2>
      <p>Tout Feu Tout Flamme peut contrôler l’état de votre appareil, nettoyer les zones sensibles et vérifier les réglages standards pour vous aider à améliorer confort, rendement et consommation.</p>
    `,
  },
  {
    slug: "ramonage-poele-granules-obligations-ars-occitanie",
  title: "Ramonage poêle à granulés : obligations ARS Occitanie, certificat et assurance",
  date: "6 avril 2026",
  category: "Ramonage",
  image: "/blog/ramonage.jpg",
  excerpt:
    "Ramonage obligatoire, entretien annuel, certificat : ce que dit la réglementation en Occitanie pour être en règle.",
  content: `
    <p>Vous possédez un poêle à granulés à Saint-Gaudens ou dans le Comminges ? Alors vous êtes concerné par une réglementation stricte encadrée par le Code de santé publique et appliquée en Occitanie.</p>

    <p>Depuis 2023, les règles ont été harmonisées au niveau national, notamment sous l’impulsion des autorités sanitaires comme l’ARS, afin de limiter les risques d’incendie et la pollution de l’air.</p>

    <h2>Ramonage obligatoire : ce que dit la loi</h2>

    <p>Le décret n°2023-641 du 20 juillet 2023 impose :</p>

    <ul>
      <li>Un <strong>entretien annuel obligatoire</strong> de votre poêle</li>
      <li>Un <strong>ramonage mécanique du conduit au minimum une fois par an</strong></li>
      <li>Une intervention réalisée par un <strong>professionnel qualifié</strong></li>
    </ul>

    <p>Ces obligations s’appliquent à tous les appareils à granulés en France, y compris en Occitanie.</p>

    <h2>Le rôle de l’ARS Occitanie</h2>

    <p>L’Agence Régionale de Santé veille à l’application de ces règles dans le cadre du Code de santé publique :</p>

    <ul>
      <li>Réduction des émissions polluantes</li>
      <li>Prévention des intoxications au monoxyde de carbone</li>
      <li>Amélioration de la qualité de l’air intérieur</li>
    </ul>

    <p>Un appareil mal entretenu peut devenir dangereux pour la santé et l’habitation.</p>

    <h2>Ramonage et entretien : deux obligations différentes</h2>

    <p>Attention, ce sont deux interventions complémentaires :</p>

    <ul>
      <li><strong>Le ramonage :</strong> nettoyage mécanique du conduit pour éliminer suie et dépôts</li>
      <li><strong>L’entretien :</strong> nettoyage interne + vérification des organes de sécurité</li>
    </ul>

    <p>Le décret impose les deux pour garantir un fonctionnement sécurisé.</p>

    <h2>Le certificat de ramonage : obligatoire</h2>

    <p>Après chaque intervention, un certificat doit vous être remis sous 15 jours.</p>

    <ul>
      <li>Il prouve la conformité de l’installation</li>
      <li>Il est exigé par les assurances</li>
      <li>Il doit être conservé plusieurs années</li>
    </ul>

    <blockquote>
      <p><strong>Important :</strong> sans certificat valide, votre assurance peut refuser toute indemnisation en cas de sinistre.</p>
    </blockquote>

    <h2>Quels sont les risques en cas de non-respect ?</h2>

    <ul>
      <li>Amende pouvant aller jusqu’à 450€</li>
      <li>Refus d’indemnisation par l’assurance</li>
      <li>Risque d’incendie de conduit</li>
      <li>Intoxication au monoxyde de carbone</li>
    </ul>

    <p>Un simple manque d’entretien peut avoir des conséquences graves.</p>

    <h2>Fréquence recommandée en Occitanie</h2>

    <p>La réglementation impose :</p>

    <ul>
      <li>1 ramonage minimum par an (obligatoire)</li>
      <li>2 ramonages recommandés en cas d’usage intensif</li>
    </ul>

    <p>Cela dépend notamment de votre consommation de granulés.</p>

    <h2>Ramonage et entretien à Saint-Gaudens</h2>

    <p>Tout Feu Tout Flamme intervient à Saint-Gaudens et dans tout le Comminges : Luchon, Montréjeau, Aspet, Lannemezan, Cazères…</p>

    <p>👉 Un entretien conforme à la réglementation vous garantit sécurité, performance et tranquillité toute l’année.</p>

    <div>
      <p><strong>Besoin d’un ramonage conforme aux normes ?</strong></p>
      <p>N’attendez pas l’hiver. Prenez rendez-vous dès maintenant.</p>
    </div>
  `,
},
  {
    slug: "point-de-rosee-conduit-poele-granules",
    title: "Poêle à granulés : comprendre et éviter le point de rosée",
    date: "27 mars 2026",
    category: "Technique",
    image: "/blog/point-rosee.jpg",
    excerpt:
      "Le point de rosée peut provoquer condensation, bistre et corrosion dans le conduit.",
    content: `
      <p>Le point de rosée apparaît lorsque les fumées refroidissent trop vite et que la vapeur d’eau se condense dans le conduit.</p>
      <h2>Quels sont les risques ?</h2>
      <p>Condensation, bistre, corrosion du tubage et baisse de performance.</p>
      <h2>Comment l’éviter ?</h2>
      <p>Un conduit bien dimensionné, isolé, un bon réglage de combustion et un entretien régulier limitent fortement ce phénomène.</p>
    `,
  },
  {
    slug: "entretien-annuel-technicien-poele-granules",
    title: "Entretien annuel : que fait vraiment votre technicien ?",
    date: "26 mars 2026",
    category: "Entretien",
    image: "/blog/technicien-poele.jpg",
    excerpt:
      "Nettoyage interne, sécurité, joints, extracteur, ramonage : ce que comprend une vraie révision professionnelle.",
    content: `
      <p>Le nettoyage courant par l’utilisateur est indispensable, mais il ne remplace pas l’entretien annuel réalisé par un professionnel.</p>
      <h2>Les zones invisibles</h2>
      <p>Les cendres fines s’accumulent dans des zones difficiles d’accès : échangeur, extracteur, passages de fumées.</p>
      <h2>Les contrôles importants</h2>
      <p>Le technicien vérifie les organes de sécurité, les joints, la combustion, le tirage et réalise le ramonage mécanique si prévu.</p>
    `,
  },
];
function routeToPath(route) {
  if (!route || route === "/") return "/";
  return route;
}

function useRoute() {
  const [route, setRoute] = useState(() => window.location.hash.replace("#", "") || "/");

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash.replace("#", "") || "/");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return route;
}

function SEO({ title, description, route = "/", keywords = [], schema }) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${routeToPath(route)}`;
    document.title = title;
    document.documentElement.lang = "fr";

    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        const match = selector.match(/\[(name|property)="([^"]+)"\]/);
        if (match) el.setAttribute(match[1], match[2]);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[name="keywords"]', "content", keywords.join(", "));
    setMeta('meta[name="robots"]', "content", "index, follow, max-image-preview:large");
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:type"]', "content", "website");
    setMeta('meta[property="og:locale"]', "content", "fr_FR");
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[property="og:site_name"]', "content", COMPANY);
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    const id = "local-business-schema";
    let script = document.getElementById(id);
    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema || buildLocalBusinessSchema(canonicalUrl));
  }, [title, description, route, keywords, schema]);

  return null;
}

function buildLocalBusinessSchema(url = SITE_URL) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY,
    url,
    telephone: PHONE,
    email: EMAIL,
    image: `${SITE_URL}/Logoweb.png`,
    priceRange: "€€",
    description:
      "Entretien, ramonage mécanique et dépannage de poêles à granulés à Saint-Gaudens 31800 et dans un rayon de 100 km.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2045 rue de la vieille serre",
      postalCode: POSTAL_CODE,
      addressLocality: CITY,
      addressCountry: "FR",
    },
    areaServed: seoCities.map((city) => ({ "@type": "City", name: city })),
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service.seoTitle },
    })),
  };
}

const defaultKeywords = [
  "entretien poêle à granulés Saint-Gaudens",
  "ramonage poêle à granulés Saint-Gaudens",
  "dépannage poêle à granulés Saint-Gaudens",
  "technicien poêle à granulés 31800",
  "entretien poêle granulés Comminges",
  "ramonage mécanique poêle à granulés Haute-Garonne",
  "contrat entretien poêle à granulés",
  "réparation poêle à granulés autour Saint-Gaudens",
];

function ButtonLink({ href, children, variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-bold transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-[#3a86ff] via-[#4cc9f0] to-[#1c2541] text-white shadow-xl shadow-blue-500/20 hover:-translate-y-0.5 hover:shadow-blue-400/30"
      : "border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-[#4cc9f0]/50";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
      <ChevronRight size={18} />
    </a>
  );
}

function Layout({ children }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const id = "great-vibes-font";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#0b132b] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(58,134,255,0.22),transparent_32%),radial-gradient(circle_at_82%_8%,rgba(247,127,0,0.16),transparent_30%),radial-gradient(circle_at_55%_75%,rgba(76,201,240,0.08),transparent_38%),linear-gradient(135deg,#0b132b_0%,#0a192f_44%,#1c2541_100%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071027]/90 shadow-2xl shadow-black/20 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <a
            href="#/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm font-black uppercase tracking-[0.22em] text-white/80 transition hover:bg-white/10 hover:text-white"
            aria-label="Retour accueil"
          >
            Accueil
          </a>

          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] p-1 text-sm font-semibold text-white/70 shadow-inner shadow-black/20 lg:flex" aria-label="Navigation principale">
            {headerMainLinks.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="rounded-full px-4 py-2.5 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <div className="group relative">
              <button
                type="button"
                className="flex items-center gap-1 rounded-full px-4 py-2.5 text-white/70 transition hover:bg-white/10 hover:text-white"
                aria-label="Ouvrir le menu ressources"
              >
                Ressources
                <ChevronDown size={15} className="transition group-hover:rotate-180" />
              </button>

              <div className="invisible absolute right-0 top-full z-50 mt-4 w-72 translate-y-2 rounded-3xl border border-white/10 bg-[#071027]/95 p-3 opacity-0 shadow-2xl shadow-black/40 backdrop-blur-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="mb-2 border-b border-white/10 px-3 pb-3">
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-white/45">Infos utiles</p>
                </div>
                {headerInfoLinks.map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    className="block rounded-2xl px-4 py-3 transition hover:bg-white/10"
                  >
                    <span className="block font-bold text-white">{item.label}</span>
                    <span className="mt-1 block text-xs font-medium text-white/50">{item.description}</span>
                  </a>
                ))}
              </div>
            </div>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={RDV_URL}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <CalendarDays size={17} /> RDV
            </a>
            <a
              href={SUBSCRIBE_URL}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f77f00] px-5 py-3 text-sm font-black text-white shadow-lg shadow-[#f77f00]/25 transition hover:-translate-y-0.5 hover:bg-[#ff8c1a]"
            >
              Souscrire <ChevronRight size={17} />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-2xl border border-white/10 bg-white/[0.06] p-3 text-white shadow-lg shadow-black/20 lg:hidden"
            aria-label="Ouvrir le menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 bg-[#071027]/95 px-5 py-5 shadow-2xl shadow-black/30 backdrop-blur-2xl lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-3">
              {[...headerMainLinks, ...headerInfoLinks].map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 font-semibold text-white/85"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                <a
                  href={RDV_URL}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-4 font-bold text-white"
                >
                  <CalendarDays size={18} /> Prendre rendez-vous
                </a>
                <a
                  href={SUBSCRIBE_URL}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#f77f00] px-5 py-4 font-black text-white"
                >
                  Souscrire <ChevronRight size={18} />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>


      {children}
      <Footer />
    </main>
  );
}

function HomePage() {
  return (
    <>
      <SEO
        route="/"
        title="Entretien poêle à granulés Saint-Gaudens 31800 | Tout Feu Tout Flamme"
        description="Tout Feu Tout Flamme intervient à Saint-Gaudens 31800 et dans un rayon de 100 km pour l’entretien, le ramonage mécanique, le dépannage et les contrats de poêles à granulés."
        keywords={defaultKeywords}
      />

      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(247,127,0,0.16),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(58,134,255,0.20),transparent_30%),linear-gradient(135deg,#0b132b_0%,#0a192f_42%,#0f2742_100%)]" />

        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <motion.div
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="mb-10 flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <div className="relative mb-5 flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/30 backdrop-blur-xl md:h-32 md:w-32">
                <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_20%,rgba(247,127,0,0.28),transparent_45%),radial-gradient(circle_at_50%_90%,rgba(76,201,240,0.20),transparent_50%)]" />
                <img
                  src="/Logoweb.png"
                  alt="Logo Tout Feu Tout Flamme"
                  className="relative h-42 w-42 rounded-3xl object-contain md:h-28 md:w-28"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
                <Flame className="absolute -bottom-2 -right-2 text-[#f77f00] drop-shadow-[0_0_16px_rgba(247,127,0,0.55)]" size={34} />
              </div>

              <p
                className="text-5xl leading-none text-white drop-shadow-[0_0_24px_rgba(255,255,255,0.14)] md:text-7xl"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                Benjamin Plessis
              </p>
              <p className="mt-4 text-xs font-black uppercase tracking-[0.34em] text-[#4cc9f0] md:text-sm">
                Tout Feu Tout Flamme
              </p>
              <p className="mt-3 max-w-xl text-sm font-semibold uppercase tracking-[0.18em] text-white/60 md:text-base">
                Expert en poêle à granulés toutes marques
              </p>
            </motion.div>

            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80 backdrop-blur-xl">
              <BadgeCheck size={17} className="text-[#4cc9f0]" /> Saint-Gaudens 31800 • Intervention jusqu’à 100 km autour
            </div>

            <h1 className="max-w-5xl font-serif text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl">
              Expert en <br />
              <span className="text-[#4cc9f0] drop-shadow-[0_0_24px_rgba(76,201,240,0.25)]">
                poêles à granulés
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg font-medium leading-9 text-white/75">
              Entretien annuel, ramonage mécanique avec certificat, dépannage et contrats d’entretien pour poêles à granulés à Saint-Gaudens, dans le Comminges, en Haute-Garonne et dans un rayon de 100 km.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={SUBSCRIBE_URL}>
                <FileSignature size={18} /> Contrat d’entretien
              </ButtonLink>
              <ButtonLink href={RDV_URL} variant="secondary">
                <CalendarDays size={18} /> Prendre rendez-vous
              </ButtonLink>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              <TrustItem title="Intervention rapide" text="Saint-Gaudens + 100 km" icon={Flame} />
              <TrustItem title="Technicien qualifié" text="Entretien & dépannage" icon={ShieldCheck} />
              <TrustItem title="Contrats en ligne" text="Souscription simple" icon={Star} />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0b132b] via-[#1c2541] to-[#0f2742] p-8">
                <p className="text-sm font-black uppercase tracking-[0.35em] text-[#4cc9f0]">Contrat recommandé</p>
                <div className="mt-8 flex items-start justify-between gap-6">
                  <div>
                    <h2 className="font-serif text-5xl font-black text-white">Confort</h2>
                    <p className="mt-4 text-white/70">Le meilleur équilibre entre entretien, suivi et tranquillité.</p>
                  </div>
                  <Sparkles className="text-[#f77f00]" size={42} />
                </div>

                <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                  <p className="text-6xl font-black text-white">189€</p>
                  <p className="mt-2 text-xl font-bold text-[#4cc9f0]">ou 18,90€ / mois</p>
                  <ul className="mt-7 space-y-3 text-white/75">
                    <li>✓ Entretien + ramonage + certificat</li>
                    <li>✓ 1 intervention dépannage incluse</li>
                    <li>✓ Main d’œuvre + déplacement compris</li>
                    <li>✓ Rendez-vous priorisé</li>
                  </ul>
                </div>

                <a
                  href={SUBSCRIBE_URL}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#3a86ff] via-[#4cc9f0] to-[#f77f00] px-5 py-4 font-black text-white shadow-xl shadow-blue-500/20"
                >
                  Souscrire en ligne <ChevronRight size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ServicesSection />
      <FeaturedContract />
      <SeoTextSection />
      <ZonesSection />
      <FinalCta />
    </>
  );
}

function TrustItem({ title, text, icon: Icon }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3a86ff]/15 text-[#4cc9f0]">
        <Icon size={22} />
      </div>
      <div>
        <p className="font-bold text-white">{title}</p>
        <p className="text-sm text-white/60">{text}</p>
      </div>
    </div>
  );
}

function ServicesSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:py-24">
      <SectionTitle
        center
        kicker="Nos services"
        title="Entretien, dépannage et ramonage"
        text="Un service professionnel pour sécuriser votre installation, optimiser le rendement de votre poêle à granulés et anticiper les pannes pendant l’hiver."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 shadow-2xl shadow-black/10 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#4cc9f0]/40">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#3a86ff]/15 text-[#4cc9f0]">
              <service.icon size={30} />
            </div>
            <h3 className="font-serif text-2xl font-black text-white">{service.title}</h3>
            <p className="mt-4 leading-7 text-white/65">{service.text}</p>
            <p className="mt-4 text-sm font-semibold text-[#4cc9f0]">{service.seoTitle}</p>
            <a href={RDV_URL} className="mt-7 inline-flex items-center gap-2 font-bold text-[#f77f00]">
              Prendre rendez-vous <ChevronRight size={17} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function FeaturedContract() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20">
      <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0b132b] via-[#1c2541] to-[#0f2742] p-6 text-white shadow-2xl shadow-black/30 md:grid-cols-[0.36fr_0.64fr] md:p-8">
        <div className="min-h-56 rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(247,127,0,0.38),transparent_26%),radial-gradient(circle_at_70%_18%,rgba(58,134,255,0.45),transparent_30%),linear-gradient(135deg,#0b132b,#1c2541)]" />
        <div className="grid gap-8 md:grid-cols-[1fr_0.45fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#4cc9f0]">Contrat recommandé</p>
            <h2 className="mt-5 font-serif text-5xl font-black">
              Pack <span className="text-[#4cc9f0]">Confort</span>
            </h2>
            <p className="mt-5 text-lg font-semibold leading-8 text-white/75">
              Entretien + ramonage + certificat + 1 dépannage inclus dans l’année.
            </p>
          </div>
          <div className="text-left md:text-right">
            <Star className="mb-8 ml-auto text-[#f77f00]" size={42} />
            <p className="text-6xl font-black text-white">189€</p>
            <p className="mt-3 text-xl font-bold text-[#4cc9f0]">ou 18,90€ / mois</p>
            <div className="mt-6">
              <ButtonLink href={SUBSCRIBE_URL}>Souscrire</ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SeoTextSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 shadow-2xl shadow-black/10 backdrop-blur-xl md:p-10">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-[#4cc9f0]">Référencement local</p>
        <h2 className="mt-3 font-serif text-4xl font-black text-white">
          Entretien poêle à granulés à Saint-Gaudens et dans le Comminges
        </h2>
        <div className="mt-6 grid gap-6 leading-8 text-white/70 md:grid-cols-2">
          <p>
            Basée à Saint-Gaudens 31800, l’entreprise Tout Feu Tout Flamme intervient pour l’entretien annuel, le ramonage mécanique, le diagnostic et le dépannage de poêles à granulés. Les prestations s’adressent aux particuliers souhaitant conserver un appareil fiable, propre et sécurisé pendant toute la saison de chauffe.
          </p>
          <p>
            La zone d’intervention couvre Saint-Gaudens, le Comminges, la Haute-Garonne et les communes situées dans un rayon d’environ 100 km : Montréjeau, Boussens, Carbonne, Cazères, Muret, Cugnaux, Lannemezan, Saint-Girons et secteurs limitrophes.
          </p>
        </div>
      </div>
    </section>
  );
}

function TarifsPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <SEO
        route="/tarifs"
        title="Tarifs entretien poêle à granulés Saint-Gaudens | Contrats 139€ 189€ 249€"
        description="Tarifs 2026 pour entretien, ramonage, dépannage et contrats de poêles à granulés à Saint-Gaudens 31800, Comminges et 100 km autour."
        keywords={[...defaultKeywords, "tarif entretien poêle à granulés", "contrat entretien poêle granulés", "prix ramonage poêle granulés"]}
      />
      <SectionTitle
        kicker="Tarifs & prestations"
        title="Contrats d’entretien poêle à granulés"
        text="Des packs clairs, pensés pour l’entretien, le ramonage, la sécurité et la tranquillité tout au long de l’hiver."
      />
      <div className="grid gap-6 lg:grid-cols-3">{offers.map((offer) => <OfferCard key={offer.name} offer={offer} />)}</div>

      <div className="mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-2xl shadow-black/10 backdrop-blur-xl">
        <div className="border-b border-white/10 p-6">
          <h3 className="font-serif text-3xl font-black text-white">Tarifs prestations poêles à granulés 2026</h3>
          <p className="mt-2 text-white/60">Tarifs TTC, hors pièces éventuelles.</p>
        </div>
        <div className="divide-y divide-white/10">
          {tariffRows.map(([name, detail, price]) => (
            <div key={name} className="grid gap-3 p-5 md:grid-cols-[1fr_1.4fr_0.6fr] md:items-center">
              <p className="font-bold text-white">{name}</p>
              <p className="text-white/60">{detail}</p>
              <p className="font-black text-[#4cc9f0] md:text-right">{price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OfferCard({ offer }) {
  return (
    <article className={`relative rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 shadow-2xl shadow-black/10 backdrop-blur-xl ${offer.featured ? "ring-2 ring-[#3a86ff] lg:-mt-4" : ""}`}>
      {offer.featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#3a86ff] via-[#4cc9f0] to-[#f77f00] px-4 py-1 text-xs font-black uppercase tracking-widest text-white">
          Le plus choisi
        </div>
      )}
      <div className={`mb-6 h-2 rounded-full bg-gradient-to-r ${offer.color}`} />
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/45">{offer.badge}</p>
      <h3 className="mt-2 font-serif text-4xl font-black text-white">{offer.name}</h3>
      <p className="mt-6 text-5xl font-black text-white">{offer.price}</p>
      <p className="mt-1 font-semibold text-[#4cc9f0]">{offer.monthly}</p>
      <ul className="mt-7 space-y-3 text-sm font-medium text-white/70">
        {offer.features.map((feature) => (
          <li key={feature} className="flex gap-2">
            <CheckCircle2 className="mt-0.5 shrink-0 text-[#4cc9f0]" size={16} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a href={SUBSCRIBE_URL} className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#3a86ff] to-[#1c2541] px-4 py-4 font-bold text-white hover:from-[#4cc9f0] hover:to-[#3a86ff]">
        Souscrire <ChevronRight size={17} />
      </a>
    </article>
  );
}

function BlogPage({ slug }) {
  const featuredSlug = "ramonage-poele-granules-obligations-ars-occitanie";
  const featuredArticle = blogArticles.find((item) => item.slug === featuredSlug);
  const article = slug ? blogArticles.find((item) => item.slug === slug) : null;

  if (slug && !article) {
    return (
      <section className="mx-auto max-w-5xl px-5 py-16">
        <SEO
          route="/blog"
          title="Article introuvable | Tout Feu Tout Flamme"
          description="L’article demandé est introuvable. Retrouvez tous les conseils Tout Feu Tout Flamme sur le blog."
          keywords={defaultKeywords}
        />
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 text-center shadow-2xl shadow-black/10 backdrop-blur-xl">
          <h1 className="font-serif text-4xl font-black text-white">Article introuvable</h1>
          <p className="mt-4 text-white/65">Le lien demandé n’existe pas ou a été déplacé.</p>
          <a href="#/blog" className="mt-7 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#f77f00] px-6 py-4 font-black text-white">
            Retour au blog <ChevronRight size={18} />
          </a>
        </div>
      </section>
    );
  }

  if (article) {
    return (
      <article className="mx-auto max-w-5xl px-5 py-16">
        <SEO
          route={`/blog/${article.slug}`}
          title={`${article.title} | Tout Feu Tout Flamme`}
          description={article.excerpt}
          keywords={[...defaultKeywords, article.category, article.title]}
          schema={{
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.title,
            description: article.excerpt,
            image: `${SITE_URL}${article.image}`,
            datePublished: article.date,
            author: { "@type": "Person", name: "Benjamin Plessis" },
            publisher: { "@type": "Organization", name: COMPANY, logo: { "@type": "ImageObject", url: `${SITE_URL}/Logoweb.png` } },
            mainEntityOfPage: `${SITE_URL}/blog/${article.slug}`,
          }}
        />

        <a href="#/blog" className="mb-8 inline-flex items-center gap-2 font-bold text-[#f77f00]">
          ← Retour au blog
        </a>

        <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.055] shadow-2xl shadow-black/20 backdrop-blur-xl">
          <img src={article.image} alt={article.title} className="h-72 w-full object-cover md:h-96" />
          <div className="p-7 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#4cc9f0]">
              {article.category} · {article.date}
            </p>
            <h1 className="mt-5 font-serif text-4xl font-black leading-tight text-white md:text-6xl">
              {article.title}
            </h1>
            <p className="mt-6 text-xl leading-8 text-white/70">{article.excerpt}</p>
            <div
              className="mt-10 space-y-6 text-lg leading-9 text-white/75 [&_blockquote]:rounded-2xl [&_blockquote]:border-l-4 [&_blockquote]:border-[#1b4332] [&_blockquote]:bg-[#1b4332]/25 [&_blockquote]:p-6 [&_h2]:pt-4 [&_h2]:font-serif [&_h2]:text-3xl [&_h2]:font-black [&_h2]:text-[#f77f00] [&_li]:ml-6 [&_li]:list-disc [&_li]:text-white/75 [&_p]:text-white/75 [&_strong]:text-white [&_ul]:space-y-2"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-[#f77f00]/30 bg-[#f77f00]/10 p-8 text-center shadow-2xl shadow-black/10">
          <h2 className="font-serif text-3xl font-black text-white">Besoin d’un entretien professionnel ?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Souscrivez à un contrat d’entretien Tout Feu Tout Flamme et préparez votre appareil avant la prochaine saison de chauffe.
          </p>
          <a href={SUBSCRIBE_URL} className="mt-7 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#3a86ff] via-[#4cc9f0] to-[#f77f00] px-6 py-4 font-black text-white shadow-xl shadow-blue-500/20">
            Souscrire maintenant <ChevronRight size={18} />
          </a>
        </div>
      </article>
    );
  }

  return (
    <section id="blog" className="border-t border-white/10 bg-[#0b132b] text-white">
      <SEO
        route="/blog"
        title="Blog poêle à granulés Saint-Gaudens | Entretien, ramonage et réglementation"
        description="Conseils d’expert, réglementation, entretien, ramonage et dépannage de poêles à granulés autour de Saint-Gaudens et du Comminges."
        keywords={[...defaultKeywords, "blog poêle à granulés", "ramonage Saint-Gaudens", "réglementation ramonage Occitanie"]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Blog Tout Feu Tout Flamme",
          url: `${SITE_URL}/blog`,
          description: "Conseils d’entretien, ramonage, sécurité et dépannage pour poêles à granulés.",
        }}
      />

      <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
        <div className="mb-16 text-center">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#4cc9f0]">Conseils & expertise</p>
          <h1 className="mt-4 font-serif text-4xl font-black leading-tight text-white md:text-6xl">
            Entretien & ramonage poêle à granulés
            <br className="hidden md:block" /> à Saint-Gaudens
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/65">
            Conseils d’expert, réglementation et bonnes pratiques pour garder votre poêle propre, fiable et sécurisé toute l’année.
          </p>
        </div>

        {featuredArticle && (
          <a
            href={`#/blog/${featuredArticle.slug}`}
            className="group mb-16 grid overflow-hidden rounded-[2.5rem] border border-[#f77f00]/35 bg-[#f77f00]/10 shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:border-[#f77f00]/70 lg:grid-cols-[0.42fr_0.58fr]"
          >
            <img
              src={featuredArticle.image}
              alt={featuredArticle.title}
              className="h-72 w-full object-cover opacity-95 transition duration-500 group-hover:scale-105 lg:h-full"
            />
            <div className="p-7 md:p-10">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-[#f77f00]">⭐ Article recommandé</p>
              <h2 className="mt-5 font-serif text-3xl font-black leading-tight text-white md:text-5xl">
                {featuredArticle.title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/70">{featuredArticle.excerpt}</p>
              <span className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-[#f77f00] px-6 py-4 font-black text-white shadow-xl shadow-[#f77f00]/20">
                Lire l’article <ChevronRight size={18} />
              </span>
            </div>
          </a>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogArticles
            .filter((item) => item.slug !== featuredSlug)
            .map((item) => (
              <a
                key={item.slug}
                href={`#/blog/${item.slug}`}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-2xl shadow-black/10 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#f77f00]/50"
              >
                <img src={item.image} alt={item.title} className="h-56 w-full object-cover opacity-90 transition duration-500 group-hover:scale-105" />
                <div className="p-7">
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-[#4cc9f0]">
                    {item.category} · {item.date}
                  </p>
                  <h2 className="mt-4 font-serif text-2xl font-black leading-tight text-white">{item.title}</h2>
                  <p className="mt-4 leading-7 text-white/65">{item.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-bold text-[#f77f00]">
                    Lire l’article <ChevronRight size={17} />
                  </span>
                </div>
              </a>
            ))}
        </div>

        <div className="mt-20 rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 text-center shadow-2xl shadow-black/10 backdrop-blur-xl">
          <h2 className="font-serif text-3xl font-black text-white">Besoin d’un entretien ou d’un ramonage ?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/65">
            Intervention à Saint-Gaudens et dans tout le Comminges. Anticipez votre entretien avant la période de forte demande.
          </p>
          <a href={SUBSCRIBE_URL} className="mt-7 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#f77f00] px-7 py-4 font-black text-white shadow-xl shadow-[#f77f00]/20">
            Prendre rendez-vous <ChevronRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function GaleriePage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <SEO
        route="/galerie"
        title="Galerie interventions poêles à granulés Saint-Gaudens | Avant / après"
        description="Galerie des interventions Tout Feu Tout Flamme : entretien, ramonage et dépannage de poêles à granulés à Saint-Gaudens et alentours."
        keywords={[...defaultKeywords, "galerie entretien poêle granulés", "photos ramonage poêle granulés", "intervention poêle à granulés Saint-Gaudens"]}
      />
      <SectionTitle kicker="Galerie" title="Réalisations et interventions" text="Une page prête à recevoir vos photos avant/après : entretien, nettoyage, ramonage, dépannage et remise en service." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {["Entretien", "Ramonage", "Dépannage", "Remise en service"].map((item) => (
          <article key={item} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/10 backdrop-blur-xl">
            <Camera className="text-[#4cc9f0]" size={34} />
            <h2 className="mt-5 font-serif text-2xl font-black text-white">{item}</h2>
            <p className="mt-3 text-white/60">Intervention poêle à granulés à Saint-Gaudens et dans un rayon de 100 km.</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PartenariatPage() {
  const partners = [
    {
      name: "Jolly Mec",
      logo: "/logo/jollymec.png",
      url: "https://jolly-mec.it/fr/",
    },
    {
      name: "Poele.net",
      logo: "/logo/poele-net.png",
      url: "https://www.poelesabois.com/",
    },
    {
      name: "Palazzetti",
      logo: "/logo/palazzetti.png",
      url: "https://palazzetti.fr/",
    },
    {
      name: "Solzaima",
      logo: "/logo/solzaima.png",
      url: "https://solzaima.fr/",
    },
    {
      name: "SPS",
      logo: "/logo/sps.png",
      url: "https://www.servicepoele.fr/",
    },
  ];

  const commitments = [
    "Entretien réalisé dans les règles de l’art",
    "Ramonage mécanique avec certificat",
    "Diagnostic sérieux et transparent",
    "Intervention locale autour de Saint-Gaudens",
    "Suivi client professionnel",
  ];

  return (
    <>
      <SEO
        route="/partenariat"
        title="Partenaires et station technique poêle à granulés | Saint-Gaudens"
        description="Tout Feu Tout Flamme travaille avec des fabricants, distributeurs et réseaux spécialisés dans les poêles à granulés pour l’entretien, le ramonage, le diagnostic et le dépannage autour de Saint-Gaudens."
        keywords={[
          ...defaultKeywords,
          "station technique poêle à granulés",
          "partenariat poêle à granulés",
          "SAV poêle à granulés Saint-Gaudens",
          "installateur poêle granulés Haute-Garonne",
          "collaboration chauffage Saint-Gaudens",
        ]}
      />

      <section className="relative overflow-hidden px-5 py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(247,127,0,0.16),transparent_30%),radial-gradient(circle_at_85%_0%,rgba(76,201,240,0.18),transparent_34%)]" />

        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/20 backdrop-blur-xl">
              <Handshake className="text-[#f77f00]" size={34} />
            </div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#4cc9f0]">Partenariat</p>
            <h1 className="mt-4 font-serif text-4xl font-black leading-tight text-white md:text-6xl">
              Partenaires & stations techniques
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
              Tout Feu Tout Flamme travaille en lien avec des fabricants, distributeurs
              et réseaux spécialisés dans les appareils à granulés afin d’assurer un
              service sérieux, fiable et conforme aux exigences des marques.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <article className="rounded-[2rem] border border-white/10 bg-white/[0.065] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f77f00]/15 text-[#f77f00]">
                <Wrench size={30} />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#f77f00]">Station technique</p>
              <h2 className="mt-4 font-serif text-3xl font-black text-white md:text-4xl">
                Poêles à granulés toutes marques
              </h2>
              <p className="mt-5 leading-8 text-white/68">
                Nous intervenons sur l’entretien, le ramonage mécanique, le diagnostic
                et le dépannage des appareils à granulés. Notre objectif : assurer un
                suivi professionnel, durable et conforme aux prescriptions fabricants.
              </p>
            </article>

            <div className="rounded-[2rem] border border-white/10 bg-[#071027]/70 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-10">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#4cc9f0]">Nos engagements</p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {commitments.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.055] p-4 text-white/75">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-[#f77f00]" size={20} />
                    <span className="font-semibold leading-6">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#4cc9f0]">Réseau professionnel</p>
            <h2 className="mt-3 font-serif text-4xl font-black text-white md:text-5xl">
              Marques, réseaux et partenaires
            </h2>
            <p className="mx-auto mt-5 max-w-3xl leading-8 text-white/65">
              Les logo présentés indiquent les marques, réseaux ou partenaires avec lesquels
              nous travaillons, collaborons ou dont nous suivons les prescriptions techniques.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {partners.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-32 items-center justify-center rounded-[1.7rem] border border-white/10 bg-white/[0.92] p-6 shadow-2xl shadow-black/10 transition hover:-translate-y-1 hover:border-[#f77f00]/60 hover:shadow-[#f77f00]/15"
                  aria-label={`Voir le site ${partner.name}`}
                >
                  <img
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    className="max-h-16 w-full object-contain transition duration-300 group-hover:scale-105"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                      event.currentTarget.nextElementSibling.style.display = "block";
                    }}
                  />
                  <span className="hidden text-center text-lg font-black text-[#0b132b]">{partner.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-20 overflow-hidden rounded-[2.5rem] border border-[#f77f00]/30 bg-[linear-gradient(135deg,rgba(247,127,0,0.20),rgba(58,134,255,0.12))] p-8 text-center shadow-2xl shadow-black/20 backdrop-blur-xl md:p-12">
            <Sparkles className="mx-auto text-[#f77f00]" size={38} />
            <h2 className="mt-5 font-serif text-3xl font-black text-white md:text-5xl">
              Vous êtes fabricant, distributeur ou revendeur ?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">
              Devenons partenaires techniques pour assurer le suivi, l’entretien et le SAV
              des appareils à granulés autour de Saint-Gaudens.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href={`mailto:${EMAIL}?subject=Demande%20de%20partenariat%20technique`}>
                Nous contacter <ChevronRight size={18} />
              </ButtonLink>
              <a
                href={`tel:${PHONE.replaceAll(" ", "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                <Phone size={18} /> Appeler
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


function AvantApresPage() {
  const images = [
    {
      src: "/images/entretien-poele-granules-avant-apres-saint-gaudens.png",
      title: "Entretien poêle à granulés à Saint-Gaudens",
      location: "Saint-Gaudens",
      alt: "Avant après entretien poêle à granulés à Saint-Gaudens avec nettoyage complet et remise en fonctionnement",
    },
    {
      src: "/images/entretien-poele-granules-avant-apres-muret.png",
      title: "Nettoyage poêle à granulés à Muret",
      location: "Muret",
      alt: "Avant après nettoyage poêle à granulés à Muret avec vitre nettoyée et flamme remise en service",
    },
    {
      src: "/images/entretien-poele-granules-avant-apres-carbonne.png",
      title: "Ramonage et entretien poêle à granulés à Carbonne",
      location: "Carbonne",
      alt: "Avant après ramonage et entretien poêle à granulés à Carbonne en Haute-Garonne",
    },
    {
      src: "/images/entretien-poele-granules-avant-apres-montrejeau.png",
      title: "Entretien poêle à granulés à Montréjeau",
      location: "Montréjeau",
      alt: "Avant après entretien professionnel poêle à granulés à Montréjeau avec contrôle de fonctionnement",
    },
    {
      src: "/images/entretien-poele-granules-avant-apres-cazeres.png",
      title: "Nettoyage poêle à granulés à Cazères",
      location: "Cazères",
      alt: "Avant après nettoyage complet poêle à granulés à Cazères avec performance optimisée",
    },
    {
      src: "/images/entretien-poele-granules-avant-apres-bagnere-de-luchon.png",
      title: "Entretien poêle à granulés à Bagnères-de-Luchon",
      location: "Bagnères-de-Luchon",
      alt: "Avant après entretien poêle à granulés à Bagnères-de-Luchon avec nettoyage en profondeur",
    },
  ];

  return (
    <>
      <SEO
        route="/avant-apres-entretien-poele-granules"
        title="Avant / Après entretien poêle à granulés Saint-Gaudens | Tout Feu Tout Flamme"
        description="Découvrez nos réalisations avant/après d’entretien de poêles à granulés à Saint-Gaudens, Muret, Carbonne, Montréjeau, Cazères et Bagnères-de-Luchon."
        keywords={[
          ...defaultKeywords,
          "avant après poêle à granulés",
          "entretien poêle à granulés Saint-Gaudens",
          "nettoyage poêle granulés Haute-Garonne",
          "ramonage poêle granulés 31",
          "technicien poêle à granulés Saint-Gaudens",
          "entretien poêle pellets avant après",
        ]}
      />

      <main className="relative overflow-hidden px-5 py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_10%,rgba(247,127,0,0.16),transparent_30%),radial-gradient(circle_at_82%_0%,rgba(76,201,240,0.15),transparent_34%)]" />

        <section className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#f77f00]">
            Réalisations avant / après
          </p>
          <h1 className="mx-auto mt-4 max-w-5xl font-serif text-4xl font-black leading-tight text-white md:text-6xl">
            Entretien poêle à granulés :
            <span className="block text-[#ffb703]">résultats visibles en Haute-Garonne</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Tout Feu Tout Flamme intervient autour de Saint-Gaudens pour l’entretien annuel,
            le nettoyage complet, le ramonage mécanique et le contrôle de sécurité des poêles
            à granulés toutes marques.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href={RDV_URL}>
              Prendre rendez-vous <ChevronRight size={18} />
            </ButtonLink>
            <a
              href={`tel:${PHONE.replaceAll(" ", "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              <Phone size={18} /> Appeler maintenant
            </a>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#4cc9f0]">Google Images + SEO local</p>
            <h2 className="mt-3 font-serif text-3xl font-black text-white md:text-5xl">
              Avant / Après nettoyage poêle à granulés
            </h2>
            <p className="mx-auto mt-4 max-w-3xl leading-8 text-white/65">
              Ces visuels montrent l’intérêt d’un entretien régulier : vitre propre,
              foyer nettoyé, combustion améliorée et appareil contrôlé.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {images.map((image) => (
              <article
                key={image.src}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#f77f00]/50"
              >
                <div className="relative h-[430px] bg-[#101828]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    title={image.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                      const fallback = event.currentTarget.nextElementSibling;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <div className="hidden h-full w-full items-center justify-center p-8 text-center text-white/70">
                    Image à placer dans /public/images/<br />{image.src.replace("/images/", "")}
                  </div>
                  <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/55 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white backdrop-blur">
                    {image.location}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-2xl font-black text-white">{image.title}</h3>
                  <p className="mt-3 leading-7 text-white/65">
                    Nettoyage complet, contrôle de sécurité, remise en fonctionnement et conseils
                    d’utilisation par Tout Feu Tout Flamme.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-[2rem] border border-white/10 bg-[#071027]/80 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-10">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#f77f00]">Zone d’intervention</p>
            <h2 className="mt-4 font-serif text-3xl font-black text-white md:text-4xl">
              Entretien poêle à granulés autour de Saint-Gaudens
            </h2>
            <p className="mt-5 leading-8 text-white/68">
              Nous intervenons à Saint-Gaudens, Montréjeau, Cazères, Carbonne, Muret,
              Bagnères-de-Luchon et dans les communes voisines pour l’entretien, le ramonage
              mécanique et le dépannage des appareils à granulés.
            </p>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-white/[0.065] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-10">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#4cc9f0]">Prestations réalisées</p>
            <ul className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                "Nettoyage complet du poêle à granulés",
                "Ramonage mécanique avec certificat",
                "Contrôle de sécurité",
                "Vérification de la combustion",
                "Conseils d’entretien et d’utilisation",
                "Intervention toutes marques",
              ].map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.055] p-4 text-white/75">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#f77f00]" size={20} />
                  <span className="font-semibold leading-6">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mx-auto mt-20 max-w-5xl overflow-hidden rounded-[2.5rem] border border-[#f77f00]/30 bg-[linear-gradient(135deg,rgba(247,127,0,0.20),rgba(58,134,255,0.12))] p-8 text-center shadow-2xl shadow-black/20 backdrop-blur-xl md:p-12">
          <Sparkles className="mx-auto text-[#f77f00]" size={38} />
          <h2 className="mt-5 font-serif text-3xl font-black text-white md:text-5xl">
            Votre poêle mérite un entretien sérieux
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">
            Un appareil bien entretenu, c’est plus de sécurité, une meilleure combustion
            et moins de risques de panne en hiver.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="#/tarifs">
              Voir les contrats d’entretien <ChevronRight size={18} />
            </ButtonLink>
            <a
              href="#/galerie"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Voir la galerie
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

function MentionsPage() {
  return (
    <div className="bg-[#0b132b] text-white">

      {/* HERO */}
      <section className="py-20 text-center px-6 border-b border-white/10">
        <p className="text-sm tracking-widest text-blue-400 mb-3">
          INFORMATIONS LÉGALES
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-100 tracking-wide">
          Mentions légales
        </h1>

        <p className="max-w-2xl mx-auto text-gray-400">
          Informations légales et obligations réglementaires du site Tout Feu Tout Flamme.
        </p>
      </section>

      {/* CONTENU */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-12">

        {/* ÉDITEUR */}
        <div className="bg-[#1c2541] p-8 rounded-2xl border border-white/10 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-white tracking-wide">Éditeur du site</h2>
          <p className="text-gray-300 leading-relaxed">
            <strong>Tout Feu Tout Flamme</strong><br />
            Benjamin Plessis – Entrepreneur individuel<br />
            2045 rue de la vieille serre<br />
            31800 Saint-Gaudens<br /><br />

            Téléphone : 07 61 64 77 65<br />
            Email : benjamin.plessis@toutfeutoutflamme.eu<br />
            SIREN : 752 185 934
          </p>
        </div>

        {/* PUBLICATION */}
        <div className="bg-[#1c2541] p-8 rounded-2xl border border-white/10 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-white tracking-wide">Direction de la publication</h2>
          <p className="text-gray-300">
            Responsable : Benjamin Plessis<br />
            Email : tftf31800@gmail.com
          </p>
        </div>

        {/* HÉBERGEMENT */}
        <div className="bg-[#1c2541] p-8 rounded-2xl border border-white/10 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-white tracking-wide">Hébergement</h2>
          <p className="text-gray-300">
            IONOS<br />
            7 place de la Gare – BP 70109<br />
            57200 Sarreguemines – France<br />
            Téléphone : 09 70 808 911<br />
            https://www.ionos.fr
          </p>
        </div>

        {/* CONDITIONS */}
        <div className="bg-[#1c2541] p-8 rounded-2xl border border-white/10 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-white tracking-wide">Conditions d’utilisation</h2>
          <p className="text-gray-300 leading-relaxed">
            L’accès au site implique l’acceptation des présentes conditions.
            Celles-ci peuvent être modifiées à tout moment.
            <br /><br />
            Le site est accessible en continu, sauf interruption pour maintenance.
          </p>
        </div>

        {/* PROPRIÉTÉ */}
        <div className="bg-[#1c2541] p-8 rounded-2xl border border-white/10 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-white tracking-wide">Propriété intellectuelle</h2>
          <p className="text-gray-300 leading-relaxed">
            L’ensemble des contenus (textes, images, logos) est protégé.
            Toute reproduction est interdite sans autorisation.
          </p>
        </div>

        {/* DONNÉES */}
        <div className="bg-[#1c2541] p-8 rounded-2xl border border-white/10 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-white tracking-wide">Données personnelles</h2>
          <p className="text-gray-300 leading-relaxed">
            Les données collectées sont utilisées uniquement dans le cadre de la relation client.
            Elles ne sont jamais revendues ni cédées à des tiers.
          </p>

          <ul className="mt-4 space-y-2 text-gray-300">
            <li>✔ Gestion des demandes clients</li>
            <li>✔ Suivi des prestations</li>
            <li>✔ Communication (email / téléphone)</li>
            <li>✔ Amélioration du service</li>
          </ul>
        </div>

        {/* DROITS */}
        <div className="bg-[#1c2541] p-8 rounded-2xl border border-white/10 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-white tracking-wide">Droits de l’utilisateur</h2>
          <p className="text-gray-300">
            Vous disposez d’un droit d’accès, de rectification et de suppression de vos données.
            <br /><br />
            Contact : benjamin.plessis@toutfeutoutflamme.eu
          </p>
        </div>

        {/* COOKIES */}
        <div className="bg-[#1c2541] p-8 rounded-2xl border border-white/10 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-white tracking-wide">Cookies</h2>
          <p className="text-gray-300">
            Le site peut utiliser des cookies afin d’améliorer l’expérience utilisateur.
          </p>
        </div>

        {/* JURIDICTION */}
        <div className="bg-[#1c2541] p-8 rounded-2xl border border-white/10 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-white tracking-wide">Droit applicable</h2>
          <p className="text-gray-300">
            Droit français – Tribunal compétent : Toulouse
          </p>
        </div>

      </section>
    </div>
  );
}

function CgvPage() {
  const offerRows = [
    ["Entretien annuel obligatoire", "Inclus", "Inclus", "Inclus"],
    ["Ramonage mécanique du conduit + certificat", "✔", "✔", "✔"],
    ["Nettoyage complet de l’appareil", "✔", "✔", "✔"],
    ["Contrôle combustion et réglages électroniques", "✔", "✔", "✔"],
    ["Assistance dépannage", "Hors contrat", "1 intervention\nMO + déplacement inclus", "1 intervention\nMO + déplacement inclus\n+ illimitée*"],
    ["Délai prioritaire 24h/48h ouvré", "-", "✔", "✔"],
    ["Remise sur les pièces détachées", "-", "-", "-15 %"],
    ["Prix annuel TTC", "139,00 €", "189,00 €", "249,00 €"],
    ["Mensualité via Stripe", "13,90 € / mois", "18,90 € / mois", "24,90 € / mois"],
  ];

  return (
    <section className="mx-auto max-w-7xl px-5 py-16">

      <SEO
        route="/cgv"
        title="Conditions générales de vente | Tout Feu Tout Flamme Saint-Gaudens"
        description="Conditions générales de vente applicables aux prestations d’entretien, de ramonage et aux contrats annuels de poêles à granulés."
        keywords={[...defaultKeywords, "CGV poêle granulés", "contrat entretien poêle granulés"]}
      />

      <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl">

        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-10">
          Conditions générales de vente
        </h1>

        <div className="space-y-8 text-white/80">

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Préambule</h2>
            <p>
              Les présentes Conditions Générales de Vente régissent l’ensemble des prestations
              proposées par Tout Feu Tout Flamme.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Article 1 — Identification</h2>
            <p>
              Tout Feu Tout Flamme – Benjamin Plessis – 2045 rue de la vieille serre, 31800 Saint-Gaudens – SIREN 752 185 934.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Article 2 — Prestations</h2>
            <p>
              Entretien, ramonage mécanique et dépannage des appareils à granulés conformément aux normes DTU 24.1 et aux prescriptions fabricants.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Article 3 — Paiement</h2>
            <p>
              Paiement immédiat après intervention ou mensualisation via Stripe. Certificat remis après paiement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Article 4 — Responsabilité</h2>
            <p>
              Obligation de moyens. Responsabilité limitée au montant de la prestation.
            </p>
          </div>

        </div>

        {/* TABLEAU */}
        <div className="mt-12 overflow-x-auto border border-white/10 rounded-xl">
          {offerRows.map((row) => (
            <div key={row[0]} className="grid grid-cols-4 border-t border-white/10 text-sm text-white">
              {row.map((cell, i) => (
                <div key={i} className="p-3 text-center">{cell}</div>
              ))}
            </div>
          ))}
        </div>

        {/* PDF */}
        <div className="mt-10 text-center">
          <a
            href="/pdf/CGV_NET.pdf"
            target="_blank"
            className="inline-block px-6 py-3 border border-white/20 rounded-xl text-white hover:border-[#f77f00]"
          >
            Télécharger les CGV complètes
          </a>
        </div>

      </div>
    </section>
  );
}

function SectionTitle({ kicker, title, text, center = false }) {
  return (
    <div className={`mb-12 ${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      <p className="text-sm font-black uppercase tracking-[0.35em] text-[#4cc9f0]">{kicker}</p>
      <h2 className="mt-3 font-serif text-4xl font-black leading-tight text-white md:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-5 leading-8 text-white/65">{text}</p>}
    </div>
  );
}

function ZonesSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 lg:grid-cols-2 lg:items-center">
      <SectionTitle
        kicker="Secteur"
        title="Intervention locale et réactive"
        text="Basé à Saint-Gaudens, Tout Feu Tout Flamme intervient dans le Comminges, en Haute-Garonne et dans un rayon de 100 km pour l’entretien, le ramonage et le dépannage."
      />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {zones.map((zone) => (
          <div key={zone} className="rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-5 text-center font-semibold text-white/75 shadow-xl shadow-black/10 backdrop-blur-xl">
            <MapPin className="mx-auto mb-2 text-[#4cc9f0]" size={18} />
            {zone}
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contact" className="px-5 py-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 text-white shadow-2xl shadow-black/20 backdrop-blur-xl md:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#4cc9f0]">Contact</p>
            <h2 className="mt-3 font-serif text-4xl font-black text-white md:text-5xl">
              <span className="text-white">
                Votre poêle fonctionne. Votre maison est chaude. Point.
              </span>
            </h2>
            <p className="mt-5 text-white/75">
              On s’occupe du reste : entretien, ramonage, dépannage et contrats annuels à Saint-Gaudens et 100 km autour.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`tel:${PHONE.replaceAll(" ", "")}`}>
                <Phone size={18} /> Appeler
              </ButtonLink>
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-bold text-white hover:bg-white/10">
                <Mail size={18} /> Envoyer un mail <ChevronRight size={18} />
              </a>
            </div>
          </div>

          <address className="not-italic rounded-3xl border border-white/10 bg-white/10 p-6 text-white/80">
            <p className="font-bold text-white">Tout Feu Tout Flamme</p>
            <p className="mt-3">M. Benjamin Plessis, EI</p>
            <p>2045 rue de la vieille serre</p>
            <p>31800 Saint-Gaudens</p>
            <p className="mt-3">SIREN : 752 185 934</p>
            <p className="mt-3">Tél : {PHONE}</p>
            <p>{EMAIL}</p>
          </address>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b132b]/80 px-5 py-8 text-sm text-white/55 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
        <p>© 2026 Tout Feu Tout Flamme — Entretien, ramonage et dépannage poêles à granulés.</p>
        <div className="flex flex-wrap gap-5">
          <a href="#/mention-legale" className="hover:text-[#4cc9f0]">Mentions légales</a>
          <a href="#/cgv" className="hover:text-[#4cc9f0]">CGV</a>
          <a href={SUBSCRIBE_URL} className="hover:text-[#4cc9f0]">Contrat d’entretien</a>
        </div>
      </div>
    </footer>
  );
}
function AppRouter() {
  const route = useRoute();
  const page = useMemo(() => {
    if (route.startsWith("/blog/")) {
      return <BlogPage slug={route.replace("/blog/", "")} />;
    }

    switch (route) {
      case "/tarifs":
        return <TarifsPage />;
      case "/blog":
        return <BlogPage />;
      case "/galerie":
        return <GaleriePage />;
      case "/avant-apres-entretien-poele-granules":
        return <AvantApresPage />;
      case "/partenariat":
        return <PartenariatPage />;
      case "/mention-legale":
        return <MentionsPage />;
      case "/cgv":
        return <CgvPage />;
      case "/contact":
        return <FinalCta />;
      default:
        return <HomePage />;
    }
  }, [route]);

  return <Layout>{page}</Layout>;
}

export default AppRouter;
