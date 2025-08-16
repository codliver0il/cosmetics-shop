import User from "../models/user-model.js"

export const create = async(req, res) => { //функция создания аккуанта пользователя
    try {
        const userData = new User(req.body);
        const {phone} = userData; // создание переменной phone со знач userData.phone
        const userExist = await User.findOne({phone});
        if (userExist)
        {
            return res.status(400).json({message: "User already exists"});
        }
        const savedUser = await userData.save();
        res.status(200).json(savedUser); //201
    } 
    catch (err) {
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const fetchUsers = async(req, res) => { // все пользователи
    try {
        const users = await User.find();
        if (users.length === 0)
        {
            return res.status(404).json({message: "User not found"});
        }
        res.status(200).json(users); 
    } 
    catch (err) {
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const fetchUser = async(req, res) => { // один пользователь
    try {
        const id = req.params.id;
        const user = await User.findOne({_id: id});
        if (!user)
        {
            return res.status(404).json({message: "User not found"});
        }
        res.status(200).json(user);
    } 
    catch (err) {
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const update = async(req, res) => {
    try { 
        const id = req.params.id;
        const userExist = await User.findOne({_id: id});
        if (!userExist)
        {
            return res.status(404).json({message: "User not found"});
        }
        const updateUser = await User.findByIdAndUpdate(id, req.body, {new: true}); // { new: true } возвращает уже обновлённый документ, а не исходный
        return res.status(200).json(updateUser); 
    }
    catch (err) {
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const deleteUser = async(req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findOne({_id: id});
        if (!userExist)
        {
            return res.status(404).json({message: "User not found"});
        }
        await User.findByIdAndDelete(id);
        return res.status(200).json({message: "User deleted successfully"});
    } 
    catch (err) {
        res.status(500).json({error: "Internal Server Error"});
    }
}
