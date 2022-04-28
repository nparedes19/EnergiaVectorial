btnIngles = document.getElementById("ingles")
modoIngles = false

btnIngles.addEventListener("click",e =>{
    if (modoIngles===false){
        btnIngles.textContent = "Español";
        document.querySelector(".cEspañol").src="2. 100_ ELÉCTRICO/FOTO-BMWingles.png"
        document.getElementById("navElectrico").textContent = "100% electric"
        document.getElementById("navServicios").textContent = "Services"
        document.getElementById("navTaller").textContent = "Workshop"
        document.getElementById("navBoton").textContent = "Contact us"
        document.querySelector(".ecoPEspañol").classList.add("noMostrar")
        document.querySelector(".ecoPEspañol1").classList.add("noMostrar")
        document.querySelector(".ecoPEspañol2").classList.add("noMostrar")
        document.querySelector(".ecoPIngles").classList.add("mostrar")
        document.querySelector(".ecoPIngles1").classList.add("mostrar")
        document.querySelector(".ecoPIngles2").classList.add("mostrar")
        document.querySelector(".teamEspañol").classList.add("noMostrar")
        document.querySelector(".teamEspañol1").classList.add("noMostrar")
        document.querySelector(".teamEspañol2").classList.add("noMostrar")
        document.querySelector(".teamIngles").classList.add("mostrar")
        document.querySelector(".teamIngles1").classList.add("mostrar")
        document.querySelector(".teamIngles2").classList.add("mostrar")
        document.querySelector(".conoceEspañol").classList.add("noMostrar")
        document.querySelector(".conoceIngles").classList.add("mostrar")
        document.getElementById("btnConoce").textContent = "Click here"
        document.querySelector(".pEspañol").classList.add("noMostrar")
        document.querySelector(".pIngles").classList.add("mostrar")
        document.querySelector(".pEspañol1").classList.add("noMostrar")
        document.querySelector(".pIngles1").classList.add("mostrar")
        document.querySelector(".pEspañol2").classList.add("noMostrar")
        document.querySelector(".pIngles2").classList.add("mostrar")
        document.getElementById("btnConoceElec").textContent = "Click here"
        modoIngles = true;
    }else{
        btnIngles.textContent = "Inglés";
        document.querySelector(".cEspañol").src="2. 100_ ELÉCTRICO/FOTO-BMW.png"
        document.getElementById("navElectrico").textContent = "100% eléctrico"
        document.getElementById("navServicios").textContent = "Servicios"
        document.getElementById("navTaller").textContent = "Taller"
        document.getElementById("navBoton").textContent = "Contáctenos"
        document.querySelector(".ecoPEspañol").classList.remove("noMostrar")
        document.querySelector(".ecoPEspañol1").classList.remove("noMostrar")
        document.querySelector(".ecoPEspañol2").classList.remove("noMostrar")
        document.querySelector(".ecoPIngles").classList.remove("mostrar")
        document.querySelector(".ecoPIngles1").classList.remove("mostrar")
        document.querySelector(".ecoPIngles2").classList.remove("mostrar")
        document.querySelector(".teamEspañol").classList.remove("noMostrar")
        document.querySelector(".teamEspañol1").classList.remove("noMostrar")
        document.querySelector(".teamEspañol2").classList.remove("noMostrar")
        document.querySelector(".teamIngles").classList.remove("mostrar")
        document.querySelector(".teamIngles1").classList.remove("mostrar")
        document.querySelector(".teamIngles2").classList.remove("mostrar")
        document.querySelector(".conoceEspañol").classList.remove("noMostrar")
        document.querySelector(".conoceIngles").classList.remove("mostrar")
        document.getElementById("btnConoce").textContent = "Click aquí"
        document.querySelector(".pEspañol").classList.remove("noMostrar")
        document.querySelector(".pIngles").classList.remove("mostrar")
        document.getElementById("btnConoceElec").textContent = "Click aquí"
        document.querySelector(".pEspañol1").classList.remove("noMostrar")
        document.querySelector(".pIngles1").classList.remove("mostrar")
        document.querySelector(".pEspañol2").classList.remove("noMostrar")
        document.querySelector(".pIngles2").classList.remove("mostrar")
        modoIngles = false;
    }
})