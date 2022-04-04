$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                premier_matches: 1
            
            },
            600:{
                premier_matches:1
                
            },
            1000:{
                premier_matches: 4

            }
        }
    })
  });