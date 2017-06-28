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
	// $('#reset').click(function (event){
 //  			//debugger
	// 		reset();
	// 	});

	$begin.click(function(event){

		$intro.slideUp();
		$gameButtons.show();
		createNewBoard();

	});


	$('#tiles').on('click', 'div', function(event){
		$(this).addClass('selected');
		$(this).children().show();

		var imgSource = $(this).find('img').attr("src");
		animalSounds(imgSource);
		displayTile();
		
		});


	// Shuffle Array using Fisher-Yates method
	function shuffle(array) {
  		var currentIndex = array.length, temporaryValue, randomIndex;
  		while (0 !== currentIndex) {
    		randomIndex = Math.floor(Math.random() * currentIndex);
    		currentIndex -= 1;

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

  	function displayTile (){
  		var $selected = $('.selected');
  		var $match = $('.match');
  		var pair = new Audio("ping.mp3");

  		counter = counter + 1;
        $counter.html(counter);

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

	function winner (){
		var clap = new Audio("clap.mp3");
		clap.play();

		setTimeout(function(){
			var $gameButtons = $('#gameButtons');
			$gameButtons.fadeOut();
  			$('#tiles div').fadeOut();
  			
  		}, 2000);

  		setTimeout(function (){
  			var winMessage = 
  			'<p class="win-message"><strong>Congratulations!</strong></p><p>You have saved the farm and all the animals!</p><p>You completed this in' + counter + 'clicks.</p>'
  			$('#intro').fadeIn();
  			$('#begin').html('<a class="link" href="index.html">Play again?</a>');
  			$('.how-to-play').html
  			(winMessage).addClass('win-message');
  			// $('#how-to-play').html
  			// (winMessage).css
  			// ({'color':'orange','font-size' : '30px', 'text-align' : 'center'});
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

	// function reset() {
	// 	$('#tiles').html("");
 //    	createNewBoard();

	// 	count = 0;
	// 	$counter.html("" + count);

	// }
				
	


});
