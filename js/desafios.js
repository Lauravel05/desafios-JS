
// slider main

const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll (".slaider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector ("#btn-right");

function moverDerecha() {
    let sliderSectionFirst = document.querySelectorAll (".slider__section")[0];
}

function moverIzquierda(){
    let sliderSection = document.querySelectorAll (".slaider__section")
    let sliderSectionLast = sliderSection[sliderSection.length -1]
}

btnRight.addEventListener("click", function() {
    moverDerecha()
   })

btnLeft.addEventListener("click", function() {
   moverIzquierda()
   })

// filtrado de busqueda

function bucadorInterno() {
    let filter = inputSearch.value.toUpperCase();
    let li = box_search("li");

    for (i = 0; i < li.length; i++){

        a = li[i].tagName ("a")[0]
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase(). filter > -1) {

            li[i].style.display = ""

        }else{
            li[i].style.display = "none"
        }
    }
}

function mostrarBuscador() {

}

function ocultarBuscador() {

}

// formulario eventos

const formulario = document.getElementById('form');

formulario.addEventListener('submit', function(e){

    e.preventDefault();
    let mail = document.getElementById('nombre-form').value
    console.log(mail)
})

formulario.addEventListener('submit', function(e){

    e.preventDefault();
    let mail = document.getElementById('apellidos-form').value
    console.log(mail)
})

formulario.addEventListener('submit', function(e){

    e.preventDefault();
    let mail = document.getElementById('email-form').value
    console.log(mail)
})

// carrito de compras

const productos = [
    {nombre: "velón #8", precio: 8500 },
    {nombre: "velón #9", precio: 10000 },
    {nombre: "pebeteros", precio: 2000 },
    {nombre: "vela aromarizada", precio: 4500 },
];

let carrito = []

let seleccion = prompt("¿Hola, deseas comprar algún producto? si o no")

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingresa si o no")
    seleccion = prompt("¿Hola, deseas comprar algún producto? si o no")
}

if(seleccion === "si"){
    alert("A continuacion nuestra lista de productos:")
    let todosLosProductos = productos.map((productos) => productos.nombre + " " + productos.precio + "$");
    alert(todosLosProductos.join(" - "))
} else if (seleccion === "no"){
    alert("¡Gracias por venir!, hasta pronto")
}

while(seleccion != "no"){
    let producto = prompt("Agrega un producto al carrito")
    let precio = 0

    if(producto === "velón #8" || producto === "velón #9" || producto === "pebeteros" || producto === "vela aromatizada"){
        switch(producto) {
            case "velón #8":
            precio = 8500
            break;

            case "velón #9":
            precio = 10000
            break;

            case "pebetero":
            precio = 8500
            break;

            case "vela aromatizada":
            precio = 4500
            break;

            default: 
            break;
        }
    let unidades = parseInt(prompt("¿Cuántas unidades quiere llevar?"))

    carrito.push({producto, unidades, precio})
    console.log(carrito)
    }else{
        alert("No tenemos ese producto")
    }

    seleccion = prompt("¿Desea seguir comprando? si o no")

    while(seleccion === "no"){
        alert ("¡Gracias por su compra!, hasta pronto")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal}, unidades: ${carrito.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar por su compra es: ${total}`)