const express = require('express');
const router = express.Router();

const sensitiveData = {
    secretToken: "abc123",
    creditCardNumber: "1234-5678-9012-3456",
};

router.get('/vulnerable', (req, res) => {
    res.json(sensitiveData);
});

router.get('/safe', (req, res) => {
    const maskedData = {
        secretToken: "abc123",
        creditCardNumber: "xxxx-xxxx-xxxx-xxxx",
    };
    res.json(maskedData);
});

module.exports = router;
