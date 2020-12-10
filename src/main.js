export default class App {

    sumatoriaSerieUno(numero){
        sum = 0;
        for(i=1; i <= numero; i++){
            sum += 1/i;
        }
        return sum;
    }
}

let app = new App();
