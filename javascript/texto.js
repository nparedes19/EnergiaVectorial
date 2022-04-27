/*pasar a ingles*/

btnIngles = document.getElementById("ingles")
modoIngles = false
document.getElementById("deIngles").classList.add("noMostrar")
document.getElementById("caIngles").classList.add("noMostrar")
btnIngles.addEventListener("click",e =>{
    if (modoIngles===false){
        btnIngles.textContent = "Español";
        document.querySelector(".cEspañol").src="1. HOME/FOTO_CAR_INICIOingles.png"
        document.querySelector(".txtMobile").src="3.3 ÚLTIMA MILLA/pagina-nati1.png"
        document.getElementById("deEspañol").classList.add("noMostrar")
        document.getElementById("deIngles").classList.add("mostrar")
        document.getElementById("deEspañol").classList.remove("mostrar")
        document.getElementById("navElectrico").textContent = "100% electric"
        document.getElementById("navServicios").textContent = "Services"
        document.getElementById("navTaller").textContent = "Workshop"
        document.getElementById("navBoton").textContent = "Contact us"
        document.getElementById("caIngles").classList.add("mostrarFlex")
        document.getElementById("caEspañol").classList.add("noMostrar")
        document.getElementById("caEspañol").classList.remove("mostrarFlex")
        document.querySelector(".sabemosEspañol").classList.add("noMostrar")
        document.querySelector(".sabemosIngles").classList.add("mostrar")
        document.querySelector(".disEspañol").classList.add("noMostrar")
        document.querySelector(".disIngles").classList.add("mostrar")
        document.querySelector(".nuestrosEspañol").classList.add("noMostrar")
        document.querySelector(".nuestrosIngles").classList.add("mostrar")
        document.getElementById("btnHomeMobile").textContent = "Click here"
        document.querySelector(".cotizaEspañol").classList.add("noMostrar")
        document.querySelector(".cotizaIngles").classList.add("mostrar")
        document.getElementById("btnCotiza").textContent = "Click here"
        document.querySelector(".españolClientes").classList.add("noMostrar")
        document.querySelector(".inglesClientes").classList.add("mostrarFlex")
        document.querySelector(".movilidadEspañol").classList.add("noMostrar")
        document.querySelector(".movilidadIngles").classList.add("mostrarFlex")
        document.querySelector(".tiEspañol").classList.add("noMostrar")
        document.querySelector(".tiIngles").classList.add("mostrarFlex")
        document.querySelector(".teEspañol").classList.add("noMostrar")
        document.querySelector(".teIngles").classList.add("mostrarFlex")
        document.querySelector(".tiEspañol1").classList.add("noMostrar")
        document.querySelector(".tiIngles1").classList.add("mostrarFlex")
        document.querySelector(".teEspañol1").classList.add("noMostrar")
        document.querySelector(".teIngles1").classList.add("mostrarFlex")
        document.querySelector(".aliadosEspañol").classList.add("noMostrar")
        document.querySelector(".aliadosIngles").classList.add("mostrarFlex")
        document.querySelector(".alliesEspañol").classList.add("noMostrar")
        document.querySelector(".alliesIngles").classList.add("mostrarFlex")
        document.querySelector(".cambioMobileEspañol").classList.add("noMostrar")
        document.querySelector(".cambioMobileIngles").classList.add("mostrar")
        document.querySelector(".btnCambioMobileHome").textContent = "Click here"
        modoIngles = true;
    }else{
        btnIngles.textContent = "Ingles";
        document.querySelector(".txtMobile").src="3.3 ÚLTIMA MILLA/texto-pagina.png"
        document.querySelector(".cEspañol").src="1. HOME/FOTO_CAR_INICIO.png"
        document.getElementById("deEspañol").classList.add("mostrar")
        document.getElementById("deIngles").classList.remove("mostrar")
        document.getElementById("navElectrico").textContent = "100% eléctrico"
        document.getElementById("navServicios").textContent = "Servicios"
        document.getElementById("navTaller").textContent = "Taller"
        document.getElementById("navBoton").textContent = "Contáctenos"
        document.getElementById("caEspañol").classList.add("mostrarFlex")
        document.getElementById("caIngles").classList.remove("mostrarFlex")
        document.getElementById("btnHomeMobile").textContent = "Click aquí"
        document.querySelector(".sabemosEspañol").classList.remove("noMostrar")
        document.querySelector(".sabemosIngles").classList.remove("mostrar")
        document.querySelector(".disEspañol").classList.remove("noMostrar")
        document.querySelector(".disIngles").classList.remove("mostrar")
        document.querySelector(".nuestrosEspañol").classList.remove("noMostrar")
        document.querySelector(".nuestrosIngles").classList.remove("mostrar")
        document.getElementById("btnHomeMobile").textContent = "Click aquí"
        document.querySelector(".cotizaEspañol").classList.remove("noMostrar")
        document.querySelector(".cotizaIngles").classList.remove("mostrar")
        document.getElementById("btnCotiza").textContent = "Click aquí"
        document.querySelector(".españolClientes").classList.remove("noMostrar")
        document.querySelector(".inglesClientes").classList.remove("mostrarFlex")
        document.querySelector(".movilidadEspañol").classList.remove("noMostrar")
        document.querySelector(".movilidadIngles").classList.remove("mostrarFlex")
        document.querySelector(".tiEspañol").classList.remove("noMostrar")
        document.querySelector(".tiIngles").classList.remove("mostrarFlex")
        document.querySelector(".teEspañol").classList.remove("noMostrar")
        document.querySelector(".teIngles").classList.remove("mostrarFlex")
        document.querySelector(".tiEspañol1").classList.remove("noMostrar")
        document.querySelector(".tiIngles1").classList.remove("mostrarFlex")
        document.querySelector(".teEspañol1").classList.remove("noMostrar")
        document.querySelector(".teIngles1").classList.remove("mostrarFlex")
        document.querySelector(".aliadosEspañol").classList.remove("noMostrar")
        document.querySelector(".aliadosIngles").classList.remove("mostrarFlex")
        document.querySelector(".alliesEspañol").classList.remove("noMostrar")
        document.querySelector(".alliesIngles").classList.remove("mostrarFlex")
        document.querySelector(".cambioMobileEspañol").classList.remove("noMostrar")
        document.querySelector(".cambioMobileIngles").classList.remove("mostrar")
        document.querySelector(".btnCambioMobileHome").textContent = "Click aquí"
        modoIngles = false;
    }
})