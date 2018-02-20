//calendar

$('[data-toggle="datepicker"]').datepicker({
    format: "dd MM yyyy",
    language: "ru"
});

$(".hamburger").click(function(){
 $(this).closest("header").toggleClass("active");
});

//button-number

$('[data-button="minus"]').on('click', function() {
	var input = $(this).siblings('[data-button="number"]');
	var inputVal = input.val();
	if (inputVal <= 0) {
		return false;
	} else if (inputVal > 0) {
		input.val(parseInt(inputVal) - 1);
	}
})

$('[data-button="plus"]').on('click', function() {
	var input = $(this).siblings('[data-button="number"]');
	var inputVal = input.val();

	if (inputVal > 0) {
		input.val(parseInt(inputVal) + 1);
	} else if (inputVal <= 0) {	
		input.val(parseInt(inputVal) + 1);
	}
})

//open window

$('.js-open-window').on('click', function() {
	$('.window-search').slideToggle(500);
})

//map

 function initMap() {
	var uluru = {lat: 34.8697395, lng: -111.7609896};
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 10,
	  center: uluru
	});
	var marker = new google.maps.Marker({
	  position: uluru,
	  map: map
	});
}

initMap();