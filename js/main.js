$(function () {

	// Declare variables;
	var arrayOfImages = ['../p1_online_game/images/angry_farmer.jpg','../p1_online_game/images/chicken.jpg',
	'../p1_online_game/images/cow.jpg','../p1_online_game/images/dog.jpg','../p1_online_game/images/goat.jpg',
	'../p1_online_game/images/horse.png','../p1_online_game/images/pig.png', '../p1_online_game/images/sheep.jpg', 
	'../p1_online_game/images/angry_farmer.jpg','../p1_online_game/images/chicken.jpg',
	'../p1_online_game/images/cow.jpg','../p1_online_game/images/dog.jpg','../p1_online_game/images/goat.jpg',
	'../p1_online_game/images/horse.png','../p1_online_game/images/pig.png', '../p1_online_game/images/sheep.jpg'];

	var $gameBoard = $('#gameBoard');
	var $tiles = $('#tiles');
	var $counter = $('#counter');

	var counter = 0;
	var tileChosen = "";
	var tileFlipped = "";
	var match = 0;

	
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
	        //$('#tiles div img').css('opacity', '0');
  	} 

  	// Show image on clicked divs
  	$('#tiles div').click(function(event){
  		//debugger
		$(this).children().show();

  	});
  	

	// Reset Game 
	
	// Create and load new board
	
  	// $mainBoard.on('click', 'div', function(event) {
  	// 	if ($(this).attr("class") == "hidden") {
   //        if (choice1 == undefined) {
   //            choice1 = $(this);
   //            choice1.removeClass("hidden").addClass("show");
   //        }
   //    }

    	//OpenCard();
    	//console.log('box2 clicked');
    	//debugger
    	//var url = '../p1_online_game/images/angry_farmer.jpg'
    	//$div.css("background-image", "url(../p1_online_game/images/angry_farmer.jpg) no-repeat");
    // });

	//function to flip tile and display images
	// function displayImage () {
	// 	if(arrayOfImages.length < 2 && $div.html() == '') {
	// 		$div.addClass('flipped');
	// 		//$div.append() = val;

	// 	}
	// }


	// $main.on('click', 'div', function(event) {
	// 	var img = $('div img');
	// 	$(this).html(img).show();
	// 	//debugger
	// 	console.log('clicked');
		
 //    }); 

 //    $div.each(arrayOfImages, function(index, value) {
 //    	$main.append(addImage);
 // })

  


});
