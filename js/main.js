$(function () {

	var arrayOfImages = ['../p1_online_game/images/unhappy_farmer.jpg','../p1_online_game/images/chicken.jpg',
	'../p1_online_game/images/cow.jpg','../p1_online_game/images/dog1.jpg','../p1_online_game/images/goat.jpg',
	'../p1_online_game/images/horse.png','../p1_online_game/images/pig.png', '../p1_online_game/images/sheep.jpg', 
	'../p1_online_game/images/unhappy_farmer.jpg','../p1_online_game/images/chicken.jpg',
	'../p1_online_game/images/cow.jpg','../p1_online_game/images/dog1.jpg','../p1_online_game/images/goat.jpg',
	'../p1_online_game/images/horse.png','../p1_online_game/images/pig.png', '../p1_online_game/images/sheep.jpg'];

	var $gameBoard = $('#gameBoard');
	var $gameButtons = $('#gameButtons');
	var $tiles = $('#tiles');
	var $counter = $('#counter');
	var $selected = $('.selected');
	var $begin = $('#begin');
	var $intro = $('#intro');
	var counter = 0;

	
	$gameButtons.hide();
	$begin.on('click', function(event){
		
		$intro.slideUp();
		$gameButtons.show();
		createNewBoard();

		$('#tiles div').click(function(event){
  			$(this).addClass('selected');
			$(this).children().show();
			var imgSource = $(this).find('img').attr("src");
			animalSounds(imgSource);
			
			//counting clicks and adding to counter
			$counter.html(function(i, val) { return + val + 1 });
			displayTile();

			// $('#reset').click(function (event){
			// 	reset();
			// });
  		});
	});


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

	function createNewBoard() {

		shuffle(arrayOfImages);
	  	for (var i = 0; i < arrayOfImages.length; i++) {
	        output = "<div id=box" + i + "><img src='" + arrayOfImages[i] + "'/></div>"
	        $tiles.append(output);
	    }
	        $('div img').hide();
  	} 

  	// Display Tiles
  	function displayTile (){
  		var $selected = $('.selected');
  		var $match = $('.match');
  		var pair = new Audio("ping.mp3");

  		if($selected.length === 2) {

  			var src1 = $selected.eq(1).find('img').attr('src');
  			var src2 = $selected.eq(0).find('img').attr('src');

  			if (src1 === src2) {
				pair.play();
  				$selected.removeClass('selected');
  				$selected.find('img').addClass('match');

  				if($('.match').length === 16) {
  					winner();
  				}

  			} else {
  				$selected.removeClass('selected');
				
				setTimeout(function() {
					$selected.find('img').fadeOut();
				}, 1000);
  				
  			}
  		
    	}

    }

    //when Reset button is clicked

    function reset() {
    	$gameButtons.hide();
    	shuffle(arrayOfImages);
    	$('#tiles').html("");
    	createNewBoard();

		Counter = 0;
		$counter.html("" + Counter);
		return false;
	}

	function winner (){
		var clap = new Audio()
		clap.play();
		setTimeout(function(){
			var $gameButtons = $('#gameButtons');
			$gameButtons.fadeOut();
  			$('#tiles div').fadeOut();
  			
  		}, 2000);

  		setTimeout(function(){
  			$('#intro').fadeIn();
  			$('#begin').hide();
  			//$('#how-to-play p').addClass('winner');
  			$('#how-to-play').html
  			('<p> Congratulations! You have saved the farm and all the animals!</p>').addClass('winner');
  			$('#begin').show().html('Play again?')
  		}, 3000);
  		
	}


	function animalSounds (imgSource){

		var chicken = new Audio("chicken.mp3");
		var cow = new Audio("cow.mp3");
		var dog = new Audio("dog.mp3");
		var goat = new Audio("goat.mp3");
		var horse = new Audio("horse.mp3");
		var pig = new Audio("pig.mp3");
		var sheep = new Audio("sheep.mp3");
		var farmer = new Audio("farmer.mp3");
		
		//var imgSource = $(this).find('img').attr("src");

		if (imgSource === "../p1_online_game/images/chicken.jpg") {
			chicken.play();

			} else if (imgSource === "../p1_online_game/images/cow.jpg") {
				cow.play();

			} else if (imgSource === "../p1_online_game/images/dog1.jpg") {
				dog.play();

			} else if (imgSource === "../p1_online_game/images/goat.jpg") {
				goat.play();

			} else if (imgSource === "../p1_online_game/images/horse.png") {
				horse.play();

			} else if (imgSource === "../p1_online_game/images/pig.png") {
				pig.play();

			} else if (imgSource === "../p1_online_game/images/sheep.jpg") {
				sheep.play();

			} else if (imgSource === "../p1_online_game/images/unhappy_farmer.jpg") {
				farmer.play();
		}
		
				
	}
				
	


});
