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
	shuffle(arrayOfImages);
	createNewBoard();
	

	//FUNCTIONS

	$(arrayOfImages).each(function() {
    var image = $('<img />').attr('src', this);
    console.log(image);
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

	//place images in random order

	// function createNewBoard() {
	// 	shuffle ();
	// 	var allImgs = $(gameBoard).children();
	//     var thisImg = $(gameBoard + " div:first-child");
	//     var imgsArr = new Array();
	    
	//     for (var i = 0; i < allImgs.length; i++) {
	//         imgsArr[i] = $("#" + thisImg.attr("id") + " img").attr("src");
	//         thisImg = thisImg.next();
	//     }
	    
	//     thisImg = $(gameBoard + " div:first-child");
	    
	//     for (var z = 0; z < allImgs.length; z++) {
	//         var rn = doRandom(0, imgsArr.length - 1);
	        
	//         $("#" + thisImg.attr("id") + " img").attr("src", imgsArr[rn]);
	//         imgsArr.splice(rn, 1);
	//         thisImg = thisImg.next();
 //    }





	function createNewBoard() {
		shuffle(arrayOfImages);
	  for (var i = 0; i < arrayOfImages.length; i++) {
	        //output = "<div id=box" + i + "onclick='flipTile' <img src='" + arrayOfImages[i] + "'/></div>"
	        output = "<div id=box" + i + "><img src='" + arrayOfImages[i] + "'/></div>"
	        //output = "<img src='" + arrayOfImages[i] + "'/>"
	        $tiles.append(output);
	        }
	           
  	} 
  	

	// Reset Game
	function resetGame (){
		shuffle();
     
	    $gameBoard.hide();
	    $gameBoard.css("visibility", "visible");
	     
	    $("#success").remove();
	     
	    counter = 0;
	    $counter.html("" + counter);
	     
	    tileChosen = "";
	    tileFlipped = "";
	    match = 0;
	     
	    return false;
	} 


	
	
	// Create and load new board
	



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
	// function displayImage () {
	// 	if(arrayOfImages.length < 2 && $div.html() == '') {
	// 		$div.addClass('flipped');
	// 		//$div.append() = val;

	// 	}
	// }


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
