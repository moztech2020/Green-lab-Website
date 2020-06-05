
const express = require('express');
const {
  
  getallnews ,
  createnews,
  updatenews,
  deletenews,
  newsPhotoUpload
  
} = require('../controllers/news');
const router = express.Router();

router.route('/').get(getallnews).post(createnews);

router.route('/:id').put(updatenews).delete(deletenews);

router.route('/:id/photo').put( newsPhotoUpload);




module.exports = router;