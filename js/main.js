"use strict",

jQuery(function($) {
	//Countdown js
	$("#countdown").countdown({
		date: "10 nov 2018 10:00:00",
		format: "on"
	}, function() {});

	//Scroll Menu

	function menuToggle() {
		var windowWidth = $(window).width();

		if (windowWidth > 767 ) {
			$(window).on('scroll', function() {
				if ($(window).scrollTop() > 405) {
					$('.main-nav').addClass('fixed-menu animated slideInDown');
				} else {
					$('.main-nav').removeClass('fixed-menu animated slideInDown');
				}
			});
		} else {
			$('.main-nav').addClass('fixed-menu animated slideInDown');
		}
	}

	menuToggle();


	// Carousel Auto Slide Off
	$('#event-carousel, #twitter-feed, #sponsor-carousel, #main-slider').carousel({
		interval: false
	});


	// Contact form validation
	var form = $('.contact-form');
	form.submit(function () {'use strict',
		$this = $(this);
		$.post($(this).attr('action'), function(data) {
			$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
		},'json');
		return false;
	});

	$( window ).resize(function() {
		menuToggle();
	});

	$('.main-nav ul').onePageNav({
		currentClass: 'active',
	    changeHash: false,
	    scrollSpeed: 900,
	    scrollOffset: 0,
	    scrollThreshold: 0.3,
	    filter: ':not(.no-scroll)'
	});
});


// Google Map Customization
(function(){
	var map;

	map = new GMaps({
		el: '#gmap',
		lat: 39.109885,
		lng: -84.515631,
		scrollwheel:false,
		zoom: 16,
		zoomControl : false,
		panControl : false,
		streetViewControl : false,
		mapTypeControl: false,
		overviewMapControl: false,
		clickable: false
	});

	var image = 'images/map-icon.png';
	map.addMarker({
		lat: 39.109885,
		lng: -84.515631,
		// icon: image,
		title: 'Union Hall',
		animation: google.maps.Animation.DROP,
		verticalAlign: 'bottom',
		horizontalAlign: 'center',
		backgroundColor: '#C11A15',
	});


	var styles = [
		{ "featureType": "road", "stylers": [ { "color": "#b4b4b4" } ] },
		{ "featureType": "water", "stylers": [ { "color": "#d8d8d8" } ] },
		{ "featureType": "landscape", "stylers": [ { "color": "#f1f1f1" } ] },
		{ "elementType": "labels.text.fill", "stylers": [ { "color": "#000000" } ] },
		{ "featureType": "poi", "stylers": [ { "color": "#d9d9d9" } ] },
		{ "elementType": "labels.text", "stylers": [ { "saturation": 1 }, { "weight": 0.1 }, { "color": "#000000" } ] }
	];
	map.addStyle({
		"styledMapName": "Styled Map",
		"styles": styles,
		"mapTypeId": "map_style"
	});
	map.setStyle("map_style");

	var $container = $("div.organizers");
	$container.html(shuffle($container.children().get()));

	function shuffle(o){
		for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	};
}());
