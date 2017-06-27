$(function () {

	// Declare variables;
	var arrayOfImages = ['../p1_online_game/images/unhappy_farmer.jpg','../p1_online_game/images/chicken.jpg',
	'../p1_online_game/images/cow.jpg','../p1_online_game/images/dog1.jpg','../p1_online_game/images/goat.jpg',
	'../p1_online_game/images/horse.png','../p1_online_game/images/pig.png', '../p1_online_game/images/sheep.jpg', 
	'../p1_online_game/images/unhappy_farmer.jpg','../p1_online_game/images/chicken.jpg',
	'../p1_online_game/images/cow.jpg','../p1_online_game/images/dog1.jpg','../p1_online_game/images/goat.jpg',
	'../p1_online_game/images/horse.png','../p1_online_game/images/pig.png', '../p1_online_game/images/sheep.jpg'];

	var $gameBoard = $('#gameBoard');
	var $tiles = $('#tiles');
	var $counter = $('#counter');
	var $selected = $('.selected');

	//var $tilesDiv = $('#tiles div');
	//var $divImg = $('div img');

	var counter = 0;
	
	// Call functions
	createNewBoard();
	
	//FUNCTIONS

	// Shuffle Array using Fisher-Yates method
	function shuffle(array) {
  		var currentIndex = array.length, temporaryValue, randomIndex;
  		while (0 !== currentIndex) {
  			// Pick a remaining element...
    		randomIndex = Math.floor(Math.random() * currentIndex);
    		currentIndex -= 1;
		    // And swap it with the current element.
		    temporaryValue = array[currentIndex];
		    array[currentIndex] = array[randomIndex];
		    array[randomIndex] = temporaryValue;
		}
		  return array;
	} 

	// Create new boards and place images in random order
	function createNewBoard() {

		shuffle(arrayOfImages);
	  	for (var i = 0; i < arrayOfImages.length; i++) {
	        output = "<div id=box" + i + "><img src='" + arrayOfImages[i] + "'/></div>"
	        $tiles.append(output);
	    }
	        $('div img').hide();
  	} 

  	// Show image on clicked divs
  	$('#tiles div').click(function(event){
  		$(this).addClass('selected');
		$(this).children().show();
		//counting clicks and adding to counter
		$counter.html(function(i, val) { return + val + 1 });
		displayTile();

  	});

  	// Display Tiles
  	function displayTile (){
  		var $selected = $('.selected');
  		var $match = $('.match');
  		if($selected.length === 2) {

  			var src1 = $selected.eq(1).find('img').attr('src');
  			var src2 = $selected.eq(0).find('img').attr('src');

  			if (src1 === src2) {
  				console.log('its a match');
  				$selected.removeClass('selected');
  				$selected.find('img').addClass('match');
  				debugger

  				if($('.match').length === 16) {

  					console.log('win');
  				} else {
  					console.log('not yet')
  				}

  			} else {
  				console.log('no match');
  				$selected.removeClass('selected');
  				
  			
				setTimeout(function() {
					$selected.find('img').fadeOut();
				}, 1000);
  				
  			}
  		
    	}

    }

    //when Reset button is clicked
    $('#reset').click(function(event){
    	console.log('clicked');
    	reset();

    });

    function reset() {
    	shuffle(arrayOfImages);
    	$('#tiles').html("");
    	createNewBoard();

		Counter = 0;
		$counter.html("" + Counter);
		return false;
}




});
