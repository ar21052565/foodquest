const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    order_data: {
        type: Array,
        required: true
    }
});

// Export the model so it can be used in other files
const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;