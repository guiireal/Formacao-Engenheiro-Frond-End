var tabelaPaciente = document.querySelector("table");

tabelaPaciente.addEventListener("dblclick", function(event) {
    // REMOVENDO O "PAI" (parentNode) DO ALVO DO EVENTO
    if (event.target.tagName == "TD") {
        event.target.parentNode.classList.add("fade-out");
        setTimeout(function() {
            event.target.parentNode.remove();
        }, 500);
    }
});
