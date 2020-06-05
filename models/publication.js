var mongoose = require('mongoose');
const slugify = require('slugify')

var Schema = mongoose.Schema;

var PublicationSchema = new Schema({
   
   
    excerpt:{
		type: String,
        required:true,
        unique:true,
        
    },
   
    title:{
		type: String,
        required:[true, 'please input the title of the publication'],
        unique:true
        
    },
    file:{
		type: String,
        required:[true, 'please upload the file for the publication'],
        unique:true
        
    },
    date: {
        type: Date,
        default: Date.now
    },
    description:{
		type: String,
        required:[true, 'please input the description'],
        unique:true,
        
    
    
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

module.exports = mongoose.model('Publication', EventSchema);