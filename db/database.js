const mongoose=require('mongoose')


mongoose.connect("mongodb://localhost:27017/Registration",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Database connected")
}).catch((e)=>{
    console.log("no connection")
})