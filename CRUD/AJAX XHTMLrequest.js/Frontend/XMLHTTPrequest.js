const docu = document;

//elemento DOM table
const $tabla = docu.querySelector('.crud-table') 

//elemento DOM formulario
const $form = docu.querySelector('.crud-form')

//elemento DOM titulo
const $titulo = docu.querySelector('.crud-title')

//elemento DOM template
const $template = docu.querySelector('#crud-template').content


//fragment
const $recipiente = docu.createDocumentFragment()


const ajax = (parametros) =>{

    let {url, metodo, Exito, Error, data} = parametros

    const xhr = new XMLHttpRequest()

    xhr.addEventListener('readystatechange', event =>{

        if(xhr.readyState !== 4){return}

        if(xhr.status >= 200 && xhr.status < 300){
            let mandarJSON = JSON.parse(xhr.responseText)
            Exito(mandarJSON)
        }else{
            let error = `Error ${xhr.status} / ${xhr.statusText} no existe`
            Error(`Error ${xhr.status}: ${error}`)
        }
    })

    xhr.open(metodo || "GET", url)

    //headers
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8")

    xhr.send(JSON.stringify(data))
}

function recorrerDom(dat){

    console.log(dat)
    dat.forEach(element => {
       //$template.querySelector('.id').textContent = element.id
       $template.querySelector('.nombre').textContent = element.Nombre
       $template.querySelector('.apellido').textContent = element.Apellido
       $template.querySelector('.carrera').textContent = element.Carrera
       $template.querySelector('.semestre').textContent = element.Semestre


       //nos permite agregarle propiedades al boton .edit
       $template.querySelector('.edit').dataset.id = element.id
       $template.querySelector('.edit').dataset.nombre = element.Nombre
       $template.querySelector('.edit').dataset.apellido = element.Apellido
       $template.querySelector('.edit').dataset.carrera = element.Carrera
       $template.querySelector('.edit').dataset.semestre = element.Semestre

       $template.querySelector('.delete').dataset.id = element.id



       //clonar el template para que se quede en memoria
       let $clone = docu.importNode($template, true)
       $recipiente.appendChild($clone)
    });

    //aqui mostramos todos los registros
   $tabla.querySelector('#mostrarTabla').appendChild($recipiente)
}


const obtenerTodo = () =>{
    ajax({
        metodo: "GET",
        url: "http://localhost:3000/Estudiante",
        Exito: (respuestaJa)=>{recorrerDom(respuestaJa)},
        Error: (errorElse)=>{
            console.log(errorElse)
            $tabla.insertAdjacentHTML('afterend', `<p><b>${errorElse}</b></p>`)
        },
        data: null
    })
}

docu.addEventListener("DOMContentLoaded", obtenerTodo)



//POST - UPDATE
docu.addEventListener("submit", event =>{
    if (event.target === $form) {
        event.preventDefault()
        

        //si no existe el valor value del elemento (oculto)
        if (!event.target.oculto.value) {

            //create - post
            ajax({
                url: "http://localhost:3000/Estudiante",
                metodo: "POST",
                Exito: (respuesta)=> location.reload(),
                Error: ()=> $form.insertAdjacentHTML('afterend', `<p><b>${errorElse}</b></p>`),
                //los valores de los inputs pasalo a la API
                data: {
                // db.json:   form         clase       valor 
                    Nombre: event.target.inputnombre.value,
                    Apellido: event.target.inputapellido.value,
                    Carrera: event.target.inputcarrera.value,
                    Semestre: event.target.inputsemestre.value
                }
            }) 

        }else{
            //update - put

            ajax({
                url: `http://localhost:3000/Estudiante/${event.target.oculto.value}`,
                metodo: "PUT",
                Exito: (respuesta)=> location.reload(),
                Error: ()=> $form.insertAdjacentHTML('afterend', `<p><b>${errorElse}</b></p>`),
                data: {
                // db.json:   form         clase       valor 
                    Nombre: event.target.inputnombre.value,
                    Apellido: event.target.inputapellido.value,
                    Carrera: event.target.inputcarrera.value,
                    Semestre: event.target.inputsemestre.value
                }
            })

        }
    }
})


//delegacion de eventos del boton edit y delete
docu.addEventListener('click', element =>{

    if (element.target.matches('.edit')) {
        $titulo.textContent= 'Editar Estudiante'

        //pasame los valores del dataset a los inputs
    //los name del form (value) =   dataset del boton edit
        $form.inputnombre.value = element.target.dataset.nombre
        $form.inputapellido.value = element.target.dataset.apellido
        $form.inputcarrera.value = element.target.dataset.carrera
        $form.inputsemestre.value = element.target.dataset.semestre
        $form.oculto.value = element.target.dataset.id
    }



    if (element.target.matches('.delete')) {

        let re = confirm(`Deseas eliminar el registro ${element.target.dataset.id}?`)

        if (re) {

            //delete
            ajax({
                url: `http://localhost:3000/Estudiante/${element.target.dataset.id}`,
                metodo: "DELETE",
                Exito: (respuesta)=> location.reload(),
                Error: ()=> alert(error)
            })
        } else {
            
        }
    }
})