const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Photo, User } = require('../../db/models');

const router = express.Router();

photoValidations = [
  check("photoUrl")
    .exists({ checkFalsy: true })
    .withMessage("Please provide the photo url for your photo")
]

router.get("/", asyncHandler(async (req, res) => {
  const photos = await Photo.findAll({
    include: {
      model: User
    }
  });
  return res.json({
    photos
  })
}))

router.get("/id(\\d+)", asyncHandler(async (req, res) => {
  const photoId = req.params.id;
  const photo = await Photo.findByPk(photoId, {
    include: {
      model: User
    }
  });
  return res.json({
    photo
  })
}))

router.post("/", handleValidationErrors, photoValidations, asyncHandler(async(req, res) => {
  const { user } = req;
  const {
    photoUrl,
    caption,
    isPublic
  } = req.body

  const newPhoto = await Photo.create({
    userId: user.id,
    photoUrl,
    caption,
    isPublic
  })

  return res.json(newPhoto)
}))

router.put("/:id(\\d+)", asyncHandler(async(req, res) => {
  const photoId = req.params.id
  const {
    photoUrl,
    caption,
    isPublic
  } = req.body

  const photo  = await photo.findByPk(photoId)

  if (photo) {
    let updatedPhoto = await photo.update({
      photoUrl,
      caption,
      isPublic
    })
  }
  return res.json(updatedPhoto)
}))

router.delete("/:id(\\d+)", asyncHandler(async(req, res) => {
  const photoId = req.params.id
  const photo = await photo.findByPk(photoId)

  if(photo) {
    await photo.destroy()
  }
}))

module.exports = router;