// Definicion del modelo de Quiz con validacion

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Quiz',
		{ pregunta: {
			type: DataTypes.STRING,
			validate: { notEmpty: {msg: " Falta Pregunta"}}
		},
		repuesta: {
			type: DataTypes.STRING,
			validate: { notEmpty: {msg: " Falta Respuesta"}}
		}
	});
}
