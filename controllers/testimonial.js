const Event = require('../models/testimonials');
const asyncHandler = require('../middleware/async');
const path = require('path');

const ErrorResponse = require('../utils/errorResponse');

//@desc              Get   all events
//@routes            GET   /events
//access             public

exports.gettestimonials = asyncHandler(async (req, res, next) => {
  const testimonial = await Testimonial.find().sort({ date: 'desc' });
  res.status(200).json({
    success: true,
    count: event.length,
    data: event,
  });
});






//@desc             Create new event
//@routes            POST    events/create
//access             private

exports.createtestimonial = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  const testimoial = await Testimonial.create(req.body);
  res.status(200).json({ success: true, msg: event });
});
//@desc              update event
//@routes            PUT    events/id
//access             private

exports.updatetestimonial = asyncHandler(async (req, res, next) => {
  const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!tetimonial) {
    return next(
      new ErrorResponse(
        `the resource  not found with id of ${req.params.id}`,
        404
      )
    );
  }

  res.status(200).json({
    success: true,
    data: event,
  });
});




// @desc      Upload photo for event
// @route     PUT /events/:id/photo
// @access    Private
exports.testimonialPhotoUpload = asyncHandler(async (req, res, next) => {
  const testimonial = await Testimonial.findById(req.params.id);

  if (!testimonial) {
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

  file.mv(`./public/testimonial/${file.name}`, async err => {
    if (err) {
      console.error(err);
      return next(new ErrorResponse(`Problem with file upload`, 500));
    }

    await Testimonial.findByIdAndUpdate(req.params.id, { image: file.name });

    res.status(200).json({
      success: true,
      data: file.name
    });
  });
});

 
  
    
 
  




//@desc             delete event
//@routes            DELETE    events/id
//access             private

exports.deleteevent = asyncHandler(async (req, res, next) => {
  
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
    if (!testimonial) {
      return next(new ErrorResponse(`resource not found with id of ${req.params.id}`, 404)
    );
      
    
    
  }
res.status(200).json({
  success: true, 
  data: {}
});
  
});
