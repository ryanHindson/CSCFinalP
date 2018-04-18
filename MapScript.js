//random stuff


//Variables used in multiple functions
var Latitude = 48.468017;
var Longitude = -123.310967;

var myGyms = [];
var myLatitudes = [];
var myLongitudes = [];

//used for creating the initial google map
function initMap() {
    var CARSA = {lat: Latitude, lng: Longitude};
    var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: CARSA
        });
    var marker = new google.maps.Marker({
          position: CARSA,
          map: map
		});
    }

	
//used to create dropdown menu	
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
	window.onclick = function(event) {
		if (!event.target.matches('.dropbtn')) {

			var dropdowns = document.getElementsByClassName("dropdown-content");
			var i;
			for (i = 0; i < dropdowns.length; i++) {
				var openDropdown = dropdowns[i];
				if (openDropdown.classList.contains('show')) {
					openDropdown.classList.remove('show');
					}
				}
			}
		}
//used to change google map
	

//used to process googlespreadsheet with backend data
	$(document).ready(function() {
			$.getJSON("http://danycabrera.com/csc130/proxy.php?key=1XBF2vKuBkvA3HnDqXG75CHXtYpCsK9CQNYKkL2ZdcVk&sheet=Sheet1%20data", processData);
		});
		
		function processData(myData) {
			for (var i = 0 ; i < 5 ; i++) {
				myGyms[i] = myData[i].Location;
				myLatitudes[i] = myData[i].Latitude;
				myLongitudes[i] = myData[i].Longitude;
			}
		}