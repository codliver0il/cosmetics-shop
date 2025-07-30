import Product from "../models/product-model.js"
import path from "path";
import fs from "fs";

const deleteFiles = async (files) => { //вспомогательная функция удаления фотографий при ошибке/ удалении продукта
    
    const promises = files.map(file => {
        const filePath = path.join(process.cwd(), 'uploads', file.filename);
        return fs.promises.unlink(filePath).catch(err => {
            console.error("Failed to delete:", filePath, err);
        });   
    });
    
    await Promise.all(promises);        
}



export const create = async(req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: "Images are required." });
        }

        const { title, description, article, oldPrice, price, path, specifications, images } = req.body;

        const productExist = await Product.findOne({title});
        if (productExist)
        {
            if (req.files) 
            {
                await deleteFiles(req.files); 
            }
            return res.status(400).json({message: "Product already exists"});
        };
        const imagePaths = req.files.map(file => `/uploads/${file.filename}`);
        const productData = new Product({
            title,
            description,
            article,
            oldPrice,
            price,
            path: JSON.parse(path),                
            specifications: JSON.parse(specifications), 
            images: imagePaths
        });

        const savedProduct = await productData.save();
        res.status(200).json(savedProduct); 
    } 
    catch (err) {
        if (req.files) 
        {
                await deleteFiles(req.files); 
        }
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const fetchProducts = async(req, res) => { // все товары
    try {
        const products = await Product.find()
        if (products.length === 0)
        {
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json(products);
    }
    catch (err) {
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const fetchProduct = async(req, res) => { // один товар
    try {
        const id = req.params.id;
        const product = await Product.findOne({_id: id});
        if (!product)
        {
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json(product);
    } 
    catch (err) {
        res.status(500).json({error: "Internal Server Error"});
    }
} 

export const update = async(req, res) => {
    try {
        console.log("=== ОБНОВЛЕНИЕ ТОВАРА ===");
        console.log("ID:", id);
        console.log("Тело запроса:", req.body);
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
        res.status(500).json({error: "Internal Server Error"});
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
        const files = productExist.images.map(imagePath => ({
            filename: imagePath.split('/').pop()
        }));
        await deleteFiles(files);
        await Product.findByIdAndDelete(id);
        res.status(200).json({message: "Product deleted successfully"});
    }
    catch (err) {
        res.status(500).json({error: "Internal Server Error"});
    }
}

