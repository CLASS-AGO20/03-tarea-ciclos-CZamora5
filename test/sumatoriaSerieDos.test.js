import App from "../src/main";

test("sumatoriaSerieDos()", () => {
  let myApp = new App();
  let numero = [7, 15, 21];
  let suma = [1.24, 1.27, 1.28];

  for (let i = 0; i < suma.length; i++) {
    expect(myApp.sumatoriaSerieDos(numero[i]).toFixed(2)).toBe(
      suma[i].toFixed(2)
    );
  }
});
