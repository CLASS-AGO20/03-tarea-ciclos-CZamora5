import App from "../src/main";

test("sumatoriaSerieUno()", () => {
  let myApp = new App();
  let numero = [15, 21, 31];
  let suma = [3.32, 3.65, 4.03];

  for (let i = 0; i < suma.length; i++) {
    expect(myApp.sumatoriaSerieUno(numero[i]).toFixed(2)).toBe(
      suma[i].toFixed(2)
    );
  }
});
