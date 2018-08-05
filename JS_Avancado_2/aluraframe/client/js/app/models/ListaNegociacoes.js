class ListaNegociacoes {

    constructor(contexto, triggerUpdate) {
        this._listaNegociacoes = [];
        this._triggerUpdate = triggerUpdate;
        this._contexto = contexto;
    }

    adiciona(negociacao) {
        this._listaNegociacoes.push(negociacao);
        Reflect.apply(this._triggerUpdate, this._contexto, [this]);
    }

    get negociacoes() {
        return [].concat(this._listaNegociacoes);
    }

    esvazia() {
        this._listaNegociacoes = [];
        Reflect.apply(this._triggerUpdate, this._contexto, [this]);
    }

}