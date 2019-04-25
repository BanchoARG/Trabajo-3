//Primer ejemplo: este ejemplo se hizo reutilizando un ejemplo de split.js

        let string2 = 'Hola. Estamos. En. La. Clase. De. Programacion.';
        let stringdiv2 = string2.split(".");
        function stringClean(stringdiv2){
            return `La cadena limpia quedaria de la siguiente manera: ${stringdiv2.join('')}`;
        }
    console.log(stringClean(stringdiv2));

    //segundo ejemplo

        let name = ['Ivan', 'Carlos', 'Martin', 'Alejandro', 'Pablo'];
        function getName(name){
            return `Los nombres encontrados en la lista son los siguientes: ${name.join(', ')}.`;
        }

        console.log(getName(name));


        //tercer ejemplo


        let number = [1, 5, 7, 11, 23, 3, 4, 5];

        function getNumber(number){
            return `Los numeros encontrados en el historial son los siguientes: ${number.join(' / ')} .`;
        }

            console.log(getNumber(number));
