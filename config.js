/* ============================================================
   CONFIG.JS — Carles Cadí Alimentació
   Esquelet comú (mateix ordre a totes les webs):
   1 Negoci · 2 Rutes · 3 Imatges · 4 Navbar · 5 Hero · 6 Qui som
   7 Contingut del projecte · 8 On som · 9 Seguretat · 10 Altres
   PRIMER ESBORRANY — colors i textos pendents de confirmar
   ============================================================ */

const CONFIG = {

// ═══ 1. NEGOCI ═══════════════════════════════════════════════════════════
COOK:           "cookies_cadi",
NOM:            "Carles  <br><br>Cadí Alimentació",
LOGO:           "logo/logoCAtrans.png",
LOGO_T:         "logo/logoCAtrans.png",
SLOGAN:         "Representant i distribuidor al Penedés de Cadí Alimentació",
TELEFON:        "",                 TELEFON_LABEL:  "Telèfon",     TELEFON_ICO: "📞",
MOBIL:          "690 09 13 88",
WHATSAPP:       "https://wa.me/34690091388",WHATSAPPLABEL:  "💬 Escríu-me per WhatsApp",
EMAIL:          "carlescadi@alterwebstudio.com",   EMAIL_LABEL: "e-Mail",   EMAIL_ICO: "✉️",
ADRECA:         "Carrer del Empordà, 15-17, Nave J, 08219 Sant Quirze del Vallès, Barcelona",
    ADRECA_LABEL:   "Adreça",
    ADRECA_ICO:     "📍",
HORA_0:         "Horari",   HR: "🕐",
HORA_1:         "De Dilluns a Divendres de 7:00 a 14:00",
HORA_2:         "",
HORA_3:         "",
INSTAGRAM:      "https://www.instagram.com/carlescadi",
FACEBOOK:       "",
EMAIL_SUPORT:   "info@alterwebstudio.com",

// ═══ 2. RUTES ════════════════════════════════════════════════════════════
REPO_URL:       "https://altervector.github.io/carlescadi/",
BASE_URL:       "./",
BASE_WORKER:    "https://gruasesmar.altervector.workers.dev",   // ⚠ és el Worker d'Esmar (copiat) — pendent: crear el de Cadí
URL_OFICIAL:    "https://carlescadi.alterwebstudio.com",
ASSETS:         "https://avsets.pages.dev/",
URL_MAPS:       "https://maps.app.goo.gl/Xs6h3Z6q37xFbrnn7",
URL_RESSENYES:  "https://maps.app.goo.gl/Xs6h3Z6q37xFbrnn7",

// ═══ 3. IMATGES ══════════════════════════════════════════════════════════
BACKGROUND:     "",   // ← es canvia al CSS (html{})
BLOC_HERO:      "images/carlescadi/hero.png",
CARICATURA:     "images/carlescadi/yo.jpg",
FONS_SERVEIS:   "",   // ⚠ resta d'Esmar
QR:             "",   // ⚠ resta d'Esmar

// ═══ 4. NAVBAR ═══════════════════════════════════════════════════════════
NAV_INICI:      "Inici",
NAV_NOSALTRES:  "Nosotros",
NAV_SERVEIS:    "Productes",
NAV_CONTACTE:   "Contacte",

// ═══ 5. HERO ═════════════════════════════════════════════════════════════
HERO_EYEBROW:   "",
HERO_TITOL:     "",
HERO_BOTO_PRI:  "📞 Pedir grúa",          // ⚠ resta d'Esmar
HERO_BOTO_SEC:  "Nuestros servicios",     // ⚠ resta d'Esmar

// ═══ 6. QUI SOM ══════════════════════════════════════════════════════════
QUI_SOM:        "",       // ⚠ resta d'Esmar
QUI_SOM_TIT:    "",
QUI_SOM_DESC:   "",

// ═══ 7. CONTINGUT DEL PROJECTE (diferent a cada web) ═════════════════════

QUE_FEM:        "",
QUE_FEM_SRV:    "",



// ═══ 8. ON SOM ═══════════════════════════════════════════════════════════
ON_SOM:         "",
ON_SOM_TIT:     "On som...",   // alternativa: "Ven a vernos"

// ═══ 9. SEGURETAT ════════════════════════════════════════════════════════
//SITIOS_SEGUROS: ["alterwebstudio.com", "altervector.com", "pages.dev", "altervector.github.io", "localhost", "127.0.0.1"],
SITIOS_SEGUROS: ["alterwebstudio.com", "altervector.com", "pages.dev", "altervector.github.io"],

// ═══ 10. ALTRES ══════════════════════════════════════════════════════════
// (res en aquest projecte)
};