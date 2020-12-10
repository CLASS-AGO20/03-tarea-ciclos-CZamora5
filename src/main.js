export default class App {

    sumatoriaSerieUno(numero){
        let sum = 0;
        for(let i=1; i <= numero; i++){
            sum += 1/i;
        }
        return sum;
    }

    sumatoriaSerieDos(numero){
        let sum = numero >= 1 ? 1 : 0;
        let cnt = 2;
        while(cnt <= numero){
            let r = cnt % 2;
            sum = r == 0 ? sum + 1/cnt : sum - 1/cnt;
            cnt++;
        }
        return sum;
    }

    esPrimo(numero){
        if(numero == 1){
            return false;
        }
        let i = 2;
        do{
            if(numero % i == 0 ){
                return false;
            }
            i++;
        }while(i*i <= numero);
        return true;
    }

    obtenerMultiplos(inicio, fin){
        let str = "";
        if(inicio > fin){
            inicio += fin;
            fin = inicio - fin;
            inicio -= fin;
        }
        let i = inicio;
        do{
            if(i % 3 == 0){
                str += i;
            }
            i++;
        }while(i <= fin);
        return str;
    }

    obtenerImpares(numero1, numero2){
        let str = "";
        if(numero1 > numero2){
            numero1 += numero2;
            numero2 = numero1 - numero2;
            numero1 -= numero2;
        }
        numero2 = numero2%2 == 0 ? numero2-1 : numero2;
        for(let i = numero2; i >= numero1; i -= 2){
            str += i;
        }
        return str;
    }
}

let app = new App();

//Probando método sumatoriaSerieUno(numero)
let a = 23;
let b = 4350;
let c = 4576938;
console.log(`Probando método sumatoriaSerieUno(numero):`);
console.log(`La suma de los primeros ${a} términos de la serie uno es ${app.sumatoriaSerieUno(a)}`);
console.log(`La suma de los primeros ${b} términos de la serie uno es ${app.sumatoriaSerieUno(b)}`);
console.log(`La suma de los primeros ${c} términos de la serie uno es ${app.sumatoriaSerieUno(c)}`);

//Probando método sumatoriaSerieDos(numero)
a = 14;
b = 435;
c = 769;
console.log(`Probando método sumatoriaSerieDos(numero):`);
console.log(`La suma de los primeros ${a} términos de la serie dos es ${app.sumatoriaSerieDos(a)}`);
console.log(`La suma de los primeros ${b} términos de la serie dos es ${app.sumatoriaSerieDos(b)}`);
console.log(`La suma de los primeros ${c} términos de la serie dos es ${app.sumatoriaSerieDos(c)}`);

//Probando método esPrimo(numero)
console.log(`Probando método esPrimo(numero):`);
console.log(`¿El número ${3} es primo? ${app.esPrimo(3)}`);
console.log(`¿El número ${31} es primo? ${app.esPrimo(31)}`);
console.log(`¿El número ${57} es primo? ${app.esPrimo(57)}`);
console.log(`¿El número ${4567} es primo? ${app.esPrimo(4567)}`);
console.log(`¿El número ${1000000009} es primo? ${app.esPrimo(1000000009)}`);

//Probando método obtenerMultiplos(inicio, fin)
console.log(`Probando método obtenerMultiplos(inicio, fin):`);
console.log(`Los múltiplos de 3 en el intervalo [${a},${b}] son ${app.obtenerMultiplos(a, b)}`);
console.log(`Los múltiplos de 3 en el intervalo [${b},${b}] son ${app.obtenerMultiplos(b, b)}`);
console.log(`Los múltiplos de 3 en el intervalo [${b},${c}] son ${app.obtenerMultiplos(b, c)}`);
console.log(`Los múltiplos de 3 en el intervalo [${a},${c}] son ${app.obtenerMultiplos(a, c)}`);

//Probando método obtenerImpares(numero1, numero2)
console.log(`Probando método obtenerImpares(numero1, numero2):`);
console.log(`Los impares en el intervalo [${34},${27}] son ${app.obtenerImpares(34, 27)}`);
console.log(`Los impares en el intervalo [${56},${55}] son ${app.obtenerImpares(56, 55)}`);
console.log(`Los impares en el intervalo [${55},${55}] son ${app.obtenerImpares(55, 55)}`);
console.log(`Los impares en el intervalo [${56},${56}] son ${app.obtenerImpares(56, 56)}`);
console.log(`Los impares en el intervalo [${b},${b}] son ${app.obtenerImpares(b, b)}`);
console.log(`Los impares en el intervalo [${b},${b}] son ${app.obtenerImpares(b, b)}`);
console.log(`Los impares en el intervalo [${a},${b}] son ${app.obtenerImpares(a, b)}`);
console.log(`Los impares en el intervalo [${b},${b}] son ${app.obtenerImpares(b, b)}`);
console.log(`Los impares en el intervalo [${b},${c}] son ${app.obtenerImpares(b, c)}`);
console.log(`Los impares en el intervalo [${a},${c}] son ${app.obtenerImpares(a, c)}`);