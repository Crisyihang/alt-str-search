// JavaScript Document 
$(document).ready(function() {

	var isTouch=false;
	//遮罩层
	$('#loginIn,#signUp,.ipTop,#change_header a.loginSign').bind('click touchend',function(e){
		e.preventDefault();
		$('.overing').show()
		$('.pannel').show()
	});
	$('.close').bind('click touchend',function(e){
		e.preventDefault();
		$('.overing').hide()
		$('.pannel').hide()
	});

	//搜索框下拉事件
	function stopPropagation(e) {
    if (e.stopPropagation) 
      e.stopPropagation();//停止冒泡  非ie
    else
      e.cancelBubble = true;//停止冒泡 ie
  	}
	$(document).bind('click touchend',function(){
	  $('#section input').css('border-color','#dcdcdc')
	  $('.searchTabslist').hide()
	});
	  
	$('.searchTabs').bind('click touchend',function(e){
	  //写要执行的内容....吥啦不啦
	  stopPropagation(e);//调用停止冒泡方法,阻止document方法的执行
	  $('#section input').css('border-color','#079df2')
	  $('.searchTabslist').show()
	});

	$('.searchTabslist a').bind('click touchend',function(e){
	  stopPropagation(e);
	  $(this).addClass('cur')
	  $(this).siblings().removeClass('cur')
	  $('.searchTabs').html($(this).html())
	  $('.searchTabslist').hide()
	});
});