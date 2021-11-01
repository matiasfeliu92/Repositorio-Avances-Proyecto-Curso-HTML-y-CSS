const imgGaleria = $('.Proyectos__img')
console.log(imgGaleria)

$('.Proyectos__img').click((event) => {
    $('.Proyectos__img').toggleClass('agrandarImagenes')
    event.stopImmediatePropagation()
})