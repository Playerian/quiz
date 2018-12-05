/* global $ */

$("button").click(function() {
    var name = $("#name").val();
    var q1Result = result1($("#question1").val());
    var q2Result = result2($("#question2").val());
    var q3Result = result3($("#question3").val());
    var q4Result = result4($("#question4").val());
    var q5Result = result5($("#question5").val());
    var q6Result = result6($("#question6").val());
    var q7Result = result7($("#question7").val());
    var q8Result = result8($("#question8").val());
    var q9Result = result9($("#question9").val());
    var q10Result = result10($("#question10").val());
    var totalScore = [q1Result, q2Result, q3Result, q4Result, q5Result,q6Result, q7Result, q8Result, q9Result, q10Result];
    totalScore = totalScore.reduce((a, b) => a + b, 0);
    console.log(totalScore);
    //separate
    let $title = $("<p>").text("Your Result is: ");
    $title.addClass('Rtitle');
    let $result = $("#result");
    let $image = $("<img>").addClass('Rimage');
    let $text = $('<div>')
    $text.addClass('Rtext');
    if (totalScore > 32){
        $text.text("You are superman! You have a loving heart and strong feeling towards people! Hope you have a good future!");
        $image.attr("src", 'https://www.sideshowtoy.com/assets/products/903305-super-powers-superman/lg/dc-comics-superman-maquette-tweeterhead-903305-07.jpg');
    }else if (totalScore > 24){
        $text.text("You are flash! You have a gender feeling towards people and you have a kind heart!");
        $image.attr("src", 'https://www.sideshowtoy.com/wp-content/uploads/2017/11/dc-comics-justice-league-the-flash-sixth-scale-hot-toys-feature-903122.jpg');
    }else if (totalScore > 16){
        $text.text("You are green lantern! You're meant to defend the universe with your power!");
        $image.attr("src", 'https://www.dccomics.com/sites/default/files/HJFLC_Cv1_R3_gallery_57fc3635f2c6a2.45566872.jpg');
    }else if (totalScore > 8){
        $text.text("You are batman! You show your own justice at your own way!");
        $image.attr("src", 'https://www.sideshowtoy.com/wp-content/uploads/2018/08/dc-comics-batman-statue-sideshow-prime1-studio-feature-2005181-2.jpg');
    }else if (totalScore > 0){
        $text.text("You are joker! No more information is given.");
        $image.attr("src", 'https://www.sideshowtoy.com/wp-content/uploads/2017/07/dc-comics-the-dark-knight-the-joker-quarter-scale-hot-toys-feature-903126-1.jpg');
    }else{
        $text.text("Sir, the (DC?) universe can not contain any person that doesn't even bother to put in anything. Or you are just really lucky?");
        $image.attr("src", 'https://i.ebayimg.com/images/g/fFsAAOSwroZas79w/s-l300.jpg');
    }
    $result.html("");
    $result.append($title);
    $result.append($image);
    $text.text(name + ", "+$text.text());
    $result.append($text);
});

//limit to 5
$('#question8').keypress(function(event){
    if ($(this).val().length > 4){
        return false;
    }
});

$('#question8').on('paste', function(event){
    let before = $(this).val();
    setTimeout(function(){
        let after = $('#question8').val();
        if (after.length > 4){
            $('#question8').val(before);
        }
    },1);
})

function result1(input){
    return parseInt(input);
}

function result2(input){
    return parseInt(input);
}

function result3(input){
    return input.length % 6;
}

function result4(input){
    let value = 0;
    if (input.length > 0){
        input.split("");
        for (let i = 0; i < input.length; i ++){
            value += input[i].charCodeAt() % 13;
        }
    }
    return value % 6;
}

function result5(input){
    let value = 0;
    if (input.length > 0){
        input.split("");
        for (let i = 0; i < input.length; i ++){
            value += input[i].charCodeAt() % 8;
        }
    }
    return value % 6;
}

function result6(input){
    if (input.length === 0){
        return 0;
    }
    input = input.split("");
    input = input[input.length - 1].charCodeAt();
    return input % 6;
}

function result7(input){
    return parseInt(input);
}

function result8(input){
    let value = 0;
    if (input.length > 0){
        input.split("");
        for (let i = 0; i < input.length; i ++){
            if (input[i].charCodeAt % 2 === 0){
                value += input[i].charCodeAt() % 11;
            }
        }
    }
    return value % 6;
}

function result9(input){
    let value = 0;
    let reg = /(?!\w)\s(?=\w)/g;
    let store = 0;
    if (input.length > 0){
        let r1 = input.match(reg);
        if (r1 !== null){
            store = r1.length;
        }
        input.split("");
        if (input.length > 5)
        for (let i = 0; i < input.length; i ++){
            value += input[i].charCodeAt() % 17;
        }
    }
    return value % 6;
}

function result10(input){
    return input * 5;
}