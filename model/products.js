//ใช้งาน mongoose
const mongoose = require('mongoose')

// เชื่อมไปยัง mongoDB
const dbUrl = 'mongodb://127.0.0.1:27017/productDB'
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch(err=>console.log(err))

// ออกแบบ Schema
let productSchema = mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    description:String
})

//สร้าง Model
let Product = mongoose.model("products",productSchema)


//ส่งออก Midel
module.exports = Product


// ออกแบบฟังชั่นสำหรับบันทึกข้อมูล 
module.exports.saveProduct=function(model,data){
    model.save(data)
}