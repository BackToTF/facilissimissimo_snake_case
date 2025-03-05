function accediServizio(nome) {
    console.log("Accesso al servizio " + nome);
    if (nome == "Pagmento")  // errore: singolo a"=" invece di "=="
        alert("Vai alla sezione pagamenti.");
    else
        alert("Servizio non disponibile");
}