const { Schema, model } = require('mongoose');

const LineaSchema = Schema(
    {
        linea: String,
        direccion: String,
        telefono: String,
        mail: String,
        foto: String,
        descripcion: String,
    }, { timestamps: true }

);

LineaSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});

module.exports = model('Linea', LineaSchema);