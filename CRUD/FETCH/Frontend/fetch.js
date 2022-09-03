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


//obtener la API y pasarlo a JSON
const obtenerTodo = async()=>{
    try {
        let respuesta = await fetch("http://localhost:3000/Estudiante")
        let json = await respuesta.json()
        recorrerJSON(json)

        if(!respuesta.ok) throw{estado: respuesta.status, mensaje: respuesta.statusText}
    } 
    catch (error) {
        $tabla.insertAdjacentHTML("afterend", `<p><b>GET - Estado: ${error.estado} / Info: ${error.mensaje}</b></p>`)
    }
}


//recorremos el JSON y mostramos
const recorrerJSON = (data) =>{
    console.log(data)
    data.forEach(element => {
        
        $template.querySelector('.nombre').textContent = element.Nombre
        $template.querySelector('.apellido').textContent = element.Apellido
        $template.querySelector('.carrera').textContent = element.Carrera
        $template.querySelector('.semestre').textContent = element.Semestre

        //nos permite agregarle propiedades al boton .edit
       $template.querySelector('.edit').dataset.idbotonedit = element.id
       $template.querySelector('.edit').dataset.nombrebotonedit = element.Nombre
       $template.querySelector('.edit').dataset.apellidobotonedit = element.Apellido
       $template.querySelector('.edit').dataset.carrerabotonedit = element.Carrera
       $template.querySelector('.edit').dataset.semestrebotonedit = element.Semestre

       $template.querySelector('.delete').dataset.idbotonedit = element.id

       let clonar = docu.importNode($template, true)
       $recipiente.appendChild(clonar)
    });
    $tabla.querySelector('#mostrarTabla').appendChild($recipiente)
}

// obtenerTodo lo guardamos en el contentload
docu.addEventListener('DOMContentLoaded', obtenerTodo)

//registrar y actualizar
docu.addEventListener("submit", async element =>{

    if (element.target === $form) {
        
        element.preventDefault()

        //si el value de oculto esta vacio entonces creamos...
        if (!element.target.oculto.value) {
            
            //POST
            try {
                let opciones = {
                    method: "POST",
                    headers: {
                        "Content-type":"application/json; charset=utf-8"
                    },
                    body: JSON.stringify({
                        Nombre: element.target.innombre.value,
                        Apellido: element.target.inapellido.value,
                        Carrera: element.target.incarrera.value,
                        Semestre: element.target.insemestre.value,
                    })
                }

                

                respuesta = await fetch("http://localhost:3000/Estudiante", opciones)
                json = await respuesta.json()

                if(!respuesta.ok) throw{estado: respuesta.status, mensaje: respuesta.statusText}
                location.reload()
            } 
            catch (error) {
                $form.insertAdjacentHTML("afterend", `<p><b> POST - Estado: ${error.estado} / Info: ${error.mensaje}</b></p>`)
            }
        } 

        //ahora como el input 'oculto' tiene value
        else {
              //PUT
              try {
                let opciones = {
                    method: "PUT",
                    headers: {
                        "Content-type":"application/json; charset=utf-8"
                    },
                    body: JSON.stringify({
                        Nombre: element.target.innombre.value,
                        Apellido: element.target.inapellido.value,
                        Carrera: element.target.incarrera.value,
                        Semestre: element.target.insemestre.value,
                    })
                }

 
                respuesta = await fetch(`http://localhost:3000/Estudiante/${element.target.oculto.value}`, opciones)
                json = await respuesta.json()

                if(!respuesta.ok) throw{estado: respuesta.status, mensaje: respuesta.statusText}
                location.reload()
            }
            catch (error) {
                $form.insertAdjacentHTML("afterend", `<p><b> POST - Estado: ${error.estado} / Info: ${error.mensaje}</b></p>`)
            }
        }
   }
})


// delegacion de eventos  (editar / borrar)
// pasamos los valores de las propiedades del edit al formulario
docu.addEventListener('click', async element =>{

    //editar
    if(element.target.matches('.edit')){
        
        $titulo.textContent = 'Editar Estudiante'

        $form.innombre.value = element.target.dataset.nombrebotonedit
        $form.inapellido.value = element.target.dataset.apellidobotonedit
        $form.insemestre.value = element.target.dataset.semestrebotonedit
        $form.incarrera.value = element.target.dataset.carrerabotonedit

        $form.oculto.value = element.target.dataset.idbotonedit
    }

    //borrar
    if(element.target.matches('.delete')){

        //adentro del delete tengo el id, gracias al dataset
        let re = confirm(`Deseas eliminar el registro ${element.target.dataset.idbotonedit}?`)

        if (re) {
            try {
                let opciones = {
                    method: "DELETE",
                    headers: {
                        "Content-type":"application/json; charset=utf-8"
                    }
                }


                respuesta = await fetch(`http://localhost:3000/Estudiante/${element.target.dataset.idbotonedit}`, opciones)
                json = await respuesta.json()

                if(!respuesta.ok) throw{estado: respuesta.status, mensaje: respuesta.statusText}
                location.reload()
            }
            catch (error) {
               alert(`Estado: ${error.estado} / Info: ${error.mensaje}`)
            }
        }
           
    }


})