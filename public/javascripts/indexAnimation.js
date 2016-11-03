/**
 * Created by XavierXinweiWang on 16/10/26.
 */

var selected = 0;

var new_look = {
    "title": "",
    "date": "Today",
    "like": "0",
    "imageURL1": "",
    "imageURL2": ""
};

var selected_clothes = [];

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
    $(this).parentsUntil("#collection").remove();
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



$('#closet').find('.card-image').click(function() {
    $(this).find('i').toggle();

    if($(this).find('i').attr("style") == "display: none;") {
        for (var i = 0; i < selected_clothes.length; i++) {
            if (selected_clothes[i].title == $(this).find('p').text()) {
                selected_clothes.splice(i, 1);
            }
        }
        selected--;
    } else {
        selected_clothes.push(
            {"title" : $(this).find('p').text(), "imageURL" : $(this).find('img').attr("src")}
        );
        selected++;
    }

    if (selected == 0) {
        $('#filter').text("filter_list");
    } else {
        $('#filter').text("done");
    }
});

/* Start to Copy */

$('#filter').click(function() {
    if($('#filter').text() == "done") {
        $('#to-saved-looks').addClass("is-active");
        $('#history').addClass("is-active");
        $('#to-all-clothes').removeClass("is-active");
        $('#closet').removeClass("is-active");

        $(".check-icon").hide();


    }
});

$('#filter').click(function() {
    if($(this).text() == "done") {
        var title = "";
        for (var i = 0; i < selected_clothes.length; i++) {
            title = title.concat(selected_clothes[i].title);
            if(i < selected_clothes.length - 1) {
                title = title.concat(", ");
            }
        }
        new_look.title = title;

        new_look.imageURL1 = selected_clothes[0].imageURL;
        new_look.imageURL2 = selected_clothes[1].imageURL;

        $("#collection").prepend(
            "<li id='data1'><div class='collapsible-header'><section class='section--center mdl-grid mdl-grid--no-spacing'><div class='mdl-card mdl-cell--12-col'><div class='mdl-card mdl-cell mdl-cell--12-col' id='form'><form class='col s12'><div class='row'><div class='input-field col l6 m6 s6'><img src='" + new_look.imageURL1 + "' class='fakeitem1' id='fake1'></div><div class='input-field col l6 m6 s6'><p>" + new_look.title + "</p><p id='lastwear1'><i class='material-icons'>access_time</i>" + new_look.date + "</p><p id='like1'><i class='material-icons'>favorite</i>" + new_look.like + "likes</p></div></div></form></div></div></section></div><div class='collapsible-body'><section class='section--center mdl-grid mdl-grid--no-spacing'><div class='mdl-card mdl-cell--12-col'><div class='mdl-card mdl-cell mdl-cell--12-col'><form class='col s12'><div class='row'><div class='input-field col l3 m3 s3'></div><div class='input-field col l3 m3 s3' id = 'fakedata1a'><img src='" + new_look.imageURL1 + "' class='fakeitem2'></div><div class='input-field col l3 m3 s3' id = 'fakedata1b'><img src='" + new_look.imageURL2 + "' class='fakeitem2'></div><div class='input-field col l6 m6 s6'><a class='mdl-button mdl-js-button mdl-button--accent delete' style='width: 100%' id='delete1'>DELETE</a></div><div class='input-field col l6 m6 s6'><a class='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent wear' style='width: 100%' id='wear1'>WEAR</a></div></div></form></div></div></section></div></li>"
        );

        $("#collection").on('click', "this", function () {
            console.log("here");
            $(this).parentsUntil("#collection").remove();
        });

        new_look = {
            "title": "",
            "date": "Today",
            "like": "0",
            "imageURL1": "",
            "imageURL2": ""
        };

        selected_clothes = [];
        selected = 0;

        $('#filter').text("sort");
        $('#filter').parent().parent().find("ul").show();
    }
});


$(".before-like").click(function() {
    $(".after-like").show();
});

$(".after-like").click(function() {
    $(".after-like").hide();
});