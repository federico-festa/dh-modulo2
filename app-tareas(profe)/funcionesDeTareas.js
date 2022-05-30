const fs = require("fs");

const leerJSON = () => {
  const tareas = fs.readFileSync("./tareas.json", "utf-8");
  const objetoTareas = JSON.parse(tareas);

  return objetoTareas;
}



const listarTareas = (accion) => {
  switch (accion) {
    case "listar":
      const tareas = leerJSON();
     
      tareas.forEach((tarea, index) => {
        console.log(`${index + 1}. ${tarea.titulo} - ${tarea.estado}`);
      });

      break;
    case "crear":
      const nombreTarea = process.argv[3];

      let crearNuevaTarea = { titulo: nombreTarea, estado: "pendiente" };
      guardarTarea(crearNuevaTarea);

      break;
    case undefined:
      console.log("Atención - Tienes que pasar una acción.");
      break;
    default:
      console.log("No entiendo qué quieres hacer.");
      break;
  }
};

const escribirJSON = (arrayTareas) => {
  // Convertir el array recibido como parámetro a un string en formato JSON.
  const tareasString = JSON.stringify(arrayTareas);

  // ii. Guardar la información en el archivo .json que contiene la lista de
  // nuestras tareas. Para esto necesitaremos el método writeFileSync del
  // módulo FS.
  fs.writeFileSync('./tareas.json', tareasString, 'utf-8');
};

const guardarTarea = (nuevaTarea) => {
  let tareasActuales = leerJSON();
  tareasActuales.push(nuevaTarea);
  
  escribirJSON(tareasActuales);
}

module.exports = listarTareas;
