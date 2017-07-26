function resetpage(){
	var html=document.getElementsByTagName("html")[0];
	var width=document.documentElement.clientWidth;
	var scale = width*100/640;
	html.style.fontSize=scale + "px";
	document.body.style.opacity="1";
}
window.onload =function () {
	resetpage();
}
window.onresize = function () {
	resetpage();
}
function hengshuping(){
	if(window.orientation==180||window.orientation==0){
		$("body").show();
	}
	if(window.orientation==90||window.orientation==-90){
		$("body").hide();
		alert("横屏不支持播放<br/>请用竖屏播放~~~");
	}
}
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);
