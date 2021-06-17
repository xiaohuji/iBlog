
#### iBlog 开发文档及模块说明 TODO

Blog 个人博客系统

后端框架参考于：https://github.com/Zhangyei/iBlog
ISC许可证与BSD差不多
谢谢大佬的开源
先读懂别人是怎么写的
现在在此之上做出一些重构和改进
6.16前端（游客界面）找了一个简介好看的模板开始研读
6.17vue双向绑定真香
	尝试修改界面，增加登录界面
	猜前端接口的用意尝试编写后端接口

###模块说明.

####路由实现等说明

##### api 接口路由
	 / 				首页
  	 /register    用户注册
 	 /login      用户登录
 	 /comment    评论获取
	 /comment/post  评论提交
	 
	 
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
     
     
     
  ####模块说明TODO
  
  
  ####后期模块优化等记录TODO...


