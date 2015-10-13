var db = require(__dirname + './../lib/mysql');

exports.find = function(req, res, next){
	db.query("SELECT * from degree", function(err, rows) {
		if(err) return next(err);
		res.send(rows);
	});
};

exports.findOne = function(req, res, next){
	db.query("SELECT * FROM degree WHERE degree_id='"
		+ req.params.id + "'", function(err, rows){
			if(err) return next(err);
			if (rows.length === 0){
				res.send(404, {message: 'Degree program not found'})
			}else {
				res.send(rows[0]);
			}
		});
};

exports.insert = function(req, res, next){
	db.query("INSERT INTO degree(code, name) VALUES(?, ?)", [req.body.code, req.body.name], function(err, row) {
		if (err) return next(err);
			selectOne(row.insertId, function(newRow) {
			if (!newRow) {
				res.send(552, {message: 'Degree program ('+row.insertId+') was not created.'});
			} else {
			res.send(newRow);
			}
		});
	});
};

exports.remove = function(req, res, next){
	db.query("DELETE FROM degree WHERE degree_id=?", [req.params.id], function(err, rows){
			if(err) return next(err);
			res.send(rows);
		});
};

exports.update = function(req, res, next){
	db.query("UPDATE degree SET description=?, total_units=?, degree_code=? WHERE degree_id=?", [req.body.description, req.body.total_units, req.body.degree_code, req.body.degree_id], function(err, rows){
			if(err) return next(err);
			selectOne(req.params.id, function(updatedRow) {
				if (!updatedRow) {
				res.send(553, {message: 'Degree program ('+req.params.id+') was not updated.'});
				} else {
				res.send(updatedRow);
				}
			});
		});
};
