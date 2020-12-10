import App from "../src/main";

test("esPrimo() regresa true", () => {
  let myApp = new App();
  let numero = [89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197];

  for (let i = 0; i < numero.length; i++) {
    expect(myApp.esPrimo(numero[i])).toBe(true);
  }
});

test("esPrimo() regresa false", () => {
  let myApp = new App();
  let numero = [90, 98, 102, 104, 108, 110, 114, 128, 132, 138, 140, 150, 152, 158, 164, 168, 174, 180, 182, 192, 194, 198];

  for (let i = 0; i < numero.length; i++) {
    expect(myApp.esPrimo(numero[i])).toBe(false);
  }
});
