$(document).ready(function() {


    $(".owl-carousel").owlCarousel({
  
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true,
              center: true
          },
          600:{
              items:1,
              nav:true,
              center: true
          },
          1000:{
              items:4,
              nav:true,
              loop:false
          }
      }
   
    });

    $(".owl-fecha-qatar").owlCarousel({
  
        responsiveClass:true,
        responsive:{
            1000:{
                items: 6,
                singleItem: true,
                nav:true,
                center: true
            }
        }
    }); 
    
})