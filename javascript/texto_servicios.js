btnIngles = document.getElementById("ingles")
modoIngles = false

btnIngles.addEventListener("click",e =>{
    if (modoIngles===false){
        btnIngles.textContent = "Español";
        document.getElementById("navElectrico").textContent = "100% electric"
        document.getElementById("navServicios").textContent = "Services"
        document.getElementById("navTaller").textContent = "Workshop"
        document.getElementById("navBoton").textContent = "Contact us"
        document.querySelector(".tServiciosEspañol").classList.add("noMostrar")
        document.querySelector(".tServiciosIngles").classList.add("mostrar")
        document.querySelector(".tServiciosEspañol1").classList.add("noMostrar")
        document.querySelector(".tServiciosIngles1").classList.add("mostrar")
        document.querySelector(".tServiciosEspañol2").classList.add("noMostrar")
        document.querySelector(".tServiciosIngles2").classList.add("mostrar")
        document.querySelector(".tServiciosEspañol3").classList.add("noMostrar")
        document.querySelector(".tServiciosIngles3").classList.add("mostrar")
        document.querySelector(".tServiciosEspañol4").classList.add("noMostrar")
        document.querySelector(".tServiciosIngles4").classList.add("mostrar")
        document.querySelector(".tEspañol").classList.add("noMostrar")
        document.querySelector(".tIngles").classList.add("mostrar")
        document.querySelector(".tEspañol1").classList.add("noMostrar")
        document.querySelector(".tIngles1").classList.add("mostrar")
        document.querySelector(".tEspañol2").classList.add("noMostrar")
        document.querySelector(".tIngles2").classList.add("mostrar")
        document.querySelector(".tEspañol3").classList.add("noMostrar")
        document.querySelector(".tIngles3").classList.add("mostrar")
        document.querySelector(".tEspañol4").classList.add("noMostrar")
        document.querySelector(".tIngles4").classList.add("mostrar")
        document.querySelector(".seEspañol").classList.add("noMostrar")
        document.querySelector(".seIngles").classList.add("mostrar")
        modoIngles = true;
    }else{
        btnIngles.textContent = "Inglés";
        document.getElementById("navElectrico").textContent = "100% eléctrico"
        document.getElementById("navServicios").textContent = "Servicios"
        document.getElementById("navTaller").textContent = "Taller"
        document.getElementById("navBoton").textContent = "Contáctenos"
        document.querySelector(".tServiciosEspañol").classList.remove("noMostrar")
        document.querySelector(".tServiciosIngles").classList.remove("mostrar")
        document.querySelector(".tServiciosEspañol1").classList.remove("noMostrar")
        document.querySelector(".tServiciosIngles1").classList.remove("mostrar")
        document.querySelector(".tServiciosEspañol2").classList.remove("noMostrar")
        document.querySelector(".tServiciosIngles2").classList.remove("mostrar")
        document.querySelector(".tServiciosEspañol3").classList.remove("noMostrar")
        document.querySelector(".tServiciosIngles3").classList.remove("mostrar")
        document.querySelector(".tServiciosEspañol4").classList.remove("noMostrar")
        document.querySelector(".tServiciosIngles4").classList.remove("mostrar")
        document.querySelector(".tEspañol").classList.remove("noMostrar")
        document.querySelector(".tIngles").classList.remove("mostrar")
        document.querySelector(".tEspañol1").classList.remove("noMostrar")
        document.querySelector(".tIngles1").classList.remove("mostrar")
        document.querySelector(".tEspañol2").classList.remove("noMostrar")
        document.querySelector(".tIngles2").classList.remove("mostrar")
        document.querySelector(".tEspañol3").classList.remove("noMostrar")
        document.querySelector(".tIngles3").classList.remove("mostrar")
        document.querySelector(".tEspañol4").classList.remove("noMostrar")
        document.querySelector(".tIngles4").classList.remove("mostrar")
        document.querySelector(".seEspañol").classList.remove("noMostrar")
        document.querySelector(".seIngles").classList.remove("mostrar")
        modoIngles = false;
    }
})