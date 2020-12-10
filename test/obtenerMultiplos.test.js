import App from "../src/main";

test("obtenerMultiplos()", () => {
  let myApp = new App();

  expect(myApp.obtenerMultiplos(20, 35)).toBe("2124273033");
});
