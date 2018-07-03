$(function(){
				/*首页修正版*/
				function tabs(one, two, on) {
					one.click(function() {
						var index = $(this).index();
						one.removeClass("on");
						$(this).addClass("on");
						two.hide();
						two.eq(index).show();
					})
				};
				tabs($(".in-nav li"), $(".association .association_box"), $(".on"));
				tabs($(".active-in-nav li"), $(".activity_area ul"), $(".on"));  		

				$(".maodian a").click(function() {
                    $("html, body").animate({
                      scrollTop: $($(this).attr("href")).offset().top + "px"
                    }, {
                      duration: 500,
                      easing: "swing"
                    });
                    return false;
              })
				//锚点对接位置不准解决方法
				$(".maodian a").click(function() {
					var index = $(this).index();
					if($(window).width()<=480){
						$($(this).attr("href")).eq(index).addClass("padding-height");
						$($(this).attr("href")).eq(index).nextAll(".padding-height").removeClass("padding-height");
//						$($(this).attr("href")).eq(index).nextAll(".padding_height").removeClass("padding_height");
					}else{
						$($(this).attr("href")).eq(index).addClass("padding_height");
						$($(this).attr("href")).eq(index).nextAll(".padding_height").removeClass("padding_height");
					}
					
					
				});
				//向上滚动滚轴出现空白的解决方法
				$(window).mousewheel(function(event) {
					$("section").removeClass("padding_height");
				})
				
				
				$(".subTop ul li a").click(function(){
					if($(".at").hasClass("in")){
						$(this).parents().find(".in").removeClass("in");
					}
				})
				
				
			})