$(document).ready(function() {
	$.fn.fullpage({
		'verticalCentered': false,
		'anchors': ['page1', 'page2', 'page3', 'page4'],
		'css3': true,
		//'menu': '#nav',
		'navigation': true,
		'navigationPosition': 'right',
		'navigationTooltips': ['Metro', 'CSS3', 'Resume', 'Work'],

		'afterLoad': function(anchorLink, index) {
			if (index == 2) {
				$(".fix2-tit").addClass('fix2-tit-anim');
				$(".fix2-con").addClass('fix2-con-anim');
				$(".fix2-img").addClass('fix2-img-anim');
				$(".fix2-img-con").addClass('fix2-img-con-anim');
			} else if (index == 3) {
				$(".progress-bar").each(function() {
					$(this).addClass('progress-bar-anim').css('width', $(this).attr("title"));
				});
			}

		},

		'onLeave': function(index, direction) {
			if (index == 2 && direction == 'down') {
				$(".fix2-tit").removeClass('fix2-tit-anim');
				$(".fix2-con").removeClass('fix2-con-anim');
				$(".fix2-img").removeClass('fix2-img-anim');
				$(".fix2-img-con").removeClass('fix2-img-con-anim');
			} else if (index == 3 && direction == 'up') {
				$(".progress-bar").each(function() {
					$(this).removeClass('progress-bar-anim').css('width', '0');
				});
			}

			$('#staticImg').toggleClass('active', (index == 2 && direction == 'down') || (index == 4 && direction == 'up'));
			$('#staticImg').toggleClass('moveDown', index == 3 && direction == 'down');
		},

		afterRender: function() {
			$('#infoMenu').appendTo('body');

			$('#githubLink, .twitter-share-button').appendTo('body');
		}

	});

	/*
	$cheight=$(window).height();
	$('.fix').css('height',$cheight);
	//scrollto
	jQuery.scrollto = function(scrolldom,scrolltime) {
		
		$(scrolldom).click( function(){ 
			var scrolltodom = $(this).attr("date-scroll");
			$(this).addClass("thisscroll").siblings().removeClass("thisscroll");
			$('html,body').animate({
				scrollTop:$(scrolltodom).offset().top},{
            queue: false,
            duration: scrolltime,
            easing: 'easeInOutExpo'
        	}
			);
			return false;
		}); 
		
	};
  
    $.scrollto(".share a",600);
    $.scrollto(".scroll_top",600);
    $.scrollto("#metro-resume",1600);
    $.scrollto(".nav a",600);
	$.scrollto(".open-t",600);
    //fix2
    var articleHeight = document.getElementById('section1').clientHeight;
    window.addEventListener('scroll',scrollHandler);

	function scrollHandler(e){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(scrollTop > articleHeight-5 && scrollTop < articleHeight*2){
			$(".fix2-tit").addClass('fix2-tit-anim');
			$(".fix2-con").addClass('fix2-con-anim');
			$(".fix2-img").addClass('fix2-img-anim');
			$(".fix2-img-con").addClass('fix2-img-con-anim');
		}else if(scrollTop < articleHeight-100 || scrollTop >= articleHeight+100){
			$(".fix2-tit").removeClass('fix2-tit-anim');
			$(".fix2-con").removeClass('fix2-con-anim');
			$(".fix2-img").removeClass('fix2-img-anim');
			$(".fix2-img-con").removeClass('fix2-img-con-anim');
		}
	}

	//fix-right
	$(window).scroll(function() {
			var scrollh=$(document).scrollTop();
			if(scrollh>=1400){
				$(".progress-bar").each(function(){
					$(this).addClass('progress-bar-anim').css('width', $(this).attr("title"));
				});}else{
				$(".progress-bar").each(function(){
					$(this).removeClass('progress-bar-anim').css('width','0');
				});}
	});
	//more	*/
	$(".fix3-more").click(function() {
		$(".fix3-mask").css('display', 'block');
		$(".fix3-more-con").animate({
			bottom: '250px'
		}, "slow");
	});
	$(".fix3-mask").click(function() {
		$(".fix3-mask").css('display', 'none');
		$(".fix3-more-con").animate({
			bottom: '-500px'
		}, 1);
	});
	/*pic*/
	function kkk() {
		$(".pic-con img").each(function() {
			$picwidth = $(this).height();
			if ($picwidth < 120) {
				$(this).css('height', '120px');
			}
		});
	}
	$cwidth = $(window).width();
	$aniwidth = -($cwidth + 17);
	$("#metro-pic").click(function() {
		$("#section1").animate({left: $aniwidth}, 500);
		//$("body").css('overflow', 'hidden');
		$(".page-right").css('display', 'block').animate({left: '280px'}, 500).css('position', 'fixed');
		kkk();
	});
	$(".close-page-right").click(function() {
		$("#section1").animate({left: "0px"}, 500)
		//$("body").css('overflow', 'auto');
		$(".page-right").css('display', 'none').animate({left: '2048px'}, 500);
	});

	$(".pic-con li").bind('click', function() {
		$(this).clone(true).insertAfter(this);
		$(this).addClass('img-anim');
		$(".close-img").css('display', 'block');
		//$(".pic-con li img").css('position', 'static');
	});
	$(".close-img").bind('click', function() {
		$(this).css('display', 'none');
		$(".pic-con").find('.img-anim').remove();
	});
	/*music*/
	var Media = document.getElementById("audio");

	function ssss() {
		alert("dddddddd")
		alert(Media.played);
		if (Media.ended == true) {
			alert("dddddddd")
		}
	}
	/*video*/
	$("#metro-video").on('click', function(event) {
		$(this).animate({"top": "-158px","opacity": "0"}, 500);
		$("#example_video_1").animate({"top": "-158px","opacity": "1"}, 500);
	});
	/*设置*/
	$("#setting-show").bind("click", function() {
		$(this).addClass("imgs").removeAttr('id');
		$(".page_left").css({display: "block",'background-color': 'rgb(33,145,246)'}).animate({left: '0px','opacity': '1'}, "slow");

	});
	$(".close-page-left").click(function() {
		$(".page_left").css({display: "block",background: "rgb(33,145,246)"}).animate({	left: '-240px','opacity': '0'}, "slow");
	});
	/*lower right corner open*/
	$(".open-o").on('click', function() {
		$(".opendiv").addClass('opendiv-anim');
		//$(".open-o").off('click');
	});
	$("body").on("click", ".opendiv-anim", function() {
		$(".opendiv").removeClass('opendiv-anim');
	});
	$(document).mouseup(function(event) {
		if ($(event.target).parents(".opendiv").length == 0) {
			$(".opendiv").removeClass("opendiv-anim");
		}
	});
	/*work div*/
	var rightHeight = $('#works').height();
	$('.work-list a').click(function() {
		$('#works').height(rightHeight);
		$('.work-list a').removeClass('current');
		$(this).addClass('current');
		var selector = $(this).attr('data-filter')
		$(".work-cons>div").each(function() {
			if ($(this).hasClass(selector)) {
				$(this).removeClass('kind-hidden').css('position', 'static').css({
					'width': '242',
					'margin-left': '10px'
				});
			} else {
				$(this).addClass('kind-hidden');
				setTimeout(width0, 100);
			}
		});
		return false;
	});

	function width0() {
		$(".work-cons").find('.kind-hidden').css({'width': '0','margin': '0'});
	}
	$cwidth = $(window).width();
	$aniwidth = -($cwidth + 17);
	$(".open-url").on('click',function() {
		$("#work").animate({left: $aniwidth}, 500);
		//$("body").css('overflow', 'hidden');
		$("#work-open").css('display','block').animate({left: '0px'}, 500).css('position', 'fixed');
		var openmode = $(this).attr('data-mode');
		var openurl = $(this).attr('data-url');
		if (openmode == "iframe") {
			$("#work-frame").empty();
			$('#work-frame').append("<iframe id='work-iframe' src='' frameborder='0' style='width:100%;height:100%;'></iframe>");
			$("#work-iframe").attr({'src': openurl,'onLoad': "iFrameHeight()"});
			$("#work-frame").css('overflow', 'hidden');
		} else if (openmode == "ajax") {
			$.ajax({
				url: openurl,
				type: 'GET',
				dataType: 'html',
				success: function(data) {
					$("#work-frame").empty();
					$("#work-frame").append(data);
					$("#work-frame").css('overflow', 'auto');
				}
			});
		}
		//$("#work-frame").load(openurl);
	});
	$(".close-work-open").click(function() {
		$("#work").animate({left: "0px"}, 500)
		//$("body").css('overflow', 'auto');
		$("#work-open").css('display', 'none').animate({left: '2048px'}, 500);
	});
});

function played() {
	var musictime = $(".played").text();
	$(".playtime").text(musictime);
	var t = setTimeout("played()", 1000);
}
//数字变幻
var i = 0;
function nums() {
	var num = 350;
	if (i <= num) {
		//alert(num);
		$("#in-num").text(i);
	} else {
		clearInterval(numsc);
	}
	i++;
}
var numsc = setInterval("nums()", 1);