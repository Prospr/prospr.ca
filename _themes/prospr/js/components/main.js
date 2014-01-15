$(function() {
    var BV = new $.BigVideo();
    BV.init();
    BV.show('/assets/vid/toronto.mp4',{ambient:true});

    var workType = ['Design', 'Develop', 'Consult'];
    var services = ['Small\xA0Business', 'Search\xA0Optimization', 'User\xA0Experience', 'Brand\xA0Message', 'Content\xA0Strategy'];

    function rotateText (array, element){
      var index = Math.floor(Math.random() * array.length);
      while (index == array.indexOf(element.text())){
        index = Math.floor(Math.random() * array.length);
      }
      console.log ('Random Number: ', index);
      console.log (element);
      $(element).fadeOut(500, function(){element.text(array[index])});
      $(element).fadeIn();
    }

    function initTextRotate() {
        workRotateInterval = setInterval(function(){rotateText(workType, $('.rotate-type'));}, (Math.random() * 5000) + 3000);
        serviceRotateInterval = setInterval(function(){rotateText(services, $('.rotate-service'));}, (Math.random() * 5000) + 3000);
    };
    initTextRotate();
});