import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    UserId:{type: String, required: true},
    Products:[{productId: {type: String},
    quantity: {type: Number,default: 1}}],
    amount:{type: Number, required:true},
    address: {type: Object, required: true},
    status: {type:String, default: "pending" }
},{timestamps: true})

export default mongoose.model("Order", OrderSchema)