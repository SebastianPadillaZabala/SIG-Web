const { Schema, model } = require('mongoose');

const PuntoFinalSchema = Schema(
    {
        FID: Number,
        FID_stops2: Number,
        Punto: Number,
        code: String,
        orden: Number,
        PuntoD: Number,
        LongD: Number,
        LartiD: Number,
        Lont: Number,
        Lati: Number,
        distancia: Number,
        dist_km: Number,
        Tpeso: Number
    }, { timestamps: true }

);

PuntoFinalSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});

module.exports = model('PuntoFinal', PuntoFinalSchema);