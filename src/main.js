export default class App {

    sumatoriaSerieUno(numero){
        let sum = 0;
        for(let i=1; i <= numero; i++){
            sum += 1/i;
        }
        return sum;
    }
}

let app = new App();

//Probando método sumatoriaSerieUno(numero)
let a = 23;
let b = 4350;
let c = 4576938;
console.log(`Probando método sumatoriaSerieUno(numero):`);
console.log(`La suma de los primeros ${a} términos de la serie es ${app.sumatoriaSerieUno(a)}`);
console.log(`La suma de los primeros ${b} términos de la serie es ${app.sumatoriaSerieUno(b)}`);
console.log(`La suma de los primeros ${c} términos de la serie es ${app.sumatoriaSerieUno(c)}`);
