function setActiveStyle(colorName){
    $('.alternate-style').attr("disabled", "true");
    $('.crimsonTag').removeClass("crimson");
    $('.blueTag').removeClass("blue");
    $('.indigoTag').removeClass("indigo");
    $('.aquaTag').removeClass("aqua");
    $('.blackTag').removeClass("black");
    $('.alternate').attr("disabled", "true");
    $('.alternate-style[title='+colorName+']').removeAttr("disabled");
    if (colorName == "crimson"){
        $('.crimsonTag').addClass("crimson");
    }else if (colorName == "blue"){
        $('.blueTag').addClass("blue");
    }else if (colorName == "indigo"){
        $('.indigoTag').addClass("indigo");
    }else if (colorName == "aqua"){
        $('.aquaTag').addClass("aqua");
    }else if (colorName == "black"){
        $('.blackTag').addClass("black");
    }
}
$('.move-up span').click(function (){
    $('html,body').animate({
        scrollTop: 0
    },800)
})
$(".toggle-style-switcher").click(function(){
    $(".style-switcher").toggleClass("open");
})