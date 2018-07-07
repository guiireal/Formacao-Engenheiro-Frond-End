function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Guilherme";
    var numeroPalavras = $("#contador-palavras").text();
    var linha = novaLinha(usuario, numeroPalavras);
    linha.find(".botao-remover").click(removeLinha);
    corpoTabela.prepend(linha); // ADICIONA ANTES (APPEND ADICIONA DEPOIS)
}

function novaLinha(usuario, numeroPalavras) {
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(numeroPalavras);
    var colunaRemover = $("<td>");
    var link = $("<a>").addClass("botao-remover").attr("href", "#");
    var i = $("<i>").addClass("small").addClass("material-icons").text("delete");
    link.append(i);
    colunaRemover.append(link);
    linha.append(colunaUsuario)
         .append(colunaPalavras)
         .append(colunaRemover);

    return linha;
}

function removeLinha(event) {
    event.preventDefault();
    $(this).parent().parent().remove();
}
