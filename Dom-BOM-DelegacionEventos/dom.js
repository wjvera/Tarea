
// *********** elementos del documento **************

/* 

console.log(window.document)
console.log(document)

console.log(document.head)
console.log(document.body)


console.log(document.doctype)
console.log(document.title)
console.log(document.links)
console.log(document.images)
console.log(document.forms)
console.log(document.scripts)


//mostrar lo que selecciono
setTimeout(() => {
    console.log(document.getSelection().toString())
}, 3000);*/



// ****************** DOM html***********************

// ******* referir elementos del html ***********

/*
//referir por nombre etiqueta
console.log(document.getElementsByTagName('li'))


//referir por nombre de clase
console.log(document.getElementsByClassName('card'))


//referir por el nombre
console.log(document.getElementsByName('nombre'))


//referir por el ID
console.log(document.getElementById("menu"))


//referir por tipo class, name, etiqueta
//en una misma etiqueta
console.log(document.querySelector(".card"))
console.log(document.querySelectorAll(".card")) //clase
console.log(document.querySelectorAll("a")) //etiqueta


//imprimir los elementos
document.querySelectorAll('a').forEach((elemento)=> console.log(elemento))


//tambien podemos traer el elemento por posicion
console.log(document.querySelectorAll('.card')[3])


//de la cards traer todas las imagenes
console.log(document.querySelectorAll('.cards img'))
*/


// ******* propiedades elementos html ***********


/*
console.log(document.documentElement.lang) //lenguaje
console.log(document.querySelector('.link-dom').href)

//obtener el valor de la propiedad
console.log(document.querySelector('.link-dom').getAttribute('href'))


//editar el valor del atributo
document.documentElement.setAttribute('lang', 'en')
console.log(document.documentElement.lang)


const elementoDOM = document.querySelector('.link-dom').setAttribute('target', '_blank')
const $elementoDOMGoogle = document.querySelector('.link-dom').setAttribute('href', 'https://www.google.com')



//data-attributes, obtener valores de los atributos

//de la clase link-dom obtenemos el valor del atributo 'data-description'
console.log(document.querySelector('.link-dom').getAttribute('data-description'))

//del elemento input obtenemos el valor de la propiedad name
console.log(document.querySelector('input').getAttribute('name'))
*/


// ************* DOM para CSS *****************

/*
const $link = document.querySelector('.link-dom')


//propiedad style de link
console.log($link.style)

//obtener los valores de la propiedad style
console.log($link.getAttribute('style'))

//obtener un valor en especifico
console.log($link.style.backgroundColor)
console.log($link.style.color)


//establecer propiedades y valores
$link.style.setProperty('text-decoration', 'none')
$link.style.setProperty('color', 'red')
$link.style.setProperty('font-size', '3rem')
$link.style.setProperty('background-color', 'blue')
$link.style.setProperty('display', 'flex')
$link.style.setProperty('border-radius', '2rem')


$link.style.width = '50%'
$link.style.margin = '0 auto'
$link.style.padding = 'auto 0'



//dom html
const $h3 = document.querySelector('h3')
//dom css
$h3.style.backgroundColor = 'blue'
$h3.style.fontSize = '2rem'
$h3.style.borderRadius = '0.5rem'
$h3.style.color = 'red'


//dom 
const $parrafo = document.querySelector('#que-es')
console.log($parrafo)

$parrafo.style.fontFamily = 'Helvetica'
$parrafo.style.fontSize = '1.4rem'

*/

// ****************** variables css ********************

// primero saber en que selector esta (style)


/*
//referenciar el html principal y body
const $html = document.documentElement
const $body = document.body




// asi obtenes la propiedad de una variable css
let verdejs = getComputedStyle($html).getPropertyValue('--verde')
console.log(verdejs)
let purpurajs = getComputedStyle($html).getPropertyValue('--purpura')
console.log(purpurajs)



//ahora aplicamos los estilos
$body.style.color = verdejs
$body.style.backgroundColor = purpurajs



//ahora vamos a cambiar de color el verde a blanco

//primero con el setProperty hacemos el cambio
$html.style.setProperty('--verde', 'white')

//despues actualizamos el color en el html
verdejs = getComputedStyle($html).getPropertyValue('--verde')

//aplicamos nuevamente el estilo
$body.style.color = verdejs
*/

