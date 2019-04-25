

// ejemplo1: dividimos cadena mediante un espacio vacio, que es considerado entre medio de cada caracter
  
        let string = 'Que onda?';
        let stringdiv = string.split("");

    console.log(stringdiv);



    //ejemplo2: podemos extraer caracteres que no queremos de una cadena, como por ejemplo signos.



        let string2 = 'Hola. Estamos. En. La. Clase. De. Programacion.';
        let stringdiv2 = string2.split(".");
    console.log(stringdiv2);


    //ejemplo3: podemos utilizarlo para dividirlo a nuestro gusto, y hasta cierta parte de la cadena.

        let string3 = "Hola, todo bien?";
        let stringdiv3 = string3.split("", 4);
    console.log(stringdiv3);