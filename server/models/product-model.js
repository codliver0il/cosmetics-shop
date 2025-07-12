import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    article: { type: String, required: true, unique: true }, 
    oldPrice: { type: Number },
    price: { type: Number, required: true },
    path: { type: Array, required: true }, // путь по категориям, пример: главная - лицо - крем, type: [String]
    specifications: { type: Object, of: String, required: true }, // характеристики типо объема, страны производства, type: Map, of: String
    images: { type: Array, required : true }
})

export default mongoose.model("product", productSchema);