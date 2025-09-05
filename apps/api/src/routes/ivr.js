const { Router } = require('express');
const router = Router();

router.post('/entry', (_req, res) => {
  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Gather input="speech dtmf" action="/ivr/route" numDigits="1" speechTimeout="auto">
    <Say voice="alice">Thanks for calling. Press 1 or say order to begin, or press 0 for a person.</Say>
  </Gather>
</Response>`;
  res.type('text/xml').send(twiml);
});

router.post('/route', (_req, res) => {
  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="alice">Routing to prototype flow. Goodbye.</Say>
  <Hangup/>
</Response>`;
  res.type('text/xml').send(twiml);
});

module.exports = router;
