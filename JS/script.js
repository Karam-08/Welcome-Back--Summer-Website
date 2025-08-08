$(document).ready(function(){

    // Variables
    var currentSlide = 0
    var $sliderContainer = $('.slides')  
    var $slides = $('.slide')
    var totalSlides = $slides.length

    function getSlideWidth(){
        return $('#slider').width(); // Returns slideshow width, no matter what size
    }

    function goToSlide(index){
        var width = getSlideWidth();
        $sliderContainer.stop().animate({'margin-left': -width * index}, 1000)
        currentSlide = index;
    }
    
    $('#next').on('click', function(){
        var nextSlide = (currentSlide + 1) % totalSlides; // Next slide
        goToSlide(nextSlide)
    })

    $('#prev').on('click', function(){
        var prevSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Previous slide
        goToSlide(prevSlide)
    })
    
    $(window).on('resize', function(){
        $sliderContainer.css('margin-left', 0);
        currentSlide = 1
    });
    goToSlide(0) // Goes to first slide on default
});