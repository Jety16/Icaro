const miLista1 = [2, "Eric", "Jarra"]
const miLista2 = ["Leche", "Café", "Chocolate"]


function buscarElemento(array, e) {
    const aux = [] 
    for(i=array.length-1; i>=0; i--){
        aux.push(array[i])
    }
    return aux
}

console.log(buscarElemento(miLista1))

console.log(buscarElemento(miLista2))