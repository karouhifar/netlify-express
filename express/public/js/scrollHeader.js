// --- sticky navigation menu header
$( document ).ready(function() {
    // let nav_offset_top = $('.headerMain').height() +60;
    //   function navbarFixed() {
    //        if ($('.headerMain').length) {
    //            $(window).scroll(function () {
    //                let scroll = $(window).scrollTop();
    //                if (scroll >= nav_offset_top) {
                
    //                    $('.headerMain').addClass('fixed-top');
    //                    $('.navbar-brand').children().addClass('img_small');
    //                } else {
    //                    $('.headerMain').removeClass('fixed-top');
    //                      $('.navbar-brand').children().removeClass('img_small');
    //                }
    //            })
    //        }
    //    }
   
    //    navbarFixed();



       let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop,
    isVisible = true;

        function show(){
        if(!isVisible){
            TweenLite.to(".headerMain", 1, { y: "0%" }, 0);
            isVisible = true;
        }
        }

        function hide(){
        if(isVisible){
            TweenLite.to(".headerMain", 1, { y: "-100%" }, 0);
            isVisible = false;
        }
        }

        window.addEventListener("scroll", () =>{

            var newScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (newScrollTop > currentScrollTop) {
                hide();
            } else if (newScrollTop < currentScrollTop) {
                show();
            }
            currentScrollTop = newScrollTop;

        });


// --- scrolling main
gsap.registerPlugin(ScrollTrigger);


var targets = [
    { scrollPosition :{ x: "#scrollPosition", y: ".gs_reveal"}},
    { scrollPosition :{ x: "#scrollPosition2", y: ".gs_reveal2"}},
    { scrollPosition :{ x: "#scrollPosition3", y: ".gs_reveal3"}}
];

targets.forEach(function(target, i){

let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: target.scrollPosition.x,
      start:"6% 85%", // Start Scroll event
      end:"bottom 25%", // End Scroll event
      // events : OnEnter  OnLeave  OnEnterBack  OnLeaveBack
      toggleActions: "restart none none reverse"
    }
  });

  // add animations and labels to the timeline
tl.from(target.scrollPosition.y, {y:100, opacity:0, ease:"back.out(1.7)", duration:1, stagger:0.5});
});
    });


  
      

 