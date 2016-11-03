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

$('.fakeitem2').click(function(){
    $(this).parentsUntil("#data1").parent().find("#fake1").attr('src', $(this).attr("src"));
});

$('.delete').click(function () {
    $(this).parentsUntil("#data1").parent().parent().remove();
});

$('.wear').click(function () {
    $(this).parentsUntil("#data1").parent().find('#lastwear1').text(' Today');
});

$('.card-image').click(function() {
    $(this).find('i').toggle();
});
