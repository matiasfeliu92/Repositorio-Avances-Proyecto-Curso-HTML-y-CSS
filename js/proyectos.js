// const galeria = document.querySelector('.Proyectos__galeria')

const imagenes = document.querySelectorAll('.Proyectos__img')

console.log(imagenes)

imagenes.addEventListener('click', abrirImagen())

function abrirImagen() {
    console.log("Deseas ver esta imagen?")
}

// console.log(galeria);

// let imagenes = [
//     { srcImg: './Imagenes/Nuevo Exterior 1.1.png', altImg: "Imagen 1" },
//     { srcImg: './Imagenes/Escena 3.png', altImg: "Imagen 2" },
// ]

// console.log(imagenes)

// const mostrarImagenes = (array) => {
//     // galeria.innerHTML = ''

//     array.forEach((item) => {
//             const div = document.createElement('div')
//             div.classList.add('col-md-3')

//             div.innerHTML = `
//                     <h1 class="text-center">${item.altImg}</h1>
//                     <img src=${item.srcImg} alt=${item.altImg}>
//                     <button>"Click me"</button>
//                     `

//             galeria.appendChild(div)
//         }

//     )
// }

// console.log(galeria)