const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const isVulnerable = req.query.vulnerable === 'true';

    const data = isVulnerable
      ? { secretToken: 'abc123', creditCardNumber: '1234-5678-9012-3456' }
      : { secretToken: 'axxxx3', creditCardNumber: 'xxxx-xxxx-xxxx-xxxx' }; 

    res.json(data);
});

module.exports = router;
