var linguJSON = {
  languages: [
    {
      lang_name: "PT",
      lang_code: "pt",
      url_pattern: "?",
    },
    {
      lang_name: "EN",
      lang_code: "en",
      url_pattern: "?",
    },
    {
      lang_name: "FR",
      lang_code: "fr",
      url_pattern: "?",
    },
    {
      lang_name: "ES",
      lang_code: "es",
      url_pattern: "?",
    },
  ],
  custom_lang_switcher_html:
    '<div id="langswitcher" class="notranslate"><a id="currlanglink" class="language-item" href="">[[linguCurrLang]]</a><div class="divider-languages"></div><a href="[[linguTargetLangHref1]]" class="targetlang language-item">[[linguTargetLang1]]</a><div class="divider-languages"></div><a href="[[linguTargetLangHref2]]" class="targetlang language-item">[[linguTargetLang2]]</a><div class="divider-languages"></div><a href="[[linguTargetLangHref3]]" class="targetlang language-item">[[linguTargetLang3]]</a></div>',
  custom_lang_switcher_container_id: "langlinks",

  translated_segments: [
    {
      source: "Institucional",
      target_en: "Institutional",
      target_fr: "Institutionnel",
      target_es: "Institucional",
      target_de: "Institutionell",
    },
    {
      source: "Serviços",
      target_en: "Services",
      target_fr: "Services",
      target_es: "Servicios",
      target_de: "Dienstleistungen",
    },
    {
      source: "Design, Protótipos e Pequenas Séries",
      target_en: "Design, Prototypes and Small Series",
      target_fr: "Design, Prototypes et Petites Séries",
      target_es: "Diseño, Prototipos y Pequeñas Series",
      target_de: "Design, Prototypen und Kleinserien",
    },
    {
      source: "Produção de Moldes e Validação",
      target_en: "Mold Production and Validation",
      target_fr: "Production de Moules et Validation",
      target_es: "Producción de Moldes y Validación",
      target_de: "Formenbau und Validierung",
    },
    {
      source: "Injeção de Termoplásticos e Assemblagem",
      target_en: "Thermoplastic Injection and Assembly",
      target_fr: "Injection de Thermoplastiques et Assemblage",
      target_es: "Inyección de Termoplásticos y Montaje",
      target_de: "Thermoplast-Spritzguss und Montage",
    },
    {
      source: "Industrias | Casos de Estudo",
      target_en: "Industries | Case Studies",
      target_fr: "Industries | Études de Cas",
      target_es: "Industrias | Casos de Estudio",
      target_de: "Branchen | Fallstudien",
    },
    {
      source: "Notícias",
      target_en: "News",
      target_fr: "Actualités",
      target_es: "Noticias",
      target_de: "Nachrichten",
    },
    {
      source: "Contactos",
      target_en: "Contacts",
      target_fr: "Contacts",
      target_es: "Contactos",
      target_de: "Kontakte",
    },
    {
      source: "home",
      target_en: "home",
      target_fr: "accueil",
      target_es: "inicio",
      target_de: "startseite",
    },

    //HOME

    {
      source:
        "Fundada em 1993, a <strong>TCC</strong> é uma empresa de produção de moldes de precisão em aço especializada na <strong>ELABORAÇÃO DE PROJETOS</strong>, <strong>FABRICO</strong> e <strong>CONTROLO DE QUALIDADE</strong> de moldes de injeção para a indústria de plásticos.",
      target_en:
        "Founded in 1993, <strong>TCC</strong> is a company specializing in the production of precision steel molds, specializing in <strong>PROJECT DEVELOPMENT</strong>, <strong>MANUFACTURING</strong>, and <strong>QUALITY CONTROL</strong> of injection molds for the plastics industry.",
      target_fr:
        "Fondée en 1993, <strong>TCC</strong> est une entreprise spécialisée dans la production de moules de précision en acier, spécialisée dans l'<strong>ÉLABORATION DE PROJETS</strong>, la <strong>FABRICATION</strong> et le <strong>CONTRÔLE DE QUALITÉ</strong> de moules d'injection pour l'industrie du plastique.",
      target_es:
        "Fundada en 1993, <strong>TCC</strong> es una empresa especializada en la producción de moldes de precisión en acero, especializada en la <strong>ELABORACIÓN DE PROYECTOS</strong>, <strong>FABRICACIÓN</strong> y <strong>CONTROL DE CALIDAD</strong> de moldes de inyección para la industria del plástico.",
      target_de:
        "Gegründet im Jahr 1993, <strong>TCC</strong> ist ein Unternehmen, das sich auf die Herstellung von Präzisionsstahlformen spezialisiert hat, spezialisiert auf die <strong>PROJEKTENTWICKLUNG</strong>, <strong>HERSTELLUNG</strong> und <strong>QUALITÄTSKONTROLLE</strong> von Spritzgussformen für die Kunststoffindustrie.",
    },
    {
      source:
        "Situada na Marinha Grande, um dos maiores centros industriais de moldes da Europa, a <strong>TCC</strong> orgulha-se de ter como referência clientes exigentes localizados em países tais como a Espanha, França, Bélgica, Holanda, Finlândia, Suécia, Dinamarca, Brasil e México.",
      target_en:
        "Located in Marinha Grande, one of the largest industrial mold centers in Europe, <strong>TCC</strong> prides itself on serving demanding clients located in countries such as Spain, France, Belgium, Netherlands, Finland, Sweden, Denmark, Brazil, and Mexico.",
      target_fr:
        "Située à Marinha Grande, l'un des plus grands centres industriels de moules en Europe, <strong>TCC</strong> est fière de compter parmi ses clients exigeants des pays tels que l'Espagne, la France, la Belgique, les Pays-Bas, la Finlande, la Suède, le Danemark, le Brésil et le Mexique.",
      target_es:
        "Ubicada en Marinha Grande, uno de los mayores centros industriales de moldes en Europa, <strong>TCC</strong> se enorgullece de contar con clientes exigentes ubicados en países como España, Francia, Bélgica, Países Bajos, Finlandia, Suecia, Dinamarca, Brasil y México.",
      target_de:
        "Gelegen in Marinha Grande, einem der größten industriellen Formenzentren Europas, ist <strong>TCC</strong> stolz darauf, anspruchsvolle Kunden in Ländern wie Spanien, Frankreich, Belgien, Niederlande, Finnland, Schweden, Dänemark, Brasilien und Mexiko zu haben.",
    },
    {
      source:
        "Graças à nossa experiência e amplo conhecimento da indústria dos moldes conjugado com a utilização de tecnologia de ponta, podemos fornecer moldes de alta qualidade, independentemente da sua complexidade, a um preço muito competitivo.",
      target_en:
        "Thanks to our experience and extensive knowledge of the mold industry combined with the use of cutting-edge technology, we can provide high-quality molds, regardless of their complexity, at a very competitive price.",
      target_fr:
        "Grâce à notre expérience et à notre connaissance approfondie de l'industrie des moules associée à l'utilisation de technologies de pointe, nous pouvons fournir des moules de haute qualité, quelle que soit leur complexité, à un prix très compétitif.",
      target_es:
        "Gracias a nuestra experiencia y amplio conocimiento de la industria de moldes combinado con el uso de tecnología de vanguardia, podemos proporcionar moldes de alta calidad, independientemente de su complejidad, a un precio muy competitivo.",
      target_de:
        "Dank unserer Erfahrung und umfangreichen Kenntnisse in der Formenindustrie in Verbindung mit dem Einsatz modernster Technologie können wir hochwertige Formen unabhängig von ihrer Komplexität zu einem sehr wettbewerbsfähigen Preis anbieten.",
    },
    {
      source:
        "Conscientes da agressividade do mercado e das necessidades dos nossos clientes, procuramos as melhores e mais otimizadas soluções tendo em vista a obtenção de prazos cada vez mais curtos.",
      target_en:
        "Aware of the market's aggressiveness and our clients' needs, we seek the best and most optimized solutions aiming at achieving increasingly shorter deadlines.",
      target_fr:
        "Conscients de l'agressivité du marché et des besoins de nos clients, nous recherchons les meilleures solutions optimisées visant à atteindre des délais de plus en plus courts.",
      target_es:
        "Conscientes de la agresividad del mercado y de las necesidades de nuestros clientes, buscamos las mejores soluciones optimizadas con el objetivo de lograr plazos cada vez más cortos.",
      target_de:
        "Bewusst über die Aggressivität des Marktes und die Bedürfnisse unserer Kunden suchen wir die besten und optimierten Lösungen, um immer kürzere Fristen zu erreichen.",
    },
    {
      source:
        "Na TCC, cuidamos do seu projeto desde a conceção até à produção final. Os nossos engenheiros trabalham para lhe oferecer rapidamente um protótipo e a primeira produção das suas peças.",
      target_en:
        "At TCC, we take care of your project from conception to final production. Our engineers work to quickly provide you with a prototype and the initial production of your parts.",
      target_fr:
        "Chez TCC, nous nous occupons de votre projet de la conception à la production finale. Nos ingénieurs travaillent pour vous fournir rapidement un prototype et la première production de vos pièces.",
      target_es:
        "En TCC, nos ocupamos de su proyecto desde la concepción hasta la producción final. Nuestros ingenieros trabajan para ofrecerle rápidamente un prototipo y la primera producción de sus piezas.",
      target_de:
        "Bei TCC kümmern wir uns um Ihr Projekt von der Konzeption bis zur endgültigen Produktion. Unsere Ingenieure arbeiten daran, Ihnen schnell einen Prototypen und die erste Produktion Ihrer Teile zur Verfügung zu stellen.",
    },
    {
      source: "Saber mais",
      target_en: "Learn more",
      target_fr: "En savoir plus",
      target_es: "Más información",
      target_de: "Mehr erfahren",
    },
    {
      source:
        "Trabalhamos em estreita colaboração com centros de testes que nos permitem ter uma grande eficiência e reduzir o tempo antes de enviar os moldes.",
      target_en:
        "We work closely with testing centers that allow us to achieve high efficiency and reduce lead time before sending out the molds.",
      target_fr:
        "Nous travaillons en étroite collaboration avec des centres de tests qui nous permettent d'atteindre une grande efficacité et de réduire le délai avant l'envoi des moules.",
      target_es:
        "Trabajamos en estrecha colaboración con centros de pruebas que nos permiten lograr una gran eficiencia y reducir el tiempo antes de enviar los moldes.",
      target_de:
        "Wir arbeiten eng mit Testzentren zusammen, die es uns ermöglichen, hohe Effizienz zu erzielen und die Vorlaufzeit vor dem Versand der Formen zu reduzieren.",
    },
    {
      source:
        "Dotados de certificação ISO 6 e de uma sala limpa, podemos testar moldes destinados à indústria farmacêutica ou médica. Dispomos ainda de duas fresadoras CNC novas, equipadas com software de medição (protocolo de medição BLUM) que permite inspecionar qualquer peça, permitindo ganhos significativos de produtividade e fiabilidade.",
      target_en:
        "Equipped with ISO 6 certification and a clean room, we can test molds intended for the pharmaceutical or medical industry. We also have two new CNC milling machines equipped with measurement software (BLUM measurement protocol) that allows inspection of any part, resulting in significant gains in productivity and reliability.",
      target_fr:
        "Dotés de la certification ISO 6 et d'une salle blanche, nous pouvons tester des moules destinés à l'industrie pharmaceutique ou médicale. Nous disposons également de deux nouvelles fraiseuses CNC équipées d'un logiciel de mesure (protocole de mesure BLUM) qui permet l'inspection de toute pièce, entraînant des gains significatifs de productivité et de fiabilité.",
      target_es:
        "Dotados de certificación ISO 6 y de una sala limpia, podemos probar moldes destinados a la industria farmacéutica o médica. También contamos con dos fresadoras CNC nuevas equipadas con software de medición (protocolo de medición BLUM) que permite inspeccionar cualquier pieza, lo que proporciona ganancias significativas en productividad y fiabilidad.",
      target_de:
        "Ausgestattet mit ISO 6 Zertifizierung und einem Reinraum können wir Formen für die pharmazeutische oder medizinische Industrie testen. Wir verfügen außerdem über zwei neue CNC-Fräsmaschinen, ausgestattet mit Messsoftware (BLUM Messprotokoll), die die Inspektion jedes Teils ermöglicht und so signifikante Produktivitäts- und Zuverlässigkeitsgewinne bringt.",
    },
    {
      source: "Aeronáutica",
      target_en: "Aeronautics",
      target_fr: "Aéronautique",
      target_es: "Aeronáutica",
      target_de: "Luftfahrt",
    },
    {
      source: "Área Automóvel",
      target_en: "Automotive Sector",
      target_fr: "Domaine Automobile",
      target_es: "Sector Automotriz",
      target_de: "Automobilbereich",
    },
    {
      source: "Área Médica",
      target_en: "Medical Sector",
      target_fr: "Domaine Médical",
      target_es: "Sector Médico",
      target_de: "Medizinbereich",
    },
    {
      source: "Eletro-eletrónica",
      target_en: "Electroelectronics",
      target_fr: "Électroélectronique",
      target_es: "Electroelectrónica",
      target_de: "Elektroelektronik",
    },
    {
      source: "Área Alimentar",
      target_en: "Food Sector",
      target_fr: "Domaine Alimentaire",
      target_es: "Sector Alimentario",
      target_de: "Lebensmittelbereich",
    },
    {
      source: "Houseware",
      target_en: "Houseware",
      target_fr: "Articles ménagers",
      target_es: "Artículos para el hogar",
      target_de: "Haushaltswaren",
    },
    {
      source: "Agricultura e Indústria",
      target_en: "Agriculture and Industry",
      target_fr: "Agriculture et Industrie",
      target_es: "Agricultura e Industria",
      target_de: "Landwirtschaft und Industrie",
    },
    {
      source: "Packaging",
      target_en: "Packaging",
      target_fr: "Emballage",
      target_es: "Embalaje",
      target_de: "Verpackung",
    },
    {
      source: "Indústrias que servimos",
      target_en: "Industries we serve",
      target_fr: "Industries que nous servons",
      target_es: "Industrias que servimos",
      target_de: "Branchen, die wir bedienen",
    },
    {
      source: "Feedback de clientes",
      target_en: "Customer feedback",
      target_fr: "Feedback des clients",
      target_es: "Opiniones de clientes",
      target_de: "Kundenfeedback",
    },

    //INSTITUCIONAL
    {
      source:
        "Na vanguarda da precisão, a moldar o futuro da indústria com <strong>excelência</strong>.",
      target_en:
        "At the forefront of precision, shaping the future of the industry with <strong>excellence</strong>.",
      target_fr:
        "À la pointe de la précision, façonnant l'avenir de l'industrie avec <strong>excellence</strong>.",
      target_es:
        "En la vanguardia de la precisión, dando forma al futuro de la industria con <strong>excelencia</strong>.",
      target_de:
        "An der Spitze der Präzision, formt die Zukunft der Industrie mit <strong>Exzellenz</strong>.",
    },
    {
      source: "A nossa equipa",
      target_en: "Our team",
      target_fr: "Notre équipe",
      target_es: "Nuestro equipo",
      target_de: "Unser Team",
    },
    {
      source:
        "Na <strong>TCC</strong> encontra uma equipa técnica composta por projetistas experientes, que apoiados por sistemas CAD/CAM desenvolvem os projetos dos moldes, sendo também responsáveis pelo acompanhamento de todas as etapas de fabricação.",
      target_en:
        "At <strong>TCC</strong>, you will find a technical team composed of experienced designers who, supported by CAD/CAM systems, develop mold projects and are also responsible for overseeing all manufacturing stages.",
      target_fr:
        "À la <strong>TCC</strong>, vous trouverez une équipe technique composée de concepteurs expérimentés qui, soutenus par des systèmes CAD/CAM, développent des projets de moules et sont également responsables du suivi de toutes les étapes de fabrication.",
      target_es:
        "En <strong>TCC</strong> encontrará un equipo técnico compuesto por diseñadores experimentados que, apoyados por sistemas CAD/CAM, desarrollan proyectos de moldes y también son responsables del seguimiento de todas las etapas de fabricación.",
      target_de:
        "Bei <strong>TCC</strong> finden Sie ein technisches Team aus erfahrenen Designern, die unterstützt von CAD/CAM-Systemen Formprojekte entwickeln und auch für die Überwachung aller Fertigungsphasen verantwortlich sind.",
    },
    {
      source:
        "A nossa excelente organização permite-nos gerir projetos de grande envergadura sem descurar a qualidade, respeitando imperativamente os prazos de entrega.",
      target_en:
        "Our excellent organization allows us to manage large-scale projects without neglecting quality, strictly respecting delivery deadlines.",
      target_fr:
        "Notre excellente organisation nous permet de gérer des projets de grande envergure sans négliger la qualité, en respectant strictement les délais de livraison.",
      target_es:
        "Nuestra excelente organización nos permite gestionar proyectos de gran envergadura sin descuidar la calidad, respetando estrictamente los plazos de entrega.",
      target_de:
        "Durch unsere ausgezeichnete Organisation können wir Großprojekte verwalten, ohne die Qualität zu vernachlässigen, und dabei die Lieferfristen strikt einhalten.",
    },
    {
      source:
        "Os nossos comerciais mantêm um contacto estreito com os nossos clientes desde o primeiro contacto, garantindo um acompanhamento eficiente de todo o processo de fabrico do molde e fornecendo um serviço de pós-venda de qualidade.",
      target_en:
        "Our sales representatives maintain close contact with our clients from the first interaction, ensuring efficient monitoring of the entire mold manufacturing process and providing quality after-sales service.",
      target_fr:
        "Nos commerciaux maintiennent un contact étroit avec nos clients dès le premier contact, assurant un suivi efficace de tout le processus de fabrication du moule et fournissant un service après-vente de qualité.",
      target_es:
        "Nuestros comerciales mantienen un contacto estrecho con nuestros clientes desde el primer contacto, garantizando un seguimiento eficiente de todo el proceso de fabricación del molde y proporcionando un servicio postventa de calidad.",
      target_de:
        "Unsere Vertriebsmitarbeiter pflegen engen Kontakt zu unseren Kunden von der ersten Kontaktaufnahme an, um eine effiziente Überwachung des gesamten Formherstellungsprozesses zu gewährleisten und einen qualitativ hochwertigen After-Sales-Service zu bieten.",
    },
    {
      source: "Abraçar desafios com inovação, precisão e espírito de equipa:",
      target_en:
        "Embracing challenges with innovation, precision, and teamwork:",
      target_fr:
        "Relever les défis avec innovation, précision et esprit d'équipe :",
      target_es:
        "Afrontar desafíos con innovación, precisión y espíritu de equipo:",
      target_de:
        "Herausforderungen mit Innovation, Präzision und Teamgeist angehen:",
    },
    {
      source:
        "a alma da nossa <strong>cultura</strong>, a força do nosso <strong>mindset</strong>.",
      target_en:
        "the soul of our <strong>culture</strong>, the strength of our <strong>mindset</strong>.",
      target_fr:
        "l'âme de notre <strong>culture</strong>, la force de notre <strong>mindset</strong>.",
      target_es:
        "el alma de nuestra <strong>cultura</strong>, la fuerza de nuestro <strong>mindset</strong>.",
      target_de:
        "die Seele unserer <strong>Kultur</strong>, die Stärke unseres <strong>Mindsets</strong>.",
    },
    {
      source:
        "A TCC destaca-se pela sua abordagem inovadora e orientada para a excelência, destacando-se no mercado pela precisão dos seus produtos e pelo forte espírito de equipa que impulsiona cada projeto.",
      target_en:
        "TCC stands out for its innovative and excellence-oriented approach, distinguishing itself in the market for the precision of its products and the strong teamwork spirit that drives each project.",
      target_fr:
        "TCC se distingue par son approche innovante et axée sur l'excellence, se distinguant sur le marché par la précision de ses produits et l'esprit d'équipe fort qui anime chaque projet.",
      target_es:
        "TCC se destaca por su enfoque innovador y orientado a la excelencia, destacándose en el mercado por la precisión de sus productos y por el fuerte espíritu de equipo que impulsa cada proyecto.",
      target_de:
        "TCC zeichnet sich durch ihren innovativen und exzellenzorientierten Ansatz aus, der sich im Markt durch die Präzision ihrer Produkte und den starken Teamgeist auszeichnet, der jedes Projekt antreibt.",
    },
    {
      source:
        "Com um compromisso inabalável com a qualidade e um foco contínuo na satisfação do cliente, a TCC é a escolha ideal para aqueles que procuram soluções de moldagem de alto nível, onde a tradição de excelência encontra-se com a vanguarda da tecnologia.",
      target_en:
        "With an unwavering commitment to quality and a continuous focus on customer satisfaction, TCC is the ideal choice for those seeking high-level molding solutions, where the tradition of excellence meets cutting-edge technology.",
      target_fr:
        "Avec un engagement inébranlable envers la qualité et une attention continue à la satisfaction du client, TCC est le choix idéal pour ceux qui recherchent des solutions de moulage de haut niveau, où la tradition d'excellence rencontre la technologie de pointe.",
      target_es:
        "Con un compromiso inquebrantable con la calidad y un enfoque continuo en la satisfacción del cliente, TCC es la opción ideal para aquellos que buscan soluciones de moldeo de alto nivel, donde la tradición de excelencia se encuentra con la vanguardia de la tecnología.",
      target_de:
        "Mit einem unerschütterlichen Qualitätsanspruch und einem kontinuierlichen Fokus auf Kundenzufriedenheit ist TCC die ideale Wahl für diejenigen, die hochwertige Formlösungen suchen, wo Tradition auf Exzellenz trifft und Spitzentechnologie.",
    },
    {
      source: "Inovação e Tecnologia",
      target_en: "Innovation and Technology",
      target_fr: "Innovation et Technologie",
      target_es: "Innovación y Tecnología",
      target_de: "Innovation und Technologie",
    },
    {
      source:
        "A TCC valoriza a inovação e a adoção de tecnologias avançadas para melhorar a qualidade e eficiência dos produtos.",
      target_en:
        "TCC values innovation and the adoption of advanced technologies to improve the quality and efficiency of products.",
      target_fr:
        "TCC valorise l'innovation et l'adoption de technologies avancées pour améliorer la qualité et l'efficacité des produits.",
      target_es:
        "TCC valora la innovación y la adopción de tecnologías avanzadas para mejorar la calidad y eficiencia de los productos.",
      target_de:
        "TCC schätzt Innovation und die Nutzung fortschrittlicher Technologien zur Verbesserung der Qualität und Effizienz von Produkten.",
    },
    {
      source: "Trabalho de equipa e Colaboração",
      target_en: "Teamwork and Collaboration",
      target_fr: "Travail d'équipe et Collaboration",
      target_es: "Trabajo en equipo y Colaboración",
      target_de: "Teamarbeit und Zusammenarbeit",
    },
    {
      source:
        "Devido à natureza complexa dos projetos de fabricação de moldes, a TCC valoriza o trabalho em equipa e a colaboração entre diferentes departamentos e especialidades.",
      target_en:
        "Due to the complex nature of mold manufacturing projects, TCC values teamwork and collaboration among different departments and specialties.",
      target_fr:
        "En raison de la nature complexe des projets de fabrication de moules, TCC valorise le travail d'équipe et la collaboration entre différents départements et spécialités.",
      target_es:
        "Debido a la naturaleza compleja de los proyectos de fabricación de moldes, TCC valora el trabajo en equipo y la colaboración entre diferentes departamentos y especialidades.",
      target_de:
        "Aufgrund der komplexen Natur von Formenbau-Projekten schätzt TCC Teamarbeit und Zusammenarbeit zwischen verschiedenen Abteilungen und Fachrichtungen.",
    },
    {
      source: "Compromisso com o cliente",
      target_en: "Commitment to Customer",
      target_fr: "Engagement envers le client",
      target_es: "Compromiso con el cliente",
      target_de: "Kundenzufriedenheit",
    },
    {
      source:
        "A satisfação do cliente é essencial para nós. Na TCC procuramos entender e atender às necessidades específicas dos clientes de forma eficaz.",
      target_en:
        "Customer satisfaction is essential to us. At TCC, we strive to understand and meet the specific needs of our customers effectively.",
      target_fr:
        "La satisfaction du client est essentielle pour nous. À la TCC, nous nous efforçons de comprendre et de répondre efficacement aux besoins spécifiques de nos clients.",
      target_es:
        "La satisfacción del cliente es esencial para nosotros. En TCC, buscamos entender y satisfacer las necesidades específicas de nuestros clientes de manera efectiva.",
      target_de:
        "Kundenzufriedenheit steht bei uns an erster Stelle. Bei TCC bemühen wir uns, die spezifischen Bedürfnisse unserer Kunden effektiv zu verstehen und zu erfüllen.",
    },
    {
      source: "Precisão e Qualidade",
      target_en: "Precision and Quality",
      target_fr: "Précision et Qualité",
      target_es: "Precisión y Calidad",
      target_de: "Präzision und Qualität",
    },
    {
      source:
        "A fabricação de moldes requer altos padrões de precisão e qualidade. Portanto, a cultura da TCC enfatiza o compromisso com a excelência e a busca pela perfeição em cada etapa do processo de produção.",
      target_en:
        "Mold manufacturing requires high standards of precision and quality. Therefore, TCC's culture emphasizes a commitment to excellence and the pursuit of perfection at every stage of the production process.",
      target_fr:
        "La fabrication de moules exige des normes élevées de précision et de qualité. Par conséquent, la culture de TCC met l'accent sur l'engagement envers l'excellence et la recherche de la perfection à chaque étape du processus de production.",
      target_es:
        "La fabricación de moldes requiere altos estándares de precisión y calidad. Por lo tanto, la cultura de TCC enfatiza el compromiso con la excelencia y la búsqueda de la perfección en cada etapa del proceso de producción.",
      target_de:
        "Die Herstellung von Formen erfordert hohe Standards an Präzision und Qualität. Daher betont die Kultur von TCC ein Engagement für Exzellenz und die Verfolgung der Perfektion in jeder Phase des Produktionsprozesses.",
    },
    {
      source: "Adaptação e Agilidade",
      target_en: "Adaptation and Agility",
      target_fr: "Adaptation et Agilité",
      target_es: "Adaptación y Agilidad",
      target_de: "Anpassungsfähigkeit und Agilität",
    },
    {
      source:
        "O mercado de fabricação está em constante evolução, com novas demandas e tecnologias emergentes. Portanto, a TCC adapta-se rapidamente às mudanças e responde de forma ágil às necessidades dos seus clientes.",
      target_en:
        "The manufacturing market is constantly evolving, with new demands and emerging technologies. Therefore, TCC adapts quickly to changes and responds agilely to the needs of its customers.",
      target_fr:
        "Le marché de la fabrication évolue constamment, avec de nouvelles demandes et technologies émergentes. Par conséquent, TCC s'adapte rapidement aux changements et répond de manière agile aux besoins de ses clients.",
      target_es:
        "El mercado de fabricación está en constante evolución, con nuevas demandas y tecnologías emergentes. Por lo tanto, TCC se adapta rápidamente a los cambios y responde ágilmente a las necesidades de sus clientes.",
      target_de:
        "Der Fertigungsmarkt entwickelt sich ständig weiter, mit neuen Anforderungen und aufkommenden Technologien. Daher passt sich TCC schnell an Veränderungen an und reagiert agil auf die Bedürfnisse seiner Kunden.",
    },
    {
      source: "Desenvolvimento profissional",
      target_en: "Professional Development",
      target_fr: "Développement professionnel",
      target_es: "Desarrollo profesional",
      target_de: "Berufliche Entwicklung",
    },
    {
      source:
        "A TCC investe no desenvolvimento e crescimento profissional dos seus funcionários, oferece oportunidades de aprendizagem e desenvolvimento de habilidades para manter a sua equipa atualizada com as mais recentes tecnologias e práticas da indústria.",
      target_en:
        "TCC invests in the professional development and growth of its employees, providing learning opportunities and skill development to keep its team updated with the latest industry technologies and practices.",
      target_fr:
        "TCC investit dans le développement professionnel et la croissance de ses employés, offrant des opportunités d'apprentissage et de développement des compétences pour maintenir son équipe à jour avec les dernières technologies et pratiques de l'industrie.",
      target_es:
        "TCC invierte en el desarrollo y crecimiento profesional de sus empleados, proporcionando oportunidades de aprendizaje y desarrollo de habilidades para mantener a su equipo actualizado con las últimas tecnologías y prácticas de la industria.",
      target_de:
        "TCC investiert in die berufliche Entwicklung und das Wachstum seiner Mitarbeiter, indem es Lernmöglichkeiten und die Entwicklung von Fähigkeiten bietet, um sein Team mit den neuesten Technologien und Praktiken der Branche auf dem Laufenden zu halten.",
    },

    // Design, Protótipos e Pequenas Séries

    {
      source: "Design e Engenharia de novos produtos",
      target_en: "Design and Engineering of new products",
      target_fr: "Conception et ingénierie de nouveaux produits",
      target_es: "Diseño e Ingeniería de nuevos productos",
      target_de: "Design und Ingenieurwesen neuer Produkte",
    },
    {
      source:
        "Podemos criar o seu molde de A a Z. A nossa equipa pode oferecer-lhe primeiro um design que corresponda às suas expectativas, combinando tecnologia e técnica.",
      target_en:
        "We can create your mold from A to Z. Our team can first offer you a design that meets your expectations, combining technology and technique.",
      target_fr:
        "Nous pouvons créer votre moule de A à Z. Notre équipe peut d'abord vous proposer un design qui répond à vos attentes, en combinant technologie et technique.",
      target_es:
        "Podemos crear su molde de la A a la Z. Nuestro equipo puede ofrecerle primero un diseño que cumpla con sus expectativas, combinando tecnología y técnica.",
      target_de:
        "Wir können Ihre Form von A bis Z erstellen. Unser Team kann Ihnen zuerst ein Design anbieten, das Ihren Erwartungen entspricht und Technologie und Technik kombiniert.",
    },
    {
      source: "1 - Research",
      target_en: "1 - Research",
      target_fr: "1 - Recherche",
      target_es: "1 - Investigación",
      target_de: "1 - Forschung",
    },
    {
      source: "2 – Conceito de design",
      target_en: "2 - Design Concept",
      target_fr: "2 - Concept de design",
      target_es: "2 - Concepto de diseño",
      target_de: "2 - Designkonzept",
    },
    {
      source: "3 – Desenvolvimento do projeto",
      target_en: "3 - Project Development",
      target_fr: "3 - Développement du projet",
      target_es: "3 - Desarrollo del proyecto",
      target_de: "3 - Projektentwicklung",
    },
    {
      source: "4 – Engenharia",
      target_en: "4 - Engineering",
      target_fr: "4 - Ingénierie",
      target_es: "4 - Ingeniería",
      target_de: "4 - Ingenieurwesen",
    },
    {
      source: "5 – Prototipagem",
      target_en: "5 - Prototyping",
      target_fr: "5 - Prototypage",
      target_es: "5 - Prototipado",
      target_de: "5 - Prototypenbau",
    },
    {
      source: "6 – Pequenas séries",
      target_en: "6 - Small Series",
      target_fr: "6 - Petites séries",
      target_es: "6 - Pequeñas series",
      target_de: "6 - Kleine Serien",
    },
    {
      source: "Processo de Desenvolvimento de um novo produto",
      target_en: "New product development process",
      target_fr: "Processus de développement d'un nouveau produit",
      target_es: "Proceso de desarrollo de un nuevo producto",
      target_de: "Entwicklungsprozess eines neuen Produkts",
    },
    {
      source: "Prototipagem e Produção Rápida",
      target_en: "Prototyping and Rapid Production",
      target_fr: "Prototypage et Production Rapide",
      target_es: "Prototipado y Producción Rápida",
      target_de: "Prototypenbau und Schnellproduktion",
    },
    {
      source:
        "Em seguida, criamos um protótipo do molde para verificar com o nosso cliente se tudo está como ele imaginou. Ao trabalharmos em estreita colaboração com os nossos clientes, asseguramos o seu envolvimento ativo em todas as fases, garantindo resultados mais rápidos e rigorosamente alinhados com os objectivos do projeto.",
      target_en:
        "Next, we create a mold prototype to verify with our client that everything is as they envisioned. By working closely with our clients, we ensure their active involvement in all phases, guaranteeing faster results that are strictly aligned with the project objectives.",
      target_fr:
        "Ensuite, nous créons un prototype de moule pour vérifier avec notre client que tout est conforme à ce qu'il avait imaginé. En travaillant en étroite collaboration avec nos clients, nous assurons leur implication active à toutes les étapes, garantissant des résultats plus rapides et rigoureusement alignés sur les objectifs du projet.",
      target_es:
        "A continuación, creamos un prototipo del molde para verificar con nuestro cliente que todo está como él imaginó. Al trabajar en estrecha colaboración con nuestros clientes, aseguramos su participación activa en todas las fases, garantizando resultados más rápidos y estrictamente alineados con los objetivos del proyecto.",
      target_de:
        "Als nächstes erstellen wir einen Formprototyp, um mit unserem Kunden zu überprüfen, ob alles so ist, wie er es sich vorgestellt hat. Durch die enge Zusammenarbeit mit unseren Kunden stellen wir sicher, dass sie in allen Phasen aktiv beteiligt sind und schnellere Ergebnisse erzielen, die streng mit den Projektzielen übereinstimmen.",
    },
    {
      source:
        "Produzimos as suas peças em pequenas e médias séries para garantir uma versão final perfeita.",
      target_en:
        "We produce your parts in small and medium series to ensure a perfect final version.",
      target_fr:
        "Nous produisons vos pièces en petites et moyennes séries pour garantir une version finale parfaite.",
      target_es:
        "Producimos sus piezas en series pequeñas y medianas para garantizar una versión final perfecta.",
      target_de:
        "Wir fertigen Ihre Teile in kleinen und mittleren Serien, um eine perfekte Endversion zu gewährleisten.",
    },
    {
      source: "Prototipagem Rápida",
      target_en: "Rapid Prototyping",
      target_fr: "Prototypage Rapide",
      target_es: "Prototipado Rápido",
      target_de: "Schneller Prototypenbau",
    },
    {
      source:
        "A prototipagem testa e verifica rigorosamente o design do produto, garantindo uma estética, ergonomia e funcionalidade irrepreensíveis.",
      target_en:
        "Prototyping rigorously tests and verifies the product design, ensuring impeccable aesthetics, ergonomics, and functionality.",
      target_fr:
        "Le prototypage teste et vérifie rigoureusement le design du produit, garantissant une esthétique, une ergonomie et une fonctionnalité irréprochables.",
      target_es:
        "El prototipado prueba y verifica rigurosamente el diseño del producto, asegurando una estética, ergonomía y funcionalidad impecables.",
      target_de:
        "Das Prototyping testet und überprüft das Produktdesign gründlich und sorgt für einwandfreie Ästhetik, Ergonomie und Funktionalität.",
    },
    {
      source:
        "Este processo eficiente ajuda a identificar as necessidades de melhoria e a corrigi-las num curto espaço de tempo para reduzir o prazo de entrega.",
      target_en:
        "This efficient process helps identify improvement needs and correct them in a short time to reduce the delivery time.",
      target_fr:
        "Ce processus efficace aide à identifier les besoins d'amélioration et à les corriger en peu de temps afin de réduire le délai de livraison.",
      target_es:
        "Este proceso eficiente ayuda a identificar las necesidades de mejora y a corregirlas en un corto período de tiempo para reducir el plazo de entrega.",
      target_de:
        "Dieser effiziente Prozess hilft, Verbesserungsbedarfe zu erkennen und sie in kurzer Zeit zu beheben, um die Lieferzeit zu verkürzen.",
    },
    {
      source: "Produção Rápida",
      target_en: "Rapid Production",
      target_fr: "Production Rapide",
      target_es: "Producción Rápida",
      target_de: "Schnelle Produktion",
    },
    {
      source:
        "O fabrico de baixo volume é adequado para empresas que não necessitam de grandes quantidades. Garante uma entrega rápida e uma boa relação qualidade/preço. Esta etapa económica ajuda a evitar problemas futuros e valida todos os aspectos do produto final.",
      target_en:
        "Low-volume manufacturing is suitable for companies that do not require large quantities. It ensures fast delivery and a good quality/price ratio. This cost-effective step helps avoid future problems and validates all aspects of the final product.",
      target_fr:
        "La fabrication à faible volume convient aux entreprises qui n'ont pas besoin de grandes quantités. Elle garantit une livraison rapide et un bon rapport qualité/prix. Cette étape économique aide à éviter les problèmes futurs et valide tous les aspects du produit final.",
      target_es:
        "La fabricación de bajo volumen es adecuada para empresas que no necesitan grandes cantidades. Garantiza una entrega rápida y una buena relación calidad/precio. Este paso económico ayuda a evitar problemas futuros y valida todos los aspectos del producto final.",
      target_de:
        "Die Herstellung in geringen Stückzahlen ist für Unternehmen geeignet, die keine großen Mengen benötigen. Sie gewährleistet eine schnelle Lieferung und ein gutes Preis-Leistungs-Verhältnis. Dieser kosteneffiziente Schritt hilft, zukünftige Probleme zu vermeiden und validiert alle Aspekte des Endprodukts.",
    },

    // Produção de Moldes e Validação

    {
      source: "Moldes de Alta Precisão",
      target_en: "High Precision Molds",
      target_fr: "Moules de haute précision",
      target_es: "Moldes de alta precisión",
      target_de: "Präzisionsformen",
    },
    {
      source:
        "Operando em condições ambientais controladas, dispomos de tecnologias que nos permitem maquinar produtos ultra-precisos, quer se trate de moldes para a indústria médica ou automóvel, etc.",
      target_en:
        "Operating under controlled environmental conditions, we have technologies that allow us to machine ultra-precise products, whether it's molds for the medical or automotive industry, etc.",
      target_fr:
        "Opérant dans des conditions environnementales contrôlées, nous disposons de technologies nous permettant d'usiner des produits ultra-précis, que ce soit des moules pour l'industrie médicale ou automobile, etc.",
      target_es:
        "Operando en condiciones ambientales controladas, contamos con tecnologías que nos permiten mecanizar productos ultra precisos, ya sean moldes para la industria médica o automotriz, etc.",
      target_de:
        "Unter kontrollierten Umweltbedingungen arbeitend verfügen wir über Technologien, die es uns ermöglichen, ultragenaue Produkte zu bearbeiten, sei es für die medizinische oder Automobilindustrie usw.",
    },
    {
      source: "1 - Orçamento",
      target_en: "1 - Budgeting",
      target_fr: "1 - Budget",
      target_es: "1 - Presupuesto",
      target_de: "1 - Budgetierung",
    },
    {
      source: "2 – Conceção e Engenharia",
      target_en: "2 - Design and Engineering",
      target_fr: "2 - Conception et ingénierie",
      target_es: "2 - Diseño e Ingeniería",
      target_de: "2 - Design und Engineering",
    },
    {
      source: "3 – Moldes Protótipo",
      target_en: "3 - Prototype Molds",
      target_fr: "3 - Moules Prototype",
      target_es: "3 - Moldes Prototipo",
      target_de: "3 - Prototypenformen",
    },
    {
      source: "4 – Produção de Moldes finais",
      target_en: "4 - Final Mold Production",
      target_fr: "4 - Production de moules finaux",
      target_es: "4 - Producción de Moldes Finales",
      target_de: "4 - Endformenproduktion",
    },
    {
      source: "5 – Teste e Validação",
      target_en: "5 - Testing and Validation",
      target_fr: "5 - Test et validation",
      target_es: "5 - Prueba y Validación",
      target_de: "5 - Testen und Validieren",
    },
    {
      source: "Processo de Fabrico de Moldes",
      target_en: "Mold Manufacturing Process",
      target_fr: "Processus de Fabrication de Moules",
      target_es: "Proceso de Fabricación de Moldes",
      target_de: "Formenherstellungsprozess",
    },
    {
      source: "Instalações e Tecnologia dedicadas",
      target_en: "Dedicated Facilities and Technology",
      target_fr: "Installations et technologie dédiées",
      target_es: "Instalaciones y tecnología dedicadas",
      target_de: "Dedizierte Einrichtungen und Technologie",
    },

    {
      source: "Injeção 2K",
      target_en: "Two-component Injection Molding",
      target_es: "Moldeo por inyección de dos componentes",
      target_de: "Zweikomponenten-Spritzguss",
    },
    {
      source: "Incertos Metálicos no Molde",
      target_en: "Metal Inserts in Mold",
      target_es: "Insertos metálicos en el molde",
      target_de: "Metalleinsätze im Werkzeug",
    },
    {
      source: "Engenharia inversa",
      target_en: "Reverse Engineering",
      target_es: "Ingeniería inversa",
      target_de: "Reverse Engineering",
    },
    {
      source: "Injeção IMA",
      target_en: "In-Mold Assembly",
      target_es: "Ensamblaje en molde",
      target_de: "In-Mould Assembly",
    },
    {
      source: "Injeção com assemblagem",
      target_en: "Injection with Assembly",
      target_es: "Inyección con ensamblaje",
      target_de: "Spritzguss mit Montage",
    },
    {
      source: "Sobremoldagem Gas Assisted Injection",
      target_en: "Gas Assisted Injection Molding",
      target_es: "Moldeo por inyección asistida por gas",
      target_de: "Gasunterstützter Spritzguss",
    },
    {
      source: "Instalações e Tecnologia dedicadas",
      target_en: "Dedicated Facilities and Technology",
      target_es: "Instalaciones y Tecnología dedicadas",
      target_de: "Dedizierte Einrichtungen und Technologie",
    },
    {
      source:
        "Ferramentas e instalações dedicadas permitem-nos ter experiência em muitas áreas e melhorar a eficiência da nossa produção. Oferecemos soluções eficazes e personalizadas para cada um dos nossos clientes.",
      target_en:
        "Dedicated tools and facilities enable us to gain expertise in various areas and enhance the efficiency of our production. We provide effective and customized solutions for each of our clients.",
      target_es:
        "Las herramientas y las instalaciones dedicadas nos permiten adquirir experiencia en diversas áreas y mejorar la eficiencia de nuestra producción. Ofrecemos soluciones efectivas y personalizadas para cada uno de nuestros clientes.",
      target_de:
        "Dedizierte Werkzeuge und Einrichtungen ermöglichen es uns, Expertise in verschiedenen Bereichen zu erlangen und die Effizienz unserer Produktion zu steigern. Wir bieten effektive und maßgeschneiderte Lösungen für jeden unserer Kunden.",
    },

    // Injeção de Termoplásticos e Assemblagem

    {
      source: "Sala Limpa",
      target_en: "Clean Room",
      target_es: "Sala Limpia",
      target_de: "Reinraum",
    },
    {
      source: "ISO 6",
      target_en: "ISO Class 6",
      target_es: "Clase ISO 6",
      target_de: "ISO Klasse 6",
    },
    {
      source:
        "A nossa sala limpa permite a realização de ensaios num ambiente com muito poucas partículas. Ao atualizar as nossas capacidades com uma sala limpa ISO 6, o nosso objetivo é servir a indústria médica e o fabrico de dispositivos médicos numa base mais consistente e visível.",
      target_en:
        "Our clean room allows testing in an environment with very few particles. By upgrading our capabilities with an ISO Class 6 clean room, our goal is to better serve the medical industry and medical device manufacturing on a more consistent and visible basis.",
      target_es:
        "Nuestra sala limpia permite realizar pruebas en un ambiente con muy pocas partículas. Al actualizar nuestras capacidades con una sala limpia Clase ISO 6, nuestro objetivo es servir mejor a la industria médica y a la fabricación de dispositivos médicos de manera más consistente y visible.",
      target_de:
        "Unser Reinraum ermöglicht Tests in einer Umgebung mit sehr wenigen Partikeln. Durch die Aktualisierung unserer Kapazitäten mit einem Reinraum der ISO Klasse 6 ist unser Ziel, die medizinische Industrie und die Herstellung von medizinischen Geräten auf eine konsistentere und sichtbarere Weise zu bedienen.",
    },
    {
      source: "Normas de Referência",
      target_en: "Reference Standards",
      target_es: "Normas de referencia",
      target_de: "Referenznormen",
    },
    {
      source: "ISO 9001 (em implementação)",
      target_en: "ISO 9001 (under implementation)",
      target_es: "ISO 9001 (en implementación)",
      target_de: "ISO 9001 (in Umsetzung)",
    },
    {
      source: "Tecnologias de Injeção de Termoplásticos",
      target_en: "Thermoplastic Injection Molding Technologies",
      target_es: "Tecnologías de Moldeo por Inyección de Termoplásticos",
      target_de:
        "Technologien für die Spritzgussverarbeitung von Thermoplasten",
    },
    {
      source: "- Injeção 2K",
      target_en: "- Two-shot Injection Molding",
      target_es: "- Moldeo por inyección 2K",
      target_de: "- Zweikomponenten-Spritzguss",
    },
    {
      source: "- Incertos Metálicos no Molde",
      target_en: "- Metal Inserts in Mold",
      target_es: "- Insertos metálicos en molde",
      target_de: "- Metalleinsätze im Formwerkzeug",
    },
    {
      source: "- Engenharia inversa",
      target_en: "- Reverse Engineering",
      target_es: "- Ingeniería inversa",
      target_de: "- Reverse Engineering",
    },
    {
      source: "- Injeção IMA",
      target_en: "- In-Mold Assembly",
      target_es: "- Ensamblaje en molde",
      target_de: "- In-Mould Assembly",
    },
    {
      source: "- Injeção com assemblagem",
      target_en: "- Injection with Assembly",
      target_es: "- Inyección con ensamblaje",
      target_de: "- Spritzguss mit Montage",
    },
    {
      source: "- Sobremoldagem Gas Assisted Injection",
      target_en: "- Gas Assisted Injection Molding",
      target_es: "- Moldeo por inyección asistida con gas",
      target_de: "- Gasunterstützter Spritzguss",
    },
    {
      source: "As nossas instalações e Equipamentos",
      target_en: "Our Facilities and Equipment",
      target_es: "Nuestras instalaciones y equipos",
      target_de: "Unsere Einrichtungen und Ausrüstungen",
    },
    {
      source:
        "A nossa oficina está equipada com 6 centros de maquinagem de fresagem CNC, 2 centros de maquinagem EDM de afundamento, 1 centro de maquinagem EDM de fio e máquinas de perfuração e retificação. Estas ferramentas renovadas regularmente garantem a eficácia e a qualidade dos moldes produzidos.",
      target_en:
        "Our workshop is equipped with 6 CNC milling machining centers, 2 sinker EDM machining centers, 1 wire EDM machining center, and drilling and grinding machines. These tools are regularly upgraded to ensure the effectiveness and quality of the molds produced.",
      target_es:
        "Nuestro taller está equipado con 6 centros de mecanizado fresadora CNC, 2 centros de mecanizado de hundimiento EDM, 1 centro de mecanizado de hilo EDM y máquinas de taladrado y rectificado. Estas herramientas se renuevan regularmente para garantizar la eficacia y la calidad de los moldes producidos.",
      target_de:
        "Unsere Werkstatt ist mit 6 CNC-Fräsbearbeitungszentren, 2 Senker-EDM-Bearbeitungszentren, 1 Draht-EDM-Bearbeitungszentrum sowie Bohr- und Schleifmaschinen ausgestattet. Diese Werkzeuge werden regelmäßig aktualisiert, um die Effektivität und Qualität der hergestellten Formen zu gewährleisten.",
    },
    {
      source: "Equipamentos de Metrologia e Controlo de Qualidade",
      target_en: "Metrology and Quality Control Equipment",
      target_es: "Equipos de Metrología y Control de Calidad",
      target_de: "Messtechnik und Qualitätssicherungsausrüstung",
    },

    // Indústrias e Casos de Estudo

    {
      source: "Indústrias e Casos de Estudo",
      target_en: "Industries and Case Studies",
      target_es: "Industrias y Casos de Estudio",
      target_de: "Branchen und Fallstudien",
    },

    //Noticias

    {
      source:
        "Modernização do processo de Electroerosão com tecnologia de ponta",
      target_en:
        "Modernization of the EDM process with cutting-edge technology",
      target_es:
        "Modernización del proceso de electroerosión con tecnología de punta",
      target_de: "Modernisierung des EDM-Prozesses mit Spitzentechnologie",
    },
    {
      source:
        "A TCC adquiriu recentemente um equipamento de electroerosão com a mais recente tecnologia da OPS-INGERSOLL, equipado com um controlador de última geração. A aquisição deste equipamento permite uma redução do tempo electroerosão e uma redução no desgaste de elétrodos permitindo ganhos significativos na produtividade da TCC.",
      target_en:
        "TCC recently acquired an EDM machine with the latest technology from OPS-INGERSOLL, equipped with a state-of-the-art controller. The acquisition of this equipment allows for a reduction in EDM time and electrode wear, resulting in significant productivity gains for TCC.",
      target_es:
        "TCC adquirió recientemente una máquina de electroerosión con la última tecnología de OPS-INGERSOLL, equipada con un controlador de última generación. La adquisición de este equipo permite una reducción en el tiempo de electroerosión y el desgaste de los electrodos, lo que resulta en importantes ganancias de productividad para TCC.",
      target_de:
        "TCC hat kürzlich eine Erodiermaschine mit der neuesten Technologie von OPS-INGERSOLL erworben, die mit einem hochmodernen Steuerungssystem ausgestattet ist. Der Erwerb dieses Geräts ermöglicht eine Verkürzung der Erodierzeit und eine Reduzierung des Elektrodenverschleißes, was zu erheblichen Produktivitätssteigerungen bei TCC führt.",
    },
    {
      source:
        "A TCC adquiriu recentemente um equipamento de electroerosão com a mais recente tecnologia da OPS-INGERSOLL, equipado com um controlador de última geração. A aquisição deste equipamento permite uma redução do tempo electroerosão e uma redução no desgaste de elétrodos permitindo ganhos significativos na produtividade da TCC.",
      target_en:
        "TCC recently acquired an EDM machine with the latest technology from OPS-INGERSOLL, equipped with a state-of-the-art controller. The acquisition of this equipment allows for a reduction in EDM time and electrode wear, resulting in significant productivity gains for TCC.",
      target_es:
        "TCC adquirió recientemente una máquina de electroerosión con la última tecnología de OPS-INGERSOLL, equipada con un controlador de última generación. La adquisición de este equipo permite una reducción en el tiempo de electroerosión y el desgaste de los electrodos, lo que resulta en importantes ganancias de productividad para TCC.",
      target_de:
        "TCC hat kürzlich eine Erodiermaschine mit der neuesten Technologie von OPS-INGERSOLL erworben, die mit einem hochmodernen Steuerungssystem ausgestattet ist. Der Erwerb dieses Geräts ermöglicht eine Verkürzung der Erodierzeit und eine Reduzierung des Elektrodenverschleißes, was zu erheblichen Produktivitätssteigerungen bei TCC führt.",
    },
    {
      source: "Novo Sistema de Medição BLUM",
      target_en: "New BLUM Measurement System",
      target_es: "Nuevo Sistema de Medición BLUM",
      target_de: "Neues BLUM-Messsystem",
    },
    {
      source:
        "A TCC equipou mais um centro de maquinação CNC com o sistema de medição BLUM Measurement Protocol o que permite melhorias significativas no controlo de qualidade da maquinação.",
      target_en:
        "TCC has equipped another CNC machining center with the BLUM Measurement Protocol system, which allows for significant improvements in machining quality control.",
      target_es:
        "TCC ha equipado otro centro de mecanizado CNC con el sistema BLUM Measurement Protocol, lo que permite mejoras significativas en el control de calidad del mecanizado.",
      target_de:
        "TCC hat ein weiteres CNC-Bearbeitungszentrum mit dem BLUM Measurement Protocol System ausgestattet, was erhebliche Verbesserungen in der Qualitätskontrolle der Bearbeitung ermöglicht.",
    },
  ],
};
