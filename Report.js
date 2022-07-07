const mongoose = require('mongoose');

const Report = new mongoose.Schema({

    Username1 : {type:String},
    BlockedUser : {type:String},
    
});

module.exports = mongoose.model("Report",Report);