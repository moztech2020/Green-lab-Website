const express = require('express');
const {
  
  getalltechUpdates ,
  createtechUpdate,
  updatetechUpdate,
  deletetechUpdate,
  techUpdatePhotoUpload
  
} = require('../controllers/techUpdate');
const router = express.Router();

router.route('/').get(getalltechUpdate).post(createtechUpdate);

router.route('/:id').put( updatetechUpdate).delete(deletetechUpdate);

router.route('/:id/photo').put(  techUpdatePhotoUpload);
