$(document).ready(function() 
{
	youtuber();
});

function youtuber() 
{
	// $("head").append($("<link>").attr({ type: 'text/css', rel: 'stylesheet', href: 'youtuber/youtuber.css' })); // css
	$("body").append($("<div>").attr({ class: 'youtuber_back' })); // bg
	$(".youtuberBack").height($(document).height());

	var i, id, shortLink, bg = $(".youtuber_back"), wh, ww, video, fw, fh, qw, qh, href;

	qw = [3840, 2560, 1920, 1280, 854, 640, 426]; // video sizes
	qh = [2160, 1440, 1080, 720, 480, 360, 240];

	function sizeVideo() // resize video
	{
		ww = $(window).width();
		for (i=0; i < qw.length; i++) 
		{
			if (ww > qw[i])
			{
				$("#youtuber").attr({"width": qw[i], "height": qh[i]});
				$(video).css({"width": qw[i], "height": qh[i]});
				break;
			}
		}		
	}

	function sizeContainer() 
	{
		if ($(video).is(":visible")) 
		{
			wh = $(window).height(); 
			ww = $(window).width(); 
			fw = $(video).width();
			fh = $(video).height();
			$(video).css("left", (ww-fw)/2);
			$(video).css("top", (wh-fh)/2);
			$(bg).css("height", $(document).height());
		}
	}

	function closeContainer()
	{
		$(bg).html("");
		$(bg).fadeOut("fast");		
	}

	$(".youtuber").click(function() // link click
	{
		href = $(this).attr("href"); // get link
		i = href.search(/\/youtu.be/i);


		if (i > 0) // youtu.be
		{
			id = href.match(/(\.be\/)([^&]+)/);
			id = id[2];
		} 
			else // youtube.com
		{
			id = href.match(/(\?|&)v=([^&]+)/);
			id = id[2];
		}

		if (id.length == 0) return false;

		$(bg).fadeIn("fast");
		$(bg).append($("<div />").attr({ id: 'youtuber_loading'}).text("Loading"));
		$(bg).append($("<div />").attr({ id: 'youtuber_close'}).html("&#215;"));
		$(bg).append($("<div />").attr({ id: 'youtuber_container' }));


		$("#youtuber_container").append($("<iframe />").attr({ src: 'http://youtube.com/embed/'+id, frameborder: 0, id: 'youtuber', "allowfullscreen": "" }));
		video = $("#youtuber_container");
		sizeVideo();
		$(video).fadeIn("fast");
		sizeContainer();
		return false;
	});

	$(window).resize(function() // resize 
	{
		sizeContainer();
		sizeVideo();
	});

	$(bg).click(function() // bg close
	{ 
		closeContainer();
	});

	$(document).keyup(function(a) // esc btn
	{ 
		if ((a.keyCode == 27) && ($(bg).is(":visible"))) {
			$(bg).click();
		} 
	});
}