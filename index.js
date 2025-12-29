const express = require('express')

const app = express()

app.get("/", (req, res) => {
    const message = {message: "Express app is running in version 2!"}
    return res.status(200).json(message)
})

app.get("/liveness", (req, res) => {
    const message = {status: "OK"}
    return res.status(200).json(message)
})

const port = process.env["PORT"] ? parseInt(process.env["PORT"]) : 5000
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})