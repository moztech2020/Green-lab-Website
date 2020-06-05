const Event = require('../models/contact');
const asyncHandler = require('../middleware/async');
const path = require('path');

const ErrorResponse = require('../utils/errorResponse');

//@desc              Get   all events
//@routes            GET   /events
//access             public

exports. getallcontact = asyncHandler(async (req, res, next) => {
  const contact = await Contact.find().sort({ date: 'desc' });
  res.status(200).json({
    success: true,
    count: contact.length,
    data:contact
  });
});






//@desc             Create new event
//@routes            POST    events/create
//access             private

exports.createcontacct = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  const contact = await Contact.create(req.body);
  res.status(200).json({ success: true, msg: event });
});
//@desc              update event
//@routes            PUT    events/id
//access             private


 
  
    
 
  




//@desc             delete event
//@routes            DELETE    events/id
//access             private

exports.deletecontact = asyncHandler(async (req, res, next) => {
  
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return next(new ErrorResponse(`resource not found with id of ${req.params.id}`, 404)
    );
      
    
    
  }
res.status(200).json({
  success: true, 
  data: {}
});
  
});
