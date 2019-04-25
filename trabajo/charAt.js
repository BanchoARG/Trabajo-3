//ejemplo1
    let string = "Que onda gente?";
    let stringAt = string.charAt(0);

console.log(stringAt);

//ejemplo2 obteniendo la posicion de todos los caracteres

    let string2 = "Hola. Como estas?";
    for (let i = 0; i < string2.length ; i++) {
    
    let stringAt2 = `El caracter en el indice 0 es ${string2.charAt(i)}`;
    console.log(stringAt2);
}


//ejemplo3 Esto pasaria en caso de que en el indice que proporcionemos no se encontrara caracter


    let string3 = "Hola";
    let stringAt3 =`El indice 5 contiene el caracter: ${string3.charAt(5)}`;
    console.log(stringAt3);
