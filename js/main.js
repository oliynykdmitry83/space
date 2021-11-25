$(function(){
    $('.slider__box').slick({
        prevArrow: '<img class="slider__arrow slider__arrowleft" src="images/arrowleft.svg" alt="arrowleft" >',
        nextArrow: '<img class="slider__arrow slider__arrowright" src="images/arrowright.svg" alt="arrowright" >',
        responsive: [
            {
              breakpoint: 481,
              settings: {
                arrows: false
              }
            }
          ]
    });

    $('.menu-btn').on('click', function(){
        $('.menu__list').toggleClass('active');
    });

});
