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
