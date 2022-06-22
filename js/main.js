

const responsive={
    0:{
        items:1
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }
}


$(document).ready(function(){

    $nav=$('.nav');
    $togglecollapse=$('.toggle-collapse');

    $togglecollapse.click(function() {
        $nav.toggleClass('collapse'); 
    })


    //owlcarousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        responsive:responsive
        
    });

    //click
    $('.move-up span').click(function() {
        $('html,body').animate({
            scrollTop:0
        },1000);
    })

});
var scroll = new SmoothScroll('a[href*="#"]');