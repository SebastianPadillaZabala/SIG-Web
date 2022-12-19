const { Schema, model } = require('mongoose');

const RecorridoSchema = Schema(
    {
        linea: String,
        code: String,
        tiempo: Number,
        distancia: Number,
        velocidad: Number,
        color: String,
        grosor: Number,
        descripcion: String
    }, { timestamps: true }

);

RecorridoSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});

module.exports = model('Recorrido', RecorridoSchema);