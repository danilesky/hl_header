document.addEventListener("DOMContentLoaded", function(event){
    if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual'
    }
    gsap.registerPlugin(ScrollTrigger)

    gsap.to('.hl_whitespace_hor_bottom',{
        y : 140,
        scrollTrigger : {
            trigger : '.hl_header',
            scrub : true,
            pin : true,
            toggleActions: 'restart none none none',
        }
    })
    gsap.to('.hl_whitespace_hor_top',{
        y : -140,
        scrollTrigger : {
            trigger : '.hl_header',
            scrub : true,
            pin : true,
            toggleActions: 'restart none none none',
        }
    })

    gsap.to('.hl_whitespace_ver_left',{
        xPercent : -100,
        scrollTrigger : {
            trigger : '.hl_header',
            scrub : true,
            pin : true,
            toggleActions: 'restart none none none',
        }
    })
    gsap.to('.hl_whitespace_ver_right',{
        xPercent : 100,
        scrollTrigger : {
            trigger : '.hl_header',
            scrub : true,
            pin : true,
            toggleActions: 'restart none none none',
        }
    })
    gsap.to('.hl_nav_logo',{
        fill : 'white',
        scrollTrigger : {
            trigger : '.hl_header',
            scrub : true,
            pin : true,
            toggleActions: 'restart none none none',
        }
    })
    gsap.to('.nav_filtered',{
        color : 'white',
        scrollTrigger : {
            trigger : '.hl_header',
            scrub : true,
            pin : true,
            toggleActions: 'restart none none none',
        }
    })
    gsap.to('.burger',{
        backgroundColor : 'white',
        scrollTrigger : {
            trigger : '.hl_header',
            scrub : true,
            pin : true,
            toggleActions: 'restart none none none',
        }
    })
    gsap.to('.icon',{
        stroke : 'white',
        scrollTrigger : {
            trigger : '.hl_header',
            scrub : true,
            pin : true,
            toggleActions: 'restart none none none',
        }
    })
    gsap.to('.hl_header_button',{
        borderColor : 'white',
        scrollTrigger : {
            trigger : '.hl_header',
            scrub : true,
            pin : true,
            toggleActions: 'restart none none none',
        }
    })
})