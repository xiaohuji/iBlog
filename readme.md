
#### iBlog 开发文档及模块说明 TODO

Blog 个人博客系统

一开始框架参考于：https://github.com/Zhangyei/iBlog  
ISC许可证与BSD差不多  
谢谢大佬的开源  

########################################  

6.14

先读懂后端别人是怎么写的  

6.15

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

6.20

昨天一整天12个小时，全部花在一个bug上了，我试了所有我能想到搜到的方法，但是element UI永远是无效的跟vue结合不到一起，最后报的错已经搜不到了。

当时难受极了，气得我饭都吃不下去。绝望的时候我然想到了我的舅舅，他也是弄计算机方面的，我就尝试着问了问。

我把project发给他，让他帮我看一下，最后他也没弄出来他说他太久没用了，我就问问他有没有想法，有想法就好我还能试试，然后他就说出了关键问题！！！！！！版本的问题。

下午我已经确实确实是版本的问题了，我建了一个新项目的开始移植代码。

我找的这个项目太老了，跨大版本很多语法都变了

现在开始前端从全部重构！虽然我知道我又踩进了一个大坑。。。先试试吧。

6.22

终于有些弄明白vuex了

三个大版本的迭代后变化太大了，前端基本全部要重构

vue-resource也已经停止维护了，现在改用axios，踩了太多坑了

6.23

axios已经默认不使用cookies了，我查了半天

已经熟练使用vuex了

完成注册功能

真的快气晕了，终于实现了跟管理端的连接，然后发现有几个UI按钮没有出现，de了三小时bug，最后发现是因为虚拟机窗口太小了，把按钮挤没了，根本不是程序里没有把他展示出来，这种错误真的debug de的我怀疑人生[裂开]

整个博客终于有一点像样了哈哈哈哈

完成用户登录功能

完成权限功能

6.24

完成用户管理功能

解决板块内容无法跳转bug

解决内容管理作者不显示

优化跳转界面

解决用户登录bug

解决用户删除不完整bug









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


