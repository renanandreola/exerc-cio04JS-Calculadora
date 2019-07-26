var number1 = parseInt(prompt("Digite um número"));
var operator = prompt("Digite a operação escolhida");
var number2 = parseInt(prompt("Digite o segundo número"));
var result = "";

if(operator === "-") {
  result = number1 - number2;
}else if(operator === "+") {
  result = number1 + number2;
}else if(operator === "/") {
  result = number1 / number2;
}else if(operator === "*") {
  result = number1 * number2;
}if(result === "") {
  document.body.append("Erro de cálculo");
}else if(result.toString()=== "NaN") {
  document.body.append("Erro de cálculo")
}else {
document.body.append("Resultado = " + result)
}
