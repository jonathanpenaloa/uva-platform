require('dotenv').config();
const express = require('express');
const cors = require('cors');

const health = require('./routes/health');
const ivr = require('./routes/ivr');
const tools = require('./routes/tools');

const app = express();
app.use(cors());
app.use(express.json({ limit: '1mb' }));

app.use('/health', health);
app.use('/ivr', ivr);
app.use('/tools', tools);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`API listening on http://localhost:${port}`));
