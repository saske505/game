
function ran(min, max)
{
    return Math.floor(Math.random() * (max - min ++ )) + min;
}



function moveBlock()
{
    $(".block").each(function() {
        x = ran(19, 97);
        y = ran(9, 73);
        pos = $(this).position();
        nowX = pos.left + x;
        nowY = pos.top + y;
        $(this).delay(0)
            .animate({left: nowX, top:  nowY}, {duration:3400, easing: 'linear', complete:moveBlock});
    });
function moveBlockother()
{
    $(".block:odd").each(function() {
        x = ran(19, 97);
        y = ran(9, 73);
        pos = $(this).position();
        nowX = pos.left + x;
        nowY = pos.top + y;
        $(this).delay(0)
            .animate({top: x, right:  nowY + pos }, {duration:6000, easing: 'swing', complete:moveBlockother});
    });
}
$(document).mousemove(function(e){
		$(".boy img").animate({left:e.pageX, right:e.pageY}, {duration:700, easing: 'swing', complete:moveBlock});
});
}
function moveBack()
{
    $(document).ready(function() {
	$('.baby').animate({left: 6610, top: 0}, {duration:25400, easing: 'swing', complete:moveBack});
    });
}


moveBlock();


moveBlockother();


moveBack();














