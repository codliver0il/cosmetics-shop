import Order from "../models/order-model.js"

export const create = async(req, res) => {
    try {
        const orderData = new Order(req.body);
        const {orderNumber} = orderData;
        const orderExist = await Order.findOne({orderNumber})
        if (orderExist)
        {
            return res.status(400).json({message: "Order already exists"})
        }
        const savedOrder = await orderData.save()
        res.status(200).json(savedOrder)
    } 
    catch (err) {
        res.status(500).json({error: "Internal Server Error"}); 
    }
}

export const fetchOrders = async (req, res)=>{ //все заказы
    try {
        const orders = await Order.find();
        if(orders.length === 0 )
        {
            return res.status(404).json({message: "Order not found"});
        }
        res.status(200).json(orders);
    } 
    catch (err) {
        res.status(500).json({error : "Internal Server Error"})
    }
}

export const fetchActiveOrders = async(req, res) => { //активные
    try {
        const orders = await Order.find();
        if(orders.length === 0)
        {
            return res.status(404).json({message: "Order not found"});
        }
        const filteredData = orders.filter((order) => {
            return !Object.keys(order.status).some(key => key === "Заказ получен"); //массив заказов которые еще НЕ завершены, т.е. активны 
        })
        if(filteredData.length === 0)
        {
            return res.status(404).json({message: "Active orders not found"});
        }
        res.status(200).json(filteredData);
    } 
    catch (err) {
        res.status(500).json({error: "Internal Server Error"}); 
    }
}

export const fetchArchivedOrders = async(req, res) => { // завершенные
    try {
        const orders = await Order.find();
        if(orders.length === 0)
        {
            return res.status(404).json({message: "Order not found"});
        }
        const filteredData = orders.filter((order) => {
            return Object.keys(order.status).some(key => key === "Заказ получен"); //массив завершенных заказов 
        })
        if(filteredData.length === 0)
        {
            return res.status(404).json({message: "Active orders not found"});
        }
        res.status(200).json(filteredData);
    } 
    catch (err) {
        res.status(500).json({error: "Internal Server Error"}); 
    }
}

export const update = async(req, res) => {
    try {
        const id = req.params.id;
        const orderExist = await Order.findOne({_id: id});
        if(!orderExist)
        {
            return res.status(404).json({message: "Order not found"});
        }
        const updateOrder = await Order.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json(updateOrder);
    }
    catch (err) {
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const deleteOrder = async(req, res) => {
    try {
        const id = req.params.id;
        const orderExist = await Order.findOne({_id: id});
        if(!orderExist)
        {
            return res.status(404).json({message: "Order not found"});
        }
        await Order.findByIdAndDelete(id);
        res.status(200).json({message: "Order deleted successfully"});
    }
    catch (err) {
        res.status(500).json({error: "Internal Server Error"});
    }
}
