var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

// QUANDO O DOCUMENTO ESTIVER CARREGADO, EXECUTA A FUNÇÃO
$(document).ready(function() {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    $("#botao-reiniciar").click(reiniciaJogo());
});

function atualizaTamanhoFrase() {
    var frase = $(".frase").text();
    var numeroPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numeroPalavras);
}

function inicializaContadores() {
    campo.on("input", function() {
        var conteudo = campo.val();
        var qtdPalavras = conteudo.split(/\S+/).length - 1;
        var qtdCaracteres = conteudo.length;
        $("#contador-palavras").text(qtdPalavras);
        $("#contador-caracteres").text(qtdCaracteres);
    });
}

function inicializaCronometro() {
    var tempoRestante = $("#tempo-digitacao").text();
    // ONE PERMITE QUE O EVENTO ACONTEÇA 1 VEZ SOMENTE
    campo.one("focus", function() {
        var cronometro = setInterval(function() {
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante == 0) {
                campo.attr("disabled", true);
                clearInterval(cronometro); // PARA O CRONÔMETRO
            }
        }, 1000);
    });
}

function reiniciaJogo() {
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
}
