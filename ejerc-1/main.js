import Contacto from "./Contacto.js";

let c1 = new Contacto(
    "Juna Perez",
    "Operador",
    "312-456-2345",
    "juan.perez@gmail.com"
);

c1.imprimir();

console.log(c1.nombre);
console.log(c1._email);

c1.puesto = "Jefe de Personal";

console.log(c1.puesto);