/* ============================================================
   CONFIG.JS —CarlesCadi
   PRIMER ESBORRANY — colors i textos pendents de confirmar
   amb la web original un cop hi tinguem accés complet
   ============================================================ */

const CONFIG = {

    // 1. NEGOCI
    COOK:           "cookies_cadi",
    NOM:            "Carles  <br><br>Cadí Alimentació",
    LOGO:           "logo/logoCAtrans.png", 
    LOGO_T:         "logo/logoCAtrans.png", 
    SLOGAN:         "Representant i distribuidor al Penedés de Cadí Alimentació",
    TELEFON:        "",                 TELEFON_LABEL: "Telèfon", TELEFON_ICO: "📞",
    MOBIL:          "690 09 13 88",
    WHATSAPP:       "https://wa.me/34690091388",    WHATSAPPLABEL: "💬 Escríu-me per WhatsApp",
    EMAIL:          "carlescadi@alterwebstudio.com",          EMAIL_LABEL: "e-Mail",   EMAIL_ICO: "✉️",
    ADRECA:         "Carrer del Empordà, 15-17, Nave J, 08219 Sant Quirze del Vallès, Barcelona",   ADRECA_LABEL: "Adreça", ADRECA_ICO: "📍",
    INSTAGRAM:      "https://www.instagram.com/carlescadi",
    FACEBOOK:       "",
    EMAIL_SUPORT:   "info@alterwebstudio.com",

    // 2. RUTES

    REPO_URL:       "https://altervector.github.io/carlescadi/",
    BASE_URL:       "./",
    BASE_WORKER:    "https://gruasesmar.altervector.workers.dev",   // ← pendent: crear Worker per als 2 formularis
    URL_OFICIAL:    "https://carlescadi.alterwebstudio.com",
    ASSETS:         "https://avsets.pages.dev/",
    URL_MAPS:       "https://maps.app.goo.gl/Xs6h3Z6q37xFbrnn7",
    URL_RESSENYES:  "https://maps.app.goo.gl/Xs6h3Z6q37xFbrnn7",
    

    // 3. IMATGES 

    BLOC_HERO:      "images/carlescadi/hero.png",
    CARICATURA:     "images/carlescadi/yo.jpg",
    FONS_SERVEIS:   "images/gruasesmar/servi/servi.jpg",
    QR:             "qr/qr-gruasesmar.png",

    // 4. NAVBAR
    
    NAV_INICI:        "Inici",
    NAV_NOSALTRES:        "Nosotros",
    NAV_SERVEIS:        "Productes",
    NAV_CONTACTE:        "Contacte",

    HERO_BOTO_PRI:  "📞 Pedir grúa",
    HERO_BOTO_SEC:  "Nuestros servicios",

    // 5. QUI SOM, SERVEIS

    QUI_SOM:        "Quiénes somos...",
    QUE_FEM:        "Lo que hacemos",
    QUE_FEM_SRV:    "Nuestros servicios",

    ASSIST_CARRETERA: [
        { titol: "Turismos", desc: "Ofrecemos un servicio integral de asistencia y transporte para toda clase de vehículos en toda Cataluña.", url: "servicio.html?s=coches", img: "images/gruasesmar/servi/turismos/turismos-1.jpg" },
        { titol: "Motocicletas", desc: "Trasladamos todo tipo de motocicletas. Portamotos abatible, remolque innovador con sistema de carga a nivel de suelo.", url: "servicio.html?s=motos", img: "images/gruasesmar/servi/motos/motos-1.jpg" },
        { titol: "Vehículos pesados", desc: "Cuando tienes un problema con tu furgoneta o camión ligero, lo único que quieres es resolverlo lo antes posible.", url: "servicio.html?s=pesados", img: "images/gruasesmar/servi/pesados/hero-pesados.jpg" },
    ],
    ALTRES_SERVEIS: [
        { titol: "Cambios de baterías a domicilio", desc: "Cambio de batería a domicilio o estés donde estés. No te supondrá ningún inconveniente.", url: "servicio.html?s=baterias", img: "images/gruasesmar/servi/baterias/baterias-1.png" },
        { titol: "Reparación de neumáticos in situ", desc: "Reparación temporal de pinchazos para que puedas seguir con tu camino.", url: "servicio.html?s=pneumaticos", img: "images/gruasesmar/servi/pneumaticos/pneumaticos-1.jpg" },
        { titol: "Servicio ITV", desc: "Con nuestro servicio de ITV a domicilio, te pasamos la ITV sin que salgas de casa.", url: "servicio.html?s=itv", img: "images/gruasesmar/servi/itv/hero-itv.jpg" },
    ],
    
    CONOCENOS_CARDS: [
        { titol: "Más de 30 años de experiencia en asistencia en carretera", desc: "Talleres Esmar, S.L. (Grúas Esmar) es una empresa especializada en asistencia en carretera con más de 30 años de experiencia en el sector. Toda nuestra flota está permanentemente comunicada con nuestra central de operaciones mediante GPS, para responder con rapidez a cualquier solicitud. Trabajamos también con aseguradoras, ofreciendo un servicio profesional adaptado a sus necesidades.", img: "images/gruasesmar/servi/conocenos/conocenos.png", url: "servicio.html?s=conocenos" },
        { titol: "Nuestra flota", desc: "Disponemos de una flota de grúas equipadas con la última tecnología, todas ellas comunicadas por GPS con nuestra central para responder con rapidez. TEXT PENDENT — ampliar amb detalls reals de la flota (tipus de grues, quantitat...).", img: "images/gruasesmar/flota.jpg", url: "servicio.html?s=flota" },
        { titol: "Nuestras instalaciones", desc: "Instalaciones de 800m² dotadas con la tecnología más avanzada en videovigilancia (CCTV), zona de taller para el mantenimiento de la flota, oficinas y sala de espera para clientes.", img: "images/gruasesmar/instalaciones.jpg", url: "servicio.html?s=instalaciones" },
    ],


    ASSEG_TIT:      "Trabajamos con aseguradoras",
    ASSEG_DESC:     "Ofrecemos nuestros servicios para su compañía",
    ASSEG_BOTO:     "Contacta con nosotros",
    ASSEG_IMG:      "images/gruasesmar/aseguradoras.jpg",

    STATS_IMG:      "images/gruasesmar/stats-fons.jpg",
    STATS_BOTO:     "PEDIR GRÚA AHORA",

    // 8. CONTACTE
    ON_SOM:         "",
    ON_SOM_TIT:     "On som...",   //Ven a vernos
    HORA_0:         "Horari", HR: "🕐",
    HORA_1:         "De Dilluns a Divendres de 7:00 a 14:00",

    // 6. SEGURETAT
    SITIOS_SEGUROS: ["alterwebstudio.com", "altervector.com", "pages.dev", "altervector.github.io", "localhost", "127.0.0.1"],
};
