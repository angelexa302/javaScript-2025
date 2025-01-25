// console.log("windows");
// console.log("document");

// let texto  ="hola.. soy... jose luis y me gusta mucho hacer programas con el Java Script"
// const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
// hablar(texto)  

// console.log("*******ELEMENTOS DEL DOCUMENTO****************");
// console.log(document.head);
// console.log(document.title);
// console.log(document.documentElement);

//     setTimeout(() => {
//         console.log(document.getSelection().toString());
//     }, 5000);


// document.write("<h2>Hola mundo!!!!!!!</h2>")

// console.log(document.getElementsByTagName("li"));
// document.querySelectorAll("a").forEach((el) => console.log(el));
// console.log(document.querySelector(".card"));
// console.log(document.querySelectorAll(".card"));
// console.log(document.querySelectorAll(".card")[2]);

// console.log(document.documentElement.lang);
// console.log(document.documentElement.getAttribute("lang"));
// console.log(document.querySelector(".dom-link").href)
// console.log(document.querySelector(".dom-link").getAttribute("href"))
// document.documentElement.lang= "es";
// console.log(document.documentElement.lang);
// document.documentElement.setAttribute("lang","es-MX")
// console.log(document.documentElement.lang);


// $linkDom.setAttribute("target","_blank")
// $linkDom.setAttribute("rel","noopener")
// $linkDom.setAttribute("href", "https://youtube.com")
// console.log($linkDom.hasAttribute("rel"));
// $linkDom.removeAttribute("rel");
// console.log($linkDom.hasAttribute("rel"));

// Selección de elementos del DOM y manipulación inicial de estilos
// const $linkDom = document.querySelector(".dom-link");
// const $html = document.documentElement;
// const $body = document.body;

// // Estilos para el enlace seleccionado
// $linkDom.style.setProperty("text-decoration", "none");
// $linkDom.style.setProperty("font-weight", "bold");
// $linkDom.style.setProperty("padding", "1rem");
// $linkDom.style.setProperty("border-radius", ".5rem");
// // $linkDom.style.setProperty("color", "black");
// // $linkDom.style.setProperty("border", "4px solid red");
// console.log($linkDom.style);

// // Variables CSS personalizadas (custom properties)
// let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
// let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

// console.log(varDarkColor, varYellowColor);

// // Aplicar colores personalizados
// $linkDom.style.color = varDarkColor;
// $linkDom.style.backgroundColor = varYellowColor;
// $body.style.backgroundColor = varDarkColor;
// $body.style.color = varYellowColor;
// // $html.style.setProperty("--dark-color", "pink");

// document.addEventListener("DOMContentLoaded", () => {
//     // Recalcular colores personalizados si es necesario
//     varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

//     // Selección de elementos para manipulación
//     const $card = document.querySelector(".card");
//     const $cards = document.querySelector(".cards");
//     const $imgs = document.querySelectorAll(".img");
//     const $whatIsDOM = document.getElementById("que-es");

//     // Manipulación de clases en los elementos seleccionados
//     $card.classList.add("rotate-45");
//     $card.classList.toggle("rotate-45");
//     console.log($card.classList.contains("rotate-45"));
//     $cards.classList.add("opacity-80");

//     console.log($cards.children);

//     // Agregar clases a imágenes seleccionadas
//     $imgs.forEach(($img) => {
//         $img.classList.add("rotate-13");
//         $img.classList.add("border-radius-1rem");
//         $img.classList.remove("sepia");
//     });

//     // Agregar contenido dinámico al elemento con id="que-es"
//     const text = `
//         <p>El modelo de Objetos del DOCUMENTO (<b><i>DOM - Document Object Model</i></b>) es una API para documentos HTML y XML.</p>
//         <p>Éste provee una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante el código JavaScript.</p>
//         <p><mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark></p>
//     `;
//     $whatIsDOM.innerHTML = text;

//     // Creación dinámica de un elemento figure con img y figcaption
//     const $figure = document.createElement("figure");
//     const $img = document.createElement("img");
//     const $figCaption = document.createElement("figcaption");
//     const $figCaptionText = document.createTextNode("Hobbie");
//     const $figure2 = document.createElement("figure");
//     const $figure3 = document.createElement("figure");
//     // $img.classList.add();


