$(document).ready(function(){
    $('.homes-panel').slick({
        slidesToShow: 4,
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
});
