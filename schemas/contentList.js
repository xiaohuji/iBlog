/**
 * Created by zhangyi on 2017/6/13.
 */


/*
 *n内容的表结构
 *
 * */

var mongoose = require('mongoose');

var contentList = new mongoose.Schema({
    // objectId: String,

    //内容标题
    title: String,
    //内容简介
    abstract: {type: String, default: ''},
    //内容
    content: {type: String, default: ''},
    //添加时间
    createAt: {type: Date, default: new Date()},

    // //阅读数
    // views: {type: Number, default: 0},

    // //评论
    // comments: {
    //     type: Array,
    //     default: []
    // }

});

module.exports = contentList;