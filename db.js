var db = {
    'person': [
        {"id":1,"nombre":"Genni","apellido":"Kloser","email":"gkloser0@tmall.com","gender":"Female"},
        {"id":2,"nombre":"Robb","apellido":"Starr","email":"rstarr1@adobe.com","gender":"Male"},
        {"id":3,"nombre":"Lionel","apellido":"Ramsell","email":"lramsell2@mayoclinic.com","gender":"Male"},
        {"id":4,"nombre":"Cristi","apellido":"Blaxill","email":"cblaxill3@epa.gov","gender":"Female"},
        {"id":5,"nombre":"Leslie","apellido":"Byram","email":"lbyram4@dyndns.org","gender":"Female"},
        {"id":6,"nombre":"Sheffy","apellido":"Brannon","email":"sbrannon5@arstechnica.com","gender":"Male"},
        {"id":7,"nombre":"Miranda","apellido":"Peschke","email":"mpeschke6@nbcnews.com","gender":"Female"},
        {"id":8,"nombre":"Erskine","apellido":"Reisenstein","email":"ereisenstein7@sfgate.com","gender":"Male"},
        {"id":9,"nombre":"Claribel","apellido":"McEntee","email":"cmcentee8@godaddy.com","gender":"Female"},
        {"id":10,"nombre":"Yvon","apellido":"Mathieu","email":"ymathieu9@e-recht24.de","gender":"Male"}
    ],
    'user': [
        {"id":1,"usuario":"avautin0","rol":"simple","fechaAlta":"22/7/2019"},
        {"id":2,"usuario":"swickendon1","rol":"advance","fechaAlta":"7/9/2019"},
        {"id":3,"usuario":"rbanner2","rol":"simple","fechaAlta":"20/1/2020"},
        {"id":4,"usuario":"eharewood3","rol":"admin","fechaAlta":"15/1/2020"},
        {"id":5,"usuario":"tdimmne4","rol":"advance","fechaAlta":"2/12/2019"},
        {"id":6,"usuario":"hcookley5","rol":"admin","fechaAlta":"12/7/2019"},
        {"id":7,"usuario":"ldillinger6","rol":"admin","fechaAlta":"16/9/2019"},
        {"id":8,"usuario":"msacks7","rol":"admin","fechaAlta":"20/1/2020"},
        {"id":9,"usuario":"lvelden8","rol":"admin","fechaAlta":"22/7/2019"},
        {"id":10,"usuario":"mzorzutti9","rol":"simple","fechaAlta":"18/4/2019"}
    ]
};

async function list(tabla) {
    return new Promise ( (resolve, reject) => {
        resolve(db[tabla]);
    })
}

async function getById(tabla, id) {
    return new Promise ( (resolve, reject) => {
        try {
            let col = db[tabla];  //list(tabla); deberia llamar a list
            resolve(col.filter(item => item.id === id)[0] || null);

        } catch (err) {
            console.error('Error en getById ' + err.message);
            reject(err);
        };
    });
}

async function getByName(tabla, name) {
    return new Promise ( (resolve, reject) => {
        try {
            let col = db[tabla];  //list(tabla); deberia llamar a list
            resolve(col.filter(item => item.nombre === name)[0] || null);

        } catch (err) {
            console.error('Error en getByName ' + err.message);
            reject(err);
        };
    });
}

async function removeById(tabla, id) {
    return new Promise ( (resolve, reject) => {
        try {
            //let col = db[tabla];  //list(tabla); deberia llamar a list
            var index = db[tabla].findIndex(obj => obj.id == id);
            var person = db[tabla][index];
            db[tabla].splice(index,1);
            resolve(person || null);

        } catch (err) {
            console.error('Error en removeById ' + err.message);
            reject(err);
        };
    });
}

async function removeByName(tabla, nombre) {
    return new Promise ( (resolve, reject) => {
        try {
            //let col = db[tabla];  //list(tabla); deberia llamar a list
            var index = db[tabla].findIndex(obj => obj.nombre == nombre);
            var person = db[tabla][index];
            db[tabla].splice(index,1);
            resolve(person || null);

        } catch (err) {
            console.error('Error en removeById ' + err.message);
            reject(err);
        };
    });
}

async function insert(tabla, newObject) {
    return new Promise ( (resolve, reject) => {
        try {
            console.log("pasaaaaaaaaaa");
            db[tabla].push[newObject];
            console.log(db[tabla]);
            resolve(newObject || null);

        } catch (err) {
            console.error('Error en insert ' + err.message);
            reject(err);
        };
    });
}

async function updateName(tabla, nombreActual, nuevoNombre) {
    return new Promise ( (resolve, reject) => {
        try {
            //let col = db[tabla];  //list(tabla); deberia llamar a list
            var index = db[tabla].findIndex(obj => obj.nombre == nombreActual);
            db[tabla][index].nombre = nuevoNombre;
            var person = db[tabla][index];
            resolve(person || null);

        } catch (err) {
            console.error('Error en removeById ' + err.message);
            reject(err);
        };
    });
}


//exporto como objeto para que puedan acceder a los métodos
module.exports = {
    list,
    getById,
    getByName,
    removeById,
    removeByName,
    insert,
    updateName
};