// ************** clases en css ****************

/*
const $primera = document.querySelector('.card')
console.log($primera)

//verificar si el elemento html contiene x propiedad css
console.log($primera.classList.contains('rotate-45')) //false


//agregarle una propiedad css al elemento html
$primera.classList.add('rotate-45')

//verificamos si tiene la propiedad 
console.log($primera.classList.contains('rotate-45')) //true

//quitar la propiedad
$primera.classList.remove('rotate-45')
console.log($primera.classList.contains('rotate-45')) //false

// estamos en false .... es decir no la tiene

//toggle, sino tiene la propiedad la pone, si tiene la propiedad la quita


// como no la tiene, aqui coloca la propiedad
$primera.classList.toggle('rotate-45')


//ahora como tiene la propiedad, la reemplazara
$primera.classList.replace('rotate-45', 'rotate-135')


//ahora vamos a agregarle mas propiedades
$primera.classList.add('opacity-80', 'sepia', 'borderedondeado')


//quitar sepia, rotate-135 y opacity-80
$primera.classList.remove('sepia', 'rotate-135', 'opacity-80')
*/


// ************* Texto y html ********************

//referenciar el elemento html
/*
let $parrafo = document.querySelector('#que-es')
console.log($parrafo)

let text = `
    <p>
      El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
      Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
      <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
  `;

  $parrafo.innerHTML = text
  $parrafo.outerHTML = text //este
  */

// ********** recorriendo el DOM *************

/*
//obtener la referencia padre
const $cartas = document.querySelector('.cards')
console.log($cartas)


//imprimir los elementos internos
console.log($cartas.children)

//imprimir un hijo en particular
console.log($cartas.children[3])

//saber cual es su padre
console.log($cartas.parentElement)

//imprimir el primer hijo
console.log($cartas.firstElementChild)
//imprimir el ultimo hijo
console.log($cartas.lastElementChild)

//imprimir el elemento anterior al padre
console.log($cartas.previousElementSibling)

//imprimir el elemento siguiente del padre
console.log($cartas.nextElementSibling)


//de la posicion 3 de cards buscame el section mas cercano
console.log($cartas.children[3].closest('section'))
*/


// ************ creando elementos y fragmentos ***************

/*
// creamos elementos html en javascript
const $figure = document.createElement('figure')
const $imagen = document.createElement('img')
const $figcaption = document.createElement('figcaption')
const $figcaptiontexto = document.createTextNode('sistemas')


// vamos a referenciar al padre para colocarlo todos los elementos creados
const $refCartaPadre = document.querySelector('.cards')



//al img le ponemos sus propiedades
$imagen.setAttribute('src', 'https://placeimg.com/200/200/systems')
$imagen.setAttribute('alt', 'Systems')


//le agregamos texto al figcaption
$figcaption.appendChild($figcaptiontexto)



//una vez construido, lo vamos a agregar al figure
$figure.appendChild($imagen)
$figure.appendChild($figcaption)


//por ultimo al figure lo agregamos al padre .cards
$refCartaPadre.appendChild($figure)


//para que tome los estilos, usamos las clases css
$figure.classList.add('card')


//-------------------------------------------//

// ****** crear elementos dinamicamente *******

// crear una lista ul li con elementos del array

//creamos el array
const numeros = ['uno', 'dos', 'tres', 'cuatro']

//creamos el ul
let $ul = document.createElement('ul')

//referenciamos el body
let $body = document.body


//ahora vamos a meter el ul al body
$body.appendChild($ul)

//textContent nos ayuda a obtener o establecer contenido de texto

//recorremos el array y le ponemos li
numeros.forEach((num)=>{
  const $li = document.createElement('li')
  $li.textContent = num
  $ul.appendChild($li)
})


// ************ de otra manera (fragmentado) **************

const letras = ['1', '2', '3', '4']

let $ul2 = document.createElement('ul')

$body.appendChild($ul2)

letras.forEach((contenido)=>(
  $ul2.innerHTML += `<li>${contenido}</li>` //este es el fragmento
))


// ***************** Fragmentado ********************


//creamos el array
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
]


//creamos el ul
let $ul3 = document.createElement('ul')

//creamos los nodos vacios
let $fragment = document.createDocumentFragment()

//agregamos el ul al body
$body.appendChild($ul3)


//aqui recorremos, creamos, asignamos al li y por ultimo al fragment
meses.forEach((mes)=>{
  const $li = document.createElement('li')
  $li.textContent = mes
  $fragment.appendChild($li)
})

//ahora mete todo el fragment en el ul
$ul3.appendChild($fragment)

//por ultimo meter el ul al body
$body.appendChild($ul3)
*/


