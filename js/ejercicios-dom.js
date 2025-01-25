import countDown from "./cuenta-regresiva.js";
import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { alarm, digitalClock } from "./reloj-alarma.js";
import { moveBall, shortcut } from "./teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e)=> {

    hamburgerMenu(".panel-btn",".panel", ".menu a");
    digitalClock("#reloj","#activar-reloj", "#desactivar-reloj");
    alarm("../assests/alarma1.mp3", "#activar-alarma", "#desactivar-alarma");
    countDown("countdown", "January 25 2025 00:15:00", "Feliz Cumpleaños 🤓")
})

d.addEventListener("keydown", (e) => {
    shortcut(e);
    moveBall(e, ".ball",".stage");
} )

