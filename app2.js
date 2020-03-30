/*
Este modulo es para probar person.js

Me traigo la coleccion a esta instancia y hago las modidicaciones 
con este alcance
*/


//obtengo una coleccion de personas. Traido como objeto
var personsStore = require('./person');

//me traigo solo la coleccion de personas
var persons = personsStore.persons;

//lista las personas
console.log(persons);

//muestra la primer persona por indice
console.log('\n\nPrimer persona\n', persons[1]);

//muestra la persona con nombre "nombre":"Cristi"
console.log('\n\nPersona con nombre Cristi\n', 
    persons.filter (item => item.nombre === 'Cristi')[0] || null);

//borra la segunda persona por id
//splice(a,b) donde a es el elemento desde y b cuantos
persons.splice(1,1); 
console.log(persons);

//borra la persona con nombre Miranda (id 7)
var index = persons.findIndex(obj => obj.nombre == "Miranda");
console.log('Borro objeto Miranda - indice ' + index);
persons.splice(index,1); 
console.log(persons);

//agrego un objeto al final
var newPerson = {"id":11,"nombre":"Roque","apellido":"Gomez","email":"ggomez0@tmall.com","gender":"Female"};
persons.push(newPerson);
console.log(persons);

//actualizo el nombre del objeto con nombre Yvon a Leandro
var index = persons.findIndex(obj => obj.nombre == "Yvon");
console.log('Actualizo nombre de Yvon a Leadnro - indice ' + index);
persons[index].nombre = 'Leandro';
console.log(persons);

