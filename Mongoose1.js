var mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/Bookshop', function (err) {
 
   if (err) throw err;
 
   console.log('Successfully connected');
 
});
