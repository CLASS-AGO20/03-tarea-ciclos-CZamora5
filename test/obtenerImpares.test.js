import App from "../src/main";

test("obtenerImpares()", () => {
  let myApp = new App();

  expect(myApp.obtenerImpares(2, 10)).toBe("9,7,5,3");
});

test("obtenerImpares()", () => {
  let myApp = new App();

  expect(myApp.obtenerImpares(11, 1)).toBe("11,9,7,5,3,1");
});
