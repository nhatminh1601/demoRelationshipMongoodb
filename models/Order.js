const mongoose = require('mongoose');
const Sechema = mongoose.Schema;

const orderSchema = new Sechema({
    name: String,
    total: Number,
    seller: {
        type: Sechema.Types.ObjectId,
        ref: 'User'
    },
    updated_at: {type: Date, default: Date.now()}
});
module.exports = mongoose.model('Order', orderSchema);