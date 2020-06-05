const express = require('express');
const {
  getevents,
  getevent,
  createevent,
  updateevent,
  deleteevent,
  eventPhotoUpload,
  blogcategory
} = require('../controllers/event');
const router = express.Router();

router.route('/').get(getevents).post(createevent);

router.route('/:id').get(getevent).put(updateevent).delete(deleteevent);

router.route('/:id/photo').put(eventPhotoUpload);

router.route('/super').get(blogcategory);


module.exports = router;
