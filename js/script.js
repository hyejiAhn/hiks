$(".sub").hide();

$(".menu>li").mouseover(function(){
    $(this).children(".sub").stop().fadeIn()
})
$(".menu>li").mouseout(function(){
    $(this).children(".sub").stop().fadeOut()
})