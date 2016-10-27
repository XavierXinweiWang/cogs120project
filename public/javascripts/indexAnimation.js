$('button.more').click(function() {

    $(this).text("LESS");

});




$('.image.less').click(function() {
    $(".new").hide();
    $(".image.more").show();
    $(".image.less").hide();

});