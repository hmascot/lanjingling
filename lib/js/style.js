$(function () {

    //固定底部
//  function footerPosition() {
//      $("body footer").removeClass("fixed-bottom");
//      var contentHeight = document.body.scrollHeight, //网页正文全文高度
//          winHeight = window.innerHeight; //可视窗口高度，不包括浏览器顶部工具栏
//      if (!(contentHeight > winHeight)) {
//          //当网页正文高度小于可视窗口高度时，为footer添加类fixed-bottom
//          $("body footer").addClass("fixed-bottom");
//      } else {
//          $("body footer").removeClass("fixed-bottom");
//      }
//  }
//  footerPosition();
//  $(window).resize(footerPosition);

    //通知公告 向上滚动
    var $swap = $('#scroll'); //滚动区域
    var movetotop; //滚动的变量
    $swap.hover(function () {
        clearInterval(movetotop); //鼠标进入指定的区域停止动画
    }, function () {
        movetotop = setInterval(function () { //定义一个滚动时间间隔的方法
            var li_height = $swap.find('li').height();
            $swap.find('li:first').animate({
                marginTop: -li_height + 'px'
            }, 600, function () {
                $swap.find('li:first').css('marginTop', 0).appendTo($swap); //获取到li的高度，向上滚动一个高度，并且用回调函数把css样式调回到原始的初始状态
            });
        }, 2000); //滚动的时间间隔
    }).trigger('mouseleave'); //模拟鼠标离开时的时间，让此动画一开始就执行。

    //新闻动态 左右轮播
    var flag = "left";

    function DY_scroll(wraper, prev, next, img, speed, or) {
        var wraper = $(wraper);
        var prev = $(prev);
        var next = $(next);
        var img = $(img).find('ul');
        var w = img.find('li').outerWidth(true);
        var s = speed;
        next.click(function () {
            img.animate({
                'margin-left': -w
            } /*,1500,'easeOutBounce'*/ , function () {
                img.find('li').eq(0).appendTo(img);
                img.css({
                    'margin-left': 0
                });
            });
            flag = "left";
        });
        prev.click(function () {
            img.find('li:last').prependTo(img);
            img.css({
                'margin-left': -w
            });
            img.animate({
                'margin-left': 0
            } /*,1500,'easeOutBounce'*/ );
            flag = "right";
        });
        if (or == true) {
            ad = setInterval(function () {
                flag == "left" ? next.click() : prev.click()
            }, s * 1000);
            wraper.hover(function () {
                clearInterval(ad);
            }, function () {
                ad = setInterval(function () {
                    flag == "left" ? next.click() : prev.click()
                }, s * 1000);
            });
        };
    }
    
    if($(".hl_main5_content1 img").length >2){
        DY_scroll('.hl_main5_content', '.hl_scrool_rightbtn', '.hl_scrool_leftbtn', '.hl_main5_content1', 4, true); // true为自动播放，不加此参数或false就默认不自动
    }else {
        return;
    }

    
// $(".subTop .subImg img") == true

    if(window.outerWidth <= 800) {
        // $(".subTop .subImg 
    }
    
    


});
// $(document).ready(function() {
// 		    /*首页修正版*/
// 		   	function tabs(one,two,on){
// 		   		one.click(function(){
// 			   		var index = $(this).index();
// 			   		one.removeClass("on");
// 			   		$(this).addClass("on");
// 			   		two.hide();
// 			   		two.eq(index).show();
// 			   	})
// 		   	};
// 		   	tabs($(".in-nav li"),$(".association .association_box"),$(".on"));
// 		   	tabs($(".active-in-nav li"),$(".activity_area ul"),$(".on"));
		   	
		   	
// 		   	$(".maodian a").click(function() {
// 			    $("html, body").animate({
// 			      scrollTop: $($(this).attr("href")).offset().top + "px"
// 			    }, {
// 			      duration: 500,
// 			      easing: "swing"
// 			    });
// 			    return false;
// 		  })
		   	
// 		}); 

function modal() {
        var modal = $('<div role="dialog" class="modal fade" id="myModals" style="overflow: auto !important;"></div>');
        var modal1 = $('<div class="modal-dialog" style="margin-top:10%;"></div>');
        var modal2 = $('<div class="modal-content"></div>');
        var modal3 = $('<div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span>&times;</span></button><h4 class="modal-title">温馨提示</h4></div><div class="modal-body text-center"><h4 class="modal-title" id="myInfo"></h4></div>');
    // var modal4 = $('<div class="modal-body text-center"><h4 class="modal-title" id="myInfo"></h4></div>');
        modal.append(modal1);
        modal1.append(modal2);
        modal2.append(modal3);
        $("html").append(modal);
    }
    function succModal() {
        $("#myModals").modal({
            backdrop: 'static',
            keyboard: false
        })
    }