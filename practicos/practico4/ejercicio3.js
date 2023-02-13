const miLista1 = [2, "Eric", "Jarra"]
const miLista2 = ["Leche", "Café", "Chocolate"]


function buscarElemento(array, e) {
    for( i=0; i<array.length; i++){
        if (e === array[i]){
            console.log(array[i])
            return
        }
    }
}

buscarElemento(miLista1, "Jarra")

buscarElemento(miLista2, "Café")