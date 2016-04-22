window.onload=function(){

	// topbanner 隐藏
	var closeTopbanner = document.getElementsByClassName('close-topbanner')[0];
	var topbanner = document.getElementsByClassName('topbanner')[0];

	closeTopbanner.onclick=function(){
		topbanner.style.display='none';
	};

	// input获得焦点
	var inp = document.getElementById('inp');

	inp.onfocus=function(){
		inp.value='';
	}
	inp.onblur=function(){
		inp.value='空气净化器';
	}
}