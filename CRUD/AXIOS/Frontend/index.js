
//obtener el id del elemento DOM
let $mostrar = document.getElementById('mostrarTabla')
//crear el fragment
let $recipiente = document.createDocumentFragment()

//creamos el escuchador y llamamos a la funcion
document.addEventListener('DOMContentLoaded', traerApi)


//creamos la funcion async
async function traerApi(){

    try {
        const respuesta = await fetch('http://localhost:3000/Estudiante')
        if (respuesta.ok) {
            let data = await respuesta.json()
            recorrerJson(data)
        }else{
            //capturamos el error con 'respuesta'
            throw{estado: respuesta.status, estadoText: respuesta.statusText}
        }
        
    }

    catch (error) {
        error.statusText = 'Link de la Api incorrecta' 
        $mostrar.innerHTML = `Error: ${error.estado}  ==> ${error.statusText}`
    }

    finally{

    }
}

function recorrerJson(dt){
    
    dt.forEach(element => {
        console.log(element)
        const fila = document.createElement('tr')
        fila.innerHTML = `
            <td>${element.id}</td>
            <td>${element.Nombre}</td>
            <td>${element.Apellido}</td>
            <td>${element.Carrera}</td>
            <td>${element.Semestre}</td>
        `
        $recipiente.appendChild(fila)
    });

    $mostrar.appendChild($recipiente)

}