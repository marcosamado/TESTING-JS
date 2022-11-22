const { isNull } = require("util");

function suma(a,b){
    if(isNaN(a) || isNaN(b) || isNull(a) || isNull(b)){
        return 0;
    }else{
        return a+b;
    }
};


function resta(a,b){
    if(isNaN(a) || isNaN(b) || isNull(a) || isNull(b)){
        return 0;
    }else{
        return a-b;
    }
}

function multiplicacion(a,b){
    if(isNaN(a) || isNaN(b) || isNull(a) || isNull(b)){
        return 0;
    }else{
        return a*b;
    }
}

function division(a,b){
    if(isNaN(a) || isNaN(b) || b == 0 || isNull(a) || isNull(b)){
        return 0;
    }else{
        return a/b;
    }
}

module.exports = {suma, resta, multiplicacion, division};