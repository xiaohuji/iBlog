/**
 * Created by zhangyi on 2017/6/13.
 */

/*
 *   内容相关数据模型
 *
 * */

var mongoose = require('mongoose');
var contentListSchema = require('../schemas/contentList');


module.exports = mongoose.model('ContentList', contentListSchema);