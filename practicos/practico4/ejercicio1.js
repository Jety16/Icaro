const saludar = (nombre) => {
    if (typeof nombre !== "undefined"){
        console.log("¡Hola " + nombre + "!");
    } else {
        console.log("¡Holis :D!")
    }
  }
  
const nombre = process.argv[2];
saludar(nombre);