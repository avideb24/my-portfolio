$(document).ready(function(){

    /********Scroll********/
    AOS.init();


    /***********language skill***********/
    $('.lan-skill').easyPieChart({
        barColor: '#fec104',
        trackColor: '#191923',
        scaleColor: false,
        animate: 1500,
        lineWidth: '8'
    })

    /***********work skill***********/
    $('#bar1').barfiller({
        barColor: '#fec104',
        duration: 1500,
    });
    $('#bar2').barfiller({
        barColor: '#fec104',
        duration: 1500,
    });
    $('#bar3').barfiller({
        barColor: '#fec104',
        duration: 1500,
    });

    /**********Auto Type*********/
    var typed = new Typed('.auto-type', {
        strings: ['<i class="fa-solid fa-less-than"></i><b>code</b><i class="fa-solid fa-greater-than"></i> I build websites. <i class="fa-solid fa-less-than"></i> /<b>code</b><i class="fa-solid fa-greater-than"></i>'],
        loop: true,
        typeSpeed: 100,
        backSpeed: 20,
    });

    /***********Client***********/
    $('.client-content').owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        loop:true,
        responsive: {
            0:{
                items: 1
            },
            575:{
                items: 2
            },
            990:{
                items: 3
            }
        }
    });

    /***********Load More**********/
    $('.portfolio-project').slice(0, 4).fadeIn();
    $('.load-btn').click(function(){
        
        
    })



     /***********Get Me***********/
    $('.wave a').click(function(){
        $('.get-me p').toggleClass('show')
    });

    /********Mobile Button********/
    $('.nav-bar').click(function(){
        $('.left-section').toggleClass('section-show');
        $('.nav-bar').toggleClass('slide-btn');
        $('.nav-bar .bar1').toggleClass('open-bar');        
        $('.nav-bar .bar2').toggleClass('open-bar');        
        $('.nav-bar .bar3').toggleClass('open-bar');        
    });




})



