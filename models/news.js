var mongoose = require('mongoose');
const slugify = require('slugify')

var Schema = mongoose.Schema;

var NewsSchema = new Schema({
   
    image: {
        type: String,
        default: 'no-photo.jpg'
    },
    title:{
		type: String,
        required:[true, 'please input the title of the news'],
        unique:true
        
    },
    date: {
        type: Date,
        default: Date.now
    },
    content:{
		type: String,
        required:[true, 'please  input the content '],
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

module.exports = mongoose.model('News', NewsSchema);