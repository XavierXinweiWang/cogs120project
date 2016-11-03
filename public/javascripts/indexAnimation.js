/**
 * Created by XavierXinweiWang on 16/10/26.
 */

var selected = 0;


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

$('#to-saved-looks').click(function() {
  $('#filter').parent().parent().show();
  $('#filter').text("sort");
  $('#filter').parent().parent().find("ul").show();
});

$('#to-all-clothes').click(function() {
  $('#filter').parent().parent().show();
  $('#filter').text("filter_list");
  $('#filter').parent().parent().find("ul").hide();
});

$('#to-explore').click(function() {
  $('#filter').parent().parent().hide();
});

$('.card-image').click(function() {
    $(this).find('i').toggle();

    if($(this).find('i').attr("style") == "display: none;") {
      selected--;
    } else {
      selected++;
    }

    if (selected == 0) {
      $('#filter').text("filter_list");
    } else {
      $('#filter').text("done");
    }
});
