(()=>{

    //obtener referencia del elemento DOM
    const $id = document.getElementById('axios-async')
    //console.log($id)

    //fragment
    const $recipiente = document.createDocumentFragment()

    async function obtenerData(){
 
        try {

            let respuesta = await axios.get('https://jsonplaceholder.typicode.com/users')
           // console.log(respuesta)
            let data = await respuesta.data
            //console.log(data)

            if(respuesta.status === 200){
                data.forEach(element => {
                    let $li = document.createElement('li')
                    $li.innerHTML = `${element.name} -- ${element.email}`
                    $recipiente.appendChild($li)
                });
    
                $id.appendChild($recipiente)
            }else{
                Promise.reject(respuesta)
            }

        }

        catch (error) {
           $id.innerHTML = `Error: ${error.message}`
        }

        finally{

        }
    }

    obtenerData()
})()