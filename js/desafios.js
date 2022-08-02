let cP = parseInt(prompt("Indique cuantas personas registrará"));
let estatura;
let sE = 0;
let n;

for (n=1; n<=cP; n++){
    estatura = parseInt(prompt("Ingrese la estatura en centímetros de la persona " + n));

    sE = sE + estatura;
}


console.log("El promedio de estatura de las", cP, "personas es de:", sE/cP, "centímetros.")

