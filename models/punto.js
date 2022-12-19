const { Schema, model } = require('mongoose');

const PuntoSchema = Schema(
    {
        code: String,
        latitud: String,
        longitud: String,
        linea: String,
        orden: Number
    }, { timestamps: true }

);

PuntoSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});

module.exports = model('Punto', PuntoSchema);