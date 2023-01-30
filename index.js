const sum = (x, y) => {
    return x + y;
}

function _sum(x, y){
    return x + y;
} 

x = 2;
y = 5;
_x = 23;
_y = 232;


console.log("resultado de sumar", x,  "+", y, "=", sum(_y, _x));
console.log("resultado de sumar", _x, "+",  _y, "=", sum(x, y));