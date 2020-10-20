// slider
$('.slider-advantages').slick({
    slidesToShow: 1,
    dots: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
});

$('.slider-products-top').slick({
    slidesToShow: 1,
    dots: true,
    appendDots: '.slider-products-top__nav',
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
});

// slick active
$(window).on('load resize', function() {
    if ($(window).width() < 768) {
        $('.list-products:not(.slick-initialized)').slick({
            infinite: true,
            speed: 100,
            slidesToShow: 1,
            variableWidth: true,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
        });
    } else {
        $(".list-products.slick-initialized").slick("unslick");
    }
});
// slick active

// tabs
$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

// input search
$('[name="search"]').click(function(){
    $('.search-dropDown').fadeIn();
});


$(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $('[name="search"]'); // тут указываем ID элемента
    var btn = $('.search-dropDown');
    if (!div.is(e.target) // если клик был не по нашему блоку
        && !btn.is(e.target) && btn.has(e.target).length === 0
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        btn.fadeOut();
    }
});

// menu category
$(".menu-category__item").hover(function () {
    var id = $(this).attr('data-tab'),
        content = $('.menu-subcategory[data-tab="'+ id +'"]');

    $('.menu-subcategory.active').removeClass('active'); // 3
    content.addClass('active'); // 4
});

$('.catalog-button').click(function () {
   $(this).toggleClass('click');
   $('.catalog-wrapper').fadeToggle();
});

$('.btn-catalog').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('click').siblings('.dropDown-menu').fadeToggle();

});

$('.btn-burger').click(function () {
   $('.overlay').fadeIn();
   $('.mobile-menu').fadeIn();
});

$('.btn-close, .overlay').click(function () {
    $('.mobile-menu').fadeOut();
    $('.overlay').fadeOut();
});

$('.btn-search-mobile').click(function () {
    $('.form-search').fadeToggle();
});

$('.btn-filter').click(function () {
    $('.overlay').fadeIn();
   $('.sidebar').fadeIn();
});

$('.btn-close, .overlay').click(function () {
    $('.overlay').fadeOut();
    $('.sidebar').fadeOut();
});

$('.btn-close-banner').click(function () {
    $('.sale-line').fadeOut();
});

// accordeon
$('.panel_heading .block_title').click(function () {
    $(this).toggleClass('in').next().slideToggle();
    $('.panel_heading .block_title').not(this).removeClass('in').next().slideUp();
});

$(".slider-range").slider({
    range: true,
    min: 0, // минимальное значение цены
    max: 3200, // максимальное значение цены
    step: 1, // шаг слайдера
    values: [15, 3200],  // начальные значения - позиции ползунков на шкале

    slide: function( event, ui ) {
        $( "input[name=price_s]" ).val(  ui.values[ 0 ] + ' ' + '₽'); // выводим  значение от
        $( "input[name=price_f]" ).val(  ui.values[ 1 ] + ' ' + '₽'); // выводим  значение до
    },
    stop: function(event, ui) { show(); } // выполняем действие  после остановки ползунка, в нашем случае функция show
});

$(".dec1").val($(".slider-range").slider("value") + ' ' + '₽');
$(".dec2").val($(".slider-range").slider("value") + ' ' + '₽');