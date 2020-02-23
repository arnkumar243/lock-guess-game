$(document).ready(function() {

    $('#container').css({
        "width": "400px",
        "backgroundColor": "gray"
    });

    $('#header').css({
        "paddingTop": "1px",
        "paddingBottom": "1px"
    });

    $('#body').css({
        "paddingBottom": "1px",
        "display": "inline-block"
    });

    $('.lock').css({
        "height": "60px",
        "width": "60px",
        "fontSize": "3.5em",
        "color": "white",
        "backgroundColor": "black"
    });

    $('.btn').css({
        "height": "40px",
        "width": "220px",
        "marginLeft": "90px",
        "textAlign": "center",
        "fontSize": '1.5em',
        "color": "white",
        "backgroundColor": "#333"
    });

    $('.btn').on('mouseover', function() {
        $(this).css("backgroundColor", "black");
    });

    $('.btn').on('mouseleave', function() {
        $(this).css("backgroundColor", "#333");
    });


    $("#body").hide();

    var randomNumber;

    $("#start").on("click", function() {

        randomNumber = Math.floor((Math.random() * (999 - 100)) + 100);

        $("#start").hide();
        $("#body").show();
        $("input[type='number']").val('5');

    });

    $('#openLock').on('click', function() {
        var number = randomNumber.toString().split("");
        var showStart = true;
        for(var i = 0; i < $("input[type='number']").length; i++) {
            $("input[type='number']").eq(i).css("backgroundColor", getColor(number[i], $("input[type='number']").eq(i).val()));
            if($("input[type='number']").eq(i).val() != parseInt(number[i])) {
                showStart = false;
            }
        }

        if(showStart) {
            $("#start").show();
        }
    });

    var getColor = function(number, userInput) {
        if(number < userInput) {
            return "blue";
        } else if(number > userInput) {
            return "red";
        } else {
            return "green";
        }
    }

});