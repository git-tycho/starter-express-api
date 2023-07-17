const express = require('express')
const app = express()
app.post('/', async (req, res) => {
    console.log("Just got a request!");
    res.sendStatus(200);
    const form_response = req.body.toString();
    console.log(form_response)
})
app.listen(process.env.PORT || 3000)
