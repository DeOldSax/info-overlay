$(function() {
	
	$(".info-overlay-box .info-overlay").each(function() {
		if ($(this).is(".an-fade") || $(this).is(".grow")) {
			$(this).hide();
		}
	});



	$(".info-overlay-box").hover(function() {
		var el = $(this).find(".info-overlay");
		var param;
		if (el.is(".an-fade")) {
			el.fadeIn();
		} else if (el.is(".grow")) {
			if (el.is(".info-overlay-top")) {
				param = {opacity:1, height: "toggle"};
			} else if (el.is(".info-overlay-bottom")) {
				param = {opacity:1, height: "toggle"};
			} else if (el.is(".info-overlay-left")) {
				param = {opacity:1, width: "toggle"};
			} else if (el.is(".info-overlay-right")) {
				param = {opacity:1, width: "toggle"};
			}

			el.animate(param);
		}
			
	}, function() {
		var el = $(this).find(".info-overlay");
		if (el.is(".an-fade")) {
			$(this).find(".info-overlay").fadeOut();
		} else if (el.is(".grow")) {
			if (el.is(".info-overlay-top")) {
				param = {opacity:0, height: "toggle"};
			} else if (el.is(".info-overlay-bottom")) {
				param = {opacity:0, height: "toggle"};
			} else if (el.is(".info-overlay-left")) {
				param = {opacity:0, width: "toggle"};
			} else if (el.is(".info-overlay-right")) {
				param = {opacity:0, width: "toggle"};
			}

			el.animate(param);

		}
	});
	
	// add icons
	$(".info-overlay-box .info-overlay-top .toggle").html("<span class=\"glyphicon glyphicon-chevron-down\"></span>");
	$(".info-overlay-box .info-overlay-bottom .toggle").html("<span class=\"glyphicon glyphicon-chevron-up\"></span>");
	$(".info-overlay-box .info-overlay-right .toggle").html("<span class=\"glyphicon glyphicon-chevron-left\"></span>");
	$(".info-overlay-box .info-overlay-left .toggle").html("<span class=\"glyphicon glyphicon-chevron-right\"></span>");

	// hide overlay
	$(".info-overlay-box .info-overlay-top:has(.toggle)").height($(this).find(".toggle").height());
	$(".info-overlay-box .info-overlay-bottom:has(.toggle)").height($(this).find(".toggle").height());
	$(".info-overlay-box .info-overlay-left:has(.toggle)").width("20px");
	$(".info-overlay-box .info-overlay-right:has(.toggle)").width("20px");

	// hide text
	$(".info-overlay-box .info-overlay:has(.toggle)").css("color", "transparent");

	// add cursor:pointer class
	$(".info-overlay-box .info-overlay:has(.toggle)").hover(function() {
		$(this).addClass("toggleHover");
	}, function() {
		$(this).removeClass("toggleHover");
	});

	$(".info-overlay-box .info-overlay:has(.toggle)").click(function() {
		toggle($(this));
	});

});

function toggle(popover) {
		var hardcodedWidth = 20;
		var toggle = popover.find(".toggle");
		var param;
		var symbol;
		var color;
						
		if (popover.height() == toggle.height() || popover.width() == hardcodedWidth) {
			/* OPEN Popover */
			console.log("popver width = toggle width");
			// add icons
			if(popover.is(".info-overlay-bottom")) {
				var height = popover.css("height", "auto").height();
				popover.height(toggle.height());
				symbol = "glyphicon glyphicon-chevron-down";
				param = {height: height};
			} else if(popover.is(".info-overlay-top")) {
				var height = popover.css("height", "auto").height();
				popover.height(toggle.height());
				symbol = "glyphicon glyphicon-chevron-up";
				param = {height: height};
			} else if(popover.is(".info-overlay-right")) {
				var width = popover.css("width", "auto").width();
				popover.width(hardcodedWidth + "px");
				symbol = "glyphicon glyphicon-chevron-right";
				param = {width: width};
			} else if(popover.is(".info-overlay-left")) {
				var width = popover.css("width", "auto").width();
				console.log("width: " + width);
				popover.width(hardcodedWidth + "px");
				symbol = "glyphicon glyphicon-chevron-left";
				param = {width: width};
			}

			color = "black";
			popover.css("color", color);
			popover.animate(param)

		} else {
			/* Close Popover */
			console.log("popver width != toggle width");
			if(popover.is(".info-overlay-bottom")) {
				symbol = "glyphicon glyphicon-chevron-up";
				param = {height: toggle.height()};
			} else if(popover.is(".info-overlay-top")) {
				symbol = "glyphicon glyphicon-chevron-down";
				param = {height: toggle.height()};
			} else if(popover.is(".info-overlay-right")) {
				symbol = "glyphicon glyphicon-chevron-left";
				param = {width: hardcodedWidth + "px"};
			} else if(popover.is(".info-overlay-left")) {
				symbol = "glyphicon glyphicon-chevron-right";
				param = {width: hardcodedWidth + "px"};
			}

			color = "transparent";
			popover.animate(param, function() {
				popover.css("color", color);
			});
		}

		toggle.find("span").removeClass();
		toggle.find("span").addClass(symbol);

}
