document.addEventListener("DOMContentLoaded", function() {




    // var split = new SplitType(".main-head span", { type: "lines" });
    // var tl = gsap.timeline();
    // tl.from(split.lines, { opacity: 0, y: 30, duration: 0.3, ease: "back", stagger: 0.25 })
    //     .from(".hero-ul", { opacity: 0, y: 40, ease: "back" }, "-=1")

    

    var split = new SplitType(".main-head span", { type: "lines" });
    var tl = gsap.timeline();
    tl.from(split.lines, { opacity: 0, y: 40, duration: 0.3, ease: "back", stagger: 0.25 })
        .from(".ring", { opacity: 0, y: 30, ease: "back", delay: 0.4 }, "-=1")
        .from(".sub-head", { opacity: 0, y: 40, ease: "back", delay: 1 }, "-=1")

        .from(".btn-container", { opacity: 0, y: -40, ease: "back", delay: .7 }, "-=1")
        .from(".logo, .header-left, .header-right", { opacity: 0, y: -40, ease: "back", delay: .7 }, "-=1")
        .from(".overview", { opacity: 0, y: 30, ease: "back", delay: 0.4 }, "-=1")
       


        
        
        gsap.registerPlugin(ScrollTrigger);

        const textElements = gsap.utils.toArray('.text');
        
        textElements.forEach(text => {
          gsap.to(text, {
            backgroundSize: '100%',
            ease: 'none',
            scrollTrigger: {
              trigger: text,
              start: 'top 100%',
              end: 'bottom 40%',
              scrub: true,
            },
          });
        });
        
        const spanElements = gsap.utils.toArray('.text span');
        
        spanElements.forEach(span => {
          gsap.to(span, {
            backgroundSize: '100%',
            ease: 'none',
            scrollTrigger: {
              trigger: span,
              start: 'top 70%',
              end: 'bottom 30%',
              scrub: true,
            },
          });
        });
        
        




// Animation for elements with class '.sub-text'
if (window.innerWidth > 1024) {
const top_action1 = document.querySelectorAll('.sub-text');

top_action1.forEach((element, i) => {
    gsap.fromTo(element,
        {
            y: i % 2 === 0 ? 300 : -300,
        },
        {
            duration: 0.5,
            y: 0,
            scrollTrigger: {
                trigger: element,
                start: 'top 90%',
                end: 'top 60%',
                scrub: true,
                markers: false,
                toggleActions: 'play play reverse reverse'
            }
        });
});
}
// Animation for elements with class '.sub-text2'
if (window.innerWidth > 1024) {
const top_action2 = document.querySelectorAll('.sub-text2');

top_action2.forEach((element, i) => {
    gsap.fromTo(element,
        {
            y: i % 2 === 0 ? 300 : -300,
        },
        {
            duration: 0.5,
            y: 0,
            scrollTrigger: {
                trigger: element,
                start: 'top 90%',
                end: 'top 60%',
                scrub: true,
                markers: false,
                toggleActions: 'play play reverse reverse'
            }
        });
});

}



const card_up = document.querySelectorAll('.card-up');

card_up.forEach((element, i) => {
    gsap.fromTo(element,
        {
            y: i % 2 === 0 ? 100 : -100,
        },
        {
            duration: 0.5,
            y: 0,
            scrollTrigger: {
                trigger: element,
                start: 'top 60%',
                        end: 'bottom 90%',
                scrub: true,
                markers: false,
                toggleActions: 'play play reverse reverse'
            }
        });
});

const card_up2 = document.querySelectorAll('.card-up2');

card_up2.forEach((element, i) => {
    gsap.fromTo(element,
        {
            y: i % 2 === 0 ? 100 : -100,
        },
        {
            duration: 0.5,
            y: 0,
            scrollTrigger: {
                trigger: element,
                start: 'top 60%',
                        end: 'bottom 90%',
                scrub: true,
                markers: false,
                toggleActions: 'play play reverse reverse'
            }
        });
});

const botto_up = document.querySelectorAll('.bottom-top');

        botto_up.forEach((element, i) => {
            const screenWidth = window.innerWidth;

            gsap.fromTo(
                element,
                {
              
                    translateY: screenWidth <= 1024 ? 0 : 80, // Adjust translateX based on screen width

                },
                {
                    duration: 0.3,
                    y: 0,
          
                    translateY: 0, // Set translateX to 0 as the final value

                
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 60%',
                        end: 'bottom 90%',
                        scrub: true,
                        markers: false,
                        toggleActions: 'play play reverse reverse'
                    }
                }
            );
        });

        
     

        const left_rotate_card = document.querySelectorAll('.left-right-rotate');

        left_rotate_card.forEach((element, i) => {
            const screenWidth = window.innerWidth;
        
            gsap.fromTo(
                element,
                {
                    rotation: -15,
                    translateX: screenWidth > 1024 ? -100 : 0,
                    translateY: 25,
                    scale: screenWidth > 1024 ? 1.1 : 1
                  },
                  {
                    duration: 0.3,
                    y: 0,
                    rotation: 0,
                    translateX: 0,
                    translateY: 0,
                    scale: 1,
                    scrollTrigger: {
                      trigger: element,
                      start: 'top 50%',
                      end: 'bottom 90%',
                      scrub: true,
                      markers: false,
                      toggleActions: 'play play reverse reverse'
                    }
                }
            );
        });


        const right_rotate_card = document.querySelectorAll('.right-left-rotate');

        right_rotate_card.forEach((element, i) => {
            const screenWidth = window.innerWidth;

            gsap.fromTo(
                element,
                {
                    rotation: 15,
                    translateX: screenWidth > 1024 ? 100 : 0,
                    translateY: 25,
                    scale: screenWidth > 1024 ? 1.1 : 1
                  },
                  {
                    duration: 0.3,
                    y: 0,
                    rotation: 0,
                    translateX: 0,
                    translateY: 0,
                    scale: 1,
                    scrollTrigger: {
                      trigger: element,
                      start: 'top 60%',
                      end: 'bottom 90%',
                      scrub: true,
                      markers: false,
                      toggleActions: 'play play reverse reverse'
                    }
                }
            );
        });






        


});