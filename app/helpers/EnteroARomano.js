/*
Reglas para escribir numeros romanos.

- Se escriben de izq. a der. donde el mayor es el que está a la izq. de todo. Ejemplo XVI = 16
- Si se coloca un valor menor a la izq. de un mayor entonces se resta ejemplo: IV
- Los simbolos V(5), L(50), D(500) siempre suman y no pueden estar a la izq. de uno de mayor valor.
- Si el valor de un numero es menor o igual al que tiene a la izq. se suma Ejemplo: VI = 6
- Todos los numeros romanos son el I(1), V(5), X(10), L(50), C(100), D(500), M(1000)
- La I le resta una unidad a "V" o a "X", la "X" le resta diez unidades a la "L" o "C" y el "C"
 le resta 100 unidades a la "D" o "M"
- La V, L y D no pueden duplicarse porq hay otras letras X, C, M que representan su valor.Ejemplo: VV = X
- Si entre dos valores existe otra menor, esta restara su valor siguiente, Ejemplo: 19 -> XIX
- El 0 no E
- Solo podes escribir un máximo de 3 numeros romanos repetidos, en caso contrario, se tiene que restar al numero
más grande o sumar al número más grande para llegar a ese resultado
- El número más grande es el 3999 MMMCMXCIX ya que no se puede repetir el MMM reiteradas veces.


*/

export function EnteroARomano(toRomanNum){

    //This variable is to store the value the user is passing and start working with.
    let numUnit = toRomanNum;
    //This variable is to store the roman number and return it.
    let numConv = '';
    //This variable is to store how many times you add a roman number.
    let count = 0;

    //This control if the number can exist, and is always an int number
    if(numUnit >= 4000 || numUnit <= 0 || numUnit % 1 != 0 ){
        return false;
    }

    while(numUnit > 0){

        switch(true){
            case numUnit >= 1000 :

                count = numUnit/1000

                for(var i = 1; i <= count; i++){
                    numConv = numConv + 'M';
                }

                count = 0;

            break;
            case numUnit <= 999 && numUnit >= 900:
                
                numConv = numConv + 'CM'

            break;
            case numUnit < 899 && numUnit >= 500 :

                numConv = numConv + 'D';

                count = (numUnit/100) - 5;

                for(var i = 1; i <= count; i++){
                    numConv = numConv + 'C';
                }

                count = 0;

            break;
            case numUnit <=499 && numUnit >=400:

                count = 5 - (numUnit/100);

                for(var i = 0; i < count; i++){
                    numConv = numConv + 'C';
                }

                numConv = numConv + 'D';

                count = 0;

            break;
            case numUnit <=399 && numUnit >=100:

                count = (numUnit/100);

                for(var i = 1; i <= count; i++){
                    numConv = numConv + 'C';
                }

                count = 0;

            break;
            case numUnit <=99 && numUnit >=90:

                    numConv = numConv + 'XC';

            break;
            case numUnit <= 99 && numUnit >= 50:
                
                count = (numUnit/10) - 5;

                numConv = numConv + 'L';

                for(var i = 1; i <= count; i++){
                    numConv = numConv + 'X';
                }

                count = 0;

            break;
            case numUnit <= 49 && numUnit >= 40:

                numConv = numConv + 'XL';

            break;
            case numUnit <=39 && numUnit >= 10:

                count = (numUnit/10);

                for(var i = 1; i <= count; i++){
                    numConv = numConv + 'X';
                }

                count = 0;

            break;
            case numUnit == 9:

                    numConv = numConv + 'IX';
                
            break;
            case numUnit <=8 && numUnit >= 5:

                count = numUnit - 5;

                numConv = numConv + 'V';

                for(var i = 1; i <= count; i++){
                    numConv = numConv + 'I';
                }

                count = 0;

            break;
            case numUnit == 4 :
                numConv = numConv + 'IV';
            break;
            case numUnit <=3 && numUnit >= 1:

                count = numUnit;

                for(var i = 1; i <= count; i++){
                    numConv = numConv + 'I';
                }

                count = 0;

            break;
        }

        //I need two variables, onw to create the divisible an other to create the multiple
        let mult = 1;
        let div = 1;

        //I get the multiple number of the nex unit. I substract two because one is for the number and
        //the other one is for the 0.
        
        for(var i = 0; i < numUnit.toString().length - 1; i++){
            mult = mult * 10;
        }
        //Then i get the divisible number that is the length of the actual number
        for(var i = 0; i < numUnit.toString().length -1; i++){
            div = div * 10;
        }

        //I transform the number to a decimal so i can separate the number for the units
        let decimalNumber = numUnit/div;

        //This aux variable store the values of the data in decimal
        //Adding Match ceil because it transforms to 4.9999 for some reason
        let onlyDecimal = decimalNumber.toFixed(3) - Math.trunc(decimalNumber);

        //Now i transform the decimal number to a integer number.
        numUnit = onlyDecimal.toFixed(3) * mult;
       
        //The las thing is to normalize the number and delete all the decimal parts that generates
        numUnit = Math.trunc(numUnit);
    }
    
    return numConv;

}