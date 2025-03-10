import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {type:String, required:true, unique:true },
    desc: {type:String, required: true},
    img: {type: String, required: true},
    color: { type: Array},
    price: {type: Number, required: true},
    categories: {type: Array},
    size: {type: Array},
    instock:{type:Boolean, default:true}
}, {timestamps: true})

export default mongoose.model("Product", ProductSchema)