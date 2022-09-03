

(()=>{

    //referencia del elemento del DOM
    const $id = document.getElementById('fetch-async')

    //creacion del fragment
    const $recipiente = document.createDocumentFragment()

    async function obtenerDato(){
        try {
            let respuesta = await fetch('https://jsonplaceholder.typicode.com/users')
            let transformado = await respuesta.json() 
           
            if (respuesta.ok) {
                transformado.forEach(element => {
                    const $li = document.createElement('li')
                    $li.innerHTML = `${element.name} --- ${element.email}`
                    $recipiente.appendChild($li)
                });
                $id.appendChild($recipiente)
            }else{
                //capturamos el error con 'respuesta'
                throw{estado: respuesta.status, estadoText: respuesta.statusText}
            }
            
        } 

        //error = respuesta del else
        catch (error) {
            error.statusText = 'Link de la Api incorrecta' 
            $id.innerHTML = `Error: ${error.estado}  ==> ${error.statusText}`
        }
        finally{

        }
    }

    obtenerDato()
})()