$(function() {
	
	$(".info-overlay-box .popover:not(:has(.toggle))").hide();

	$(".info-overlay-box").hover(function() {
		var el = $(this).find(".popover");
		var param;

		if (el.is(".fade")) {
			el.fadeIn();
		} else if (el.is(".grow")) {
			if (el.is(".popover-top")) {
				param = {opacity:1, height: "toggle"};
			} else if (el.is(".popover-bottom")) {
				param = {opacity:1, height: "toggle"};
			} else if (el.is(".popover-left")) {
				param = {opacity:1, width: "toggle"};
			} else if (el.is(".popover-right")) {
				param = {opacity:1, width: "toggle"};
			}

			el.animate(param);
		}
			
	}, function() {
		var el = $(this).find(".popover");
		if (el.is(".fade")) {
			$(this).find(".popover").fadeOut();
		} else if (el.is(".grow")) {
			if (el.is(".popover-top")) {
				param = {opacity:0, height: "toggle"};
			} else if (el.is(".popover-bottom")) {
				param = {opacity:0, height: "toggle"};
			} else if (el.is(".popover-left")) {
				param = {opacity:0, width: "toggle"};
			} else if (el.is(".popover-right")) {
				param = {opacity:0, width: "toggle"};
			}

			el.animate(param);

		}
	});
	
	// add icons
	$(".info-overlay-box .popover-top .toggle").html("<i class=\"fa fa-chevron-down\"></i>");
	$(".info-overlay-box .popover-bottom .toggle").html("<i class=\"fa fa-chevron-up\"></i>");
	$(".info-overlay-box .popover-right .toggle").html("<i class=\"fa fa-chevron-left\"></i>");
	$(".info-overlay-box .popover-left .toggle").html("<i class=\"fa fa-chevron-right\"></i>");

	// hide overlay
	$(".info-overlay-box .popover-top:has(.toggle)").height($(this).find(".toggle").height());
	$(".info-overlay-box .popover-bottom:has(.toggle)").height($(this).find(".toggle").height());
	$(".info-overlay-box .popover-left:has(.toggle)").width($(this).find(".toggle").width());
	$(".info-overlay-box .popover-right:has(.toggle)").width($(this).find(".toggle").width());

	// hide text
	$(".info-overlay-box .popover:has(.toggle)").css("color", "transparent");

	// add cursor:pointer class
	$(".info-overlay-box .popover:has(.toggle)").hover(function() {
		$(this).addClass("toggleHover");
	}, function() {
		$(this).removeClass("toggleHover");
	});

	$(".info-overlay-box .popover:has(.toggle)").click(function() {
		toggle($(this));
	});

});

function toggle(popover) {
		var toggle = popover.find(".toggle");
		var param;
		var symbol;
		var color;
						
		if (popover.height() == toggle.height() || popover.width() == toggle.width()) {

			// add icons
			if(popover.is(".popover-bottom")) {
				var height = popover.css("height", "auto").height();
				popover.height(toggle.height());
				symbol = "fa fa-chevron-down";
				param = {height: height};
			} else if(popover.is(".popover-top")) {
				var height = popover.css("height", "auto").height();
				popover.height(toggle.height());
				symbol = "fa fa-chevron-up";
				param = {height: height};
			} else if(popover.is(".popover-right")) {
				var width = popover.css("width", "auto").width();
				popover.width(toggle.width());
				symbol = "fa fa-chevron-right";
				param = {width: width};
			} else if(popover.is(".popover-left")) {
				var width = popover.css("width", "auto").width();
				popover.width(toggle.width());
				symbol = "fa fa-chevron-left";
				param = {width: width};
			}

			color = "black";
			popover.css("color", color);
			popover.animate(param)

		} else {
			if(popover.is(".popover-bottom")) {
				symbol = "fa fa-chevron-up";
				param = {height: toggle.height()};
			} else if(popover.is(".popover-top")) {
				symbol = "fa fa-chevron-down";
				param = {height: toggle.height()};
			} else if(popover.is(".popover-right")) {
				symbol = "fa fa-chevron-left";
				param = {width: toggle.width()};
			} else if(popover.is(".popover-left")) {
				symbol = "fa fa-chevron-right";
				param = {width: toggle.width()};
			}

			color = "transparent";
			popover.animate(param, function() {
				popover.css("color", color);
			});
		}

		toggle.find("i").removeClass();
		toggle.find("i").addClass(symbol);

}
