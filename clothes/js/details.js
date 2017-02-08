$(document).ready(function() {
	var objectId = UrlParm.parm("objectId");
    var style = UrlParm.parm("style"); 
	queryDetails(objectId,style);
	setNav();
})
var beforeId = "";
var currentId = "";
var latterId = "";
function queryDetails(objectId,style){
	var Clothes = Bmob.Object.extend("Clothes");
//创建查询对象，入口参数是对象类的实例
var query = new Bmob.Query(Clothes);
//查询单条数据，第一个参数是这条数据的objectId值
query.get(objectId, {
  success: function(clothes) {
    // 查询成功，调用get方法获取对应属性的值
    var image = clothes.get("image");
    var description = clothes.get("description");
    var updatedAt = clothes.updatedAt;
    $(".detail_text>img").attr("src",image);
    queryDetailsLatter(updatedAt,style);
    queryDetailsBefore(updatedAt,style);
  },
  error: function(object, error) {
    // 查询失败
  }
});
}

function queryDetailsLatter(updatedAt,style){
	var Clothes = Bmob.Object.extend("Clothes");
    //创建查询对象，入口参数是对象类的实例
    var query = new Bmob.Query(Clothes);
    query.limit(1);
    query.greaterThan("updatedAt", updatedAt);
    query.equalTo("style", "style");
     query.find({
    success: function(results) {
      if(results.length==0){
      	$("#next").hide();
      	console.log("dddddsvvvzsd");
      }else{
      	console.log("dddddd");
      	$("#next").show();
      	$("#next").attr("href","details.html?style="+style+"&objectId="+results[i].id);
      }
    },
    error: function(error) {
        alert("查询失败: " + error.code + " " + error.message);
    }
});
}


function queryDetailsBefore(updatedAt,style){
	var Clothes = Bmob.Object.extend("Clothes");
    //创建查询对象，入口参数是对象类的实例
    var query = new Bmob.Query(Clothes);
    query.limit(1);
    query.lessThan("updatedAt", updatedAt);
    query.equalTo("style", "style");
    // 查询所有数据
    query.find({
    success: function(results) {
      if(results.length==0){
      	console.log(updatedAt);
      	$("#prev").hide();
      }else{
      	$("#prev").show();
      	console.log("dddddsd");
      	$("#prev").attr("href","html/details.html?style="+style+"&objectId="+results[i].id);
      }
    },
    error: function(error) {
        alert("查询失败: " + error.code + " " + error.message);
    }
});
}

function setNav(){
	var $children = $(".catg_name").children();
	for(var i = 0; i < $children.length; i++) {
		var $catg_click = $(".catg_name>a:eq(" + i + ")");
		if(i == 0){
		$catg_click.attr("class","on");
		}
		$catg_click.attr("href","design.html?style="+$catg_click.html());
	
	}
}
