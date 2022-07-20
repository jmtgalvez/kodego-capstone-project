const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/admin');
})

router.use(require('./auth/router'));
router.use('/status', require('./posts/router'));
router.use('/users', require('./users/router'));
router.use('/interactions', require('./interactions/router'));

module.exports = router;