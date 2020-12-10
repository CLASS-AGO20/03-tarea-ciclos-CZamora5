import App from "../src/main";

test("convertirAString()", () => {
  let myApp = new App();
  let linea =
    "*********************************************************************************************************";
  let numero = Math.trunc(Math.random * linea.length);
  expect(myApp.convertirAString(numero)).toBe(linea.substring(0, numero));
});
