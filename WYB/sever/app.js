var express = require("express");
var app = express();
// var adminrouter = require("./router/admin_router.js");

var cName = "wuyoubaby";
var cNamee = "shopcar";
var pro = "Products";
var Comments = "Comments";
var Help = "Help"
// var MongoClient=mongodb.MongoClient;
// var mongodb=require("mongodb");
// var assert = require("assert"); //引入断言模块

var db = require("./js/db.js");
var bodyparser = require("body-parser");
var postparser = bodyparser.urlencoded({ extended: false });

// app.use("/admin",adminrouter)


//跨域
app.use(bodyparser.json());
app.use(express.static("./"));
app.use("*", function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	next();
})
app.get("/", (req, res) => {
	res.send("这是后台主页")
})
app.listen(3000, () => {
	console.log("3000  ok")
})
// app.get("/getdata",(req,res)=>{
//     res.sendFile(__dirname+"/"+"data/data.json")
// })
//跨域问题
app.all("*", function (req, res, next) {    //设置允许跨域的域名，*代表允许任意域名跨域
	res.header("Access-Control-Allow-Origin", "*");    //允许的header类型
	res.header("Access-Control-Allow-Headers", "content-type");    //跨域允许的请求方式 
	res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS"); if (req.method.toLowerCase() == 'options')
		res.send(200);  //让options尝试请求快速结束
	else
		next();
})
//获取数据
app.post("/getdata", function (req, res) {
	// console.log("req",res)
	var whereobj = req.body;
	console.log("whereobj:", whereobj)
	db.find(cName, whereobj, res, function (err, result, db) {
		console.log("查找数据")
		if (err) {
			console.log("获取失败")
		} else {

			for (var i = 0; i < result.length; i++) {
				var a = result[i]
			}
			console.log("aaa", a);
			res.send(a);

			db.close();
		}
	})
})
//加入购物车接口
app.post("/insertshopcarList", function (req, res) {
	// console.log("req",res)
	var whereobj = req.body;
	console.log("whereobj123:", whereobj)
	db.insertOne(cNamee, whereobj, res, function (err, result, db) {
		if (err) {
			console.log("添加失败")
		} else {
			//			res.send(result);
			console.log("result:", result.result)
			db.close();
		}
	})
})
//获取购物车数据
app.post("/getshopcarList", function (req, res) {
	// console.log("req",res)
	var whereobj = req.body;
	console.log("whereobj:", whereobj)
	db.find(cNamee, whereobj, res, function (err, result, db) {
		console.log("查找数据")
		if (err) {
			console.log("获取失败")
		} else {

			// for(var i=0;i<result.length;i++){
			//     var a=result[i]
			// }
			console.log("aaa", result);
			res.send(result);
			db.close();
		}
	})
})
//删除购物车中的数据
app.post("/delshopcarList", function (req, res) {
	// console.log("req",res)
	var whereobj = req.body;
	console.log("whereobj:", whereobj)
	db.deleteById(cNamee, whereobj, res, function (err, result, db) {
		console.log("查找数据")
		if (err) {
			console.log("删除失败")
		} else {

			// for(var i=0;i<result.length;i++){
			//     var a=result[i]
			// }
			console.log("aaa", result);
			res.send(result);
			// res.sendStatus(status)
			db.close();
		}
	})
})

//搜索
app.post("/searchshopcarList", function (req, res) {
	// console.log("req",res)
	var qu = {};
	// var whereobj=req.body;
	// console.log("whereobj:",whereobj)
	// var ooo=whereobj.oldvs;
	// ooo=ooo.replace(/\"/g, "");
	// var qs=new RegExp(req.body.oldvs);
	qu['description'] = new RegExp(req.body.oldvs);
	// console.log("ooo:",ooo)
	// whereobj={'description':qs}
	// console.log("123",whereobj)
	console.log("qu:", qu)
	db.find(pro, qu, res, function (err, result, db) {
		console.log("查找数据")
		if (err) {
			console.log("获取失败")
		} else {
			console.log("search", result);
			res.send(result);

			db.close();
		}
	})
})
// 	MongoClient.connect(dbUrl,function(err,db){  //获取连接
// 		assert.equal(null,err);  //使用断言模块代替以前的 if判断


// 	   //查找数据
// 	   db.collection(cNamee).find(ooo).toArray(function(err,result){
// 		   assert.equal(null,err);
// 		   console.log(result);
// 		   db.close();
// 	   })

