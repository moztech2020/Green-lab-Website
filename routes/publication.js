
const express = require('express');
const {
  
  getallpublications ,
  createpublication,
  updatepublication,
  deletepublication,
  publicationPhotoUpload
  
} = require('../controllers/publications');
const router = express.Router();

router.route('/').get(getallpublications).post(createpublication);

router.route('/:id').put(updatepublication).delete(deletepublication);

router.route('/:id/photo').put( publicationPhotoUpload);




module.exports = router;