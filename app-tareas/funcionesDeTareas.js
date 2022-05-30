const fs = require('fs');
const leerJSON = () => {
        const tareas = fs.readFileSync('./tareas.json','utf-8');
        const tareasJS = JSON.parse(tareas);
        return tareasJS;
    }
const tareas = leerJSON();

const listarTareas = (accion) => {
     switch(accion){
         case 'listar':
             console.log('Lista de Tareas');
             console.log('      --       ');   
             tareas.forEach((tarea, i) => console.log(i+1 + '. ' + tarea.titulo + ' - ' + tarea.estado));
         break;
         case undefined:
             console.log('Atencion - Tienes que pasar una accion');
         break;
         case 'crear':
             const nombreTarea = process.argv[3];
             let crearNuevaTarea = { titulo: nombreTarea, estado: "pendiente" };
             guardarTarea(crearNuevaTarea);
         break;
         case 'filtrar':
             const estado = process.argv[3];
             filtrarPorEstado(estado);
         break;
         default:
             console.log('No entiendo que quieres hacer');
    }
}

const escribirJSON = (arrayTareas) => {
     const tareaString = JSON.stringify(arrayTareas);
     fs.writeFileSync('./tareas.json', tareaString, 'utf-8');
}

const guardarTarea = (nuevaTarea) => {
     let tareasActuales = leerJSON();
     tareasActuales.push(nuevaTarea);
     escribirJSON(tareasActuales);
  }

const filtrarPorEstado = (estado) => {
     let tareasActuales = leerJSON();
     let tareasFiltradas = tareasActuales.filter(function(tareas){
         return tareas.estado == estado;
    });
     return tareasFiltradas.forEach((tarea, i) => console.log(i+1 + '. ' + tarea.titulo));
}
  

module.exports = listarTareas;