const mongoose = require('mongoose');
const CompanySchema = new mongoose.Schema({
    name:String,
    jobname:String,
    description:String,
    skill1:String,
    skill2:String,
    skill3:String,
    skill4:String,
    skill5:String,
    skill6:String,
    skill7:String,
    skill8:String,
    skill9:String,
    skill10:String,

});

module.exports = mongoose.model('Company',CompanySchema);