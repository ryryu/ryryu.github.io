$(function(){
    
    $('html,body').animate({ scrollTop: 0 }, '1');
    
    var fadeIn = function(FI){
        FI
            .css("opacity","1")
            .css("transform","translateY(0)");
    }
    
    var fadeInT = function(FIT){
        FIT
            .css("opacity","1")
            .css("transform","translate(-50%,0)");
    }
    
    var fadeOut = function(FO){
        FO
            .css("opacity","0")
            .css("transform","translateY(-50px)");
    }
    
    var fadeOutT = function(FOT){
        FOT
            .css("opacity","0")
            .css("transform","translate(-50%, -50px)");
    }
    
    $(window).load(function(){
        fadeIn($("nav"));
        fadeIn($("#subtitle"));
        setTimeout(function(){
            fadeIn($("#title"))},400);
        setTimeout(function(){
            fadeIn($(".arrow1"))},800);
    })
    
    
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $("nav").addClass("nav_sc");
            $(".logo").addClass("logo_sc");
            $(".logo_a").addClass("logo_a_sc");
            $(".menu").addClass("menu_sc");
            $(".bar").addClass("bar_sc");
        }else{
            $("nav").removeClass("nav_sc");
            $(".logo").removeClass("logo_sc");
            $(".logo_a").removeClass("logo_a_sc");
            $(".menu").removeClass("menu_sc");
            $(".bar").removeClass("bar_sc");
        }
        //要素をフェードインさせる関数
        
        var perOBJ = function(fadeInOBJ){
	       var top = fadeInOBJ.offset().top;
            var position = top - $(window).height();
            if($(window).scrollTop() > position + 300){
                fadeIn(fadeInOBJ);
            }else{
                fadeOut(fadeInOBJ);
                }
        };
        
        var perOBJSp = function(fadeInOBJSp){
	       var top = fadeInOBJSp.offset().top;
            var position = top - $(window).height();
            if($(window).scrollTop() > position + 100){
                fadeInT(fadeInOBJSp);
            }else{
                fadeOutT(fadeInOBJSp);
                }
        };
        
        perOBJ($(".about_img"));
        perOBJ($(".profile_p_wrapper"));
        perOBJ($("#works1"));
        perOBJ($("#works2"));
        
        perOBJSp($("#skill_icon_wrapper"));
        perOBJSp($("#skill_p"));
            
    });
    
    $("#mobile_menu_btn").click(function(){
        $(".nav_main").stop().animate({
                right: 0
            },400);
        $(" #menu_slide_overlay").fadeIn();
    });
    
    $(" #menu_slide_overlay").click(function(){
        $(".nav_main").stop().animate({
                right: -300
            },400);
        $(" #menu_slide_overlay").fadeOut();
    })
    
    $(".logo_a").click(function(){
        $("body,html").stop().animate({
            scrollTop: $("header").offset().top
        },1000,"easeInOutExpo");
        return false;
    });
    
    $("#nav_top").click(function(){
        $("body,html").stop().animate({
           scrollTop: 0
       },1000,"easeInOutExpo");
        return false;
    })
    
    $("#nav_about,.arrow1").click(function(){
       $("body,html").stop().animate({
           scrollTop: $("#about").offset().top
       },1000,"easeInOutExpo");
        return false;
    });
    
    $("#nav_works").click(function(){
        $("body,html").stop().animate({
            scrollTop: $("#works").offset().top
        },1000,"easeInOutExpo");
        return false;
    });
    
    $("#nav_contact").click(function(){
        $("body,html").stop().animate({
            scrollTop: $("#contact").offset().top
        },1000,"easeInOutExpo");
        return false;
    });
    
    $(".md_img").on({
        "mouseenter": function(){
            $(this).children(".works_hover").fadeIn();
        },
        "mouseleave": function(){
            $(this).children(".works_hover").fadeOut();
        }
    });
    
    $(".md_img").on("click", function(){
        var target = $(this).data("modal-link");
        var modal = document.querySelector("." + target);
        $(modal).fadeIn();
        return false;
    });
    
    $(".js_modal_close").click(function(){
        $(".js_modal").fadeOut();
    });
    
});
