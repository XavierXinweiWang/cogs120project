/**
 * Created by XavierXinweiWang on 16/10/26.
 */
$('#time').click(function()
{
    $("#toolbar").attr('class', 'mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark red');
    $("#filter").attr('class', 'large material-icons red');
});

$('#likes').click(function()
{
    $("#toolbar").attr('class', 'mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark lime');
    $("#filter").attr('class', 'large material-icons green');
});

$('#fakedata1a').click(function(){
    $('#fake1').attr('src','images/5039325824_6_1_1.jpg');
});

$('#fakedata1b').click(function(){
    $('#fake1').attr('src','images/hlw8n1ufuhk40yvuq0x0xltssuw3b2tg.jpg');
});

$('#fakedata2a').click(function(){
    $('#fake2').attr('src','images/2878289015_6_1_1.jpg');
});

$('#fakedata2b').click(function(){
    $('#fake2').attr('src','images/hlw8n1ufuhk40yvuq0x0xltssuw3b2tg.jpg');
});

$('#fakedata3a').click(function(){
    $('#fake3').attr('src','images/4644272507_6_1_1.jpg');
});

$('#fakedata3b').click(function(){
    $('#fake3').attr('src','images/coralfront-1000x1000.jpg');
});

$('#delete1').click(function () {
    $('#data1').remove();
});

$('#delete2').click(function () {
    $('#data2').remove();
});

$('#delete3').click(function () {
    $('#data3').remove();
});

$('#wear1').click(function () {
    $('#lastwear1').text(' Today');
});

$('#wear2').click(function () {
    $('#lastwear2').text(' Today');
});

$('#wear3').click(function () {
    $('#lastwear3').text(' Today');
});

