const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const xssRoutes = require('./routes/xss');
const dataExposureRoutes = require('./routes/dataExposure');

const app = express();
const PORT=process.env.PORT || 3000;

app.use(cors({ origin: 'http://localhost:5000' }));
app.use(helmet());
app.use(express.json());

app.use('/xss', xssRoutes);
app.use('/data-exposure', dataExposureRoutes);


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});