const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción (identificador) de la tarea por hacer.'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Estado completado de la tarea por hacer.'
}

const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', { descripcion })
    .command('listar', 'Listar todas las tareas por hacer', {})
    .command('filtrar', 'Listar todas las tareas que tengan el estado especificado', { completado })
    .command('actualizar', 'Actualiza el estado de una tarea por hacer', { descripcion, completado })
    .command('borrar', 'Borra una tarea por hacer', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}