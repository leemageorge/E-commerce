import express from "express"
import { verifyTokenAndAdmin } from "./verifyToken.js"
import Product from "../models/Product.js"
const router = express.Router()

//Create Products
router.post("/", verifyTokenAndAdmin, async(req,res)=>{
    const newProducts = new Product(req.body)
    try{
        
        const savedProduct = await newProducts.save()
        res.status(200).json(savedProduct)

    }catch(err){
        res.status(500).json(err)
    }
})
//Update Products
router.put("/:id", verifyTokenAndAdmin, async(req,res)=>{
    try{
        const updatedProducts = await Product.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updatedProducts)

    }catch(err){
        res.status(500).json(err)
    }
})
//Delete Products

router.delete("/:id", verifyTokenAndAdmin, async(req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Prodcut has been deleted Successfully!!!.....")

    }catch(err){
        res.status(500).json(err)
    }
})
//Get Products
router.get("/find/:id", async(req,res)=>{
    try{
       const product = await Product.findById(req.params.id)
       res.status(200).json(product)

    }catch(err){
        res.status(500).json(err)
    }
})
//Get All Products

router.get("/",async(req,res)=>{
    const qNew = req.query.new
    const qCategories = req.query.category

try{
    let products;
    if(qNew){
        products = await Product.find().sort({createdAt: -1}).limit(1)
    }else if(qCategories){
        products = await Product.find({category: {$in: [qCategories]}})
    }else{
        products = await Product.find()
    }
       
  res.status(200).json(products)
}catch(err){
    res.status(500).json(err)
}
})

export default router