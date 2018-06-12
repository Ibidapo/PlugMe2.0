$(document).ready(function(){
    $(window).scroll(function(){
        if ( $(document).scrollTop() > 225) {
            $("#plugMe-tab, #mobile-plugMe-tab").addClass("fix");
            $(".main-page").addClass("mt-46")
        } else {
            $("#plugMe-tab, #mobile-plugMe-tab").removeClass("fix");
            $(".main-page").removeClass("mt-46");
        }
    });

    $('#nav-icon, .side-nav a').click(function(){
        $(this).toggleClass('open');
        $('.side-nav, .Ads, #mobile-plugMe-tab, .main-page, footer').toggleClass('open');
    });

    $('.side-nav a').click(function(){
        $('#nav-icon').removeClass('open');
    });

    $('.menu-tab').click(function() {
        var mobileTab = $(this).text();
        $('.mobile-tab-name').html(mobileTab);
    });

    $('.plug-card').mouseenter(function() {
        $(this).children('.plug-caption').addClass('active');
        $(this).find('.plug-details').removeClass('d-none').addClass('d-block');
    }).mouseleave(function() {
        $(this).children('.plug-caption').removeClass('active');
        $(this).find('.plug-details').addClass('d-none').removeClass('d-block');
    });

    $('.plug-btn[data-toggle="collapse"]').click(function () {
        $('.plug-btn[data-toggle="collapse"]').children('i').toggleClass('active');
    });

    $('#fdbk_trigger').click(function(){
        $('.plug-info').removeClass('d-flex').addClass('d-none');
        $('.plug-feedback').removeClass('d-none').addClass('d-flex');
    });

    $('#fdbk_cancel').click(function(){
        $('.plug-feedback').removeClass('d-flex').addClass('d-none');
        $('.plug-info').removeClass('d-none').addClass('d-flex');
    });

    $('#desc_trigger').click(function(){
        $('.plug-description').toggleClass('d-none');
    })
    
    $('#footer-menu').click(function(){
        $(this).children('i').toggleClass('d-none');
        $('div.extra').toggleClass('d-none');
        
    })

    $('.bio-opportunity .plug-card, .plug-card.tag').mouseenter(function(){
        $(this).children('.plug-action').fadeIn();
    }).mouseleave(function(){
        $(this).children('.plug-action').fadeOut();
    });

    $('.add').mouseenter(function() {
        $('.add-sym').fadeOut();
        $('.add-exp').fadeIn();
    }).mouseleave(function() {
        $('.add-sym').fadeIn();
        $('.add-exp').fadeOut();
    })
});