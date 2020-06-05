const Event = require('../models/ideas');
const asyncHandler = require('../middleware/async');
const path = require('path');

const ErrorResponse = require('../utils/errorResponse');

//@desc              Get   all events
//@routes            GET   /events
//access             public

exports. getallideas = asyncHandler(async (req, res, next) => {
  const idea = await Idea.find().sort({ date: 'desc' });
  res.status(200).json({
    success: true,
    count: idea.length,
    data: idea
  });
});






//@desc             Create new event
//@routes            POST    events/create
//access             private

exports.createidea = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  const idea = await Idea.create(req.body);
  res.status(200).json({ success: true, msg: event });
});
//@desc              update event
//@routes            PUT    events/id
//access             private

exports.updateidea= asyncHandler(async (req, res, next) => {
  const idea = await Idea.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!idea) {
    return next(
      new ErrorResponse(
        `the resource  not found with id of ${req.params.id}`,
        404
      )
    );
  }

  res.status(200).json({
    success: true,
    data: idea,
  });
});




// @desc      Upload photo for event
// @route     PUT /events/:id/photo
// @access    Private
exports.ideaPhotoUpload = asyncHandler(async (req, res, next) => {
  const ideas = await Ideas.findById(req.params.id);

  if (!ideas) {
    return next(
      new ErrorResponse(`resource not found with id of ${req.params.id}`, 404)
    );
  }

  

  if (!req.files) {
    return next(new ErrorResponse(`Please upload a file`, 400));
  }

 

  const file = req.files.file;

  // Make sure the image is a photo
  if (!file.mimetype.startsWith('image')) {
    return next(new ErrorResponse(`Please upload an image file`, 400));
  }

  // Check filesize
  if (file.size > 1000000) {
    return next(
      new ErrorResponse(
       'Please upload an image less than 1000000',
        400
      )
    );
  }

  // Create custom filename
  file.name = `photo_${event._id}${path.parse(file.name).ext}`;
  console.log(file.name);

  file.mv(`./public/ideas/${file.name}`, async err => {
    if (err) {
      console.error(err);
      return next(new ErrorResponse(`Problem with file upload`, 500));
    }

    await Ideas.findByIdAndUpdate(req.params.id, { image: file.name });

    res.status(200).json({
      success: true,
      data: file.name
    });
  });
});

 
  
    
 
  




//@desc             delete event
//@routes            DELETE    events/id
//access             private

exports.deleteideas = asyncHandler(async (req, res, next) => {
  
    const ideas = await Ideas.findByIdAndDelete(req.params.id);
    if (!ideas) {
      return next(new ErrorResponse(`resource not found with id of ${req.params.id}`, 404)
    );
      
    
    
  }
res.status(200).json({
  success: true, 
  data: {}
});
  
});
