$(function(){function a(a,b){for(var c=Math.floor(Math.random()*a.length);c==a.indexOf(b.text());)c=Math.floor(Math.random()*a.length);$(b).fadeOut(500,function(){b.text(a[c])}),$(b).fadeIn()}function b(){workRotateInterval=setInterval(function(){a(e,$(".rotate-type"))},5e3*Math.random()+3e3),serviceRotateInterval=setInterval(function(){a(f,$(".rotate-service"))},5e3*Math.random()+3e3)}function c(){{var a={center:new google.maps.LatLng(43.6739,-79.34085),zoom:15,disableDefaultUI:!0,keyboardShortcuts:!1,scrollwheel:!1,styles:[{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]}]};new google.maps.Map(document.getElementById("ct-bg"),a)}}if($("body").hasClass("home")){var d=new $.BigVideo;d.init(),d.show("/assets/vid/toronto.mp4",{ambient:!0})}var e=["Design","Develop","Consult"],f=["Small Business","Search Optimization","User Experience","Brand Message","Content Strategy"];b();skrollr.init({render:function(){},smoothScrolling:!0,forceHeight:!1});google.maps.event.addDomListener(window,"load",c)});