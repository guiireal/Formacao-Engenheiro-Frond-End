btnAdicionarPaciente.addEventListener("click", function(evento){
    // ELIMINA O EVENTO PADRÃO DO FORM (RELOAD)
    evento.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    tBodyPacientes = document.querySelector("#tabela-pacientes");
    tBodyPacientes.appendChild(criaLinhaTR(paciente));
    form.reset();
});

function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    };
    return paciente;
}

function criaLinhaTR(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    pacienteTr.appendChild(montaTD(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTD(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTD(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTD(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTD(paciente.imc, "info-imc"));
    return pacienteTr;
}

function montaTD(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}
