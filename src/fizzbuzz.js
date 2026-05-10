export function fizzbuzz(){
  //tu código va aqui
  // El código de FizzBuzz se ejecutará desde el número 1 hasta el número 100.
  for (let i = 1; i <= 100; i++) {
    // Si el número es divisible por 3 y por 5, se imprime "FizzBuzz".
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
      // Si el número es divisible por 3, se imprime "Fizz".
    } else if (i % 3 === 0) {
      console.log("Fizz");
      // Si el número es divisible por 5, se imprime "Buzz".
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
