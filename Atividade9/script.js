function isMajor(x, y, z){
    return Math.max(x, y, z)
}

function toAscending(x, y, z){
    const numeros = [x, y, z]
    
    numeros.sort((x, y) => x - y);
    return numeros
}
    
function isPalindrome(text){
    const texto = text.toUpperCase();
    const inverso = texto.split('').reverse().join('');

    return texto === inverso
}

function isTriangle(a, b, c){
    if(a + b > c && a + c > b && b + c > a){

        if(a === b && b === c){
            return "Triângulo Equilátero";
        } else if (a === b && a === c && b === c){
            return "Triângulo Isósceles";
        }else {
            return "Triângulo Escaleno";
        }
    } else {
        return "Não é um Triângulo"
    }
}