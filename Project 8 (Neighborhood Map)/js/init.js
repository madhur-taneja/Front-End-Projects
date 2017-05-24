// Google Maps initMap function
var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 28.5885,
			lng: 77.0495
		},
		zoom: 14
	});
	ko.applyBindings(new viewModel());

}

function mapLoadError() {
	document.getElementById('map').innerHTML = "Unable to load the map due to some error."
}

navToggle = function () {
	$(".tog").toggleClass('toHide');
}