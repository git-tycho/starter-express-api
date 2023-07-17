const express = require('express')
const app = express()
app.post('/', async (req, res) => {
    console.log("Just got a request!");
    res.sendStatus(200);
    const { event_type, form_response } = JSON.parse(req.body);
    console.log(form_response)
})
app.listen(process.env.PORT || 3000)
