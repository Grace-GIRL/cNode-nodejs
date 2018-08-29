const express = require('express')
const router=require('./router')

const app = express()

const port =5050

// app.get('/',(req,res)=>{
//     res.send('hello world')
// })
app.use(router)
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
    console.log(`  Please visit http://localhost:${port}/`)
})

module.exports=app