$( document ).ready(function() {
changeffect();
});


var changeruno = $('#changeuno');
var changerdue = $('#changedue');
var changertre = $('#changetre');


function changeffectselect() {
setTimeout(function () {

changeruno.css('left', '0%');

}, 200);


setTimeout(function () {

changerdue.css('left', '0%');

}, 500);


setTimeout(function () {

changertre.css('left', '0%');
}, 700);

}






function changeffect() {

setTimeout(function () {

changeruno.css('left', '-100%');

}, 700);


setTimeout(function () {

changerdue.css('left', '-100%');

}, 500);


setTimeout(function () {

changertre.css('left', '-100%');
}, 200);

}








$('#italiano').click(function() {

changeffectselect();
setTimeout(function () {
window.location.replace('italiano.html');
}, 1800);
});

$('#storia').click(function() {

changeffectselect();
setTimeout(function () {
window.location.replace('storia.html');
}, 1800);
});
$('#matematica').click(function() {

changeffectselect();
setTimeout(function () {
window.location.replace('matematica.html');
}, 1800);
});
$('#tps').click(function() {

changeffectselect();
setTimeout(function () {
window.location.replace('tps.html');
}, 1800);
});
$('#informatica').click(function() {

changeffectselect();
setTimeout(function () {
window.location.replace('informatica.html');
}, 1800);
});
$('#gestione').click(function() {

changeffectselect();
setTimeout(function () {
window.location.replace('gestione.html');
}, 1800);
});
$('#sistemi').click(function() {

changeffectselect();
setTimeout(function () {
window.location.replace('sistemi.html');
}, 1800);
});
$('#english').click(function() {

changeffectselect();
setTimeout(function () {
window.location.replace('english.html');
}, 1800);
});