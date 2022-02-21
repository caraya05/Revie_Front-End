var buton = document.querySelector("#envio");

buton.addEventListener("click", () => {
    var con1 = document.getElementById("password1").value;
    var con2 = document.getElementById("password2").value;
    var con3 = document.getElementById("password3").value;

    if (con1 != con2) {
        window.alert("Las contraseñas deben coincidir");

    }
    if (con1 == con2 && con3 != "") {
        window.alert("Cambio exitoso");

    }
});