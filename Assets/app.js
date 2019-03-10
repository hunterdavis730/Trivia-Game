var correctAnswer = 0;
var incorrectAnswer = 0;
var questionTimer = 15;

var intervalId;

var gameOver = false;

var intervalNext;

var intervalEnd;

var currentQuestion = 0;

var currentAnswer = '';

var getQuestion = function () {
    currentQuestion++;
    if (currentQuestion > 6) {
        return gameOver = true;
    } else if (currentQuestion === 1) {
        gameOver = false;
        currentAnswer = 'Donavan Mitchell';
        $('#question-one').removeClass('d-none')


    } else if (currentQuestion === 2) {
        gameOver = false;
        currentAnswer = 'John Stockton';
        $('#question-two').removeClass('d-none')


    } else if (currentQuestion === 3) {
        gameOver = false;
        currentAnswer = '114-127';
        $('#question-three').removeClass('d-none')

    } else if (currentQuestion === 4) {
        gameOver = false;
        currentAnswer = 'Randy Foye';
        $('#question-four').removeClass('d-none')

    } else if (currentQuestion === 5) {
        gameOver = false;
        currentAnswer = 'Pete Marovich';
        $('#question-five').removeClass('d-none')
    } else if (currentQuestion === 6) {
        gameOver = true;
        currentAnswer = 'Kobe Bryant';
        $('#question-six').removeClass('d-none')

    }

};



// var showQuestion = function () {
//     $('#question-card').removeClass('d-none')
// };



var startTimer = function () {
    questionTimer = 14;
    $('#timer').removeClass('d-none')
    if (questionTimer === -1) {
        stop();
    } else {
        intervalId = setInterval(decrement, 1000);
    }
}

var resetTimer = function () {
    $('#timer').addClass('d-none');
    stop();
    questionTimer = 15;
}

var decrement = function () {
    $('#timer').text(questionTimer)
    questionTimer--;

    if (questionTimer === -1) {
        stop();
        $('#timer').addClass('d-none');
        alert('Your Time is Up!');
        timeOut();
    }

}

var stop = function () {
    clearInterval(intervalId);
}


var showNext = function () {
    if (gameOver) {
        $('.giffy').remove()
        $('#instructions').empty();

        console.log(correctAnswer)
        console.log(incorrectAnswer)
        gameEnded();
        resetTimer();
        clearTimeout(intervalEnd)
    } else {

        $('.giffy').remove()
        $('#instructions').empty();
        getQuestion();
        startTimer();
        clearTimeout(intervalNext)
    }








}

var nextQuestion = function () {
    intervalNext = setTimeout(showNext, 4000);


}

var gameEnded = function () {
    $('.giffy').remove()
    $('#instructions').empty();



    var endMessage = $('<h4> Great Job! </h4>').addClass('display-5 text-warning text-center');
    var correct = $('<p>').text(`You answered ${correctAnswer} question(s) right! `).addClass('text-warning text-center my-0 mt-1')
    var incorrect = $('<p>').text(`You answered ${incorrectAnswer} question(s) wrong`).addClass('text-warning text-center my-0 mt-1 mb-5')
    $('#instructions').append(endMessage);
    $('#instructions').append(correct);
    $('#instructions').append(incorrect);

    correctAnswer = 0;
    incorrectAnswer = 0;
    currentQuestion = 0;
    $('#start-game').text('Play Again?').removeClass('d-none')

    resetTimer();
    clearTimeout(intervalEnd)


}

var endGame = function () {

    intervalEnd = setTimeout(gameOver, 4000)

}




