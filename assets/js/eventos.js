$(document).ready(function(){

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    if(isMobile.any()) {


        if(window.innerHeight > window.innerWidth){
             
            $("#slide .fondo1").attr("src"," ./assets/mobil/sec01.jpg");
            $("#conexion > div > img").attr("src"," ./assets/mobil/sec06.jpg");
        }

        $(window).on("orientationchange", function(event) {

            if(window.innerHeight > window.innerWidth){
                $("#slide .fondo1").attr("src","./assets/images/seccion01/fondo1.jpg");
                $("#conexion > div > img").attr("src","   ./assets/images/seccion05/foto05.jpg");
                $("body").addClass("landscape");
            }else{
            $("#slide .fondo1").attr("src"," ./assets/mobil/sec01.jpg");
            $("#conexion > div > img").attr("src"," ./assets/mobil/sec06.jpg");
            $(".landscape").removeClass("landscape");
            }
        });

     }


     $('#animated-example').click(function() {
        $('html, body').animate({
          scrollTop: $("#Performance").offset().top
        }, 1000)
      });

      $('a').click(function() {
        $('html, body').animate({
          scrollTop: $("#Contact").offset().top
        }, 1000)
      });

});