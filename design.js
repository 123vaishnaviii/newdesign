       $(document).ready(function(){
            $('.second-product-collection').slick({
                infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite:true,
        // autoplay:true,
        // autoplayspeed:50,
        dots:true,
        // customPaging : function(slider, i) {
        //     var thumb = jQuery(slider.$slides[i]).data();
        //     return '<a>'+(i+1)+'</a>';
        // },


        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 4,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 4,
                  infinite: true,
                  dots: true
                }
              },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
            });
        })



        $(document).ready(function(){
            $('.prdct-list-screen990').slick({
                infinite: true,
        slidesToShow: 3,
        slidesToScroll: 4,
        infinite:true,
        // autoplay:true,
        // autoplayspeed:50,
        dots:true,
        // customPaging : function(slider, i) {
        //     var thumb = jQuery(slider.$slides[i]).data();
        //     return '<a>'+(i+1)+'</a>';
        // } 
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 4,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 4,
                  infinite: true,
                  dots: true
                }
              },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
            });
        })


        $(document).ready(function(){
          $('.collection-items-row').slick({
              infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite:true,
      // autoplay:true,
      // autoplayspeed:50,
      dots:true,
      // customPaging : function(slider, i) {
      //     var thumb = jQuery(slider.$slides[i]).data();
      //     return '<a>'+(i+1)+'</a>';
      // } 
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
          });
      })




        $(document).ready(function(){
            $('.flogos-screen990').slick({
                infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite:true,
        // autoplay:true,
        // autoplayspeed:50,
        dots:true,
        // customPaging : function(slider, i) {
        //     var thumb = jQuery(slider.$slides[i]).data();
        //     return '<a>'+(i+1)+'</a>';
        // } 
        
            });
        })


        $(document).ready(function(){
            $('.bfifth-part2-logos-parent-screen990').slick({
                infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite:true,
        // autoplay:true,
        // autoplayspeed:50,
        dots:true,
        // customPaging : function(slider, i) {
        //     var thumb = jQuery(slider.$slides[i]).data();
        //     return '<a>'+(i+1)+'</a>';
        // } 
            });
        })


        $(document).ready(function(){
            $('.bninth-parent-screen990').slick({
                infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite:true,
        // autoplay:true,
        // autoplayspeed:50,
        dots:true,
        // customPaging : function(slider, i) {
        //     var thumb = jQuery(slider.$slides[i]).data();
        //     return '<a>'+(i+1)+'</a>';
        // } 
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 4,
                infinite: true,
                dots: true
              }
            },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
        
            });
            $(".menu-icon").click(function () {
              var div = $('.menu-item-view');
              div.animate({  left: div.css('left') === '0px' ? '-450px' : '0px'
            }, "");
            });

            $(".bfinal-part2-btn").click(function () {
              var div = $('.list-show');
              div.animate({  left: div.css('left') === '0px' ? '-450px' : '0px'
            }, "");
            });
        })

        





        