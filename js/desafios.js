function saludar(){
    let nombre = prompt("Ingresa tu nombre");
    while (nombre === "" || nombre === null){
        nombre = prompt("Ingresa tu nombre");
    }
    alert(nombre + " " + "Bienvenido(a) a Velas Caydis")
}

function mostrarProducto(){
    let producto; 
    do{
        producto = prompt("¿Qué vela deseas comprar? \n 1.Velón #8 \n 2. Velon #9 \n 3. Pebeteros \n 4. Vela aromatizada ");
    }while(producto != 1 && producto != 2 && producto != 3 && producto != 4);

        switch(producto){
            case "1":
                return "Velón #8"
            case "2":
                return "Velón #9"
            case "3":
                return "Pebeteros"
            case "4":
                return "Vela aromatizada"
        }
}

function validarPrecio(producto){
    if(producto === "Velón #8"){
        return 8600;
    }else if(producto === "Velón #9"){
        return 11000;
    }else if(producto === "Pebeteros"){
        return 2000;
    }else{
        return 4500;
    }
}

function cobrar(productos,precio){
    alert("Estás comprando el producto: " + productos.toUpperCase() + "\nEl precio es de: " + precio);

    let abonar = prompt("¿Con cuánto dinero vas a pagar?");
    if (abonar > precio){
        alert("Sus vueltas son de: $" + (abonar - precio))
    }else{
        alert("Lo siento, no tienes dinero suficiente para comprar este producto.")
    }

}

function despedir(){
    alert("Gracias por comprar en Velas Caydis")
}

saludar();
let productoSeleccionado = mostrarProducto();
let precioProducto = validarPrecio(productoSeleccionado)
cobrar(productoSeleccionado,precioProducto);
despedir()

