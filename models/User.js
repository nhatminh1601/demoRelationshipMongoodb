const mongoose = require('mongoose');
const Sechema = mongoose.Schema;

const UserSchema = new Sechema({
    name: String,
    phone: String,
    orders: [
        {
            type: Sechema.Types.ObjectId,
            ref: 'Order'
        }
    ],
    updated_at: {type: Date, default: Date.now()}
});
module.exports = mongoose.model('User', UserSchema);