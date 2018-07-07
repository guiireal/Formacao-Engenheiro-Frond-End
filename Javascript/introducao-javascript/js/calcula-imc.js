var pacientes = document.querySelectorAll(".paciente");
var btnAdicionarPaciente = document.querySelector("#adicionar-paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var gordura = paciente.querySelector(".info-gordura").textContent;
    var tdImc = paciente.querySelector(".info-imc");

    if (!validaPeso(peso)) {
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
    if (!validaAltura(altura)){
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }
    if (validaPeso(peso) && validaAltura(altura))
        tdImc.textContent = calculaIMC(peso, altura);
}

function calculaIMC(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso) {
    if (peso > 0 && peso <= 1000)
        return true;
    return false;
}

function validaAltura(altura) {
    if (altura > 0 && altura <= 3.00)
        return true;
    return false;
}
