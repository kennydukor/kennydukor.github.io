// Masterpage Javascript Functions

// var cbpHorizontalMenu=(function(){
// 	var b=$("#cbp-hrmenu > ul > li"),g=b.children("a.is_mega"),c=$("body"),d=-1;function f(){g.on("click",a);b.on("click",function(h){h.stopPropagation()})}function a(j){if(d!==-1){b.eq(d).removeClass("cbp-hropen")}var i=$(j.currentTarget).parent("li"),h=i.index();if(d===h){i.removeClass("cbp-hropen");d=-1}else{i.addClass("cbp-hropen");d=h;c.off("click").on("click",e)}return false}function e(h){b.eq(d).removeClass("cbp-hropen");d=-1}return{init:f}
// })();

var cbpHorizontalMenu=(function(){
	var b=$("#cbp-hrmenu > ul > li"),g=b.children("a.is_mega"),c=$("body"),d=-1;function f(){g.on("mouseover",a);b.on("mouseover",function(h){h.stopPropagation()})}function a(j){if(d!==-1){b.eq(d).removeClass("cbp-hropen")}var i=$(j.currentTarget).parent("li"),h=i.index();if(d===h){i.removeClass("cbp-hropen");d=-1}else{i.addClass("cbp-hropen");d=h;c.off("mouseover").on("mouseover",e)}return false}function e(h){b.eq(d).removeClass("cbp-hropen");d=-1}return{init:f}
})();


if($(window).width() <= 688){
	var cbpHorizontalMenu=(function(){
		var b=$("#cbp-hrmenu > ul > li"),g=b.children(".mobile-click"),c=$("body"),d=-1;function f(){g.on("click",a);b.on("click",function(h){h.stopPropagation()})}function a(j){if(d!==-1){b.eq(d).removeClass("cbp-hropen")}var i=$(j.currentTarget).parent("li"),h=i.index();if(d===h){i.removeClass("cbp-hropen");d=-1}else{i.addClass("cbp-hropen");d=h;c.off("click").on("click",e)}return false}function e(h){b.eq(d).removeClass("cbp-hropen");d=-1}return{init:f}
	})();
}

$(function() {
	// Toggle Menu - Mobile
	$('.navbar-toggle').click(function(event) {
		$('.cbp-hrmenu .main-menu').slideToggle(300);
	});

	// Toggle Sublinks Navigations
	$('.sublinks').click(function(event) {
		$('.cbp-hrsub-inner ul ul').slideUp();
		if(!$(this).next().is(":visible")){
			$(this).next().slideDown(400);
		}
	});

	cbpHorizontalMenu.init();
});