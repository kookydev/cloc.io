const express = require('express')
const app = express()

const port = process.env.PORT || 3001 

//listening to port
app.listen(port, () => {
    console.log('Listening to port' + port)
})