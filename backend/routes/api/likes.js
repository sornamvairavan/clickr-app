const express = require('express');
const asyncHandler = require('express-async-handler');
const { Like } = require('../../db/models');

const router = express.Router();

router.get("/", asyncHandler(async (req, res) => {
  const likes = await Like.findAll({
    include: {
      all: true
    }
  });

  return res.json({
    likes
  })
}))


router.post("/", asyncHandler(async (req, res) => {
  const { userId, photoId } = req.body;
  const like = await Like.create({
    userId,
    photoId,
  })

  return res.json({
    like
  })

}))

router.delete("/:id(\\d+)", asyncHandler(async(req, res) => {
  const likeId = req.body.likeId
  const likeToDelete = await Like.findByPk(likeId, {
    include: {
      all: true
    },
  })

    if(likeToDelete) {
    await likeToDelete.destroy()
  }
  return res.json(likeToDelete)
  
}))

module.exports = router;