//     // Configuración del nuevo contenido
//     $img.setAttribute("src", "https://picsum.photos/200/200?random=17");
//     $img.setAttribute("alt", "hobbie");
//     $img.classList.add("img", "rotate-13", "border-radius-1rem");
//     $figCaption.appendChild($figCaptionText);
//     $figure.appendChild($img);
//     $figure.appendChild($figCaption);

//     // Agregar la clase cards al figure y añadirlo al contenedor principal
//     $figure.classList.add("card");
//     $cards.appendChild($figure);

//     $figure2.innerHTML=`<img src="https://picsum.photos/200/200?random=19" alt="Dreams">
//     <figcaption>Dreams</figcaption>`;
//     $figure2.classList.add("card")
//     $cards.appendChild($figure2)
//     const $img2 = $figure2.querySelector("img")
//     $img2.classList.add("img", "rotate-13", "border-radius-1rem");

//     $figure3.innerHTML=`<img src="https://picsum.photos/200/200?random=14" alt="Adventure">
//     <figcaption>Adventure</figcaption>`;
//     $figure3.classList.add("card");
//     const $img3 = $figure3.querySelector("img");
//     $img3.classList.add("img", "rotate-13", "border-radius-1rem");
//     $cards.appendChild($figure3)

//     console.log(document.contains($cards));
// });
// const estacionesDelAnio = ["Verano", "Otoño", "Invierno", "Primavera"];
// $ul = document.createElement("ul");
// document.write("<h3>Estaciones del Año.</h3>");
// document.body.appendChild($ul);
// estacionesDelAnio.forEach((el)=> {
//     const $li = document.createElement("li");
//     $li.textContent = el;
//     $ul.appendChild($li)
// })
// const continentesDelMundo = ["África", "Oceanía", "América", "Europa", "Asía"];
// $ul2 = document.createElement("ul");
// document.write("<h3>Continentes del Mundo!!</h3>");
// document.body.appendChild($ul2);
// $ul2.innerHTML = "";
// continentesDelMundo.forEach(el => $ul2.innerHTML += `<li>${el}</li>` 
// )

// const meses = [
//     "Enero",
//     "Febrero",
//     "Marzo",
//     "Abril",
//     "Mayo",
//     "Junio",
//     "Julio",
//     "Agosto",
//     "Septiembre",
//     "Octubre",
//     "Noviembre",
//     "Diciembre",
// ];

// $ul3 = document.createElement("ul");
// $fragment = document.createDocumentFragment();

// meses.forEach(el => {
//     const $li = document.createElement ("li");
//     $li.textContent = el;
//     $fragment.appendChild($li); 
// })
// document.write("<h3>Meses del año</h3>");

// $ul3.appendChild($fragment);

// document.body.appendChild($ul3)

// const diasDeSemana = [
//     "Lunes",
//     "Martes",
//     "Miércoles",
//     "Jueves",
//     "Viernes"
// ];
// $ul4 = document.createElement("ul");
// $fragment = document.createDocumentFragment();
// diasDeSemana.forEach(el => {
//     const $li = document.createElement ("li");
//     $li.textContent = el;
//     $fragment.appendChild($li);
// })
// document.write("<h3>Días de Semana</h3>");
// $ul4.appendChild($fragment);
// document.body.appendChild($ul4)

// const $cards = document.querySelector(".cards"),
// $template = document.getElementById("template-card").content,
// $fragment = document.createDocumentFragment(),
// cardContent = [{
//     title: "Tecnología",
//     img: "https://picsum.photos/200/200?random=24"
// },
// {
//     title: "Animales",
//     img: "https://picsum.photos/200/200?random=25"
// },
// {
//     title: "Arquitectura",
//     img: "https://picsum.photos/200/200?random=26"
// },
// {    
//     title: "Gente",
//     img: "https://picsum.photos/200/200?random=27"
// },
// {
//     title: "Naturaleza",
//     img: "https://picsum.photos/200/200?random=28"
// },
// ];
// cardContent.forEach(el => {
//     $template.querySelector("img").setAttribute("src", el.img);
//     $template.querySelector("img").setAttribute("alt", el.title);
//     $template.querySelector("figCaption").textContent = el.title;

