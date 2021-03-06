var express = require('express');
var routerApi = express.Router();
const moment = require('moment')

var User = require('../models/User');
var Content = require('../models/Content');
const Category = require('../models/Category');

// var responseData = require('../models/ReturnDataFormat');

// 构造返回 json 格式
var responseData;
routerApi.use(function (req, res, next) {
    responseData = {
        code: 0,
        message: ''
    }
    next();
});

// 返回游客主页内容
var Value
routerApi.get('/content-list', function (req, res) {
    Content.find({}).lean().exec((err, docs) => {
        Value = []
        for (let item of docs) {
            let result = {}
            console.log(item);
            result.objectId = item._id
            result.title = item.title
            result.username = item.username
            result.abstract = item.description
            result.createdAt = moment(String(item.addTime)).format('YYYY-MM-DD hh:mm:ss');
            Value.push(result)
        }
        console.log(Value);
        res.json(Value);
      })
    // ContentList.find({}).then(function (content) {
    //     console.log(content);
    //     contentListValue = {
    //         _id:content._id
    //     };
        
    // });

    // console.log(contentListValue);

    // res.json(contentListValue);
    return;
});

// 返回文章内容
routerApi.get('/article/:id', function (req, res) {
    console.log('article');
    console.log(req.params.id);
    Content.findOne({"_id":req.params.id}).lean().exec((err, docs) => {
        console.log('docs');
        console.log(docs);
        let result = {}
        result.content = docs.content
        result.title = docs.title
        console.log(result);
        res.json(result);
      })
    return;
});


// // 返回文章内容
// routerApi.get('/comments/:articleId', function (req, res) {
//     ContentList.find({}).lean().exec((err, docs) => {
//         Value = []
//         for (let item of docs) {
//             let result = {}
//             console.log(item);
//             result.objectId = item._id
//             result.title = item.title
//             result.abstract = item.abstract
//             result.createdAt = moment(String(item.createAt)).format('YYYY-MM-DD hh:mm:ss');
//             Value.push(result)
//         }
//         console.log(Value);
//         res.json(Value);
//       })
//     return;
// });
/*
 *  用户注册
 *      1、用户名不能为空   // 不能存在同名（已注册）
 *      2、密码不能为空 // 两次密码需一样
 */

// 返回板块
routerApi.get('/tags', function (req, res) {
    Category.find({}).lean().exec((err, docs) => {
        Value = []
        for (let item of docs) {
            let result = {}
            console.log(item);
            result.objectId = item._id
            result.name = item.name
            Value.push(result)
        }
        console.log(Value);
        res.json(Value);
      })
    return;
});

// 返回板块的内容
routerApi.get('/tags/:tagid', function (req, res) {
    Content.find({"category":req.params.tagid}).lean().exec((err, docs) => {
        Value = []
        for (let item of docs) {
            let result = {}
            console.log(item);
            result.objectId = item._id
            result.title = item.title
            result.abstract = item.description
            result.createdAt = moment(String(item.addTime)).format('YYYY-MM-DD hh:mm:ss');
            Value.push(result)
        }
        console.log(Value);
        res.json(Value);
      })
    return;
});
//注册接口
routerApi.post('/user/register', function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    var repassword = req.body.repassword;

    // //用户名判空
    // if (username === '') {
    //     responseData.code = '1';
    //     responseData.message = '用户名不能为空';
    //     res.json(responseData);
    //     return;
    // }
    // //密码检测
    // if (password === '' || repassword === '') {
    //     responseData.code = '2';
    //     responseData.message = '密码不能为空';
    //     res.json(responseData);
    //     return;
    // }
    // if (password !== repassword) {
    //     responseData.code = '3';
    //     responseData.message = '两次密码不一致';
    //     res.json(responseData);
    //     return;
    // }
    //检测用户名是否已经被注册，如果数据库存在同名数据表示用户名已经被注册
    User.findOne({
        username: username
    }).then(function (userInfo) {
        if (userInfo) {
            responseData.code = '1';
            responseData.message = '用户名已被注册';
            res.json(responseData);
            return;
        }
        else {
            // 无上述情况//则可注册保存用户注册信息到数据库中//返回注册成功
            var userRegisterData = new User({
                username: username,
                password: password,
                isSuperAdmin: false,
                isAdmin: true
            });
            userRegisterData.save();//
            return;
        }
    }).then(function (newUserInfo) {
        console.log(newUserInfo);//
        responseData.code = '0';
        responseData.message = '成功';
        res.json(responseData);
        return;
    });

});
//用户登录
routerApi.post('/user/login', function (req, res, next) {
    console.log(req);
    var uName = req.body.username;
    var pWord = req.body.password;
    console.log(uName);
    console.log(pWord);
    //空值等检测放在前端处理

    //后台数据验证处理
    User.findOne({
        username: uName,
        password: pWord
    }).then(function (userInfo) {
        console.log('userinfo')
        console.log(userInfo)
        if (!userInfo) {
            responseData.code = '1';
            responseData.message = '用户名或密码错误';
            res.json(responseData);
            return;
        }
        // else {
        //此处登录验证成功，进入用户首页有两种方式：
        //1、前端根据返回的成功数据进行Url重定向实现//这样相当于二次请求服务器 TODO 思考
        //2、后台 用redirect 进行路由重定向
        // res.redirect('/');
        responseData.code = '0';
        responseData.message = '成功';
        //添加返回用户cookie数据
        responseData.userInfo = {
            _id: userInfo._id,
            username: userInfo.username
        };
        console.log(responseData);
        console.log(userInfo.username);
        req.cookies.set('userInfo', JSON.stringify({
            _id: userInfo._id,
            username: userInfo.username
        }));
        console.log(req.cookies);
        console.log('登录成功服务端返回给客户端的 返回信息 ' + responseData);
        res.json(responseData);
        return;
        // }
    });
});
//退出
routerApi.get('/user/logout', function (req, res) {
    responseData.code = '0';
    req.cookies.set('userInfo', null);
    res.json(responseData);
    return;
});


module.exports = routerApi;
