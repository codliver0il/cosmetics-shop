import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    firstName: { type: String, required: true }, 
    lastName: { type: String, required: true }, 
    email: { type: String}, 
    phone: { type: String, required : true }, // type: Number
    address: { type: String, required : true }, //город + почтовый индекс если по всей рф
    products: { type: Object, required : true }, 
    status: { type: Object, required : true },
    price: { type: Number, required : true},
    orderNumber: {type: String, required: true, unique: true}
})

export default mongoose.model("order", orderSchema);