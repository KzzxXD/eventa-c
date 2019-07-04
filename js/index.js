var scrolTop;


if(screen.width == 1366 && screen.height==768 || screen.width == 1270 && screen.height==720){
	scrolTop = 50;
}
else if(screen.width == 1920 && screen.height == 1080){
	scrolTop = 150;
}
else{
	scrolTop = 35;
}

window.onscroll = function (ev) {	
if(window.pageYOffset > scrolTop){
	nav.classList.add("nav-fixed");
	}
if(window.pageYOffset == 0){
		nav.classList.remove("nav-fixed");
	}
}