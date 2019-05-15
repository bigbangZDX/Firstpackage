var mongodb=require("mongodb");
var assert = require("assert"); //引入断言模块
var MongoClient=mongodb.MongoClient;
var dbUrl="mongodb://localhost:27017";
var dbName="BiShe";
function connectMGDB(cb0,res) {
	MongoClient.connect(dbUrl,{useNewUrlParser:true},function(err,db) {
		if (err) {
			console.log("数据库连接失败")
		} else{
			console.log("数据库连接成功");
			var dbase=db.db(dbName);
			cb0(dbase,db);
			// console.log("resmongodb:",db)
		}
	})
}
//
module.exports.insertOne=function(cName,obj,res,cb) {
	connectMGDB(function(dbase,db) {
		dbase.collection(cName).insertOne(obj,function(err,result) {
			cb(err,result,db)
		})
	},res);
}
//
module.exports.find=function(cName,whereobj,res,cb) {
	connectMGDB(function(dbase,db) {
		console.log("wh:",whereobj.find)
		whereobj.find?whereobj.find:whereobj.find={};
		whereobj.sort?whereobj.sort:whereobj.sort={};
		whereobj.limit?whereobj.limit:whereobj.limit=0;
		whereobj.skip?whereobj.skip:whereobj.skip=0;
		dbase.collection(cName).find(whereobj.find).sort(whereobj.sort).limit(whereobj.limit).skip(whereobj.skip).toArray(function(err,result) {
			cb(err,result,db);
		})
	},res);
}
//模糊查询
module.exports.find=function(pro,whereobj,res,cb) {
		connectMGDB(function(dbase,db) {
			dbase.collection(pro).find(whereobj).toArray(function(err,result){
				cb(err,result,db);
			})
		},res);
}
//
module.exports.insert = function(cName,obj,res,cb) {
	connectMGDB(function(dbase,db){
		dbase.collection(cName).insert(obj,function(err,result){
			cb(err,result,db);
		})
	},res);
}
//根据ID查找某一条数据
module.exports.findOneById=function(cName,obj,res,cb){
	//console.log("mongodb.ObjectId(obj.id):",mongodb.ObjectId(obj.id));
	var whereObj={};
	try{
		whereObj._id=mongodb.ObjectId(obj.id);
	}catch(err){
		console.log("你输入的ID不正确的!");
		whereObj._id="";
	}
	connectMGDB(function(dbase,db){
		dbase.collection(cName).findOne(whereObj,function(err,result){
			cb(err,result,db);
		})
	})
}
//删除符合条件的所有数据
module.exports.deleteMany=function(cName,obj,res,cb){
	connectMGDB(function(dbase,db){
		dbase.collection(cName).deleteMany(obj,function(err,result){
			cb(err,result,db);
		})
	})
}

//根据ID删除某一条数据
module.exports.deleteOneById=function(cName,obj,res,cb){
	//console.log("mongodb.ObjectId(obj.id):",mongodb.ObjectId(obj.id));
	var whereObj={};
	try{
		whereObj._id=mongodb.ObjectId(obj._id);
	}catch(err){
		console.log("你输入的ID不正确的!");
		whereObj._id="";
	}
	connectMGDB(function(dbase,db){
		dbase.collection(cName).deleteOne(whereObj,function(err,result){
			cb(err,result,db);
		})
	})
}

//修改符合条件的所有数据
module.exports.updateMany=function(cName,whereObj,updateObj,res,cb){
	connectMGDB(function(dbase,db){
		dbase.collection(cName).updateMany(whereObj,updateObj,function(err,result){
			cb(err,result,db);
		})
	})
}
//根据ID修改某一条数据
module.exports.updateOneById=function(cName,obj,oobj,res,cb){
	//console.log("mongodb.ObjectId(obj.id):",mongodb.ObjectId(obj.id));
	// var whereObj={};
	// try{
		// whereObj._id=mongodb.ObjectId(obj._id);
		var whereObj={num:obj}

	// }catch(err){
		// console.log("你输入的ID不正确的!");
		// whereObj._id="";
	// }
		
	var updateObj={ $set:{pass:oobj}}
	connectMGDB(function(dbase,db){
		dbase.collection(cName).updateOne(whereObj,updateObj,function(err,result){
			cb(err,result,db);
		})
	})
}
//修改更新
module.exports.update=function(cName,obj,res,cb){
	//console.log("mongodb.ObjectId(obj.id):",mongodb.ObjectId(obj.id));
	//查询条件
	// if(obj.description!=""){
		var whereObj={description:obj.description};

	// }else{
		// var whereObj={num:obj.phh}
	// }
		
	
	//更改数据
	var updateStr={
		// $set:{pass:obj.newpass},
		$push:{"comments":obj.value}
	}
	connectMGDB(function(dbase,db){
		dbase.collection(cName).update(whereObj,updateStr,function(err,result){
			cb(err,result,db);
		})
	})
}
//查询符合条件的所有数据条数
module.exports.count = function(cName,whereObj,res,cb){
	connectMGDB(function(dbase,db){
		dbase.collection(cName).count(whereObj).then(function(count){
			cb(count,db);
		},res);
	});
}
//
// module.exports.remove = function(cName,whereObj,res,cb){

// 	connectMGDB(function(dbase,db){
	
// 		//查询条件
// 		var whereObj={
// 			_id:mongodb.ObjectId()
// 		}
		
// 		dbase.collection(cName).remove(whereObj,function(err,obj){
// 			cb(err,result,db);

// 		})
// 	})
// }
module.exports.deleteById=function(cName,obj,res,cb){
	//console.log("mongodb.ObjectId(obj.id):",mongodb.ObjectId(obj.id));
	var whereObj={
	
		_id:mongodb.ObjectId(obj._id)}
	connectMGDB(function(dbase,db){
		dbase.collection(cName).deleteOne(whereObj,function(err,result){
			cb(err,result,db);
		})
	},res)
}
//查找

   