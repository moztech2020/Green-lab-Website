const Event = require('../models/event');
const asyncHandler = require('../middleware/async');
const path = require('path');

const ErrorResponse = require('../utils/errorResponse');

//@desc              Get   all events
//@routes            GET   /events
//access             public

exports.getevents = asyncHandler(async (req, res, next) => {
  const event = await Event.find().sort({ date: 'desc' });
  res.status(200).json({
    success: true,
    count: event.length,
    data: event,
  });
});

exports.blogcategory = asyncHandler(async (req, res, next) => {

  let query;
  
    // Copy req.query
    const reqQuery = { ...req.query };
  
    // Fields to exclude
    const removeFields = ['select', 'sort', 'page', 'limit'];
  
    // Loop over removeFields and delete them from reqQuery
    removeFields.forEach(param => delete reqQuery[param]);
  
    // Create query string
    let queryStr = JSON.stringify(reqQuery);
  
    // Create operators ($gt, $gte, etc)
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
  
    // Finding resource
    query =Event.find(JSON.parse(queryStr));
  
      // Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 25;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await Event.countDocuments();
  
    query = query.skip(startIndex).limit(limit);
    
  
    
  
    // Executing query
    const events = await query;
  
    // Pagination result
    const pagination = {};
  
    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit
      };
    }
  
    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit
      };
    }
  
  const event = await Event.find({categories:goat}).sort({ date: 'desc' });
  if (!event) {
    return next(
      new ErrorResponse(`resource not found with id of ${req.params.id}`, 404)
    );
  }
  
    
  
    
  
  res.status(200).json({
    success: true,
    count: event.length,
    pagination,
    data: event,
  });
});




// the first category
/*exports.blogcategory = asyncHandler(async (req, res, next) => {

  let query;
  
    // Copy req.query
    const reqQuery = { ...req.query };
  
    // Fields to exclude
    const removeFields = ['select', 'sort', 'page', 'limit'];
  
    // Loop over removeFields and delete them from reqQuery
    removeFields.forEach(param => delete reqQuery[param]);
  
    // Create query string
    let queryStr = JSON.stringify(reqQuery);
  
    // Create operators ($gt, $gte, etc)
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
  
    // Finding resource
    query =Event.find(JSON.parse(queryStr));
  
      // Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 25;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await Event.countDocuments();
  
    query = query.skip(startIndex).limit(limit);
    
  
    
  
    // Executing query
    const events = await query;
  
    // Pagination result
    const pagination = {};
  
    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit
      };
    }
  
    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit
      };
    }
  
  const event = await Event.find({categories:goat}).sort({ date: 'desc' });
  if (!event) {
    return next(
      new ErrorResponse(`resource not found with id of ${req.params.id}`, 404)
    );
  }
  
    
  
    
  
  res.status(200).json({
    success: true,
    count: event.length,
    pagination,
    data: event,
  });
});


// the second category
exports.blogcategory2 = asyncHandler(async (req, res, next) => {

  let query;
  
    // Copy req.query
    const reqQuery = { ...req.query };
  
    // Fields to exclude
    const removeFields = ['select', 'sort', 'page', 'limit'];
  
    // Loop over removeFields and delete them from reqQuery
    removeFields.forEach(param => delete reqQuery[param]);
  
    // Create query string
    let queryStr = JSON.stringify(reqQuery);
  
    // Create operators ($gt, $gte, etc)
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
  
    // Finding resource
    query =Event.find(JSON.parse(queryStr));
  
      // Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 25;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await Event.countDocuments();
  
    query = query.skip(startIndex).limit(limit);
    
  
    
  
    // Executing query
    const events = await query;
  
    // Pagination result
    const pagination = {};
  
    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit
      };
    }
  
    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit
      };
    }
  
  const event = await Event.find({categories:goat}).sort({ date: 'desc' });
  if (!event) {
    return next(
      new ErrorResponse(`resource not found with id of ${req.params.id}`, 404)
    );
  }
  
    
  
    
  
  res.status(200).json({
    success: true,
    count: event.length,
    pagination,
    data: event,
  });
});

// the third category 
exports.blogcategory3 = asyncHandler(async (req, res, next) => {

  let query;
  
    // Copy req.query
    const reqQuery = { ...req.query };
  
    // Fields to exclude
    const removeFields = ['select', 'sort', 'page', 'limit'];
  
    // Loop over removeFields and delete them from reqQuery
    removeFields.forEach(param => delete reqQuery[param]);
  
    // Create query string
    let queryStr = JSON.stringify(reqQuery);
  
    // Create operators ($gt, $gte, etc)
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
  
    // Finding resource
    query =Event.find(JSON.parse(queryStr));
  
      // Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 25;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await Event.countDocuments();
  
    query = query.skip(startIndex).limit(limit);
    
  
    
  
    // Executing query
    const events = await query;
  
    // Pagination result
    const pagination = {};
  
    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit
      };
    }
  
    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit
      };
    }
  
  const event = await Event.find({categories:goat}).sort({ date: 'desc' });
  if (!event) {
    return next(
      new ErrorResponse(`resource not found with id of ${req.params.id}`, 404)
    );
  }
  
    
  
    
  
  res.status(200).json({
    success: true,
    count: event.length,
    pagination,
    data: event,
  });
});*/


//@desc             Get single event
//@routes            GET /events/id
//access             public

exports.getevent = asyncHandler(async (req, res, next) => {
  const event = await Event.findById(req.params.id);
  if (!event) {
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

//@desc             Create new event
//@routes            POST    events/create
//access             private

exports.createevent = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  const event = await Event.create(req.body);
  res.status(200).json({ success: true, msg: event });
});
//@desc              update event
//@routes            PUT    events/id
//access             private

exports.updateevent = asyncHandler(async (req, res, next) => {
  const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!event) {
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


  
//})




// @desc      Upload photo for event
// @route     PUT /events/:id/photo
// @access    Private
exports.eventPhotoUpload = asyncHandler(async (req, res, next) => {
  const event = await Event.findById(req.params.id);

  if (!event) {
    return next(
      new ErrorResponse(`resource not found with id of ${req.params.id}`, 404)
    );
  }

  // Make sure user is bootcamp owner
  /*if (bootcamp.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to update this bootcamp`,
        401
      )
    );
  }*/

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

  file.mv(`./public/uploads/${file.name}`, async err => {
    if (err) {
      console.error(err);
      return next(new ErrorResponse(`Problem with file upload`, 500));
    }

    await Event.findByIdAndUpdate(req.params.id, { image: file.name });

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
  
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return next(new ErrorResponse(`resource not found with id of ${req.params.id}`, 404)
    );
      
    
    
  }
res.status(200).json({
  success: true, 
  data: {}
});
  
});
