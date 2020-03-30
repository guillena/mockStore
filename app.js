/*
Este modulo es para probar db.js

Este módulo puede tener varios objetos.

*/

//todo esto hacerlo async, como el acceso a una db
var db = require('./db');


// console.log('\n\n------- USUARIO 2 -------\n');
// console.log(db.getById('user', 2));

// console.log('\n\n------- USUARIO Cristi -------\n');
// console.log(db.getByName('user', 'Cristi'));

//creo un método async ya que debo llamar a métodos async y no puedo usar await 
//si no es dentro de un llamador async

//les falta el trapeo de errores

(async () => {
    //todas las personas
    console.log('------- Todas las personas -------\n');
    var persons = await db.list('person');
    console.log(persons);

    //busco el index 2 de personas
    var person = await db.getById('person', 2);
    console.log('\n\n------- PERSONA 2 -------\n');
    console.log(person);

    //busco por nombre la persona
    var person = await db.getByName('person', 'Cristi');
    console.log('\n\n------- PERSONA Cristi -------\n');
    console.log(person);

    //borra la persona con id 2
    var person = await db.removeById('person', 2);
    console.log('\n\n------- PERSONA con id 2 removida -------\n');
    console.log(person);
    //todas las personas
    console.log('------- Todas las personas -------\n');
    var persons = await db.list('person');
    console.log(persons);
    
    //borra la persona con nombre Miranda (id 7)
    var person = await db.removeByName('person', 'Miranda');
    console.log('\n\n------- PERSONA Miranda removida id 7-------\n');
    console.log(person);
    //todas las personas
    console.log('------- Todas las personas -------\n');
    var persons = await db.list('person');
    console.log(persons);

    //agrego un objeto al final
    var newPerson = {"id":11,"nombre":"Roque","apellido":"Gomez","email":"ggomez0@tmall.com","gender":"Female"};
    var person = await db.insert('person', newPerson);
    console.log('\n\n------- PERSONA Agregada-------\n');
    console.log(person);
    //todas las personas
    console.log('------- Todas las personas -------\n');
    var persons = await db.list('person');
    console.log(persons);
    
    //actualizo el nombre del objeto con nombre Yvon a Leandro
    var person = await db.updateName('person', 'Yvon', 'Leandro')
    console.log('\n\n------- PERSONA Actuializada-------\n');
    console.log(person);
    //todas las personas
    console.log('------- Todas las personas -------\n');
    var persons = await db.list('person');
    console.log(persons);


    //todos los usuarios
    //var users = await db.list('user');
    //console.log(users);

})();