// ************ Template HTML ****************

/*
//1 capturar el padre cards
const $cards = document.querySelector('.cards')

//2 capturar el template, pero el contenido
const $template = document.getElementById('template-card').content

//3 crear fragments nodos vacios
const $fragments = document.createDocumentFragment()


//crear array con objetos

cardsContent = [
  {
    title: "Tecnología",
    img: "https://placeimg.com/200/200/tech",
  },
  {
    title: "Animales",
    img: "https://placeimg.com/200/200/animals",
  },
  {
    title: "Arquitectura",
    img: "https://placeimg.com/200/200/arch",
  },
  {
    title: "Gente",
    img: "https://placeimg.com/200/200/people",
  },
  {
    title: "Naturaleza",
    img: "https://placeimg.com/200/200/nature",
  },
];

// recorrer el array y llenandolo
cardsContent.forEach((elemento)=>{

  $template.querySelector('img').setAttribute('src', elemento.img)
  $template.querySelector('img').setAttribute('alt', elemento.title)
  $template.querySelector('figcaption').textContent = elemento.title

  //importNode() crea copia de un nodo
  let $clonar = document.importNode($template, true)
  $fragments.appendChild($clonar)
  
})

// lo agregamos al html para que se vea
$cards.appendChild($fragments)

*/


// ************** Insertando elementos (old)******************

/*
// reemplazar un elemento existente

//1 referenciar al padre
const $cards = document.querySelector('.cards')

//2 creamos un nuevo elemento de tipo figure 
const $nuevoEle = document.createElement('figure')

//3 creamos el elemento 
$nuevoEle.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption>Any</figcaption>
`

//darle los estilos de tipo card
$nuevoEle.classList.add('card')

// ahora vamos a reemplazar por cualquiera de las otra imagenes
//$cards.replaceChild($nuevoEle, $cards.children[1])

//ahora vamos a colocarlo de primero
//$cards.insertBefore($nuevoEle, $cards.firstElementChild)


//ahora vamos a eliminar el ultimo nodo imagen
//$cards.removeChild($cards.lastElementChild)


//clonar al padre
let $clonarPadre = $cards.cloneNode(true)
//lo clonado agregalo al body
document.body.appendChild($clonarPadre)
*/


// *************** Insertando elementos (new)*******************

/*
//insertAdjacent...
  .insertAdjacentElement(position, el)
  .insertAdjacentHTML(position, html)
  .insertAdjacentText(position, text)


//Posiciones:
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
  afterend(hermano siguiente)
*/

