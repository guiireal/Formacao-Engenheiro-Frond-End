var pacientes = document.querySelectorAll(".paciente");
var btnAdicionarPaciente = document.querySelector("#adicionar-paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var gordura = paciente.querySelector(".info-gordura").textContent;
    var tdImc = paciente.querySelector(".info-imc");
    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
    if (altura <= 0 || altura >= 3.00){
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }
    if (alturaEhValida && pesoEhValido)
        tdImc.textContent = calculaIMC(peso, altura);
}

function calculaIMC(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}
