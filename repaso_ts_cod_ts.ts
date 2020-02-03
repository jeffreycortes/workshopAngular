// Typescript
// Declaración de variables
var x:number = 0;
let y:string = "dos";
const z:string[] = [];
// cuando no hay cambio de asignación del objeto
const obj = {id: 1, value: "Hola Mundo!"};
obj.id = 2;

//funciones
function inicializar(): void {
  // lógica
}

function saludo(): string {
  return "Hola Mundo";
}

function operacion(x: number, y: number): number {
  return x + y;
}

// Array desestructuración
const arr:Array<any> = [false, 1, "2", 3];
let [first, second] = arr;
let [,,...dc] = arr;
console.log(first, second);
console.log(dc);

// Interfaces y tipos
// declaración de tipo de tupla personalizada
type rgbColor = [number, number, number];

// interfaz de ValueObjects que representa un Color
interface Color {
  name: string; // propiedad obligatoria
  rgb: rgbColor; // simulación de tupla
  readonly typeObject: string; //propiedad de solo lectura
  transparencia?: number; // propiedad opcional
  [propName: string]: any; // propiedades adicionales que llegacemo a necesitar
}

// función de testeo del color
function testColor(c: Color){
 console.log(c);
}

// Declaración de la variable
let colorBlanco = {name: "Blanco", rgb: [255,255,255] as rgbColor, typeObject: 'Color', lop: 2}; // Sin especificar la interfaz
let colorBlanco2: Color = {name: "Blanco", rgb: [255,255,255], typeObject: 'Color'}; // especificadno el tipo con la interfaz creada
testColor(colorBlanco);
testColor(colorBlanco2);

// Enumeración númerica
enum EColor {
  White,
  Black = 10,
  Green,
  Blue
}

// Enumeración de texto
enum EColorStr {
  White = "White",
  Black = "Black",
  Green = "Green",
  Blue = "Blue"
}

// Clases
class Animal {
    private nombre: string;
    public constructor(theName: string) { this.nombre = theName; }
    protected mover(distanceInMeters: number) {
        console.log(`${this.nombre} se movió ${distanceInMeters}m.`);
    }
}

class Gato extends Animal {
    constructor() {
      super("Gato");
    }

    mover() {
      super.mover(10);
    }

    caerDePie(): void { }
}

var gato = new Gato();
