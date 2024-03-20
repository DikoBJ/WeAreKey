$(document).ready(function () {
    $('[data-modal-target]').click(function () {
        var modalTarget = $(this).data('modalTarget');
        var modal = $(modalTarget);
        openModal(modal);
    });

    $('#overlay').click(function () {
        $('.modal.active').each(function () {
            closeModal($(this));
        });
    });

    $('[data-close-button]').click(function () {
        var modal = $(this).closest('.modal');
        closeModal(modal);
    });

    function openModal(modal) {
        if (modal.length === 0) return;
        modal.addClass('active');
        $('#overlay').addClass('active');
        $('body').addClass('modal-open');
    }

    function closeModal(modal) {
        if (modal.length === 0) return;
        modal.removeClass('active');
        $('#overlay').removeClass('active');
        $('body').removeClass('modal-open');
    }


    $('.submit').on('click', function () {
        alert("You would be transferred to pay");
        closeModal($('.modal.active'));
    });

    var stickyBooking = $('.sticky-booking');
    var placeholder = $('.placeholder');
    var stickyOffset = stickyBooking.offset().top;

    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        var animationStart = 300;

        if (scrollPosition > animationStart) {
            $('.about-info').addClass('animate');
            $('.facilities-grid .line').addClass('animate');
            $('h4 .line').addClass('animate');
            $('.spa-image-text').addClass('animate');
        }

        if ($(window).scrollTop() >= stickyOffset) {
            stickyBooking.addClass('fixed');
            placeholder.css('display', 'block').height(stickyBooking.outerHeight());
        } else {
            stickyBooking.removeClass('fixed');
            placeholder.css('display', 'none');
        }
    });

    var currentDate = new Date();
    var endDate = new Date(currentDate);
    endDate.setDate(endDate.getDate() + 2); 

    var startDateString = formatDate(currentDate);
    var endDateString = formatDate(endDate);

    $('#start-date').text(startDateString);
    $('#end-date').text(endDateString);
   
    function formatDate(date) {
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();

        if (day < 10) {
            day = '0' + day;
        }
        if (month < 10) {
            month = '0' + month;
        }

        return day + '/' + month + '/' + year;
    }

    const navSlide = () => {
        const hamburger = $('.hamburger');
        const nav = $('.nav-bar');
        const navLinks = $('.nav-bar a');

        hamburger.click(function () {
            nav.toggleClass('nav-active');

            navLinks.each(function (index) {
                if ($(this).css('animation')) {
                    $(this).css('animation', '');
                } else {
                    $(this).css('animation', `navLinkFade 0.5s ease forwards ${index / 7}s`);
                }
            });

            hamburger.toggleClass('toggle');
        });
    };

    navSlide();


    const main_image = $('#main-image');
    const bungalow_image = $('#bungalow-image');
    const villa_image = $('#villa-image');
    const classic_image = $('#classic-image');



    function mobileVersion() {
        const screenWidth = $(window).width();

        if (screenWidth <= 768) {
            main_image.attr('src', 'pics/main-mobile.jpg');
            bungalow_image.attr('src', 'pics/bungalow-mobile.jpg');
            villa_image.attr('src', 'pics/villa-mobile.jpg');
            classic_image.attr('src', 'pics/classic-mobile.jpg');

        } else {
            main_image.attr('src', 'pics/main.jpg');
            bungalow_image.attr('src', 'pics/bungalow.jpg');
            villa_image.attr('src', 'pics/villa.jpg');
            classic_image.attr('src', 'pics/classic.jpg');
        }
    }

    mobileVersion();
    $(window).resize(mobileVersion);

});