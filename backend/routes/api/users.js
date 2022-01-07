const express = require('express')
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models')

const router = express.Router();

router.post('/', asyncHandler(async (req, res) => {
  const {fullName, email, password, username} = req.body;
  const user = await User.signup({ fullName, email, username, password })

  await setTokenCookie(res, user)

  return res.json({
    user
  })
}))

module.exports = router;