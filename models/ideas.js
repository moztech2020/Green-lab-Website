var mongoose = require('mongoose');
const slugify = require('slugify')

var Schema = mongoose.Schema;

var IdeasSchema = new Schema({
   
   
    firstName:{
		type: String,
        required:[true, 'please  input your first name'],
        lowercase:true,
        unique:true,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']


    },
    lastName:{
		type: String,
        required:[true, 'please input your last name'],
        lowercase:true,
        unique:true,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']


    },
    email:{
		type: String,
        required:[true, 'please input your email'],
        unique:true
        
    },
    relatedCategory:{
		type: String,
        required:[true, 'please select the category '],
        unique:true,
        
    },
    
    
    message:{
		type: String,
        required:[true, 'please input your message'],
        unique:true,
        
    },
   
    
    
    slug: {
        type:String,
    
        type:String,
        required: true,
        unique: true
        

       
    },


    
    
     
  
});

module.exports = mongoose.model('Ideas', EventSchema);