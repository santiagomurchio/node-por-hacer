const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Creando una tarea por hacer.');
        let tareaPorHacer = porHacer.crear(argv.descripcion);
        // console.log(tareaPorHacer);


        break;


    case 'listar':
        console.log('Listar todas las tareas por hacer existentes.');

        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('=============== Por Hacer =================='.blue);
            console.log(tarea.descripcion);

            if (tarea.completado === true || tarea.completado === 'true') {
                console.log('Estado: Completado'.green);
            } else {
                console.log('Estado: No Completado'.red);
            }
            console.log('============================================'.blue);
        }

        break;
    case 'actualizar':
        console.log('Modifica una tarea por hacer.');

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        console.log('Eliminar una tarea por hacer.');

        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    case 'filtrar':
        console.log('Listar todas las tareas que tengan el estado especificado.');

        let filterStatus = (argv.completado === "true");

        let tareas =
            porHacer.getListado().filter(
                tarea => {
                    let status = (tarea.completado === "true");
                    return status === filterStatus;
                });

        for (let tarea of tareas) {
            console.log('=============== Por Hacer =================='.blue);
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado === true? 'Completado' : 'No completado'}`.grey);
            console.log('============================================'.blue);
        }

        break;

    default:
        console.log("El comando introducido no es reconocido.");
}