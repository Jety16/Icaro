const userInfo = (nombre, apellido, edad ) => {
    if (typeof nombre !== "string"){
        console.log("Colocar un Nombre valido!");
        return
    }
    if (typeof apellido !== "string"){
        console.log("Colocar un Apellido valido!");
        return
    } 
    edad = parseInt(edad)
    if (isNaN(edad)){
        console.log("Colocar una edad valida!");
        return
    }
    console.log({
        nombre: nombre,
        apellido: apellido,
        edad: edad
    })
  }
if (process.argv.length !== 5){
    console.log("Porfavor ingrese los argumentos en el orden:\n Nombre Apellido Edad")
} else {
    userInfo(process.argv[2], process.argv[3], process.argv[4])
}