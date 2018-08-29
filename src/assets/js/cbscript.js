
/*
function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('nav a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position(0) && refElement.position(0).top <= scrollPos && refElement.position(0).top + refElement.height() > scrollPos) {
            $('nav ul li a').removeClass("Act");
            currLink.addClass("Act");
        } else {
            currLink.removeClass("Act");
        }
    });
}
*/

// responsive Menu
/*
$(document).ready(function() {
    if ($(window).width() <= 1020) {
        $(".menuIcon").click(function() {
            $(".mask").show();
            $("nav").show();
            $("header").css("position", "static");
        });
        $("nav ul li").click(function() {
            $(".mask").hide();
            $("nav").hide();
            $("header").css("position", "fixed");
        });
    }

    // Responsive Search .searClose i
    $(".resSearch").click(function() {
        $(".mask").show();
        $(".searchOut").show();
    });
    $(".searClose i").click(function() {
        $(".mask").hide();
        $(".searchOut").hide();
    });
});

// login popup's
$("#forgotPass").hide();
$("#signUp").hide();
$(document).ready(function() {
    $(".siIcon").click(function() {
        $(".mask").fadeIn(200);
        $(".signPop").fadeIn(100);
    });
    $("#siup").click(function() {
        $("#signIn").hide();
        $("#signUp").show();
    });
    $("#foPas").click(function() {
        $("#signIn").hide();
        $("#forgotPass").show();
    });
    $(".forback").click(function() {
        $("#signIn").show();
        $("#forgotPass").hide();
    });
    $("#siIn").click(function() {
        $("#signIn").show();
        $("#signUp").hide();
    });
    $(".closePop").click(function() {
        $(".mask").fadeOut(200);
        $(".signPop").fadeOut(100);
        $("#signIn").show();
        $("#signUp, #forgotPass").hide();
    });
});
*/
///////////////////// Back To Top 
// $(window).scroll(function() {
//     onScroll();
//     if ($(this).scrollTop() > 200) {
//         $('.backtotop').fadeIn('slow');
//     } else {
//         $('.backtotop').fadeOut('slow');
//     }
// });

// key function
$(document).on('keyup', function(evt) {
    if (evt.keyCode == 27) {
        $(".mask").fadeOut(100);
        
    }
});

/*   Sign Theme  */
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
    $('#slideshow > div:first')
        .fadeOut(600)
        .next()
        .fadeIn(600)
        .end()
        .appendTo('#slideshow');
}, 4000);

/*
var a = 0;
$(window).scroll(function() {
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            }, {
                duration: 2500,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                    //alert('finished');
                }
            });
        });
        a = 1;
    }
});

*/