import App from "../src/main";

test("factorial()", () => {
  let myApp = new App();
  let numero = [6, 9, 16];
  let factorial = [720, 362880, 20922789888000];

  for (let i = 0; i < factorial.length; i++) {
    expect(myApp.factorial(numero[i])).toBe(factorial[i]);
  }
});
