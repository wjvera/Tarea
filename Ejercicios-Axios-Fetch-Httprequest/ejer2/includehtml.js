
document.addEventListener('DOMContentLoaded', element =>{

    const incluirHTML = (div, url) =>{

        const xhr = new XMLHttpRequest()

        xhr.addEventListener('readystatechange', el =>{

            if(xhr.readyState !== 4)return

            if (xhr.status >= 200 && xhr.status < 300) {
                div.innerHTML = xhr.responseText
            }else{
                let mess = xhr.statusText || "Error al cargar el archivo"
                div.outerHTML = `<div><p>Estado:${xhr.status} / Info:${mess}</p></div>`
            }
        })

        xhr.open("GET", url)
        xhr.setRequestHeader("Content-type", "text/html; charset=utf=8")
        xhr.send()

    }


    //recorre el DOM de data atribute
    document.querySelectorAll('[data-include]').forEach(element =>{
                           //del div obtenme el atributo data-include
        incluirHTML(element, element.getAttribute("data-include"))
    })
})

