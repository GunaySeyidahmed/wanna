$( document ).ready(function() {
    console.log( "ready!" );
    $(window).scroll(function () {
        var fixedNav=$('.header-section nav');
        var navImgLogo=$('.header-section .navbar-brand #logo-1');
        var navImgFixed=$('.header-section .navbar-brand #logo-2');
        var navLink=$('.header-section .nav-item a');
        console.log(navLink);
        if($(this).scrollTop()>70){
            fixedNav.addClass('fixed-nav');
            navImgLogo.addClass('logo');
            navImgFixed.removeClass('d-none').addClass('logo-fixed');
            navLink.removeClass('white-text').addClass('black-text');
        }
        else {
            fixedNav.removeClass('fixed-nav');
            navImgLogo.removeClass('logo');
            navImgFixed.addClass('d-none').removeClass('logo-fixed');
            navLink.removeClass('black-text').addClass('white-text');
        }
    });
    $('.reviews').slick({
        dots: true,
        speed: 100,
        arrows:false,
        centerMode: true,
        centerPadding:'10px',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots:false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots:false,
                    centerMode: false
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    dots:false
                }
            }
        ]
    });
});