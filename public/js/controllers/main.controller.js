app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {
	$scope.categories = [
	    'MongoDB',
	    'Express',
	    'Angular',
	    'Node'
	];

	$scope.reset = function(){
		$scope.selected = null;
		console.log('hi');
		FlashCardsFactory.getFlashCards().then(function(flashCards){
			$scope.flashCards = flashCards;
		});
	};

	$scope.reset();

	$scope.getCategoryCards = function(cat){

		FlashCardsFactory.getCategoryCards(cat).then(function(cards){
			$scope.flashCards = cards;
			$scope.selected = cat;
		});
	};

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
			if(answer.correct) ScoreFactory.correct++;
			else ScoreFactory.incorrect++;
		}
	};
});