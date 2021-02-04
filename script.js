


marca
var nombre = prompt('Ingrese su nombre');
console.log("Nombre: " + nombre);


var apellido = prompt('Ingrese su apellido');
console.log("Apellido: " + apellido); 


 alert("hola bienvenido: " + nombre + apellido + " aqui puede cotizar su vehiculo")



function capturar(){

function auto (marca, año, tipo){
        this.marca = marca;
        this.año = año;
        this.tipo = tipo;
    }


var marcaCapturar = document.getElementById("marca").value;
console.log(marcaCapturar)

var añoCapturar = document.getElementById("año").value;
console.log(añoCapturar)

var tipoCapturar = document.getElementById("radioBasico").value;
console.log(tipoCapturar)

var tipoCapturar = document.getElementById("radioCompleto").value;
console.log(tipoCapturar)



 auto1 = new auto (marcaCapturar, añoCapturar, tipoCapturar);
console.log(auto1);


alert("quiere cotizar plan " + marcaCapturar, añoCapturar, tipoCapturar);


cotizar();

}


var basededatos = [];
function cotizar (){
  basededatos.push (auto1)
  console.log (basededatos)
} 