btnAdicionarPaciente.addEventListener("click", function(evento){
    // ELIMINA O EVENTO PADRÃO DO FORM (RELOAD)
    evento.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    var erros = validaPaciente(paciente);
    if (erros.length > 0) {
        exibeMensagensErro(erros);
        return;
    }
    adicionaPacienteNaTabela(paciente);
    form.reset();
    var ulMensagensErro = document.querySelector("#mensagens-erro");
    ulMensagensErro.innerHTML = "";
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

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = document.createElement("tr");
    tBodyPacientes = document.querySelector("#tabela-pacientes");
    tBodyPacientes.appendChild(criaLinhaTR(paciente));
}

function validaPaciente(paciente) {
    var erros = [];
    if (paciente.nome.length == 0) erros.push("O nome não pode ser vazio!");

    if (!validaPeso(paciente.peso)) erros.push("O peso informado é inválido!");

    if (!validaAltura(paciente.altura)) erros.push("A altura informada é inválida!");

    if (paciente.gordura.length == 0) erros.push("A gordura não pode ser vazia!");

    return erros;
}

function exibeMensagensErro(erros) {
    var ulListaErros = document.querySelector("#mensagens-erro");
    ulListaErros.innerHTML = "";
    erros.forEach(function(erro) {
        var liItemErro = document.createElement("li");
        liItemErro.textContent = erro;
        ulListaErros.appendChild(liItemErro);
    });
}
