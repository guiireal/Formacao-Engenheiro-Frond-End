class ListaNegociacoes {

    constructor(triggerUpdate) {
        this._listaNegociacoes = [];
        this._triggerUpdate = triggerUpdate;
    }

    adiciona(negociacao) {
        this._listaNegociacoes.push(negociacao);
        this._triggerUpdate(this);
    }

    get negociacoes() {
        return [].concat(this._listaNegociacoes);
    }

    esvazia() {
        this._listaNegociacoes = [];
        this._triggerUpdate(this);
    }

}