import express from "express";
const app = express()

app.get('/', (req, res) => {
    res.send('Hello GITA')
})

app.listen(5667)