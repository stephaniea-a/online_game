$(function () {

	var arrayOfImages = ['images/unhappy_farmer.jpg','images/chicken.jpg',
	'images/cow.jpg','images/dog1.jpg','images/goat.jpg',
	'images/horse.png','images/pig.png', 'images/sheep.jpg', 
	'images/unhappy_farmer.jpg','images/chicken.jpg',
	'images/cow.jpg','images/dog1.jpg','images/goat.jpg',
	'images/horse.png','images/pig.png', 'images/sheep.jpg'];

	var $gameBoard = $('#gameBoard');
	var $gameButtons = $('#gameButtons');
	var $tiles = $('#tiles');
	var $counter = $('#counter');
	var $selected = $('.selected');
	var $begin = $('#begin');
	var $intro = $('#intro');
	var counter = 0;

	var backMusic = new Audio("audio/old_macdonald.mp3");
	backMusic.play();

	
	$gameButtons.hide();
	$begin.click(function(event){
        counter = 0;
        $counter.html(counter);

		backMusic.pause();
		$intro.slideUp();
		$gameButtons.show();
		
		$('#tiles').html("");
		createNewBoard();

	});


	$('#tiles').on('click', 'div', function(event){
		if (!$(this).hasClass('match')) {
			$(this).addClass('selected');
			$(this).children().show();
		}

		var imgSource = $(this).find('img').attr("src");
		animalSounds(imgSource);
		displayTile();
		
		});

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

	function createNewBoard () {

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
  		var pair = new Audio("audio/ping.mp3");

  		counter = counter + 1;
        $counter.html(counter);

  		if($selected.length === 2) {

  			var src1 = $selected.eq(1).find('img').attr('src');
  			var src2 = $selected.eq(0).find('img').attr('src');

  			if (src1 === src2) {
				pair.play();
  				$selected.removeClass('selected');
  				$selected.addClass('match');

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
		var clap = new Audio("audio/clap.mp3");
		clap.play();

		setTimeout(function(){
			var $gameButtons = $('#gameButtons');
			$gameButtons.fadeOut();
  			$('#tiles div').fadeOut();
  			
  		}, 2000);

  		setTimeout(function (){
  			var winMessage = 
  			'<p class="win-message"><strong>Congratulations!</strong></p><p>You have saved the farm and all the animals!</p><p>You completed this in ' + counter + ' clicks.</p>'
  			$('#intro').fadeIn();
  			$('#begin').html('<a class="link" href="index.html">Play again?</a>');
  			$('.how-to-play').html
  			(winMessage).addClass('win-message');
  		}, 3000);
  		
	}


	function animalSounds (imgSource){

		var chicken = new Audio("audio/chicken.mp3");
		var cow = new Audio("audio/cow.mp3");
		var dog = new Audio("audio/dog.mp3");
		var goat = new Audio("audio/goat.mp3");
		var horse = new Audio("audio/horse.mp3");
		var pig = new Audio("audio/pig.mp3");
		var sheep = new Audio("audio/sheep.mp3");
		var farmer = new Audio("audio/farmer1.mp3");
		

		if (imgSource === "images/chicken.jpg") {
			chicken.play();

			} else if (imgSource === "images/cow.jpg") {
				cow.play();

			} else if (imgSource === "images/dog1.jpg") {
				dog.play();

			} else if (imgSource === "images/goat.jpg") {
				goat.play();

			} else if (imgSource === "images/horse.png") {
				horse.play();

			} else if (imgSource === "images/pig.png") {
				pig.play();

			} else if (imgSource === "images/sheep.jpg") {
				sheep.play();

			} else if (imgSource === "images/unhappy_farmer.jpg") {
				farmer.play();
		}
		
				
	}			


});
