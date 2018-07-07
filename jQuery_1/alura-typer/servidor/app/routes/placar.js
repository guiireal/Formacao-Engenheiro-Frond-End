 module.exports = function(app) {

	var api = app.api.placar;

	app.route('/placar/')
		.get(api.lista);

    app.route('/placar/')
        .post(api.insere);
};
