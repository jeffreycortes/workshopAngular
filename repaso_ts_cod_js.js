// Javascript
// Declaración de variables
var x = 0;
let y = "dos";
const z = [];
// cuando no hay cambio de asignación del objeto
const obj = {id: 1, value: "Hola Mundo!"};
obj.id = 2;

//funciones
function inicializar() {
  // lógica
}

function saludo() {
  return "Hola Mundo";
}

function operacion(x , y) {
  return x + y;
}

// Array desestructuración
const arr = [false, 1, "2", 3];
let [first, second] = arr;
let [,,...dc] = arr;
console.log(first, second);
console.log(dc);
