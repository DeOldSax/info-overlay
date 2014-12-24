$(function() {
	var isClickDisabled = false;

	// hide all info-overlays 
	var hideClasses = [".an-fade", ".grow", "info-overlay.manual span"];
	$(".info-overlay-box .info-overlay").each(function() {
		for (var i = 0; i < hideClasses.length; i++) {
			if ($(this).is(hideClasses[i])) {
				$(this).hide();
			}
		}
	});

	// shrink all manual overlays
	$(".info-overlay-box .info-overlay-top.manual").height("20px");
	$(".info-overlay-box .info-overlay-bottom.manual").height("20px");
	$(".info-overlay-box .info-overlay-left.manual").width("20px");
	$(".info-overlay-box .info-overlay-right.manual").width("20px");

	// hide text on manual info-overlays
	$(".info-overlay.manual").css("color", "transparent");

	// show icons
	$(".info-overlay.manual span").show();

	// add cursor:pointer class
	$(".info-overlay.manual").addClass("pointer");

	// hover over info-overlay
	$(".info-overlay-box").hover(function() {
		if($(this).find(".info-overlay").is(".manual.hover")) {
			toggle($(this).find(".info-overlay"));
			isClickDisabled = true;
			return;
		}

		var el = $(this).find(".info-overlay");

		if (el.is(".an-fade")) {
			el.fadeIn();
		} else if (el.is(".grow")) {
			growUp(el);
		}
			
	}, function() {
		if($(this).find(".info-overlay").is(".manual.hover")) {
			toggle($(this).find(".info-overlay"));
			isClickDisabled = false;
			return;
		}
		var el = $(this).find(".info-overlay");

		if (el.is(".an-fade")) {
			el.fadeOut();
		} else if (el.is(".grow")) {
			growDown(el);
		}
	});
	
	// click on manual info-overlay
	$(".info-overlay-box .info-overlay.manual").click(function() {
		if (!isClickDisabled) {
			toggle($(this));
		}
	});
	
});

function growUp(el) {
	var param;

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

function growDown(el) {
	var param;

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

function toggle(el) {
	var hardcodedWidth = 20;
	var symbol;
	var color;

	if (el.height() == hardcodedWidth || el.width() == hardcodedWidth) {
		// open el
		if (el.is(".info-overlay-top")) {
			var height = el.css("height", "auto").height();
			// hack
			el.height(hardcodedWidth);
			symbol = "glyphicon glyphicon-chevron-up";
			param = {height: height};
		} else if (el.is(".info-overlay-bottom")) {
			var height = el.css("height", "auto").height();
			el.height(hardcodedWidth);
			symbol = "glyphicon glyphicon-chevron-down";
			param = {height: height};
		} else if (el.is(".info-overlay-left")) {
			var width = el.css("width", "auto").width();
			el.width(hardcodedWidth + "px");
			symbol = "glyphicon glyphicon-chevron-left";
			param = {width: width};
		} else if (el.is(".info-overlay-right")) {
			var width = el.css("width", "auto").width();
			el.width(hardcodedWidth + "px");
			symbol = "glyphicon glyphicon-chevron-right";
			param = {width: width};
		}

		color = "black";
		el.css("color", color);
		el.animate(param)

	} else {
		// close el
		if (el.is(".info-overlay-top")) {
			symbol = "glyphicon glyphicon-chevron-down";
			param = {height: hardcodedWidth + "px"};
		} else if (el.is(".info-overlay-bottom")) {
			symbol = "glyphicon glyphicon-chevron-up";
			param = {height: hardcodedWidth + "px"};
		} else if (el.is(".info-overlay-left")) {
			symbol = "glyphicon glyphicon-chevron-right";
			param = {width: hardcodedWidth + "px"};
		} else if (el.is(".info-overlay-right")) {
			symbol = "glyphicon glyphicon-chevron-left";
			param = {width: hardcodedWidth + "px"};
		}

		color = "transparent";
		el.animate(param, function() {
			el.css("color", color);
		});
	}

	el.find("span").removeClass();
	el.find("span").addClass(symbol);
}
