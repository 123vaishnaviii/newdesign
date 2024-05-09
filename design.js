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
        
            });
        })





        function toggleMenu() {
            var menus = document.querySelectorAll('.menu-list');
            for (var i = 0; i < menus.length; i++) {
              menus[i].style.display = (menus[i].style.display === 'block') ? 'none' : 'block';
            }
          }