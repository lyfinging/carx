var mySwiper=new Swiper('.swiper-container',{
	direction:"vertical",
	loop:false,
	initialSlide : 0,
	autoplayDisableOnInteraction:false,
	grabCursor : true,
	onInit: function(swiper){
    swiperAnimateCache(swiper);  
	swiperAnimate(swiper);
  }, 
  onSlideChangeEnd: function(swiper){ 
    swiperAnimate(swiper);
     if (swiper.activeIndex=="5") {
		    	$(".a").css({"display":"block"});
		    	$(".b").css({"display":"block"});
		    	$(".c").css({"display":"none"});
		    	$(".d").css({"display":"none"});
		    	$(".e").css({"display":"none"});
		    	$(".f").css({"display":"none"});
		    }
  } 
})
//music
var aud = document.getElementsByTagName("audio");
var msc=true;
$(".music").click(function(){
	if(msc){
	$(".music").removeClass("xz");
	aud[0].pause();
	msc=false;
	}
	else{
	$(".music").addClass("xz");
	aud[0].play();
	msc=true;
	}
});
//3d看车
var x=0,y=0,x1=0,y1=0;
var divs=document.getElementById("box");
divs.addEventListener("touchstart",tounchstartfun,false);
divs.addEventListener("touchmove",tounchmovefun,false);
divs.addEventListener("touchend",tounchendfun,false);
function tounchstartfun(event){
	var touch = event.changedTouches[0];				
	x = Number(touch.pageX);				
}
var a=0,b=0,c=0;
function tounchmovefun(event){
	var touch=event.changedTouches[0];
	x1=Number(touch.pageX);
	a=Math.floor((x-x1)/10);
	if(a>b){
		c++;
		if(c==70){
			c=0;
		}
	}
	else if(a==b){
		c=c;
	}
	else if(a<b){
		c--;
		if(c==-1){
			c=70;
		}
	}
	b=a;
	$("#box img").css("display","none");
	$("#box img").eq(c).css("display","block");
}
var d=0;
function tounchendfun(event){
}
//点击事件
var scale=1;
var timer=null;
var flagx=true;
var time=50;
$(".sll").click(function(){
	divs.removeEventListener("touchstart",tounchstartfun,false);
	divs.removeEventListener("touchmove",tounchmovefun,false);
	divs.removeEventListener("touchend",tounchendfun,false);
	if(flagx){
		clearInterval(timer);
		function amintate(){
			$("#box img").css("display","none");
			$("#box img").eq(d).css("display","block");
			if(d>71){
				d=0;
			}
			d++;
		}
		timer=setInterval(amintate,time);
		flagx=false;
	}
	else{
		clearInterval(timer);
		flagx=true;
	divs.addEventListener("touchstart",tounchstartfun,false);
	divs.addEventListener("touchmove",tounchmovefun,false);
	divs.addEventListener("touchend",tounchendfun,false);
	}
});
$(".jia").click(function(){
	scale+=0.5;
	if(scale>=2){
		scale=2;
	}
	$("#box").css("transform","scale("+scale+")")
	
});
$(".jian").click(function(){
	scale-=0.5;
	if(scale<=0.5){
		scale=0.5;
	}
	$("#box").css("transform","scale("+scale+")")

});
$("#box").click(function(){
clearInterval(timer);
divs.addEventListener("touchstart",tounchstartfun,false);
divs.addEventListener("touchmove",tounchmovefun,false);
divs.addEventListener("touchend",tounchendfun,false);
});
//第五页
$(".a").click(function(){
	$(".a").fadeOut(1000);
	$(".b").fadeOut(1000,function(){
		$(".c").fadeIn(1000);
		$(".d").fadeIn(1000,function(){
			$(".c").fadeOut(1000);
			$(".d").fadeOut(1000,function(){
				$(".e").fadeIn(1000);
				$(".f").fadeIn(1000,function(){
					$(".e").fadeOut(1000);
					$(".f").fadeOut(1000,function(){
						$(".a").css("display","block");
						$(".b").css("display","block");
					})
				})
			})
		})
	})
})
//第六页
$(".slide6 .dj").click(function(){
	$(".mc1").css("display","none")
})
//第七页
var msc2=true;
$(".round").click(function(){
	$(".dw3").css("display","none");
	if(msc2){
	$(".music").removeClass("xz");
	aud[0].pause();
	aud[1].play();
	msc2=false;
	}
	else{
	$(".music").addClass("xz");
	aud[0].play();
	aud[1].pause();
	msc2=true;
	}
});
//第三页
$(".ql").click(function(){
	$(".s3_log7").css({
	"left":"-0.55rem",
    "top":"2.40rem"
	})
	$(".dw1").css("display","none")
})
var deng=false;
$(".led").click(function(){
	if(deng){
	$(".light").css("display","block");
	deng=false;
	}
	else{
		$(".light").css("display","none");
		deng=true;
	}
	$(".dw1").css("display","none")
	
})
$(".lt").click(function(){
	$(".s3_log7").css({
	    "left": "-3.55rem",
    "top": "2.0rem",
	})
	$(".dw1").css("display","none")
})