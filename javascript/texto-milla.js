btnIngles = document.getElementById("ingles")
modoIngles = false

btnIngles.addEventListener("click",e =>{
    if (modoIngles===false){
        btnIngles.textContent = "Español";
        document.getElementById("navElectrico").textContent = "100% electric"
        document.getElementById("navServicios").textContent = "Services"
        document.getElementById("navTaller").textContent = "Workshop"
        document.getElementById("navBoton").textContent = "Contact us"
        modoIngles = true;
    }else{
        btnIngles.textContent = "Ingles";
        document.getElementById("navElectrico").textContent = "100% eléctrico"
        document.getElementById("navServicios").textContent = "Servicios"
        document.getElementById("navTaller").textContent = "Taller"
        document.getElementById("navBoton").textContent = "Contáctenos"

        modoIngles = false;
    }
})