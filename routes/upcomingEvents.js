
const express = require('express');
const {
  
  getallupcomingEvents ,
  createupcomingEvent,
  updateupcomingEvent,
  deleteupcomingEvent,
  upcomingEventPhotoUpload
  
} = require('../controllers/upcomingEvent');
const router = express.Router();

router.route('/').get(getallupcomingEvents).post(createupcomingEvent);

router.route('/:id').put(updateupcomingEvent).delete( deleteupcomingEvent);

router.route('/:id/photo').put( upcomingEventPhotoUpload);




module.exports = router;