const { Schema, model } = require('mongoose');

const PointSchema = Schema(
    {
        description: String,
        FID: String,
        FID_stops2: String,
        Punto: String,
        code: String,
        orden: String,
        PuntoD: String,
        LongD: String,
        LartiD: String,
        Lont: String,
        Lati: String
    }, { timestamps: true }

);

/*PointSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});*/

module.exports = model('Point', PointSchema);