// Carouel A
$('.owl-carousel').owlCarousel({
  autoplay: true,
  loop:true,
  autoplayTimeout: 5000,
  navigation: true,
  margin:8,
  responsive: {
    100: {
      items: 1
    },
    992: {
      items: 3
    }
    ,
    1200: {
      items: 4
    }
  }
})

// Royal Slider
jQuery(document).ready(function($) {
  $('#full-width-slider').royalSlider({
    arrowsNav: true,
    loop: false,
    keyboardNavEnabled: true,
    controlsInside: false,
    imageScaleMode: 'fill',
    arrowsNavAutoHide: false,
    autoScaleSlider: true, 
    autoScaleSliderWidth: 960,     
    autoScaleSliderHeight: 350,
    controlNavigation: 'bullets',
    thumbsFitInViewport: false,
    navigateByClick: true,
    startSlideId: 0,
    autoPlay: false,
    transitionType:'move',
    globalCaption: false,
    deeplinking: {
    enabled: true,
    change: false
    },
    imgWidth: 1440,
    imgHeight: 376,
    autoPlay: {
    enabled: true,
    pauseOnHover: true
      }
  });
});

