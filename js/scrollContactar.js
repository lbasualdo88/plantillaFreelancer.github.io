document.addEventListener('DOMContentLoaded', function() {
    iniciarApp()
});

function iniciarApp() {
    scrollNav();
}
function scrollNav(){
    const enlace = document.querySelector('.botonContactar');

    enlace.addEventListener('click', (e)=>{
        e.preventDefault();
        const valorId = e.target.attributes.href.value;
        const form = document.querySelector(valorId);
        form.scrollIntoView({behavior: "smooth"});
    })
}

/*
const botonContactar = document.querySelector(".botonContactar")

botonContactar.addEventListener('click', function mostrarMensaje(){
    alert("Funcion no disponible por ahora, contactar por redes, disculpe las molestias");
})

const botonEnviar = document.querySelector(".botonEnviar")


botonEnviar.addEventListener('click', function mostrarMSJ(){
    alert("Estamos validando el formulario para que se pueda contactar, disculpe las molestias, puede encontrarme por linkedln");
})
*/