const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const isVulnerable = req.query.vulnerable === 'true';

    // Sensitive data
    const data = isVulnerable
        ? { secretToken: 'abc123', creditCardNumber: '1234-5678-9012-3456' }
        : { secretToken: 'axxxx3', creditCardNumber: 'xxxx-xxxx-xxxx-xxxx' };

    //Logga se Sensitive data u console ako je vulnerability omogucen
    if (isVulnerable) {
        console.log(`Sensitive data exposed: ${JSON.stringify(data)}`);
    } else {
        console.log('Safe data returned');
    }

    res.json(data);
});

module.exports = router;
