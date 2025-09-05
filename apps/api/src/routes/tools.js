const { Router } = require('express');
const { z } = require('zod');
const router = Router();

router.post('/order-materials', (req, res) => {
  const schema = z.object({
    siteId: z.string(),
    materials: z.array(z.object({
      name: z.string(),
      qty: z.number().positive(),
      spec: z.string().optional()
    })),
    neededBy: z.string()
  });

  const parsed = schema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ ok: false, error: parsed.error.flatten() });
  }

  // TODO: call supplier API here
  return res.json({ ok: true, poId: 'PO-12345', eta: parsed.data.neededBy });
});

module.exports = router;
