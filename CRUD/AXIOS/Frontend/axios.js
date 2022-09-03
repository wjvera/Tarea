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

const obtenerApi = async() =>{
    try {
        let res = await axios.get('http://localhost:3000/Estudiante')
        console.log(res)
        let json = await res.data
        
        if (res.status === 200) {
            recorrerData(json)
        }
    } 
    catch (error) {
       let mes = error.statusText || 'Ocurrio un error'
       $tabla.insertAdjacentHTML('afterend', `<p><b>Estado ${error.message} / Info: ${mes}</b></p>`)
    }
}


const recorrerData = (dat) =>{
    console.log(dat)
    dat.forEach(element => {
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
       $template.querySelector('.delete').dataset.nombrebotonedit = element.Nombre

        let $clonar = docu.importNode($template, true)
        $recipiente.appendChild($clonar)
    });
    $tabla.querySelector('#mostrarTabla').appendChild($recipiente)
}


docu.addEventListener('DOMContentLoaded', obtenerApi)

//POST / PUT
docu.addEventListener('submit', async element =>{

    if (element.target === $form) {
        
        element.preventDefault()

        //post
        if(!element.target.oculto.value){
            try {
                let opciones = {
                    method: "POST",
                    headers: {
                        "Content-type":"application/json; charset=utf-8"
                    },
                    data: JSON.stringify({
                        Nombre: element.target.innombre.value,
                        Apellido: element.target.inapellido.value,
                        Carrera: element.target.incarrera.value,
                        Semestre: element.target.insemestre.value,
                    })
                }

                respuesta = await axios("http://localhost:3000/Estudiante", opciones)
                json = await respuesta.data

                location.reload()
            } 
            catch (error) {
                let mes = error.statusText || 'Ocurrio un error en el POST'
                $form.insertAdjacentHTML('afterend', `<p><b>Estado ${error.message} / Info: ${mes}</b></p>`)
            }
        }
        //put
        else{
            try {
                let opciones = {
                    method: "PUT",
                    headers: {
                        "Content-type":"application/json; charset=utf-8"
                    },
                    data: JSON.stringify({
                        Nombre: element.target.innombre.value,
                        Apellido: element.target.inapellido.value,
                        Carrera: element.target.incarrera.value,
                        Semestre: element.target.insemestre.value,
                    })
                }

                respuesta = await axios(`http://localhost:3000/Estudiante/${element.target.oculto.value}`, opciones)
                json = await respuesta.data

                location.reload()
            } 
            catch (error) {
                let mes = error.statusText || 'Ocurrio un error en el PUT'
                $form.insertAdjacentHTML('afterend', `<p><b>Estado ${error.message} / Info: ${mes}</b></p>`)
            }
        }
    }
})

//delegacion de evento --> eliminar
docu.addEventListener('click', async element =>{

    if(element.target.matches('.edit')){
        $titulo.textContent = 'Editar Estudiante'

        $form.innombre.value = element.target.dataset.nombrebotonedit
        $form.inapellido.value = element.target.dataset.apellidobotonedit
        $form.incarrera.value = element.target.dataset.carrerabotonedit
        $form.insemestre.value = element.target.dataset.semestrebotonedit

        $form.oculto.value = element.target.dataset.idbotonedit
    }

    if(element.target.matches('.delete')){
        let respu = confirm(`Deseas eliminar el registro ${element.target.dataset.nombrebotonedit}`)

        if (respu) {
            try {
                let opciones = {
                    method: "DELETE",
                    headers: {
                        "Content-type":"application/json; charset=utf-8"
                    }
                }

                respuesta = await axios(`http://localhost:3000/Estudiante/${element.target.dataset.idbotonedit}`, opciones)
                json = await respuesta.data

                location.reload()
            } 
            catch (error) {
                let mes = error.statusText || 'Ocurrio un error en el DELETE'
                alert(`Error: ${error.status} / Info: ${mes}`)
            }
        }
    }
})