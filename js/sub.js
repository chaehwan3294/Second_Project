$(function () {
    let hei = $(".character").outerHeight(true);
    let wid = $(".character").outerWidth(true);
    let page = 0;

$(window).resize(function(){
    hei=$(".character").outerHeight(true);
    wid=$(".character").outerWidth(true);
})

function prev () {
    $('.character:last').prependTo('.character_list');
    $('.character_list').css('margin-top', -hei);
    $('.character_list').stop().animate({ marginTop: 0 }, 300);
    page--;

    if(page<0){
        page=$(".img").length-1;
        $(".img").eq(0).hide();
        $(".img").eq(page).fadeIn().css("display","flex");
        $(".Character_skill").eq(0).hide();
        $(".Character_skill").eq(page).fadeIn().css("display","flex");
        $(".Character_skin").eq(0).hide();
        $(".Character_skin").eq(page).fadeIn().css("display","flex");
    }else {
        $(".img").eq(page+1).hide();
        $(".img").eq(page).fadeIn().css("display","flex");
        $(".Character_skill").eq(page+1).hide();
        $(".Character_skill").eq(page).fadeIn().css("display","flex");
        $(".Character_skin").eq(page+1).hide();
        $(".Character_skin").eq(page).fadeIn().css("display","flex");
    }
};

function next () { 
    if ($(this).is(':animated') == false) {
        $('.character_list').stop().animate({ marginTop: -hei }, 300, function () {
        $('.character:first').appendTo('.character_list');
        $('.character_list').css({ marginTop: 0 });
        page++;
    
        if(page>=$(".img").length){
            page=0;
        }
        $(".img").eq(page-1).hide();
        $(".img").eq(page).fadeIn().css("display","flex"); 
        $(".Character_skill").eq(page-1).hide();
        $(".Character_skill").eq(page).fadeIn().css("display","flex"); 
        $(".Character_skin").eq(page-1).hide();
        $(".Character_skin").eq(page).fadeIn().css("display","flex"); 
    });
    }               
};

function prev1 () {
    $('.character:last').prependTo('.character_list');
    $('.character_list').css('margin-left', -wid);
    $('.character_list').stop().animate({ marginLeft: 0 }, 300);
    page--;

    if(page<0){
        page=$(".img").length-1;
        $(".img").eq(0).hide();
        $(".img").eq(page).fadeIn().css("display","flex");
        $(".Character_skill").eq(0).hide();
        $(".Character_skill").eq(page).fadeIn().css("display","flex");
        $(".Character_skin").eq(0).hide();
        $(".Character_skin").eq(page).fadeIn().css("display","flex");
    }else {
        $(".img").eq(page+1).hide();
        $(".img").eq(page).fadeIn().css("display","flex");
        $(".Character_skill").eq(page+1).hide();
        $(".Character_skill").eq(page).fadeIn().css("display","flex");
        $(".Character_skin").eq(page+1).hide();
        $(".Character_skin").eq(page).fadeIn().css("display","flex");
    }
};

function next1 () { 
    if ($(this).is(':animated') == false) {
        $('.character_list').stop().animate({ marginLeft: -wid }, 300, function () {
        $('.character:first').appendTo('.character_list');
        $('.character_list').css({ marginLeft: 0 });
        page++;
    
        if(page>=$(".img").length){
            page=0;
        }
        $(".img").eq(page-1).hide();
        $(".img").eq(page).fadeIn().css("display","flex"); 
        $(".Character_skill").eq(page-1).hide();
        $(".Character_skill").eq(page).fadeIn().css("display","flex"); 
        $(".Character_skin").eq(page-1).hide();
        $(".Character_skin").eq(page).fadeIn().css("display","flex"); 
    });
    }               
};


$('.prev').click(function () {
    prev();
});

$('.next').click(function () {
    next();
});

$('.prev1').click(function () {
    prev1();
});

$('.next1').click(function () {
    next1();
});

$(".b1").click(function(){
    $(".text_Q").show();
    $(".text_Q").siblings().hide();
    $(".skill_Q").show();
    $(".skill_Q").siblings().hide();
});

$(".b2").click(function(){
    $(".text_W").show();
    $(".text_W").siblings().hide();
    $(".skill_W").show();
    $(".skill_W").siblings().hide();
});

$(".b3").click(function(){
    $(".text_E").show();
    $(".text_E").siblings().hide();
    $(".skill_E").show();
    $(".skill_E").siblings().hide();
});

$(".b4").click(function(){
    $(".text_R").show();
    $(".text_R").siblings().hide();
    $(".skill_R").show();
    $(".skill_R").siblings().hide();
});

$(".b5").click(function(){
    $(".text_P").show();
    $(".text_P").siblings().hide();
    $(".skill_P").show();
    $(".skill_P").siblings().hide();
});

//작은 화면 메뉴바
$('.menu-trigger').click(function () {
    $(this).toggleClass('active');
    $('.menubar').slideToggle();
});

//작은 화면 서브 메뉴바
$('.main_menu>li').click(function () {
    $('.sub').stop().slideUp();
    $(this).find('.sub').stop().slideToggle();
});
});