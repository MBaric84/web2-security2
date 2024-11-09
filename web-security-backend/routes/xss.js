const express = require('express');
const router = express.Router();

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

router.get('/', (req, res) => {
    const isVulnerable = req.query.vulnerable === 'true';
    const message = req.query.message || 'No message provided';

    console.log("Received message:", message);           // Debugging: Log message
    console.log("Is Vulnerable Mode:", isVulnerable);    // Debugging: Log vulnerability mode

    if (isVulnerable) {
      // Vulnerable response: return raw HTML
      res.send(`<h1>Your message: ${message}</h1>`);
    } else {
      // Safe response: escape HTML to prevent XSS
      const safeMessage = escapeHtml(message);
      console.log("Escaped Safe Message:", safeMessage); // Debugging: Log escaped message
      res.send(`<h1>Your message: ${safeMessage}</h1>`);
    }
});

module.exports = router;