function congratulations() {
    resetTimer();
    correctAnswer++;
    if (currentQuestion === 1) {
        var answer = $('<p>').text(`That's right! The answer is ${currentAnswer}.`).addClass('text-warning text-center my-0 mb-1 mt-3')
        $('#instructions').append(answer)
        $('#question-one').addClass('d-none');
        var gif = $('<img src="https://media.giphy.com/media/l378kZ82T2YKHswXC/giphy.gif" />').addClass('giffy')
        $('#gif-col').append(gif).addClass('mt-5')

    }
    if (currentQuestion === 2) {
        var answer = $('<p>').text(`That's right! The answer is ${currentAnswer}.`).addClass('text-warning text-center my-0 mb-1 mt-3')
        $('#instructions').append(answer)
        $('#question-two').addClass('d-none');
        var gif = $('<img src="https://media.giphy.com/media/8FxrbNG6xfufZLCujq/giphy.gif" />').addClass('giffy')
        $('#gif-col').append(gif).addClass('mt-5')

    }
    if (currentQuestion === 3) {
        var answer = $('<p>').text(`That's right! The answer is ${currentAnswer}.`).addClass('text-warning text-center my-0 mb-1 mt-3')
        $('#instructions').append(answer)
        $('#question-three').addClass('d-none');
        var gif = $('<img src="https://media.giphy.com/media/5z2grkg5rqgKK0OuHX/giphy.gif" />').addClass('giffy')
        $('#gif-col').append(gif).addClass('mt-5')

    }
    if (currentQuestion === 4) {
        var answer = $('<p>').text(`That's right! The answer is ${currentAnswer}.`).addClass('text-warning text-center my-0 mb-1 mt-3')
        $('#instructions').append(answer)
        $('#question-four').addClass('d-none');
        var gif = $('<img src="https://media.giphy.com/media/zbbqQH8B8OaBi/giphy.gif" />').addClass('giffy')
        $('#gif-col').append(gif).addClass('mt-5')

    }
    if (currentQuestion === 5) {
        var answer = $('<p>').text(`That's right! The answer is ${currentAnswer}.`).addClass('text-warning text-center my-0 mb-1 mt-3')
        $('#instructions').append(answer)
        $('#question-five').addClass('d-none');
        var gif = $('<img src="https://media.giphy.com/media/dnGsNrxe5LWKs/giphy.gif" />').addClass('giffy')
        $('#gif-col').append(gif).addClass('mt-5')

    }
    if (currentQuestion === 6) {
        var answer = $('<p>').text(`That's right! The answer is ${currentAnswer}.`).addClass('text-warning text-center my-0 mb-1 mt-3')
        $('#instructions').append(answer)
        $('#question-six').addClass('d-none');
        var gif = $('<img src="https://media.giphy.com/media/l3V0zKp11VnQ2CJDG/giphy.gif" />').addClass('giffy')
        $('#gif-col').append(gif).addClass('mt-5')
        endGame();
    }

}

function wrongAnswer() {
    resetTimer();
    incorrectAnswer++;
    if (currentQuestion === 1) {
        var answer = $('<p>').text(`Oops, That's incorrect. The correct answer is ${currentAnswer}.`).addClass('text-warning text-center my-0 mb-1 mt-3')
        $('#instructions').append(answer)
        $('#question-one').addClass('d-none');
        var gif = $('<img src="https://media.giphy.com/media/l378kZ82T2YKHswXC/giphy.gif" />').addClass('giffy')
        $('#gif-col').append(gif).addClass('mt-5')
    }
    if (currentQuestion === 2) {
        var answer = $('<p>').text(`Oops, That's incorrect. The correct answer is ${currentAnswer}.`).addClass('text-warning text-center my-0 mb-1 mt-3')
        $('#instructions').append(answer)
        $('#question-two').addClass('d-none');
        var gif = $('<img src="https://media.giphy.com/media/8FxrbNG6xfufZLCujq/giphy.gif" />').addClass('giffy')
        $('#gif-col').append(gif).addClass('mt-5')
    }
    if (currentQuestion === 3) {
        var answer = $('<p>').text(`Oops, That's incorrect. The correct answer is ${currentAnswer}.`).addClass('text-warning text-center my-0 mb-1 mt-3')
        $('#instructions').append(answer)
        $('#question-three').addClass('d-none');
        var gif = $('<img src="https://media.giphy.com/media/5z2grkg5rqgKK0OuHX/giphy.gif" />').addClass('giffy')
        $('#gif-col').append(gif).addClass('mt-5')
    }
    if (currentQuestion === 4) {
        var answer = $('<p>').text(`Oops, That's incorrect. The correct answer is ${currentAnswer}.`).addClass('text-warning text-center my-0 mb-1 mt-3')
        $('#instructions').append(answer)
        $('#question-four').addClass('d-none');
        var gif = $('<img src="https://media.giphy.com/media/zbbqQH8B8OaBi/giphy.gif" />').addClass('giffy')
        $('#gif-col').append(gif).addClass('mt-5')
    }
    if (currentQuestion === 5) {
        var answer = $('<p>').text(`Oops, That's incorrect. The correct answer is ${currentAnswer}.`).addClass('text-warning text-center my-0 mb-1 mt-3')
        $('#instructions').append(answer)
        $('#question-five').addClass('d-none');
        var gif = $('<img src="https://media.giphy.com/media/dnGsNrxe5LWKs/giphy.gif" />').addClass('giffy')
        $('#gif-col').append(gif).addClass('mt-5')
    }
    if (currentQuestion === 6) {
        var answer = $('<p>').text(`Oops, That's incorrect. The correct answer is ${currentAnswer}.`).addClass('text-warning text-center my-0 mb-1 mt-3')
        $('#instructions').append(answer)
        $('#question-six').addClass('d-none');
        var gif = $('<img src="https://media.giphy.com/media/l3V0zKp11VnQ2CJDG/giphy.gif" />').addClass('giffy')
        $('#gif-col').append(gif).addClass('mt-5')
        endGame();
    }


}

