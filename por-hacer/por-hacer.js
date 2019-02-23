const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];
let dbFilename = './db/data.json';


const crear = (descripcion) => {

    initDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(dbFilename, data, (err) => {
        if (err) {
            throw ('No pudo grabarse la tarea por hacer.', err);
        }
    });
}

const initDB = () => {
    try {
        listadoPorHacer = require('.' + dbFilename);
    } catch (error) {
        listadoPorHacer = [];
    }
}

const getListado = () => {
    initDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    initDB();

    let index =
        listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    initDB();

    let index =
        listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}