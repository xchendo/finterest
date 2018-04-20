const express = require('express');
const router = express.Router();

router.post('/user/create', (req, res) => res.send(req.body));

module.exports = router;