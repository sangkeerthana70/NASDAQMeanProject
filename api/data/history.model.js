var mongoose        = require('mongoose')
  , mongooseHistory = require('mongoose-history')
  , Schema          = mongoose.Schema;
 
var Post = new Schema({
    title:       String
  , message:     String
  , updated_for: String
});
 
Post.plugin(mongooseHistory);