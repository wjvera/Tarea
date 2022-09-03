const docu = document;

//funcion anonima autoejecutable

(()=>{

    //obtener la referencia del DOM
    const $fetch = docu.getElementById('mostrarfetch')

    //recipiente --> para no sobrecargar el DOM
    const $recipiente = docu.createDocumentFragment()

    fetch('json/users.json')

      // respuesta = toda la api en texto plano
            .then(respuesta =>{
                return respuesta.ok ? respuesta.json() : Promise.reject(respuesta) //transformamos la api en json()
            })


            //ahora respTrans = respuesta.json()
            .then(respTrans =>{

               respTrans.forEach(element => { //recorremos el objeto respTrans
                let $li = docu.createElement('li') //creamos un li
                //en ese li se guardara las propiedades
                $li.innerHTML = `${element.name} --- ${element.email}`
                $recipiente.appendChild($li)
               });

               $fetch.appendChild($recipiente)
            })

        // error = reject
            .catch(error =>{
                console.log(error)
                let err = error.status
                $fetch.innerHTML = `Error ${err} no encontrado`
            })
            .finally(()=>{
                //console.log('esto se ejecutara siempre')
            })
    
})()