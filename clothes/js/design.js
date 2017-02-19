var style = "时尚风";
var skipNum = 0;
$(document).ready(function() {
	/*var objectId = UrlParm.parm("objectId");*/
	style = UrlParm.parm("style");
	getDesignCount(style);
	getDesignData(style);
	setDesignStyleClick();
	console.log(style);
})

function getDesignData(style) {
	//创建查询对象，入口参数是对象类的实例
	var Clothes = Bmob.Object.extend("Clothes");
	var query = new Bmob.Query(Clothes);

	// 返回最多9条数据
	query.limit(9);
	query.skip(skipNum*9);
	query.equalTo("style", style);
	removeMyChild(".gallery_list");
	// 查询所有数据
	query.find({
		success: function(results) {

			// 循环处理查询到的数据
			for(var i = 0; i < results.length; i++) {
				var object = results[i];
				$(".gallery_list").append('<div class="gallery_box"><img class="gallery_img" ><span></span><a></a></div>');
				$(".gallery_img:eq(" + i + ")").attr("src", object.get("image"));
				$(".gallery_box >span:eq(" + i + ")").text(object.get("description"));
				$(".gallery_box >a:eq(" + i + ")").attr("href", "details.html?style=" + style + "&objectId=" + object.id);
			
			}
			//初始化页码
			var $children = $(".page").children();
		
			for(var j = 0; j < $children.length; j++) {
	        $(".page>li:eq(" + j + ")").attr("class", "");
               }  
            $(".page>li:eq(" + skipNum + ")").attr("class", "page_on");
            
            var $children1 = $(".catg_name").children();
            for(var j = 0; j < $children1.length; j++) {
						$(".catg_name>a:eq(" + j + ")").attr("class", "");
						$(".catg_name>a:eq(" + j+ ")").css("color","#333333");
			}
					$(".catg_name>a:eq(" + clothesTagNum+ ")").attr("class", "on");
					$(".catg_name>a:eq(" + clothesTagNum+ ")").css("color","white");
					var h8 = $(".catg_name a.on")["html"]();
	                $(".catg_hide p")["html"](h8);
		},
		error: function(error) {
			console.log(error.message);
		}
	});
}

function getDesignCount(style) {
	//创建查询对象，入口参数是对象类的实例
	var Clothes = Bmob.Object.extend("Clothes");
	var query = new Bmob.Query(Clothes);
	query.equalTo("style", style);
	var code = '<li ><a class="design-span">ree</span></a></li>'
	removeMyChild(".page");
	query.count({
		success: function(count) {
			// 查询成功，返回记录数量
			console.log("共有 " + count + " 条记录");
			var num = Math.ceil(count / 9);
			for(var i = 0; i < num; i++) {
				$(".page").append(code);
				/*if(i == 0) {
					$(".page>li:eq(0)").attr("class", "page_on");
				}*/
				
				$(".design-span:eq(" + i + ")").text(i + 1);
				(function(arg, i) {

					arg.click(function() {
					
						skipNum = i;
						
						getDesignCount(style);
						getDesignData(style);
						
						
						
					})
				})($(".page>li:eq(" + i + ")"), i);

			}
		},
		error: function(error) {
			// 查询失败
		}
	});
}

function removeMyChild(myClass) {
	var $children = $(myClass).children();
	for(var i = 0; i < $children.length; i++) {
		var childNode = $children[i]; //总是删除第一个，是不是更简单
		$(myClass)[0].removeChild(childNode);
	}
}
var clothesTag = "时尚风";
var clothesTagNum = 0;
function setDesignStyleClick() {
	var $children = $(".catg_name").children();
	for(var i = 0; i < $children.length; i++) {
		var $catg_click = $(".catg_name>a:eq(" + i + ")");
		if($catg_click.html() == style) {
			$catg_click.attr("class", "on");
		}
		(function(arg,i) {

			arg.click(function() {
				if(arg.html() != clothesTag) {
					clothesTag = arg.html();
					style = clothesTag;
					skipNum = 0;
					clothesTagNum = i;
					getDesignCount(arg.html());
					getDesignData(arg.html());
					
				}
			})
		})($catg_click,i);
	}
}