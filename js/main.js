$(function () {
    //impo button(메인 영상)
    $('button:nth-of-type(1)').click(function () {
        $(".impo_craft").show();
        $(".impo_battle").hide();
        $(".impo_survive").hide();
    });

    $('button:nth-of-type(2)').click(function () {
        $(".impo_craft").hide();
        $(".impo_battle").show();
        $(".impo_survive").hide();
    });

    $('button:nth-of-type(3)').click(function () {
        $(".impo_craft").hide();
        $(".impo_battle").hide();
        $(".impo_survive").show();
    });


    //impo button(텍스트)
    $('button:nth-of-type(1)').click(function () {
        $(".craft_text").show();
        $(".battle_text").hide();
        $(".survive_text").hide();
    });

    $('button:nth-of-type(2)').click(function () {
        $(".craft_text").hide();
        $(".battle_text").show();
        $(".survive_text").hide();
    });

    $('button:nth-of-type(3)').click(function () {
        $(".craft_text").hide();
        $(".battle_text").hide();
        $(".survive_text").show();
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
