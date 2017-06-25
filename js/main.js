$(function () {

	// Declare variables;
	var arrayOfImages = ['../p1_online_game/images/angry_farmer.jpg','../p1_online_game/images/chicken.jpg',
	'../p1_online_game/images/cow.jpg','../p1_online_game/images/dog.jpg','../p1_online_game/images/goat.jpg',
	'../p1_online_game/images/horse.png','../p1_online_game/images/pig.png', '../p1_online_game/images/sheep.jpg', 
	'../p1_online_game/images/angry_farmer.jpg','../p1_online_game/images/chicken.jpg',
	'../p1_online_game/images/cow.jpg','../p1_online_game/images/dog.jpg','../p1_online_game/images/goat.jpg',
	'../p1_online_game/images/horse.png','../p1_online_game/images/pig.png', '../p1_online_game/images/sheep.jpg'];

	var storeChosenImages = [];
	var storeChosenBoxes = [];
	var tilesFlipped = 0;
	var output = 0;
	var choice1 = 0;
	var choice2 = 0;

	var $main = $('main');
	var $div = $('div');
	var $mainBoard = $('#main-board');
	
	// Call functions
	//createNewBoard();

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
	
	// Create and load new board
	function createNewBoard() {
		tilesFlipped = 0;
		var output = '';
		shuffle(arrayOfImages);
	  for (var i = 0; i < arrayOfImages.length; i++) {
	        output = "<div id=box" + i + "onclick='flipTile' <img src='" + arrayOfImages[i] + "'/></div>"
	        //output = "<img src='" + arrayOfImages[i] + "'/>"
	        $mainBoard.append(output);
	        }
	           
  }

  	function flipTile(tile,val){

  	}


  	$('#div1').click(function(event){
  		$(this).css('background-color', 'red');
  	});

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
	function displayImage () {
		if(arrayOfImages.length < 2 && $div.html() == '') {
			$div.addClass('flipped');
			//$div.append() = val;

		}
	}


	//create array of image urls
    //var addImage = $("<img src=../p1_online_game/images/sheep.jpg />");

    

	// $main.on('click', 'div', function(event) {
	// 	var img = $('div img');
	// 	$(this).html(img).show();
	// 	//debugger
	// 	console.log('clicked');
		
 //    }); 

    // for (var i = 0; i < arrayOfImages.length; i++) {
    	
    // 	var currentImage = arrayOfImages[i];
    // 	var addImage = $("<img src='" + currentImage + "'/>");

    // 	console.log('array' + arrayOfImages);
    // }

    // for(var j = 0; j < arrayOfDivs.length; j++){
    		
    // 	var currentDiv = arrayOfDivs[j];
    // 	console.log('arrayOfDivs');
    		
    // }

 //    $div.each(arrayOfImages, function(index, value) {
 //    	$main.append(addImage);
 // })

  


});
