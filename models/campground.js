
// Campground Schema Set Up

var mongoose = require("mongoose");


var campgroundSchema = new mongoose.Schema({
   name: String,
   price: String,
   image: String,
   description: String,
   author: {
	   id: {
		   type: mongoose.Schema.Types.ObjectId,
		   ref: "User"
	   },
	   username: String
   },
   comments: [
	   {
		   type: mongoose.Schema.Types.ObjectId,
		   ref: "Comment"  // Comment object id
	   }
   ]
	

});

module.exports = mongoose.model("Campground", campgroundSchema);   //export the model

