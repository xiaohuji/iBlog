var mongoose = require('mongoose');

//分类表结构
var schema = new mongoose.Schema({
    //分类名称
    name:String
});

module.exports = schema;
