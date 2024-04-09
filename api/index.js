import express from "express"
const app= express();
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
import authRoute from "./routes/auth.js"
import userRoute from "./routes/user.js"
import productRoute from "./routes/product.js"
import cartRoute from "./routes/cart.js"
import orderRoute from "./routes/order.js"
import stripeRoute from "./routes/stripe.js"
import cors from "cors"


mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connnected to mongo db")
}).catch((err)=> {console.log(err)})

app.use(cors())
app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)
app.use("/api/products", productRoute)
app.use("/api/carts", cartRoute)
app.use("/api/orders", orderRoute)
app.use("/api/checkout" , stripeRoute)


app.listen(process.env.PORT || 5000 , ()=>{
    console.log("connected to backend")
})