
const api = 'https://jsonplaceholder.typicode.com/photos'
const $id = document.getElementById('colocar')
const $recipiente = document.createDocumentFragment()

//delegacion de evento

document.addEventListener('DOMContentLoaded', llamarAPI)


//creamos la funcion Async
async function llamarAPI(){
    try {
        const respuesta = await axios.get(api)
        console.log(respuesta)
        if(respuesta.status === 200){
            const data = await respuesta.data
            mostrarDOM(data)
        }else{
            Promise.reject(respuesta)
        }
    } 


    catch (error) {
        console.log(error)
        $id.innerHTML = `Error: ${error.message}`
    }

    finally{

    }
}

function mostrarDOM(dt){

    dt.forEach(element => {
        let pic = document.createElement('picture')
        pic.innerHTML = `
        <h3>${element.title}</h3>
        <img src="${element.url}" alt="">
        `
        $recipiente.appendChild(pic)
    });
    $id.appendChild($recipiente)
}