function timeOut() {
    resetTimer();
    incorrectAnswer++;
    if (currentQuestion === 1) {
        var answer = $('<p>').text(`The correct answer is ${currentAnswer}.`).addClass('text-warning text-center my-0 mb-1 mt-3')
        $('#instructions').append(answer)
        $('#question-one').addClass('d-none');
        var gif = $('<img src="https://media.giphy.com/media/l378kZ82T2YKHswXC/giphy.gif" />').addClass('giffy')
        $('#gif-col').append(gif).addClass('mt-5')
        nextQuestion();
    }
    if (currentQuestion === 2) {
        var answer = $('<p>').text(`The correct answer is ${currentAnswer}.`).addClass('text-warning text-center my-0 mb-1 mt-3')
        $('#instructions').append(answer)
        $('#question-two').addClass('d-none');
        var gif = $('<img src="https://media.giphy.com/media/8FxrbNG6xfufZLCujq/giphy.gif" />').addClass('giffy')
        $('#gif-col').append(gif).addClass('mt-5')
        nextQuestion()
    }
    if (currentQuestion === 3) {
        var answer = $('<p>').text(`The correct answer is ${currentAnswer}.`).addClass('text-warning text-center my-0 mb-1 mt-3')
        $('#instructions').append(answer)
        $('#question-three').addClass('d-none');
        var gif = $('<img src="https://media.giphy.com/media/5z2grkg5rqgKK0OuHX/giphy.gif" />').addClass('giffy')
        $('#gif-col').append(gif).addClass('mt-5')
        nextQuestion()
    }
    if (currentQuestion === 4) {
        var answer = $('<p>').text(`The correct answer is ${currentAnswer}.`).addClass('text-warning text-center my-0 mb-1 mt-3')
        $('#instructions').append(answer)
        $('#question-four').addClass('d-none');
        var gif = $('<img src="https://media.giphy.com/media/zbbqQH8B8OaBi/giphy.gif" />').addClass('giffy')
        $('#gif-col').append(gif).addClass('mt-5')
        nextQuestion()
    }
    if (currentQuestion === 5) {
        var answer = $('<p>').text(`The correct answer is ${currentAnswer}.`).addClass('text-warning text-center my-0 mb-1 mt-3')
        $('#instructions').append(answer)
        $('#question-five').addClass('d-none');
        var gif = $('<img src="https://media.giphy.com/media/dnGsNrxe5LWKs/giphy.gif" />').addClass('giffy')
        $('#gif-col').append(gif).addClass('mt-5')
        nextQuestion()
    }
    if (currentQuestion === 6) {
        var answer = $('<p>').text(`The correct answer is ${currentAnswer}.`).addClass('text-warning text-center my-0 mb-1 mt-3')
        $('#instructions').append(answer)
        $('#question-six').addClass('d-none');
        var gif = $('<img src="https://media.giphy.com/media/l3V0zKp11VnQ2CJDG/giphy.gif" />').addClass('giffy')
        $('#gif-col').append(gif).addClass('mt-5')
        nextQuestion()
    }

}



$(document).ready(function () {






    $('#start-game').on('click', function () {
        $('#start-game').addClass('d-none');
        $('#instructions').empty();
        getQuestion();
        startTimer();
    })

    $('.correct').on('click', function () {

        congratulations();
        nextQuestion();


    })

    $('.answer').on('click', function () {

        wrongAnswer();
        nextQuestion();

    })










})