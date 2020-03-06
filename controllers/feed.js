// var Users = require('../models/Profile');
var Posts = require('../models/post');


module.exports = {
    index,
    create,
    delete: deleteOne,
    update
};

function index(req, res, next) {
    Posts.find({}).exec(function(err, post){
        if(err) res.redirect('/');
        post.forEach((i) => {
            i.populate('userId');
        })
        var user = req.user;
        res.render('feed', { title: 'Shop Insight' , post , user});
    })      
}

function create(req, res) {
    req.body.userReporting = req.user._id;
    const report = new Report(req.body);
    // Creates the new report, and saves it to both the user model and reports model
    User.findById(req.user._id, function (err, currUser) {
      if (err) return res.redirect('./');
      currUser.reports.push(report);
      currUser.save();
      report.save(function (err) {
        res.redirect('/feed');
      });
    });
}
  
function deleteOne(req, res) {
    Report.findByIdAndRemove(req.params.id, function (err, report) {
      if (err) return res.redirect('./');
      res.redirect('/feed');
    });
}
  
function update(req, res) {
    Report.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, report) {
      if (err) return res.redirect('./');
      console.log(report);
      res.redirect('/feed');
    });
}