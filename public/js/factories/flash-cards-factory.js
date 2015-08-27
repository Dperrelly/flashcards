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