/*
//1 referenciar al padre
const $cards = document.querySelector('.cards')

//2 creamos un nuevo elemento de tipo figure 
const $nuevoEle = document.createElement('figure')

//3 creamos el elemento 
$nuevoEle.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption>Any</figcaption>
`

//darle los estilos de tipo card
$nuevoEle.classList.add('card')


// ************* insertAdjacentElement *****************

// insertar al hermano anterior de section
// el cards esta en el section y el 'a' es el hermano anterior
// asi que va a insertar entre section y el 'a'
$cards.insertAdjacentElement('beforebegin', $nuevoEle)


//afterbegin actua como el firstElementChild (primera posicion)
$cards.insertAdjacentElement('afterbegin', $nuevoEle)

//beforeend actua como el lastElementChild (ultima posicion)
$cards.insertAdjacentElement('beforeend', $nuevoEle)


// insertar al hermano siguiente de section
// el cards esta en el section y el template es el hermano siguiente
// asi que va a insertar entre section y el template
$cards.insertAdjacentElement('afterend', $nuevoEle)
*/


// ************* insertAdjacentHTML *****************
/*
//1 referenciar al padre
const $cards = document.querySelector('.cards')

//2 creamos un nuevo elemento de tipo figure 
const $nuevoEle = document.createElement('figure')

//3 creamos el elemento y html
let $contenidoCard = `
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption></figcaption>
`

// darle los estilos de tipo card
$nuevoEle.classList.add('card')

// despues le inyectamos el html al $nuevoEle
$nuevoEle.insertAdjacentHTML('beforeend', $contenidoCard)

// $nuevoEle.querySelector('figcaption').textContent = 'cual'

// despues insertar texto dentro del figcaption de $nuevoEle
$nuevoEle.querySelector('figcaption').insertAdjacentText('beforeend', 'hola')

// por ultimo el nodo insertado, colocarlo en el cards padre
// entre section y 'a'
$cards.insertAdjacentElement('beforebegin', $nuevoEle)
*/



// ************ Manejadores Eventos ***************

/*
//creamos un arrow function para el boton (no es correcto)
const holaMundo = () =>{
  alert('hola mundoooo')
  console.log(event)
}


// Manejador semantico

// evento semantico   (es correcto pero muy limitante a 1 evento)
// referenciamos el boton
const $botonSemantico = document.querySelector('#evento-semantico')

// referencia.evento = a la funcion
$botonSemantico.onclick = holaMundo

//referencia mas arrow function
$botonSemantico.onclick = (event) =>{
  alert('holaa con manejador de eventos semantico')
  console.log(event)
}


// Manejador multiple
// addEventListener nos permite muchos eventos


// crear la funcion en js
const saludarMundo = () =>{
  alert('holaaa adddEventttListenerrrr')
}

//referenciar el objeto del html
const $multiple = document.getElementById('evento-multiple')

// primer evento
// aplicar el evento al objeto html referenciado
$multiple.addEventListener('click', saludarMundo)

// segundo evento
$multiple.addEventListener('click', ()=>{
  alert('esta es mi segundo evento')
})
*/


// ********* Eventos con parametros ***********

/*
// crear la funcion en js
const saludarMundo = (nom = 'Desconocido') =>{
  alert(`hola ${nom}`)
  console.log(event)
}

//referenciar el objeto del html
const $multiple = document.getElementById('evento-multiple')


// aplicar el evento al objeto html referenciado
// crear una arrow function anonima y dentro de ella
// escribimos la funcion y tambien su parametro
$multiple.addEventListener('click', ()=>{saludarMundo('diego')})


// remover eventos

const $remo = document.getElementById('evento-remover')


const removerClick = (event) =>{
  alert(`quitando el evento de tipo -> ${event.type}`)
  console.log(event)
  $remo.removeEventListener('dblclick', removerClick)

  $remo.disabled = true //opaco
}

$remo.addEventListener('dblclick', removerClick)
*/


// ********** Flujo de eventos (Burbuja / Captura) ***********

/*
//referenciar todos los div que estan dentro de .eventos-flujo
const $divDentro = document.querySelectorAll('.eventos-flujo div')
console.log($divDentro)


//creamos la funcion para cada div
function flujoEvento (event){
               // acceder al nombre de la clase
  console.log(`soy el div ${this.className}, el click lo origino ${event.target.className}`)
}


//por cada div recorrido añadirle un addEventListener
$divDentro.forEach(div=>{
  //burbuja
  //div.addEventListener('click', flujoEvento, false)

  //captura
  //div.addEventListener('click', flujoEvento, true)

  //captura solo se ejecuta una vez
  div.addEventListener('click', flujoEvento, {
    capture: true,
    once: true
  })
})
*/



