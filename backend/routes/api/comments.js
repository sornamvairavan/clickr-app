const express = require('express');
const asyncHandler = require('express-async-handler');
const { Comment, Photo } = require('../../db/models');

const router = express.Router();

router.get("/", asyncHandler(async (req, res) => {
  const comments = await Comment.findAll({
    include: {
      all: true
    }
  });

  return res.json({
    comments
  })
}))


router.post("/", asyncHandler(async (req, res) => {
  const {userId, photoId, content} = req.body;
  const comment = await Comment.create({
    userId,
    photoId,
    content
  })

  return res.json({
    comment
  })

}))

router.delete("/:id(\\d+)", asyncHandler(async(req, res) => {
  const commentId = req.body.commentId
  const commentToDelete = await Comment.findByPk(commentId, {
    include: {
      model: Photo
    }
  })

    if(commentToDelete) {
    await commentToDelete.destroy()
  }
  return res.json(commentToDelete)
  
}))

module.exports = router;