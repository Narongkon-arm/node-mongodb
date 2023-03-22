//จัดการ Routing
const express = require('express')
const router = express.Router()
//เรียกใช้งาน Model
const Product = require('../model/products')

router.get("/",(req,res)=>{
    const products = [
        {name:"โน็ตบุ้ค",price:25500,image:"images/products/product1.png"},
        {name:"เสื้อผ้า",price:2000,image:"images/products/product2.png"},
        {name:"หูฟัง",price:30000,image:"images/products/product3.png"}

    ]
    res.render('index',{
        products:products
    })
})

router.get("/addForm",(req,res)=>{
    res.render('form')
})
router.get("/manage",(req,res)=>{
    res.render('manage')
})

router.post('/insert',async(req,res)=>{
    let data = new Product({
        name:req.body.name,
        price:req.body.price,
        image:req.body.image,
        description:req.body.description
    })
    await data.save()
    return res.redirect('/')
})

module.exports = router