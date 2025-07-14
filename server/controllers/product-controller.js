import Product from "../models/product-model.js"

export const create = async(req, res) => {
    try {
        const productData = new Product(req.body);
        const {title} = productData;
        const productExist = await Product.findOne({title});
        if (productExist)
        {
            return res.status(400).json({message: "Product already exists"});
        }
        const savedProduct = await productData.save();
        res.status(200).json(savedProduct); //201
    } 
    catch (err) {
        res.status(500).json({message: "Internal Server Error"});
    }
}

export const fetch = async(req, res) => { // все товары
    try {
        const products = await Product.find()
        if (products.length === 0)
        {
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json(products);
    }
    catch (err) {
        res.status(500).json({message: "Internal Server Error"});
    }
}

// один товар ?

export const update = async(req, res) => {
    try {
        const id = req.params.id;
        const productExist = await Product.findOne({_id: id});
        if(!productExist)
        {
            return res.status(404).json({message: "Product not found"});
        }
        const updateProduct = await Product.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json(updateProduct);
    }
    catch (err) {
        res.status(500).json({message: "Internal Server Error"});
    }
}

export const deleteProduct = async(req, res) => {
    try {
        const id = req.params.id;
        const productExist = await Product.findOne({_id: id});
        if(!productExist)
        {
            return res.status(404).json({message: "Product not found"});
        }
        await Product.findByIdAndDelete(id);
        res.status(200).json({message: "Product deleted successfully"});
    }
    catch (err) {
        res.status(500).json({message: "Internal Server Error"});
    }
}


