$( document ).ready(function() {

changeffect();



setTimeout(function () {
$('.head_desc').css('height', '360px');
$('.homeback').css('height', '30px');
}, 500);
setTimeout(function () {
$('.content').css('left', '0%');
}, 600);


$(window).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 320) {

$('.homeback').removeClass('trasparent');

  } else {

$('.homeback').addClass('trasparent');
 }
});


});


function changeffect() {

changertre.css('left', '-100%');


}
