//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function () {

  var counter = 1;
  var quiz = $('section#quiz');
  var footer = $('footer');


  var getQuestion = function() {
    $.getJSON("/quizzes", function (questions) {

      $.each(questions, function (_, question) {
        if (question.id === counter) {
          var $el = $('<h1 id="' + question.id + '" class="question">' + question.description + '</h1>');
          quiz.append($el);

          getAnswers();
          showQuizCounter();
        }
      });
    });
  }

  getQuestion();

  var getAnswers = function() {

    var questionId = parseInt($('.question').attr('id'))

    $.getJSON( "/questions/" + questionId, function( data ) {
      $.each(data, function(value) {
        var answerId = data[value].id;
        var $el = $('<li id="' + answerId + '" class="possible-answer">' + data[value].description + '</li>');
        $('button#' + answerId).append($el);
      });
    });
  };

  $('button.answer').on('click', function() {
    var val = $(this).children('li').text();
    console.log(val)

    showCorrectAnswer();

    var correctAnswer = $('.correct-answer').text();

    if (correctAnswer === val) {
      var $el = $('<li>' + 'correct' + '</li>');
      quiz.children('li').remove();
      quiz.append($el)
    } else {
      var $el = $('<li>' + 'incorrect' + '</li>');
      quiz.children('li').remove();
      quiz.append($el);
    }

  });

  $('button#next').on('click', function() {
    counter += 1;
    $('h1.question').remove();
    footer.children('li').remove();
    getQuestion();
  });

  var showCorrectAnswer = function() {
    var questionId = parseInt($('.question').attr('id'))

    $.getJSON( "/questions/" + questionId, function( data ) {
      $.each(data, function(value) {
        if (data[value].correct === true) {
          var answer = data[value].description
          var $el = $('<li id="' + data[value].id + '" class="correct-answer">' + data[value].description + '</li>');
          quiz.append($el)
        }
      });
    });
  };

  var showQuizCounter = function() {
    var $el = $('<li>' + counter + '/4' + '</li>');
    footer.append($el);
  }





});