// });
// })
//登录
app.post("/login", function (req, res) {
	var whereobj = req.body;

	console.log("whereobj:", whereobj)

	var TEL_REGEXP = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
	var reg = /^\d{6}$/;


	if (TEL_REGEXP.test(whereobj.num) && reg.test(whereobj.pass)) {
		console.log("keyi")
		var ok = { code: 0 }
		// res.send(ok);
		//插入用户登录信息
		db.insertOne("User", whereobj, res, function (err, result, db) {
			if (err) {
				console.log("添加失败")
			} else {
				//			res.send(result);
				console.log("long",result)
				console.log("result11111:", result.ops[0]._id)
				res.send({code:0,sid:result.ops[0]._id})
				db.close();
			}
		})
	} else {
		console.log("no")
		var no = { code: 1 }
		res.send(no)
	}
})
//评论展示
app.post("/showComments", function (req, res) {
	// console.log("req",res)
	var whereobj = req.body;
	console.log("whereobj:", whereobj)
	db.find("Comments", whereobj, res, function (err, result, db) {
		console.log("查找评论数据")
		if (err) {
			console.log("获取失败")
		} else {


			res.send(result);

			db.close();
		}
	})
})
//添加评论
app.post("/insertComments", function (req, res) {
	// console.log("req",res)
	var whereobj = req.body;
	console.log("update123:", whereobj)
	db.update("Comments", whereobj, res, function (err, result, db) {
		if (err) {
			console.log("添加失败")
		} else {
			res.send(result);
			console.log("添加评论result:", result.result)
			db.close();
		}
	})
	// Comments.update({description:req.body.description},{$push:{"comments":req.body.value}});
})
//使用帮助说明
app.post("/help", function (req, res) {
	var whereobj = req.body;
	console.log("whereobj:", whereobj)
	db.find(Help, whereobj, res, function (err, result, db) {
		console.log("查找数据")
		if (err) {
			console.log("获取失败")
		} else {
			res.send(result);
			console.log("help", result)
			db.close();
		}
	})
})
//修改密码
app.post("/updatePass", function (req, res) {
	// console.log("req",res)
	var whereobj = req.body;
	console.log("update123:", whereobj)
	var obj = whereobj.phh;
	var updateobj = whereobj.newpass;
	db.updateOneById("User", obj, updateobj, res, function (err, result, db) {
		if (err) {
			console.log("修改失败")
		} else {
			res.send(result);
			console.log("修改密码result:", result.result)
			db.close();
		}
	})
	// Comments.update({description:req.body.description},{$push:{"comments":req.body.value}});
})
//收藏爱心
app.post("/shoucang", function (req, res) {
	// console.log("req",res)
	var whereobj = req.body;
	console.log("whereobj123:", whereobj)
	db.insertOne("shouCang", whereobj, res, function (err, result, db) {
		if (err) {
			console.log("添加失败")
		} else {
			//			res.send(result);
			console.log("result:", result.result)
			db.close();
		}
	})
})
//显示我的收藏
app.post("/showshoucang", function (req, res) {
	// console.log("req",res)
	var whereobj = req.body;
	console.log("whereobj:", whereobj)
	db.find("shouCang", whereobj, res, function (err, result, db) {
		console.log("查找数据")
		if (err) {
			console.log("获取失败")
		} else {
			res.send(result);
			db.close();
		}
	})
})
//删除收藏的数据
app.post("/removeshoucang", function (req, res) {
	var whereobj = req.body;
	console.log("whereobj:", whereobj)
	db.deleteById("shouCang", whereobj, res, function (err, result, db) {
		console.log("查找数据")
		if (err) {
			console.log("删除失败")
		} else {
			console.log("aaa", result);
			res.send(result);
			db.close();
		}
	})
})
//插入我的订单
app.post("/insertdingdan", function (req, res) {
	// console.log("req",res)
	var whereobj = req.body;
	console.log("whereobj123:", whereobj)
	db.insertOne("dingdan", whereobj, res, function (err, result, db) {
		if (err) {
			console.log("添加失败")
		} else {
			//			res.send(result);
			console.log("result:", result.result)
			db.close();
		}
	})
})
//显示订单
app.post("/showdingdan", function (req, res) {
	// console.log("req",res)
	var whereobj = req.body;
	console.log("whereobj:", whereobj)
	db.find("dingdan", whereobj, res, function (err, result, db) {
		console.log("查找数据")
		if (err) {
			console.log("获取失败")
		} else {
			res.send(result);
			db.close();
		}
	})
})
//删除订单
app.post("/removedingdan", function (req, res) {
	var whereobj = req.body;
	console.log("whereobj:", whereobj)
	db.deleteById("dingdan", whereobj, res, function (err, result, db) {
		console.log("查找数据")
		if (err) {
			console.log("删除失败")
		} else {
			console.log("aaa", result);
			res.send(result);
			db.close();
		}
	})
})
//admin后台管理系统



