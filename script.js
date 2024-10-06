/* 
Dado el array: const array = ["Joaquin", 1, ["Hola","Adios"], true]
*/

let array = ["Joaquin", 1, ["Hola","Adios"], true];

//  1) Recorrer el array e insertar dichos valores en el localstorage.
// El key de cada valor corresponderá a variable + i siendo i el indice en el que se encuentra el array.
let variable = "variable";
for (let i = 0; i < array.length; i++) {
    localStorage.setItem(variable + i, array[i]);
}

// 2) Recorrer de 0 a la longitud del array y hacer la peticion de variable + i del localstorage
for (let i = 0; i < array.length; i++) {
    localStorage.getItem(variable + i, array[i]);
}

// 3) Crear un div por cada variable e insertar el valor de dicha variable en el div

let nombre = 'Juan';
let edad = 30;
let ciudad = 'Madrid';

const variables = [
    { key: 'Nombre',  value: nombre },
    { key: 'Edad', value: edad },
    { key: 'Ciudad', value: ciudad }
];

const contenedor = document.querySelector('#contenedor');

variables.forEach(variable => {
    const div = document.createElement('div');
    div.className = 'variable-div'
    div.textContent = `${variable.key}: ${variable.value}`;
    contenedor.appendChild(div);
});

// 4) insertar estos divs en el body del html
document.body.appendChild(contenedor);
