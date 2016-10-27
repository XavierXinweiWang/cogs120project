/**
 * Created by XavierXinweiWang on 16/10/1.
 */
$('#tight').click(function()
{
    $('#header').css("background-image", "url(images/tight.jpg)");
    $('#header').css("background-position-y", "-12vw");
    $("#toolbar").attr('class', 'mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark red');
    $("#query").attr('class', 'large material-icons red');
    $("#help").attr('class', 'mdl-cell--3-col btn-large red');
    color_mode = 0;
});

$('#slacky').click(function()
{
    $('#header').css("background-image", "url(images/lazycover.jpg)");
    $('#header').css("background-position-y", "-27vw");
    $("#toolbar").attr('class', 'mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark lime lighten-2');
    $("#query").attr('class', 'large material-icons green');
    $("#help").attr('class', 'mdl-cell--3-col btn-large lime lighten-2');
    color_mode = 2;
});

$('#mediocre').click(function()
{
    $('#header').css("background-image", "url(images/cover.jpg)");
    $('#header').css("background-position-y", "-25vw");
    $("#toolbar").attr('class', 'mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark orange accent-2');
    $("#query").attr('class', 'large material-icons yellow darken-1');
    $("#help").attr('class', 'mdl-cell--3-col btn-large orange accent-2');
    color_mode = 1;
});

