jQuery(document).ready(function ($) {
    //open menu
    $(".hl_nav_burger").click(()=>{
        $(".hl_main_menu").toggle()
        $(".hl_header_nav").toggleClass('menu_opened')
    })
    //open projects
    $(".hl_nav_projects").click(()=>{
        $(".hl_header").addClass('transition')
        $(".hl_header").toggleClass('projects_opened')
        $(".hl_main_menu").addClass('transition')
        $(".hl_main_menu").toggleClass('projects_opened')
        window.scrollTo(0, 0);
    })
    $(document).scroll(function() {
        console.log($(document).scrollTop())
        if ($(document).scrollTop() >0) {
            $(".hl_header").removeClass('projects_opened')
            $(".hl_main_menu").removeClass('projects_opened')
        }
        if ($(document).scrollTop() >400) {
            $(".hl_header").removeClass('transition')
            $(".hl_main_menu").removeClass('transition')
        }
      });
})