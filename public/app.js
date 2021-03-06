var app = angular.module('flashCards', []);

app.factory('FlashCardsFactory', function ($http) {
    return { 

        getCategoryCards: function(cat){
            return $http.get('/cards?category=' + cat).then(function(cardObject){
                return cardObject.data;
            }, function(err){
                console.log(err.message);
            });
        },

        getFlashCards: function(){
            return $http.get('/cards').then(function(cardObject){
                return cardObject.data;
            }, function(err){
                console.log(err.message);
            });
        }
    };
});


app.controller('StatsController', function($scope, ScoreFactory){
    $scope.scores = ScoreFactory;
});

app.factory('ScoreFactory', function(){
    return {
        correct: 0,
        incorrect: 0
    };
});

// app.value('whateverName', [
//     {
//         question: 'C. What is Angular?',
//         answers: [
//             { text: 'A front-end framework for great power!', correct: true },
//             { text: 'Something lame, who cares, whatever.', correct: false },
//             { text: 'Some kind of fish, right?', correct: false }
//         ]
//     },
//     {
//         question: 'A. What is a controller?',
//         answers: [
//             { text: 'Something that manages my front-end routes', correct: false },
//             { text: 'A function that allows me to manage a scope', correct: true },
//             { text: 'An Angular template', correct: false }
//         ]
//     },
//     {
//         question: 'B. What does {{ }} do?',
//         answers: [
//             { text: 'It runs some Javascript', correct: false },
//             { text: 'It looks for variables in HTML', correct: false },
//             { text: 'It runs an Angular expression that accesses my $scope', correct: true }
//         ]
//     }
// ]);