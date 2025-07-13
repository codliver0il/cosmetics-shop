import mongoose from 'mongoose';


var createdAt = function(){
    const now = new Date();
    const formattedDate = now.toISOString();
    return formattedDate;
};


const orderSchema = new mongoose.Schema({
    firstName: { type: String, required: true }, 
    lastName: { type: String, required: true }, 
    email: { type: String}, 
    phone: { type: String, required : true }, // type: Number
    address: { type: String, required : true }, //город + почтовый индекс если по всей рф
    products: { type: Object, required : true }, 
    status: { type: Object, required : true },
    price: { type: Number, required : true},
    createdAt: { type: String, default: createdAt}
})

export default mongoose.model("order", orderSchema);