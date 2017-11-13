console.log("Hellos dig ");
console.log(document.querySelector('h1'));

var titulo = document.querySelector('.titulo');
var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++) {

  console.log(pacientes[i]);
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector('.info-peso');
  var tdAltura = paciente.querySelector('.info-altura')
  var tdImc = paciente.querySelector('.info-imc')
  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  var pesoValido = true;
  var alturaValida = true;

  if(peso <=0 || peso >= 1000){
    console.log("Peso Inválido!");
    tdImc.textContent = "Peso Inválido!";
    pesoValido = false;
    paciente.classList.add("paciente-invalido");

  }
  if (altura <= 0 || altura >= 4.0) {
    console.log("Altura Inválida!");
    tdImc.textContent = "Altura Inválida!";
    alturaValida=false;
    paciente.classList.add("paciente-invalido");
  }

  if (pesoValido && alturaValida ) {
    var imc = peso /(altura * altura);
    tdImc.textContent = imc.toFixed(2);
    alturaValida = false;
  }

  console.log(imc);

  console.log(titulo.textContent);
}

var botao = document.querySelector('#adicionar-paciente');
botao.addEventListener("click",function(event){
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;


  var pacienteTR = document.createElement("tr");

  var nomeTD = document.createElement("td");
  var pesoTD = document.createElement("td");
  var alturaTD = document.createElement("td");
  var gorduraTD = document.createElement("td");
  var imcTD = document.createElement("td");


  nomeTD.textContent = nome;
  pesoTD.textContent = peso;
  alturaTD.textContent = altura;
  gorduraTD.textContent = gordura;

  imcTD.textContent = calculaIMC(peso,altura);

  pacienteTR.appendChild(nomeTD);
  pacienteTR.appendChild(pesoTD);
  pacienteTR.appendChild(alturaTD);
  pacienteTR.appendChild(gorduraTD);
  pacienteTR.appendChild(imcTD);

  var tabela = document.querySelector("table");

  tabela.appendChild(pacienteTR);

  console.log(nome);
  console.log(peso);
  console.log(altura);
  console.log(gordura);

  console.log("Adiciona rrombado!");
});



function calculaIMC(peso,altura){

  var retorno ="";
  if(peso <=0 || peso >= 1000){
    console.log("Peso Inválido!");
    retorno = "Peso Inválido!";
    pesoValido = false;
  }
  if (altura <= 0 || altura >= 4.0) {
    console.log("Altura Inválida!");
    retorno = "Altura Inválida!";
    alturaValida=false;
  }

  if (pesoValido && alturaValida ) {
    var imc = peso /(altura * altura);
    retorno = imc.toFixed(2);
  }

  return retorno;
}
