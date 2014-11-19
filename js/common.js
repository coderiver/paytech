head.ready(function() {

	//map
	ymaps.ready(init);
	var myMap,
		myPlacemark;

	function init(){     
		myMap = new ymaps.Map ("map", {
			center: [56.1188, 38.1424],
			zoom: 13,
		});
		myPlacemark = new ymaps.Placemark([56.1092, 38.1442], { 
			content: 'г. Красноармейск, ', 
			balloonContent: 'ул. Академика Янгеля д.19 стр.2' 
		});
		myMap.controls
			.remove('zoomControl')
			.remove('mapTools')
			.remove('smallMapDefaultSet')
			.remove('trafficControl')
			.remove('largeMapDefaultSet')
			.remove('routeEditor')
			.remove('typeSelector');
		myMap.geoObjects.add(myPlacemark);
	};

	//input color
	$(".form__field input, textarea").on('change', function() {
		if($(this).val().length > 0) {
			$(this).css( 'border-color', '#a4a4a4' );
		}
		else {
			$(this).css( 'border-color', '#e5e5e5' );
		}
	});

	//validate
	$("#form").validate({
		
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            surname: {
                required: true,
                minlength: 2
            },
            organization: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                minlength: 2
            },
            comment: {
                required: true,
                minlength: 2
            }
        },
		submitHandler: function(form) {
			$(".form__submit").addClass('js-submit');
			$('.js-message-error').hide();
			$('.js-message-submit').show();
		},
		invalidHandler: function(form) {
			$('.js-message-error').show();
		}
	});

	// scrollTop
	$(".js-scroll").click(function (){
		var page = $(this).attr("href");

		$('html, body').animate({
			scrollTop: $(page).offset().top + 20
		}, 600);
		return false;
	});

});