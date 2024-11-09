const express = require('express');
const router = express.Router();

router.get('/vulnerable', (req, res) => {
    const {message} = req.query;
    res.send(`<h1>Your message: ${message}</h1>`);
});

router.get('/safe', (req, res) => {
    const {message} = req.query;
    const escapedMessage = message.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    res.send(`<h1>Your message: ${escapedMessage}</h1>`);
});

module.exports = router;