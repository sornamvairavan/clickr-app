const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Photo, User } = require('../../db/models');

const router = express.Router();

photoValidations = [
  check("photoUrl")
    .exists({ checkFalsy: true })
    .withMessage("Please provide the photo URL for your photo")
    .isURL()
    .withMessage("Please provide a valid URL"),
  check("isPublic")
    .isBoolean()
    .withMessage("Please select if you want the photo to be set to Public"),
  handleValidationErrors
]

router.get("/", asyncHandler(async (req, res) => {
  const photos = await Photo.findAll({
    include: {
      all: true
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

router.post("/", photoValidations, asyncHandler(async(req, res) => {
  const {
    userId,
    photoUrl,
    caption,
    isPublic
  } = req.body

  const newPhoto = await Photo.create({
    userId,
    photoUrl,
    caption,
    isPublic
  })

  return res.json(newPhoto)
}))

router.put("/:id(\\d+)", asyncHandler(async(req, res) => {
  const photoId = req.params.id
  const {
    caption,
    isPublic
  } = req.body

  const photo = await Photo.findByPk(photoId)

  if (photo) {
    let updatedPhoto = await photo.update({
      photoId,
      caption,
      isPublic
    })
    return res.json(updatedPhoto)
  }
}))

router.delete("/:id(\\d+)", asyncHandler(async(req, res) => {
  const photoId = req.body.photoId
  const photoToDelete = await Photo.findByPk(photoId)

  if(photoToDelete) {
    await photoToDelete.destroy()
  }
  return res.json(photoToDelete)
}))

module.exports = router;