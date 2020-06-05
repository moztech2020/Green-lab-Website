var mongoose = require('mongoose');
const slugify = require('slugify')

var Schema = mongoose.Schema;

var TechUpdateSchema = new Schema({


    image: {
        type: String,
        default: 'no-photo.jpg'
    } , 
    
   
   
    title:{
		type: String,
        required:[true, 'please input the name of the event  '],
        unique:true
        
    },
    date: {
        type: Date,
        default: Date.now
    },
    source:{
		type: String,
        required:[true, 'please add the source '],
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

module.exports = mongoose.model('TechUpdate', TechUpdateSchema);