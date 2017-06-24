$(function () {

	// Declare variables;

	var arrayOfImages = ['../p1_online_game/images/angry_farmer.jpg','../p1_online_game/images/chicken.jpg',
	'../p1_online_game/images/cow.jpg','../p1_online_game/images/dog.jpg','../p1_online_game/images/goat.jpg',
	'../p1_online_game/images/horse.png','../p1_online_game/images/pig.png', '../p1_online_game/images/sheep.jpg', 
	'../p1_online_game/images/angry_farmer.jpg','../p1_online_game/images/chicken.jpg',
	'../p1_online_game/images/cow.jpg','../p1_online_game/images/dog.jpg','../p1_online_game/images/goat.jpg',
	'../p1_online_game/images/horse.png','../p1_online_game/images/pig.png', '../p1_online_game/images/sheep.jpg'];

	var arrayOfDivs = ['$box1','$box2','$box3','$box4','$box5','$box6','$box7','$box8','$box9','$box10','$box11','$box12',
	'$box13','$box14','$box15','$box16'];

	var storeChosenImages = [];
	var storeChosenDivs = [];
	var boxesFlipped = 0;

	var $main = $('main');
	var $div = $('div');
	var $box1 = $('#box1');
	var $box2 = $('#box2');
	var $box3 = $('#box3');
	var $box4 = $('#box4');
	var $box5 = $('#box5');
	var $box6 = $('#box6');
	var $box7 = $('#box7');
	var $box8 = $('#box8');
	var $box9 = $('#box9');
	var $box10 = $('#box10');
	var $box11 = $('#box11');
	var $box12 = $('#box12');
	var $box13= $('#box13');
	var $box14 = $('#box14');
	var $box15= $('#box15');
	var $box16= $('#box16');

	// Shuffle Array using Fisher-Yates method

	function shuffle(array) {
  		var currentIndex = arrayOfImages.length, temporaryValue, randomIndex;
  		while (0 !== currentIndex) {
  			// Pick a remaining element...
    		randomIndex = Math.floor(Math.random() * currentIndex);
    		currentIndex -= 1;

		    // And swap it with the current element.
		    temporaryValue = arrayOfImages[currentIndex];
		    arrayOfImages[currentIndex] = arrayOfImages[randomIndex];
		    arrayOfImages[randomIndex] = temporaryValue;
		}

		  return array;
	}
		arrayOfImages = shuffle(arrayOfImages);
		//console.log(arrayOfImages);

	function createNewBoard () {
		boxesFlipped = 0;
		var output = '';
		shuffle(arrayOfImages);
		for (var i = 0; i < arrayOfImages.length; i++) {
			output = output + "<div id=box" + i + " <img src='" + arrayOfImages[i] + "'/></div>"

		}
		$main.html(output);
	} createNewBoard();

	//function to flip tile and display images
	// function displayImage () {
	// 	if(arrayOfImages < 2 && $div == '') {

	// 	}

	// }

	//create array of image urls
    //var addImage = $("<img src=../p1_online_game/images/sheep.jpg />");

	$main.on('click', 'div',function(event) {
		console.log('clicked');
	
		
    }); 

    for (var i = 0; i < arrayOfImages.length; i++) {
    	
    	var currentImage = arrayOfImages[i];
    	var addImage = $("<img src='" + currentImage + "'/>");

    	console.log('array' + arrayOfImages);
    }

    for(var j = 0; j < arrayOfDivs.length; j++){
    		
    	var currentDiv = arrayOfDivs[j];
    	console.log('arrayOfDivs');
    		
    }

 //    $div.each(arrayOfImages, function(index, value) {
 //    	$main.append(addImage);
 // })

  

    



	
		






});
