/*** Loader ****/
  function id(v){ return document.getElementById(v); }
  function loadbar() {
    var ovrl = id("overlayloader"),
        prog = id("progressloader"),
        stat = id("progstatloader"),
        img = document.images,
        c = 0,
        tot = img.length;
    if(tot == 0) return doneLoading();

    function imgLoaded(){
      c += 1;
      var perc = ((100/tot*c) << 0) +"%";
      prog.style.width = perc;
      stat.innerHTML = "Loading... "+ perc;
      if(c===tot) return doneLoading();
    }
    function doneLoading(){
      ovrl.style.opacity = 0;
      setTimeout(function(){ 
        ovrl.style.display = "none";
      }, 1200);
    }
    for(var i=0; i<tot; i++) {
      var tImg     = new Image();
      tImg.onload  = imgLoaded;
      tImg.onerror = imgLoaded;
      tImg.src     = img[i].src;
    }    
  }
  document.addEventListener('DOMContentLoaded', loadbar, false);

(function(jQuery) { 
  "use strict";
  //set your google maps parameters
  jQuery(document).ready(function(){

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    var scrollElement = 'html, body',
        $scrollElement;

        $('html, body').each(function () {
            
                var initScrollLeft = $(this).attr('scrollLeft');
            
                $(this).attr('scrollLeft', initScrollLeft + 1);
                if ($(this).attr('scrollLeft') == initScrollLeft + 1) {
                    scrollElement = this.nodeName.toLowerCase();
                    $(this).attr('scrollLeft', initScrollLeft);
                    return false;
                }
        });
        $scrollElement = $(scrollElement);



    function setInitActiveMenu() {
        var hash = window.location.hash;
        $('a[href="' + hash + '"]').addClass('active');
    }
    setInitActiveMenu();

    var wWidth = $(window).width(),
        mobileRes = 991;

    /* ==============================================
    Section Position
    =============================================== */
    function setSections() {
        var sections = $("section"),
            wWidth = $(window).width(),
            wCounter = 0;
        
        if(wWidth > mobileRes) { 
        
        $('ul.nav a').bind('click',function(event){
            var $anchor = $(this);

            $('html, body').stop().animate({
                scrollLeft: $($anchor.attr('href')).offset().left
            }, 1500, "easeInOutExpo");
            event.preventDefault();
        });

            $.each(sections, function(eq) {
                if(eq > 0) {
                    $(this).css({'left': wCounter});
                }
                wCounter = wCounter + $(this).width();            
            }); 

        } else {
            $.each(sections, function(eq) {
                $(this).css({'left': 0});          
            }); 
        }     
    }

    function forcePosition() {
        var hash = window.location.hash,
        $panels = $('section');
        $panels.each(function(eq) {
            var panelId = $(this).attr('id');
            if( '#' + panelId == hash ) {
                var wWidth = $(window).width(),
                    scrollElement = 'html, body';

                $(scrollElement).stop().animate({
                    scrollLeft: wWidth * eq
                }, 300, 'easeOutCubic');
    
            }
        });
    }

    function resetWindowWidth() {
        wWidth = $(window).width();
    }

    $(window).resize(function() {
        setSections();
        forcePosition();
        resetWindowWidth();
    });

    setSections();


/* Add active class in menu */
$('ul.navbar-nav li').click(function(){
    $('li').removeClass("active");
    $(this).addClass("active");
});
        
        // Toggle
        var allToggles = $(".toggle > dd").hide();
        
        $(".toggle > dt > a").click(function(){
        
            if ($(this).hasClass("active")) {
            
                $(this).parent().next().slideUp("easeOutExpo");
                $(this).removeClass("active");
                
            }
            else {
                var current = $(this).parent().next("dd");
                $(this).addClass("active");
                $(this).parent().next().slideDown("easeOutExpo");
            }
            
            return false;
        });


/*------------ Counter Up -------------*/
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

/*------ Profile-------*/

    $('#myCarousel-owner').carousel({
      interval: 3000
    })


/*------ Testimonial-------*/

    $('#myCarousel-testi').carousel({
      interval: 3500,
      touchDrag  : true,
     mouseDrag  : true
    })

/*------ Partnar-------*/

    $('#myCarousel-partner').carousel({
      interval: 3700
    })


/************ Isotope**************/
// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name',
    symbol: '.symbol',
    number: '.number parseInt',
    category: '[data-category]',
    weight: function( itemElem ) {
      var weight = $( itemElem ).find('.weight').text();
      return parseFloat( weight.replace( /[\(\)]/g, '') );
    }
  }
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

// bind filter button click
$('#filters').on( 'click', 'li', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});

// bind sort button click
$('#sorts').on( 'click', 'li', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({ sortBy: sortByValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'li', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

  /*----------------------------------------
        Fancybox Popup
    -----------------------------------------*/
    $( '[data-fancybox="images"]' ).fancybox({
      infobar : false,
      caption : function( instance, item ) {
        var caption = $(this).data('caption') || '';
        
        return ( caption.length ? caption + '<br />' : '' ) + 'Image <span data-fancybox-index></span> of <span data-fancybox-count></span>';
      }
    });
  
      $('.fancybox').fancybox();

      $('.fancybox-buttons').fancybox({
        openEffect  : 'none',
        closeEffect : 'none',

        prevEffect : 'none',
        nextEffect : 'none',

        closeBtn  : false,

        helpers : {
          title : {
            type : 'inside'
          },
          buttons : {}
        },

        afterLoad : function() {
          this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
        }
      });
      




/* Portfolio */
    var filterList = {
    
      init: function () {
      
        // MixItUp plugin
        // http://mixitup.io
        $('#portfoliolist').mixItUp({
          selectors: {
            target: '.portfolio',
            filter: '.filter' 
          },
          load: {
            filter: '*'  
          }     
        });               
      
      }

    };
    
    // Run the show!
    filterList.init();
    

      // Google Map

              var latitude = 41.0546981,
                  longitude = -74.7694306,
                  map_zoom = 12;

              var locations = [
                  ['<div class="infobox text-center"><h5>Head Office</h5><span>Welcome Our Office</span></div>', latitude, longitude, 2]
              ];
          
              var map = new google.maps.Map(document.getElementById('google-map'), {
                  zoom: map_zoom,
                  scrollwheel: false,
                  navigationControl: true,
                  mapTypeControl: false,
                  scaleControl: false,
                  draggable: true,
                  styles: [
                  {
              "featureType": "landscape",
              "stylers": [
                  {
                      "saturation": -100
                  },
                  {
                      "lightness": 65
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "poi",
              "stylers": [
                  {
                      "saturation": -100
                  },
                  {
                      "lightness": 51
                  },
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "stylers": [
                  {
                      "saturation": -100
                  },
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "stylers": [
                  {
                      "saturation": -100
                  },
                  {
                      "lightness": 30
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "road.local",
              "stylers": [
                  {
                      "saturation": -100
                  },
                  {
                      "lightness": 40
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "transit",
              "stylers": [
                  {
                      "saturation": -100
                  },
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "administrative.province",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "lightness": -25
                  },
                  {
                      "saturation": -100
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                  {
                      "hue": "#ffff00"
                  },
                  {
                      "lightness": -25
                  },
                  {
                      "saturation": -97
                  }
              ]
          }
      ],
                  center: new google.maps.LatLng(latitude, longitude),
                mapTypeId: google.maps.MapTypeId.ROADMAP
              });
          
              var infowindow = new google.maps.InfoWindow();
          
              var marker, i;
          
              for (i = 0; i < locations.length; i++) {  
            
                  marker = new google.maps.Marker({ 
                      position: new google.maps.LatLng(locations[i][1], locations[i][2]), 
                      map: map,
                      icon: 'images/marker.png'
                  });
              
                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                  return function() {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                  }
                })(marker, i));
              }
              
          });

      })(jQuery);