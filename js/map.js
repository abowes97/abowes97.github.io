		function initMap() {
			var dek = {lat: 42.698023, lng: -83.408907};
			var map = new google.maps.Map(document.getElementById('map'), {
			center: dek,
			zoom: 15,
			disableDefaultUI: true,
			gestureHandling: 'greedy',
	 
/* Styles from Snazzy Maps @ https://snazzymaps.com/style/79/black-and-white */
	 styles: [
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "weight": 1
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "weight": 0.8
            }
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    }
]
  });
  var marker = new google.maps.Marker({position: dek, map: map});
  google.maps.event.addListener(marker, 'click', function() {
    window.open("https://www.google.com/maps/place/De+Keyser+Surveying+Inc/@42.6980269,-83.4110927,17z/data=!3m1!4b1!4m5!3m4!1s0x88249792306976e5:0xabdaeae64bf1987e!8m2!3d42.698023!4d-83.408904");
}); 
}
	