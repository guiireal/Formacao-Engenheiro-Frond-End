var frase = $(".frase").text();
var numeroPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numeroPalavras);

var campo = $(".campo-digitacao");
campo.on("input", function() {
    var conteudo = campo.val();
    var qtdPalavras = conteudo.split(/\S+/).length - 1;
    var qtdCaracteres = conteudo.length;
    $("#contador-palavras").text(qtdPalavras);
    $("#contador-caracteres").text(qtdCaracteres);
});

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
