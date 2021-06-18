
#### iBlog 开发文档及模块说明 TODO

Blog 个人博客系统

一开始框架参考于：https://github.com/Zhangyei/iBlog  
ISC许可证与BSD差不多  
谢谢大佬的开源  

########################################  

6.14

先读懂后端别人是怎么写的  

6，15

终于有点看懂了我天  
我发现这是一个前后端不分离的项目  
现在在此之上做出一些重构和改进，前后端分离  
6.16

前端（游客界面）找了一个简介好看的模板开始研读  
6.17

vue双向绑定真香  
尝试修改界面，增加登录界面    
猜前端接口的用意，尝试编写后端接口   

噢，我一定要说一下，我今天真的是在mongodb find返回值 和 异步 上面吃大亏了呜呜呜呜，网上还搜不到，一整天基本就弄了这一个东西  
mongodb.find({})返回的是document类型而不是object类型！！！！！  
所以返回的就是一大堆看都看不懂的东西也不知道哪里来的东西  
哇难受  
还有就是nodejs是异步的！异步的！异步的！重要的事情说三遍  

```javascript
var contentListValue
routerApi.get('/content-list', function (req, res) {
    ContentList.find({}).lean().exec((err, docs) => {
        contentListValue = docs
        console.log(contentListValue);
        res.json(contentListValue);
      })
```

find后面要用lean().exec((err, docs)xxxxx这种方式  
还有 res.json(contentListValue)一定要放在这个方法内部！！！！  
放在外面就会提前执行，在lean()方法完成前就执行了，然后就一直都是undefind哇难受  
重点是这两个问题发生在了一起，我可能早些时候已经试对了，但还是最后返回undefind，我又一直搜搜搜 难受啊表达出来发泄一下  
还好现在终于解决了

6.18

--完成首页的初步展示

后端时间格式返回还是这样方便  

```javascript
const moment = require('moment')
result.createdAt = moment(String(item.createAt)).format('YYYY-MM-DD hh:mm:ss');
```

是不很明白之前为什么要写的那么繁杂 

--完成文章内容显示

find和findOne差距还是挺大的

开始制作注册登录

get新框架Element UI

前端ui也好难





###模块说明.

####路由实现等说明

##### api 接口路由
	 / 				首页
	 /register    用户注册
	 /login      用户登录
	 /comment    评论获取
	 /comment/post  评论提交


​	 
##### main 模块
	/                首页
	/view            内容页


##### admin 模块//管理模块
	   /                            首页
	  ##用户管理
	  /user                        用户列表
	  ##分类管理
	  /category                    分类列表
	  /category/add                分类添加
	  /category/edit               分类修改
	  /category/delete             分类删除
	  ##文章内容管理
	 /article                     文章列表
	 /article/add                 文章添加
	 /article/edit                文章编辑
	 /article/delete              文章删除
	 ##评论内容管理
	 /comment                     评论列表
	 /comment/delete              评论删除


​     
​     
  ####模块说明TODO


  ####后期模块优化等记录TODO...