//login
app.post("/adminlogin", function (req, res) {
	var whereobj = req.body;

	console.log("whereobj:", whereobj)

	var TEL_REGEXP = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
	var reg = /^\d{6}$/;


	if (TEL_REGEXP.test(whereobj.admin_name) && reg.test(whereobj.admin_pwd)) {
		console.log("keyi")
		var ok = { code: 0 }
		res.send(ok);
		//插入用户登录信息
		db.insertOne("products", whereobj, res, function (err, result, db) {
			if (err) {
				console.log("添加失败")
			} else {
				//			res.send(result);
				console.log("result11111:", result.result)
				// res.send(whereobj.num)
				db.close();
			}
		})
	} else {
		console.log("no")
		var no = { code: 1 }
		res.send(no)
	}
})
//用户管理
app.post("/adminuser", function (req, res) {
	// console.log("req",res)
	var whereobj = req.body;
	console.log("whereobj:", whereobj)
	db.find("User", whereobj, res, function (err, result, db) {
		console.log("查找数据")
		if (err) {
			console.log("获取失败")
		} else {
			res.send(result);
			db.close();
		}
	})
})
//商品管理
app.post("/adminProducts", function (req, res) {
	// console.log("req",res)
	var whereobj = req.body;
	console.log("whereobj:", whereobj)
	db.find("Products", whereobj, res, function (err, result, db) {
		console.log("查找数据")
		if (err) {
			console.log("获取失败")
		} else {
			res.send(result);
			db.close();
		}
	})
})
//更新用户管理数据
app.post("/gengxinuser", function (req, res) {
	// console.log("req",res)
	var whereobj = req.body;
	console.log("update123:", whereobj)
	// var obj = whereobj.num;
	
	db.updateOne("User", whereobj, res, function (err, result, db) {
		if (err) {
			console.log("修改失败")
		} else {
			res.send(result);
			console.log("更新result:", result.result)
			db.close();
		}
	})
	// Comments.update({description:req.body.description},{$push:{"comments":req.body.value}});
})
//删除用户管理中的数据
app.post("/removeuser", function (req, res) {
	var whereobj = req.body;
	console.log("whereobj:", whereobj)
	db.deleteById("User", whereobj, res, function (err, result, db) {
		console.log("查找数据")
		if (err) {
			console.log("删除失败")
		} else {
			console.log("aaa", result);
			res.send(result);
			db.close();
		}
	})
})
//删除订单
app.post("/removedingdan", function (req, res) {
	var whereobj = req.body;
	console.log("whereobj:", whereobj)
	db.deleteById("dingdan", whereobj, res, function (err, result, db) {
		console.log("查找数据")
		if (err) {
			console.log("删除失败")
		} else {
			console.log("aaa", result);
			res.send(result);
			db.close();
		}
	})
})
//删除商品管理
app.post("/removeproducts", function (req, res) {
	var whereobj = req.body;
	console.log("whereobj:", whereobj)
	db.deleteById("Products", whereobj, res, function (err, result, db) {
		console.log("查找数据")
		if (err) {
			console.log("删除失败")
		} else {
			console.log("aaa", result);
			res.send(result);
			db.close();
		}
	})
})
//订单管理
app.post("/admindingdan", function (req, res) {
	// console.log("req",res)
	var whereobj = req.body;
	console.log("whereobj:", whereobj)
	db.find("dingdan", whereobj, res, function (err, result, db) {
		console.log("查找数据")
		if (err) {
			console.log("获取失败")
		} else {
			res.send(result);
			db.close();
		}
	})
})
//更新订单管理
app.post("/gengxindingdan", function (req, res) {
	// console.log("req",res)
	var whereobj = req.body;
	console.log("update123:", whereobj)
	// var obj = whereobj.num;
	
	db.updateOne("dingdan", whereobj, res, function (err, result, db) {
		if (err) {
			console.log("修改失败")
		} else {
			res.send(result);
			console.log("更新result:", result.result)
			db.close();
		}
	})
	// Comments.update({description:req.body.description},{$push:{"comments":req.body.value}});
})
//更新商品管理
app.post("/gengxinproducts", function (req, res) {
	// console.log("req",res)
	var whereobj = req.body;
	console.log("update123:", whereobj)
	// var obj = whereobj.num;
	
	db.updateOne("Products", whereobj, res, function (err, result, db) {
		if (err) {
			console.log("修改失败")
		} else {
			res.send(result);
			console.log("更新result:", result.result)
			db.close();
		}
	})
	// Comments.update({description:req.body.description},{$push:{"comments":req.body.value}});
})
//新增商品管理
app.post("/insertProducts", function (req, res) {
	// console.log("req",res)
	var whereobj = req.body;
	console.log("whereobj123:", whereobj)
	db.insertOne("Products", whereobj, res, function (err, result, db) {
		if (err) {
			console.log("添加失败")
		} else {
			//			res.send(result);
			console.log("result:", result.result)
			db.close();
		}
	})
})
//分类管理
app.post("/adminFenlei", function (req, res) {
	// console.log("req",res)
	var whereobj = req.body;
	console.log("whereobj:", whereobj)
	db.find("Fenlei", whereobj, res, function (err, result, db) {
		console.log("查找数据")
		if (err) {
			console.log("获取失败")
		} else {
			res.send(result);
			db.close();
		}
	})
})
//删除分类管理
app.post("/removeFenlei", function (req, res) {
	var whereobj = req.body;
	console.log("whereobj:", whereobj)
	db.deleteById("Fenlei", whereobj, res, function (err, result, db) {
		console.log("查找数据")
		if (err) {
			console.log("删除失败")
		} else {
			console.log("aaa", result);
			res.send(result);
			db.close();
		}
	})
})