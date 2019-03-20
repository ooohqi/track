$(function(){
    $(".metisMenu li").click(function(){
    $(".metisMenu li").eq($("this").index()).addClass("active").siblings().removeClass("active");
  })
})

$(function(){
    $('.ocBtn').click(function(){
      $(this).next().toggle();
      $(this).eq($("this").index()).addClass("bgColor").siblings().removeClass("bgColor");
    });
});