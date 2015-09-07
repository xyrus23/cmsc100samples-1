// config/router.js
var student = require('./../controllers/student');
var degreeProgram = require('./../controllers/degree-program');

module.exports = function (router) {
	router.route('/students')
		.get(student.find);

	router.route('/degree-programs')
		.get(degreeProgram.find)
		.post(degreeProgram.insert)
		.delete(degreeProgram.remove)
		.put(degreeProgram.update);

	router.route('/degree-programs/:id')
		.get(degreeProgram.findOne);

	return router;
};

