var mongoose = require('mongoose');
const slugify = require('slugify')

var Schema = mongoose.Schema;

var EventSchema = new Schema({
   
   
   /* category:{
		type: String,
        required:[true, 'please select the category '],
        unique:true
        
    },*/
    title:{
		type: String,
        required:[true, 'please input the name of the event  '],
        unique:true
        
    },
    date: {
        type: Date,
        default: Date.now
    },
    content:{
		type: String,
        required:[true, 'please select the category '],
        unique:true,
        
    },

    image: {
        type: String,
        default: 'no-photo.jpg'
    } , 

    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Event',
        required: true
      },
    
    slug: {
        type:String,
    
        type:String,
        required: true,
        unique: true
        

       
    },


    
    
     
  
})

// Create  slug from the name
EventSchema.pre('validate', function(next) {
    if (this.title){
        this.slug = slugify(this.title, { lower: true,strict:true });
   
    }
    next();
    
  });

module.exports = mongoose.model('Events', EventSchema);