$(document).ready(() => {
    $('#tvesModal').css({ "display": "block" })
    $('body').css({ "position": "static", "height": "100%", "overflow": "hidden" })
})

$('.close').click(() => {
    $('#tvesModal').css({ "display": "none" })
    $('body').css({ "position": "inherit", "height": "auto", "overflow": "visible" })
})