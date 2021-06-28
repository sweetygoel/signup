const express=require('express')
const bodyParser=require('body-parser')
const mongodb=require('./db/database')
const path=require('path')
//const Register=require('./models/model')
const port=process.env.port || 2929
const app=express()

//set path
const static_path=path.join(__dirname,"../public")
app.use(express.static(static_path))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//set views
app.set("view engine",'hbs')

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/fonts',express.static(path.resolve(__dirname,"assets/fonts")))
app.use('/images',express.static(path.resolve(__dirname,"assets/images")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))
app.use('/scss',express.static(path.resolve(__dirname,"assets/scss")))
app.use('/vender',express.static(path.resolve(__dirname,"assets/vender")))


//load routers
app.use('/',require('./routes/router'))


app.listen(port,()=>{
    console.log(`server is listen to port ${port}`)
})