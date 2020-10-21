// slider
$('.slider-advantages').slick({
    slidesToShow: 1,
    dots: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 421,
            settings: {
                arrows: false,
                fade: true
            }
        }
    ]
});

$('.slider-products-top').slick({
    slidesToShow: 1,
    dots: true,
    appendDots: '.slider-products-top__nav',
    appendArrows: '.slider-products-top__arrows',
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 421,
            settings: {
                arrows: false,
            }
        }
    ]
});


// tabs
$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

// input search
$('.form-search [name="search"]').click(function () {
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
        content = $('.menu-subcategory[data-tab="' + id + '"]');

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

// mobile menu
$('.dropDown-menu__links').click(function (e) {
    e.preventDefault();
    $(this).siblings('.menu-level2').css('left', '0');
});

$('.click-back').click(function () {
    $(this).parents('.menu-level2').css('left', '-100%');
});
// mobile menu

$('.btn-burger').click(function () {
    $(this).toggleClass('clicked');
    $('.overlay').fadeToggle();
    $('.mobile-menu').fadeToggle();
});



$('.btn-search-mobile').click(function () {
    $('.search-mobile').css({
        top: 0,
        opacity: 1
    });
});

$('.close-search-mobile').click(function () {
    $('.search-mobile').css({
        top: '100%',
        opacity: 0
    });
});

$('.btn-filter').click(function () {
    $('.overlay').fadeIn();
    $('.sidebar').fadeIn();
});

$('.sidebar-close').click(function () {
    $('.overlay').fadeOut();
    $('.sidebar').fadeOut();
});

$('.btn-close-banner').click(function () {
    $('.sale-line').fadeOut();
});

// accordeon
$('.panel_heading .block_title').click(function () {
    $(this).toggleClass('in').next().slideToggle();
    $('.panel_heading .block_title').not(this).removeClass('in');
});

$('.footer-box h3').click(function () {
    $(this).siblings('.footer-menu').slideToggle().parents('.footer-box').toggleClass('footer-open');
});

$(window).on('load resize', function() {
    if ($(window).width() < 670) {
       $('.footer-menu').fadeOut();
    } else {
        $('.footer-menu').fadeIn();
    }
});

$(".slider-range").slider({
    range: true,
    min: 0, // минимальное значение цены
    max: 3200, // максимальное значение цены
    step: 1, // шаг слайдера
    values: [15, 3200],  // начальные значения - позиции ползунков на шкале

    slide: function (event, ui) {
        $("input[name=price_s]").val(ui.values[0] + ' ' + '₽'); // выводим  значение от
        $("input[name=price_f]").val(ui.values[1] + ' ' + '₽'); // выводим  значение до
    },
    stop: function (event, ui) {
        show();
    } // выполняем действие  после остановки ползунка, в нашем случае функция show
});

$(".dec1").val($(".slider-range").slider("value") + ' ' + '₽');
$(".dec2").val($(".slider-range").slider("value") + ' ' + '₽');