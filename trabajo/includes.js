//Ejemplo 1 


    let fruit = ['Banana', 'Manzana', 'Mandarina', 'Pera', 'Melon', 'Sandia', 'Naranja'];

    function getFruit(fruit){
        pedido = "Pera";
        if(fruit.includes(pedido)){
            return 'Si se encuentra el elemento';
        } else { 
            return 'No se encuentra el elemento';
        }
    }

    console.log(getFruit(fruit));


    //Ejemplo 2

    let book = ['Viaje al centro de la Tierra', 'Harry Potter', 'Martin Fierro', 'Los ojos del perro siberiano'];

    function getBook(book){
        pedido = "Harry Potter"
        if (book.includes(pedido)){
            return 'El libro se encuentra disponible';
        } else {
            return 'El libro no se encuentra disponible';
        }

    }

    console.log(getBook(book));

    let fibo = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
    function getFibonacci(fibo){
        value = 4;
        if(fibo.includes(value)){
            return `El numero ingresado si es fibonacci y se encuentra en el ${(fibo.indexOf(value)+1)}° lugar de la secuencia`;
        } else {
            return 'El numero ingresado no es un numero fibonacci';
        }
    }

    console.log(getFibonacci(fibo));