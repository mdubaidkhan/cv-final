$(document).ready(function () {

    document. getElementById("myButton"). onclick = function () {
  location. href = "https://drive.google.com/drive/folders/1L3LtL39_nFzjOrWSv-pIdWpkYLnKcK4m?ths=true";
  }
  
  
  
  
  
  
  
  
  
      $('.project-area .grid .test-popup-link').magnificPopup({
          type: 'image',
          gallery: { enabled: true }
      });
  
  
      // Owl-carousel
  
      $('.site-main .about-area .owl-carousel').owlCarousel({
          loop: true,
          autoplay: true,
          dots: true,
          responsive: {
              0: {
                  items: 1
              },
              560: {
                  items: 2
              }
          }
      })
  
   var controller = new ScrollMagic.Controller();
  
    var ourScene = new ScrollMagic.Scene({
      triggerElement:'#effect01',
      duration:2000,
      
      })
      .setClassToggle('#effect01','fade-in')
      .addTo(controller);
  
      var ourScene1 = new ScrollMagic.Scene({
          triggerElement:'#effect02',
          duration:'70%',
          
          })
          .setClassToggle('#effect02','fade-in1')
         // .addIndicators()
          .addTo(controller);
  
  
      
  
  
  
  
      
  
  
  });
  
  
