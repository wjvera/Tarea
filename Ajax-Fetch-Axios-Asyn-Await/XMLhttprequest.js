
 const d = document;

 (()=>{

    //creamos un elemento de tipo request
    //el cual de alli accedemos a muchos metodos
    const xhr = new XMLHttpRequest()

    //obtenemos el id en el DOM
    const $xhrId = d.getElementById('mostrar')

    //creamos un fragment como recipiente
    const $recipiente = d.createDocumentFragment()


    //asignarle eventos al request
    //readystatechange se lanza cuando detecta cambio de estado
    xhr.addEventListener('readystatechange', event =>{
        if(xhr.readyState !== 4){return}

        if(xhr.status >= 200 && xhr.status < 300){

            //console.log(xhr.responseText) //muestra json en texto plano
            //console.log(typeof xhr.responseText) //string

            //ya es un arreglo transformado a JSON
            let ja = JSON.parse(xhr.responseText)
            //console.log(typeof ja) //object
            
            //recorramos el array
            ja.forEach(devolver =>{

                //creamos un elemento de li
                const $li = d.createElement('li')

                //al li en su inner le agregamos los datos name y phone
                $li.innerHTML = `${devolver.name} --- ${devolver.email}`

                //al li lo agreamos al recipiente 
                $recipiente.appendChild($li)
            })

            //finalmente HACEMOS UNA SOLA INSERCION al DOM
            $xhrId.appendChild($recipiente)
        }else{
            let error = `Error ${xhr.status} / ${xhr.statusText} no existe`
            $xhrId.innerHTML = error
        }
        
    })

    //elemento request le ponemos metodo get, y elemento a consumir
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')

    //desde local
    xhr.open('GET', 'json/users.json')

    //enviamos 
    xhr.send()
})()




