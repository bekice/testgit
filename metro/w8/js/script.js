/* 
(c) 2011 Lubomir Krupa, CC BY-ND 3.0
*/

$(document).ready(function(){
	var num = numberOfScreens;

	for(var i=1;i<=num;i++){
		$('#name'+i).html(blockName[i]);
	}

	
	if(hoverEffect){
		for(i=1;i<=num;i++){
			$('<style>#wrapper'+i+' div.site:hover{border: 1px #fff solid;box-shadow: 0px 0px 5px #fff;margin-left:4px;margin-top:4px;}</style>').appendTo('head');
		};
	};
	
	if(searchEngine=='google'){
		search='http://www.google.com/search';
	}
	else if(searchEngine=='bing'){
		search='http://www.bing.com/search';
	}
	else if(searchEngine=='yahoo'){
		search='http://search.yahoo.com/bin/search';
	}
	else{
		search='http://www.google.com/search';
		searchEngine='google';
	};

	$('form').attr('action',search);
	$('#search-engine').css('background','#fff url(img/'+searchEngine+'.png) center center no-repeat');
	
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var left1 = Math.floor((windowWidth - 960)/2);
	var left2 = left1 - 1040;
	var left3 = left1 - 2080;
	var wrapperTop = Math.floor((windowHeight - 480)/2)-60;
	
	$('#place').css({'left':left1,'top':wrapperTop});
	var wrapperPos = 1;
	$('#wrapper1 input:text').focus();
	var animDone = true;
	
	function anim1to2(){
		$('#wrapper1 input:text').focusout();
		animDone = false;
		$('#place').animate({
			left: left2,
		},1000,'circEaseOut',function() {
			$('#wrapper2 input:text').focus();
			animDone = true;
			wrapperPos = 2;
		});
		$('#button1to2').hide();			
		$('#button2to1').show();
		if(num>2){
			$('#button2to3').show();
			$('#button3to2').hide();
		};
	};
	
	function anim2to1(){
		$('#wrapper2 input:text').focusout();
		animDone = false;
		$('#place').animate({
			left: left1
		},1000,'circEaseOut',function() {
			$('#wrapper1 input:text').focus();
			animDone = true;
			wrapperPos = 1;
		});
		$('#button1to2').show();			
		$('#button2to1').hide();
		if(num>2){
			$('#button2to3').hide();
			$('#button3to2').hide();
		};		
	};
	
	function anim2to3(){
		$('#wrapper2 input:text').focusout();
		animDone = false;
		$('#place').animate({
			left: left3
		},1000,'circEaseOut',function() {
			$('#wrapper3 input:text').focus();
			animDone = true;
			wrapperPos = 3;
		});
		$('#button1to2').hide();
		$('#button3to2').show();
		$('#button2to1').hide();
		$('#button2to3').hide();	
	};
	
	function anim3to2(){
		$('#wrapper3 input:text').focusout();
		animDone = false;
		$('#place').animate({
			left: left2
		},1000,'circEaseOut',function() {
			$('#wrapper2 input:text').focus();
			animDone = true;
			wrapperPos = 2;
		});
		$('#button1to2').hide();
		$('#button3to2').hide();
		$('#button2to1').show();
		$('#button2to3').show();			
	};
	
	if(num>1){
		$('#button1to2').click(function(){
			anim1to2();
		});
		
		$('#button2to1').click(function(){
			anim2to1();
		});
		
		if(num>2){
			$('#button2to3').click(function(){
				anim2to3();
			});
			
			$('#button3to2').click(function(){
				anim3to2();
			});
		};
	};

	$(document).bind('keydown',function(event){ 
		if(event.keyCode == '39' || event.keyCode == '37'){
			event.preventDefault();
		}
		if(event.which=='39' && animDone){
			
			if(wrapperPos==1 && num>1){
				anim1to2();
			};
			if(wrapperPos==2 && num>2){
				anim2to3();
			};
		};
		if(event.which=='37' && animDone){
			
			if(wrapperPos==3){
				anim3to2();
			};
			if(wrapperPos==2){
				anim2to1();
			};			
		};
	}); 

	$(document).mousewheel(function(event, delta) {
		if (delta > 0 && animDone){
			if(wrapperPos==3){
				anim3to2();
			};
			if(wrapperPos==2){
				anim2to1();
			};
		}
		else if (delta < 0 && animDone){
			if(wrapperPos==1 && num>1){
				anim1to2();
			};
			if(wrapperPos==2 && num>2){
				anim2to3();
			};
		};		
		event.preventDefault();		
	});

	var j=0;
	for (j=0; j <=(num-1); j++) {		
        if(bookmark[j]==null) continue;
		for(i=0;i<=11;i++){			
            if(bookmark[j][i]==null) continue;
			var title = bookmark[j][i]['title'];
			var url = bookmark[j][i]['url'];
			var thumb = bookmark[j][i]['thumb'];
			if(thumb==''){
				$('#thumb'+(j+1)+'-'+(i+1)).html('<img id="net" src="img/net.png" /><a href="'+url+'"><div class="title">'+title+'</div></a>');
			}
			else{
				$('#thumb'+(j+1)+'-'+(i+1)).html('<a href="'+url+'"><img src="http://developer.51cto.com/exp/code/img/thumb/'+thumb+'" /></a>');
			}
		};
	};
	
	$('#search-engine').click(function() {
		$('#engines').fadeToggle('fast','circEaseOut');
		$('#wrapper1 input:text').css('background','#fff');
	});
	
	$('#google').click(function() {
		$('#wrapper1 form').attr('action','https://www.google.com/search');
		$('#engines').fadeToggle('fast','circEaseOut');
		$('#wrapper1 #search-engine').css('background','#fff url(img/google.png) center center no-repeat');
		$('#wrapper1 input:hidden').detach();
		$('#wrapper1 input:first').attr('name','q');
		$('#wrapper1 input:text').focus();
	});
	
	$('#bing').click(function() {
		$('#wrapper1 form').attr('action','http://www.bing.com/search');
		$('#engines').fadeToggle('fast','circEaseOut');
		$('#wrapper1 #search-engine').css('background','#fff url(img/bing.png) center center no-repeat');
		$('#wrapper1 input:hidden').detach();
		$('#wrapper1 input:first').attr('name','q');
		$('#wrapper1 input:text').focus();
	});
	
	$('#yahoo').click(function() {
		$('#wrapper1 form').attr('action','http://search.yahoo.com/bin/search');
		$('#engines').fadeToggle('fast','circEaseOut');
		$('#wrapper1 #search-engine').css('background','#fff url(img/yahoo.png) center center no-repeat');
		$('#wrapper1 input:hidden').detach();
		$('#wrapper1 input:first').attr('name','q');
		$('#wrapper1 input:text').focus();
	});
	
	$('#baidu').click(function() {
		$('#wrapper1 form').attr('action','http://www.baidu.com/s');
		$('#wrapper1 input:first').attr('name','wd');
		$('#engines').fadeToggle('fast','circEaseOut');
		$('#wrapper1 #search-engine').css('background','#fff url(img/baidu.png) center center no-repeat');
		$('#wrapper1 input:text').focus();
	});
	

});

