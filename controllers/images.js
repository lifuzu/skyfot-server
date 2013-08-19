var mongoose = require('mongoose')
  , Image = mongoose.model('Image')
  , fs = require('fs')
  , fs_extra = require('fs.extra')
  , im = require('imagemagick')
  , path = require('path');


// List all images
exports.list = function(req, res, next){
  Image.find(function(err,images){
    if(err) return next(err);
    res.render('images/index',{
      images:images
    });
  });
}

// Create image
exports.create = function(req, res, next){
  console.log("Received file: " + JSON.stringify(req.files));

  var imageDir = path.join(__dirname, "../public/upload/images/")
  	, thumbnailsDir = path.join(imageDir, "thumbnails/")
  	, imageName = req.files.file.name
  	, imageFullname = path.join(imageDir, imageName);

  console.log("Image dir + name: " + imageFullname);

  fs_extra.move(
  	req.files.file.path,
  	imageFullname,
  	function(err) {
  		if (err != null) {
  			console.log(err);
  			res.send({error: "Server writting file failed!"});
  		} else {
  			var newImage = new Image({path: imageDir, fileName: imageName});
  			newImage.save(function(err, image) {
  				if (err != null) {
  					console.log(err);
  					res.send({error: "Server saving DB failed!"});
  				}
  				req.flash('success', "Image uploaded successfully.");
  				return res.redirect("/images");
  			});
  		}
  	}
  );
}
