const sum = (x, y) => {
    return x + y;
}

function _sum(x, y){
    return x + y;
} 

x = 2;
y = 5;
let resultado = sum(x, y);

_x = 23;
_y = 232;
let _resultado = sum(_y, _x);


console.log("resultado de sumar", x,  "+", y, "=", resultado);
console.log("resultado de sumar", _x, "+",  _y, "=", _resultado);