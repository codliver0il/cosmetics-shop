import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true },
    phone: { type: String, unique: true, required: true},
    address: { type: String }, // если по всей РФ + город + почтовый индекс, type: Number
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "order" }] // написать модель order
});

export default mongoose.model("user", userSchema);