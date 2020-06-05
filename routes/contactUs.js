
const express = require('express');
const {
  
  getallcontact ,
  createcontactUs,
 
  
  
} = require('../controllers/contactUs');
const router = express.Router();

router.route('/').get(getallcontact).post(createcontactUs);






module.exports = router;