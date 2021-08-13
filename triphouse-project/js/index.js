import $ from '../../node_modules/jquery/dist/jquery.js'
import '../js/slick.min.js'

$(document).ready(function(){
    $('.homes-panel').slick({
        slidesToShow: 4,
        responsive:[
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
});

$(document).ready(function(){
    $('.reviews-panel').slick({
        slidesToShow: 3,
        responsive:[
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]
    });
});