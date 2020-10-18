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