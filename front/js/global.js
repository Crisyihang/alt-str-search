// JavaScript Document 
$(document).ready(function() {

	var isTouch=false;
	//遮罩层
	$('#loginIn,#signUp,.ipTop').bind('click touchend',function(){
		$('.overing').show()
		$('.pannel').show()
	});
	$('.close').bind('click touchend',function(){
		$('.overing').hide()
		$('.pannel').hide()
	});

});