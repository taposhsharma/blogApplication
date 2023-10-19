const express = require('express')
const cors = require('cors')


const app = express()


app.use(cors())

const PORT = 3000


app.listen(PORT,()=>{
    console.log(`App is runing gon port ${PORT}`)
})