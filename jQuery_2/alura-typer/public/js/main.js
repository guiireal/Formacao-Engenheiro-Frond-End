var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

// QUANDO O DOCUMENTO ESTIVER CARREGADO, EXECUTA A FUNÇÃO
//$(document).ready(function() {});
$(function() {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botao-reiniciar").click(reiniciaJogo);
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
        $("#botao-reiniciar").attr("disabled", true);
        var cronometro = setInterval(function() {
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante == 0) {
                clearInterval(cronometro); // PARA O CRONÔMETRO
                finalizaJogo();
            }
        }, 1000);
    });
}

function finalizaJogo() {
    campo.attr("disabled", true);
    $("#botao-reiniciar").attr("disabled", false);
    campo.addClass("campo-desativado");
    inserePlacar();
}

function inicializaMarcadores() {
    var frase = $(".frase").text();
    campo.on("input", function() {
        var digitado = campo.val();
        var comparavel = frase.substr(0, digitado.length);
        if (digitado == comparavel) {
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        } else {
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
    });
}

function reiniciaJogo() {
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
    campo.removeClass("campo-desativado");
    campo.removeClass("borda-vermelha");
    campo.removeClass("borda-verde");
}
