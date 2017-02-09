$(window).load(function() {
	var s_img_w = $(".service_box img").width();
	var s_img_h = $(".service_box img").height();
	$(".service_box_text p a.a_img").height(s_img_h);
	$(".service_box_text p a.a_img").width(s_img_w);
});

$(window).resize(function() {
	var s_img_w = $(".service_box img").width();
	var s_img_h = $(".service_box img").height();
	$(".service_box_text p a.a_img").height(s_img_h);
	$(".service_box_text p a.a_img").width(s_img_w);
});

function slider_h() {
	if($(window)["width"]() > 1024) {
		$(".slider .item")["height"]($(window)["height"]() * 0.7)
	} else {
		$(".slider .item")["height"]($(window)["height"]() * 0.5)
	}
};

function nav_ul_center() {
	if($(window)["width"]() < 960) {
		var YN1 = $(".navul")["height"]();
		$(".navul")["css"]("margin-top", -YN1 * 0.6)
	} else {
		$(".nav ul")["css"]("margin-top", "auto")
	}
};

function side() {
	if($(window)["width"]() < 960) {
		/*$(".nav_icon")["click"](function() {
			$(".side_close")["fadeIn"](500);
			$(".navul")["slideDown"](400)
		});*/
		$(".side_close")["click"](function() {
			$(".nav ul,.side_close")["fadeOut"](200)
		})
	} else {
		$(".side_close,.nav_icon")["css"]("display", "none");
		$(".navul")["css"]("display", "block")
	};
	if($(window)["width"]() < 960) {
		$(".nav_icon")["css"]("display", "block");
		$(".nav ul, .side_close")["css"]("display", "none")
	}
};

function nav_top() {
	$(".header")["css"]("position", "fixed");
	$(".h_100")["hide"]();
	$(".header")["css"]("top", "0");
	var _mYrfN2 = $(".header")["offset"]()["top"];
	$(".slider")["css"]("margin-top", "69px");
	if($(window)["width"]() < 959) {
		$(".slider")["css"]("margin-top", "50px")
	}
};

function footer_top() {
	var LmbXzR3 = $("body")["outerHeight"](true);
	var ScszR4 = $(window)["height"]();
	var aOvVKbfI5;
	var tDkS6;
	if($(window)["width"]() < 959) {
		tDkS6 = 0
	} else {
		tDkS6 = 0
	};
	if(LmbXzR3 < ScszR4) {
		aOvVKbfI5 = ScszR4 - LmbXzR3 - tDkS6;
		$(".footer")["css"]("top", aOvVKbfI5)
	} else {
		$(".footer")["css"]("top", "auto")
	}
};
$(window["document"])["ready"](function() {
	var Ty7 = $(".contact_mini_text p")["height"]();
	if(Ty7 < 150) {
		$(".contact_mini.btn_contact")["hide"]()
	};
	$(".catg_hide")["click"](function() {
		$(".has_sub")["toggle"]()
	});
	$(".catg_hide")["click"](function() {
		$(this)["toggleClass"]("catg_hide_2")
	});
	var h8 = $(".catg_name a.on")["html"]();
	$(".catg_hide p")["html"](h8);
	if(navigator["userAgent"]["indexOf"]("MSIE 8.0") > 0) {
		$('.item')["cover"]()
	};
	$('.slider')["slick"]({
		dots: true,
		speed: 1000,
		pauseOnHover: false,
		autoplay: true
	});
	$("#news_slider")["slick"]({
		dots: true,
		speed: 800,
		pauseOnHover: false,
		autoplay: true
	});
	slider_h();
	side();
	nav_ul_center();
	nav_top()
});
$(window)["resize"](function() {
	slider_h();
	nav_ul_center();
	side();
	footer_top();
	setTimeout("nav_top()", 500);
	if($(window)["width"]() > 960) {
		$(".has_sub")["css"]("display", "block")
	}
});
$(window)["load"](function() {
	$(".footer")["css"]("opacity", "1");
	footer_top()
});
if(!Function["prototype"]["bind"]) {
	Function["prototype"]["bind"] = function(teqQ9) {
		if(typeof this !== "function") {
			throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
		}
		var jA10 = window["Array"]["prototype"]["slice"]["call"](arguments, 1),
			k_11 = this,
			N_cOrGpbG12 = function() {},
			fBound = function() {
				return k_11["apply"](this instanceof N_cOrGpbG12 && teqQ9 ? this : teqQ9, jA10["concat"](window["Array"]["prototype"]["slice"]["call"](arguments)))
			};
		N_cOrGpbG12["prototype"] = this["prototype"];
		fBound["prototype"] = new N_cOrGpbG12();
		return fBound
	}
}