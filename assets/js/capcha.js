
var elements = document.querySelectorAll(".element");
var colorSelected = document.querySelector("#colorSelected");
var buton = document.querySelector("#login_buton");
var colorx = 0;
let number = [];
var toastCap = document.getElementById('ErrorCap');
var toastCamp = document.getElementById('ErrorCamp');
var toastCapSel = document.getElementById('ErrorCapSel');
var toastCapSel = document.getElementById('ErrorCapSelno');
var toastExi = document.getElementById('exito');
var option = {
    animation: true,
    delay: 2000
};


elements.forEach((element) => {
    orden();
    const color = getRandomcolor();
    element.style.backgroundColor = color;
    element.innerHTML = color;
    let nuevo = number.push(color)

});

elements.forEach((element) => {
    element.addEventListener("click", () => {

        return colorx = element.innerHTML;
    });
});

function orden() {
    var rand = Math.floor(Math.random() * number.length);
    console.log(number[rand])
    colorSelected.innerHTML = number[rand];
}

function getRandomcolor() {
    const letter = "0123456789ABCDEF";
    let color = "#";
    var array = [];
    for (let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
}

function validar() {
    console.log(colorx);
    var user = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    console.log(user);
    console.log(user);
    if (colorx === colorSelected.innerHTML && user == "reviewer@revie.com" && pass == "1234") {
        var toastElement = new bootstrap.Toast(toastExi, option);
        toastElement.show();
        setTimeout(() => {
            return true
        }, 2000);

    }
    if (colorx === colorSelected.innerHTML && user == 'restaurant@revie.com' && pass == '1234') {
        var toastElement = new bootstrap.Toast(toastExi, option);
        toastElement.show();
        setTimeout(() => {
            console.log()
        }, 2000);
        return true;
    }
    if (colorx != "0" && user != "reviewer@revie.com" && pass == "1234" || colorx != "0" && user == "reviewer@revie.com" && pass != "1234" || colorx != "0" && user != "reviewer@revie.com" && pass != "1234") {
        var toastElement = new bootstrap.Toast(toastCamp, option);
        toastElement.show();
        return false;
    }
    if (colorx != colorSelected.innerHTML && user == 'restaurant@revie.com' && pass == '1234' || colorx != colorSelected.innerHTML && user == "reviewer@revie.com" && pass == "1234") {
        var toastElement = new bootstrap.Toast(toastCapSel, option);
        toastElement.show();
        setTimeout(() => {
            location.reload(true)
        }, 10000);

    }

    if (colorx != "0" && user == 'restaurant@revie.com' && pass == '1234' || colorx != "0" && user == "reviewer@revie.com" && pass == "1234") {
        var toastElement = new bootstrap.Toast(toastCapSelno, option);
        toastElement.show();
        return false;
    }
}
