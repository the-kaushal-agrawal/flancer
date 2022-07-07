const mongoose = require('mongoose');

const Withdraw = new mongoose.Schema({
    Username : {type : String},
    NetAmount: {type : Number},
    Status:{type:Boolean},

});

Withdraw.set('timestamps', true);

module.exports = mongoose.model("Withdraw",Withdraw);