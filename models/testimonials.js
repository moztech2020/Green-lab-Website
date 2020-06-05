var mongoose = require('mongoose');
const slugify = require('slugify')

var Schema = mongoose.Schema;

var TestimonialSchema = new Schema({
   
    image: {
        type: String,
        default: 'no-photo.jpg'
    },
    name:{
		type: String,
        required:[true, 'please  input your  name'],
        lowercase:true,
        unique:true,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']


    },
    
    testimonial:{
		type: String,
        required:[true, 'please  input the testimonial '],
        unique:true,
        
    },
    
    
    slug: {
        type:String,
    
        type:String,
        required: true,
        unique: true
        

       
    },


    
    
     
  
})

// Create bootcamp slug from the name
EventSchema.pre('validate', function(next) {
    if (this.title){
        this.slug = slugify(this.title, { lower: true,strict:true });
   
    }
    next();
    
  });

module.exports = mongoose.model('Testimonial', TestimonialSchema);