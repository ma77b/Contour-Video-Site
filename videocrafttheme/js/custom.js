//Menu Init
ddsmoothmenu.init({
	mainmenuid: "menu", //menu DIV id
	orientation: 'h', //Horizontal or vertical menu: Set to "h" or "v"
	classname: 'ddsmoothmenu', //class added to menu's outer DIV
	//customtheme: ["#1c5a80", "#18374a"],
	contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]
});

//Fade lense
jQuery(document).ready(function(){
    jQuery(".fade").hover(function() {
        jQuery(this).stop().animate({
            opacity: "1"
        }, '500');
    },
    function() {
        jQuery(this).stop().animate({
            opacity: "0"
        }, '500');
    });
});


