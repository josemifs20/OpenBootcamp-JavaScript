// Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let factorial = 1;
let i = 1;

while(true){
  factorial *= i;
  i++;
	if(i > 10) {
    break;
  }
}
console.log(factorial);


let factorialPlus = 1
let num = 10;
while (true) {
    factorial *= num;
    num--;
    if (num === 1) {
        break;
    }
}
console.log(factorialPlus);