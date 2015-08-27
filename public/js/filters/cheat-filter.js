app.filter('cheat', function(){
	return function(collection){
		return collection.filter(function(flashcard){
			return flashcard.correct;
		});
	};
});

app.filter('ayy', function(){
	var run = false;
	return function(collection){
		if(!run) collection = collection.map(function(flashcard){
			flashcard.text += 'ayy';
			return flashcard;
		});
		run = true;
		return collection;
	};
});