//     let $clone = document.importNode($template, true);
//     $fragment.appendChild($clone)

// });
// $cards.appendChild($fragment)

// const $cards = document.querySelector(".cards");
// $newCard = document.createElement("figure")
// $clomeCards = $cards.cloneNode(true);

// $newCard.innerHTML = `
//  <img src="https://picsum.photos/200/200?random=28" alt="Any">
//  <figcaption>Any</figcaption>
// `;
// $newCard.classList.add("card");

// // $cards.insertBefore($newCard, $cards.firstElementChild)

// // $cards.removeChild($cards.firstElementChild)
// // $cards.replaceChild($newCard, $cards.children[2])

// document.body.appendChild($clomeCards);


// function holaMundo() {
//     alert("Hola Mundo");
//     console.log(event);
// }

// function saludar(nombre = "Desconocid@" ) {
//     alert(`Hola ${nombre}`)
//     console.log(event);
    
// }
// const $eventoSemantico = document.getElementById("evento-semántico");
// $eventoMultiple = document.getElementById("evento-multiple")
// $eventoRemover = document.getElementById("evento-remover")

// $eventoSemantico.onclick = holaMundo;
// $eventoSemantico.onclick = function (e) {
// alert("Hola mundo manejador de eventos")
// console.log(e);
// console.log(event);
// }
// $eventoMultiple.addEventListener("click", holaMundo)
// $eventoMultiple.addEventListener("click",(e) => {
//     alert("Hola mundo manejador de eventos múltiples")

// console.log(e);
// console.log(e.type);
// console.log(e.target);
// });
// $eventoMultiple.addEventListener("click", ()=> saludar("jose"))

// const removerDblClick = (e) => {     
//     alert(`Removiendo el evento ${e.type}`)
//     console.log(e);
//     $eventoRemover.removeEventListener("dblclick", removerDblClick)
//     $eventoRemover.disabled=true
// };
// $eventoRemover.addEventListener("dblclick", removerDblClick);


// function flujosEventos(e) {
//     console.log(`Hola te saluda el click lo origino ${e.target.className}`);
//     e.stopPropagation();
// }
//     document.addEventListener("click",(e) =>{
//         console.log("Clikc en", e.target );
        
//         if (e.target.matches(".eventos-flujos div")){
//             flujosEventos(e)
//         }


//         if (e.target.matches(".eventos-flujos a")){
//             alert("hola Como andas=?");
//             e.preventDefault();

//         }
//     })
    
    // $divsEventos.forEach(div => {
    //     div.addEventListener("click", flujosEventos);
    // });
// window.addEventListener("resize",(e) =>{             
//     console.clear()
//     console.log(window.innerWidth);
//     console.log(window.innerHeight);
//     console.log(window.outerWidth);
//     console.log(window.outerHeight);
//     console.log(e);    
// });
// window.addEventListener("scroll",(e) => {
//     console.clear()
//     console.log(window.scrollX);
//     console.log(window.scrollY);
//     console.log(e);
// })

// window.addEventListener("load", (e) =>{

//     console.log("**************Evento Load****************");
//     console.log(window.screenX);
//     console.log(window.screenY);
//     console.log(e);  
// })

// window.addEventListener("DOMContentLoaded", (e) =>{
//     console.log("**************Evento DOMContentLoaded****************");
//     console.log(window.screenX);
//     console.log(window.screenY);
//     console.log(e);  

// })

// window.alert("alerta");
// window.confirm("confirmacion");
// prompt("prompt")
// Manejo de botones
// const $btnAbrir = document.getElementById("abrir-ventana");
// $btnCerrar = document.getElementById("cerrar-ventana");
// $btnImprimir = document.getElementById("imprimir-ventana");

// let ventana;
// $btnAbrir.addEventListener("click", (e)=>{
//    ventana = open("http://facebook.com")
// })
// $btnCerrar.addEventListener("click", (e)=>{
//     ventana.close() 
// })
// $btnImprimir.addEventListener("click", (e)=>{
//     print()
// })

// console.log(location.hash);
// console.log(navigator);
// console.log(navigator.geolocation);
// console.log(navigator.onLine);
// console.log(navigator.mimeTypes);
// console.log(navigator.serviceWorker);
// console.log(navigator.userAgent);

