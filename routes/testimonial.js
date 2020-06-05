
const express = require('express');
const {
  
  gettestimonials,
  createtestimonial,
  updattestimonial,
  deletetestimonial,
  testimonialPhotoUpload
  
} = require('../controllers/testimonial');
const router = express.Router();

router.route('/').get(gettestimonials).post(createtestimonial);

router.route('/:id').put(updattestimonial).delete(deletetestimonial);

router.route('/:id/photo').put( testimonialPhotoUpload);




module.exports = router;