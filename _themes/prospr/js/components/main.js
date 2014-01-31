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
    forceHeight:false
  });
});