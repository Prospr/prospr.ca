$(function() {
  if ($('body').hasClass('home')){
    var BV = new $.BigVideo();
    BV.init();
    BV.show('/assets/vid/toronto.mp4',{ambient:true});
  }
  var workType = ['Design', 'Develop', 'Consult'];
  var services = ['Small\xA0Business', 'Search\xA0Optimization', 'User\xA0Experience', 'Brand\xA0Message', 'Content\xA0Strategy'];

  function rotateText (array, element){
    var index = Math.floor(Math.random() * array.length);
    while (index == array.indexOf(element.text())){
      index = Math.floor(Math.random() * array.length);
    }
    $(element).fadeOut(500, function(){element.text(array[index])});
    $(element).fadeIn();
  }

  function initTextRotate() {
    workRotateInterval = setInterval(function(){rotateText(workType, $('.rotate-type'));}, (Math.random() * 5000) + 3000);
    serviceRotateInterval = setInterval(function(){rotateText(services, $('.rotate-service'));}, (Math.random() * 5000) + 3000);
  };
  initTextRotate();

   // Init Skrollr
  var s = skrollr.init({
    render: function(data) {
      //Debugging - Log the current scroll position.
      //console.log(data.curTop);
    },
    smoothScrolling: true,
    forceHeight: false
  });

  // Google Maps API Init with styles
  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(43.67390, -79.34085),
      zoom: 15,
      disableDefaultUI: true,
      keyboardShortcuts: false,
      scrollwheel: false,
      styles: [
          {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 17
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 20
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 17
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 29
                  },
                  {
                      "weight": 0.2
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 18
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 16
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 21
                  }
              ]
          },
          {
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 16
                  }
              ]
          },
          {
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "saturation": 36
                  },
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 40
                  }
              ]
          },
          {
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "transit",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 19
                  }
              ]
          },
          {
              "featureType": "administrative",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 20
                  }
              ]
          },
          {
              "featureType": "administrative",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 17
                  },
                  {
                      "weight": 1.2
                  }
              ]
          }
      ]
    };
    var map = new google.maps.Map(document.getElementById("ct-bg"), mapOptions);
  }
  google.maps.event.addDomListener(window, 'load', initialize);
});