// ********** stopPropagation & preventDefault ***********

/*
//referenciar todos los div que estan dentro de .eventos-flujo
const $divDentro = document.querySelectorAll('.eventos-flujo div')


//creamos la funcion para cada div
function flujoEvento (event){
               // acceder al nombre de la clase
  console.log(`soy el div ${this.className}, el click lo origino ${event.target.className}`)
  event.stopPropagation() //detenemos el flujo
}


//por cada div recorrido añadirle un addEventListener
$divDentro.forEach(div=>{
  //burbuja
  div.addEventListener('click', flujoEvento, false)
})


//referenciar al enlace
const $enlace = document.querySelector('.eventos-flujo a')

$enlace.addEventListener('click', (event)=>{
  alert('vamos a la pagina del profe')
  //por defecto se va a otra pagina, aqui eliminamos
  event.preventDefault() //elimina los eventos por defecto
})
*/


// ************ Delegacion de eventos *************


/*
function flujoEvento (event){ //creamos la funcion para cada div
  console.log(`soy el div ${this}, el click lo origino ${event.target.className}`) // acceder al nombre de la clase
}


document.addEventListener('click', (event)=>{ //colocar el evento a todo el documento
  console.log('click en ', event.target) //nos muestra el elemento cuando hacemos click

  if (event.target.matches('.eventos-flujo div')) { // cuando clickeo coincide con el lugar
    alert(`soy la clase -> ${event.target.className} <-`)
    flujoEvento(event)
  }

  if(event.target.matches('.eventos-flujo a')){ //si coincide el clickeo, alli hace el evento
    alert('coincide con el lugar al hacer click')
    event.preventDefault() //elimina los eventos por defecto
  }
})
*/




// ************ BOM Propiedades y eventos *************

/*
window.addEventListener('resize', (event)=>{

  console.log('**** evento resize ****')
  //tamaño de la pagina
  console.log(window.innerHeight+' alto')
  console.log(window.innerWidth+' ancho')


  //tamaño del navegador
  console.log(window.outerHeight)
  console.log(window.outerWidth)

 

  console.log(event)
})


window.addEventListener('scroll', (event)=>{

   console.log('**** evento scroll ****')
   //scroll
   console.log(window.scrollX+' horizontal') //horizontal
   console.log(window.scrollY+' vertical') //vertical
   console.log(event)
})


window.addEventListener('load', (event)=>{

  console.log('**** evento load ****')
  //scroll
  console.log(window.screenX) //horizontal
  console.log(window.screenY) //vertical
  console.log(event)
})


// esto es muy eficiente

document.addEventListener('DOMContentLoaded', event =>{
  console.log('**** evento DOMContentLoaded ****')
  //scroll
  console.log(window.screenX) //horizontal
  console.log(window.screenY) //vertical
  console.log(event)
})
*/

// ************ BOM Eventos *************
// con delegacion de eventos
/*
let sitio

document.addEventListener('click', (event) =>{
  console.log(`objeto `, event.target)

  if (event.target.matches('#abrir-ventana')) {
    sitio = window.open('https://github.com/')
  }

  if (event.target.matches('#cerrar-ventana')) {
    sitio.close()
  }

  if (event.target.matches('#imprimir-ventana')) {
    window.print()
  }
})
*/



// ************ BOM Objetos, url, historial, navegador *************


/*
console.log("********** Objeto URL (location) **********");
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.search);
console.log(location.pathname);
//location.reload();
*/

/*
console.log("********** Objeto Historial (history) **********");
console.log(history);
console.log(history.length);
//history.forward(1);
//history.go(-3);
//history.back(2);
*/


/*
console.log("********** Objeto Navegador (navigator) **********");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent); 
*/