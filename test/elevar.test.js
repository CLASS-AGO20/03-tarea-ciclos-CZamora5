import App from "../src/main";

test("elevar()", () => {
  let myApp = new App();
  let numero = Math.trunc(Math.random() * 10) + 2;
  let potencia = Math.trunc(Math.random() * 10) + 2;

  expect(myApp.elevar(numero, potencia)).toBe(Math.pow(numero, potencia));
});
