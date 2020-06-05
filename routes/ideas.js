
const express = require('express');
const {
  
  getallideas ,
  createidea,
  updateidea,
  deleteidea,
  ideaPhotoUpload
  
} = require('../controllers/ideas');
const router = express.Router();

router.route('/').get(getallideas).post(createidea);

router.route('/:id').put(updateidea).delete(deleteidea);

router.route('/:id/photo').put( ideaPhotoUpload);




module.exports = router;