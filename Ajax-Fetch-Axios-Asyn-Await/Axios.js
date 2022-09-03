(()=>{
     //referencia del elemento del DOM
     const $id = document.getElementById('axios')

     //creacion del fragment
     const $recipiente = document.createDocumentFragment()

     //console.log($id)

     axios.get('https://jsonplaceholder.typicode.com/users')

          .then(respuesta =>{
               //console.log(respuesta)
               return respuesta.status === 200 ? respuesta.data : Promise.reject(respuesta)
          })
          
          //aqui ya viene con la data
          .then(respuestaJSON =>{
               
               //recorremos la data
               respuestaJSON.forEach(element =>{
                    const $li = document.createElement('li')
                    $li.innerHTML = `${element.name} --- ${element.email}`
                    $recipiente.appendChild($li)
               })
               $id.appendChild($recipiente)
          })


          .catch((error)=>{
               //console.log(error)
               $id.innerHTML = `Error: ${error.message} `
          })
          .finally(()=>{
               //console.log('esto se ejecutara siempre')
          })
})()