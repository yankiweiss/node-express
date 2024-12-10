const express = require('express')
const app = express()
const { Server } = require('http');
const path = require('path')

const PORT = process.env.PORT || 3500;

app.get('/', (req, res) => {
    res.send('<h1 style="color: red;">Hello World</h1>')
})

app.listen(PORT, () => console.log(`Server is Runing on port ${PORT}`))