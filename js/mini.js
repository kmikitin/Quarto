console.log('Connected!')

let currentPiece = '';
const spotsInPlayId = [];
const spotOne = $('#one')
const spotTwo = $('#two')
const spotThree = $('#three')
const spotFour = $('#four')

function selectPiece(evt){
	if($(evt.currentTarget).css('border') === '1px solid rgb(0, 0, 0)'){
		$(evt.currentTarget).css('border', '6px solid rgb(235, 148, 134)')
		currentPiece = evt.currentTarget;
	} else if ($(evt.currentTarget).css('border') === '6px solid rgb(235, 148, 134)'){
		$(evt.currentTarget).css('border', '1px solid rgb(0, 0, 0)')
		currentPiece = '';
	};
};


function checkWinner(){
	// this function is evaluating what was on the first line of my if statements
	function compareQualities(spot1, spot2, quality){
		// take two spots on the board, and one of the qualities(found in the classes of the spot, which were given to it by the game piece), see if the quality is present in both spots, if so return true (which is what includes does)
		return $(spot1).attr('class').includes(quality) && $(spot2).attr('class').includes(quality)
	};
	// this function changes the spots on the board to have a bright salmon color when the configuration is a win
	function highlightWin(spot1, spot2){
		spot1.children().css('border', '6px solid rgb(235, 148, 134)');
		spot2.children().css('border', '6px solid rgb(235, 148, 134)');
	};

	for(let i = 0; i < spotsInPlayId.length; i++){
		// check each of the 4 board configurations that make a win
		// get the classes of each of the spots being checked
		// look for matches of one of the six possibilities
		// one and three
		// console.log(i)
		if(spotsInPlayId.includes('one') === true &&  spotsInPlayId.includes('three') === true){
		// console.log('numbers 1 and 3');
			if(compareQualities(spotOne, spotThree, 'dark') === true) {
				// console.log('dark win!');
				highlightWin(spotOne, spotThree);
				// have to return to exit the loop
				return 'dark win!'
			} else if (compareQualities(spotOne, spotThree, 'square')){
				// console.log('square win!');
				$('#one').children().css('border', '6px solid rgb(235, 148, 134)');
				$('#three').children().css('border', '6px solid rgb(235, 148, 134)');
				return 'square win!'
			} else if (compareQualities(spotOne, spotThree, 'circle')){
				// console.log('circle win!');
				$('#one').children().css('border', '6px solid rgb(235, 148, 134)');
				$('#three').children().css('border', '6px solid rgb(235, 148, 134)');
				return 'circle win!'
			} else if (compareQualities(spotOne, spotThree, 'light')){
				// console.log('light win!');
				$('#one').children().css('border', '6px solid rgb(235, 148, 134)');
				$('#three').children().css('border', '6px solid rgb(235, 148, 134)');
				return 'light win!'	
			} else if (compareQualities(spotOne, spotThree, 'big')){
				// console.log('big win!');
				$('#one').children().css('border', '6px solid rgb(235, 148, 134)');
				$('#three').children().css('border', '6px solid rgb(235, 148, 134)');
				return 'big win!'
			} else if (compareQualities(spotOne, spotThree, 'small')){
				// console.log('small win!');
				$('#one').children().css('border', '6px solid rgb(235, 148, 134)');
				$('#three').children().css('border', '6px solid rgb(235, 148, 134)');
				return 'small win!'
			}
		}			
		// three and four
		if (spotsInPlayId.includes('three') === true &&  spotsInPlayId.includes('four') === true) {
		// console.log('numbers three and four');
			if($('#three').attr('class').includes('dark') && $('#four').attr('class').includes('dark')) {
				$('#three').children().css('border', '6px solid rgb(235, 148, 134)');
				$('#four').children().css('border', '6px solid rgb(235, 148, 134)');
				// have to return to exit the loop
				return 'dark win!'
			} else if ($('#three').attr('class').includes('square') && $('#four').attr('class').includes('square')){
				// console.log('square win!');
				$('#three').children().css('border', '6px solid rgb(235, 148, 134)');
				$('#four').children().css('border', '6px solid rgb(235, 148, 134)');
				return 'square win!'
			} else if ($('#three').attr('class').includes('circle') && $('#four').attr('class').includes('circle')){
				// console.log('circle win!');
				$('#three').children().css('border', '6px solid rgb(235, 148, 134)');
				$('#four').children().css('border', '6px solid rgb(235, 148, 134)');
				return 'circle win!'
			} else if ($('#three').attr('class').includes('light') && $('#four').attr('class').includes('light')){
				// console.log('light win!');
				$('#three').children().css('border', '6px solid rgb(235, 148, 134)');
				$('#four').children().css('border', '6px solid rgb(235, 148, 134)');
				return 'light win!'		
			} else if ($('#three').attr('class').includes('big') && $('#four').attr('class').includes('big')){
				// console.log('big win!');
				$('#three').children().css('border', '6px solid rgb(235, 148, 134)');
				$('#four').children().css('border', '6px solid rgb(235, 148, 134)');
				return 'big win!'
			} else if ($('#three').attr('class').includes('small') && $('#four').attr('class').includes('small')){
				// console.log('small win!');
				$('#three').children().css('border', '6px solid rgb(235, 148, 134)');
				$('#four').children().css('border', '6px solid rgb(235, 148, 134)');
				return 'small win!'
			}
		}		
		// one and two 
		if (spotsInPlayId.includes('one') === true &&  spotsInPlayId.includes('two') === true) {
		// console.log('numbers one and two');	
			if($('#one').attr('class').includes('dark') && $('#two').attr('class').includes('dark')) {
				// console.log('dark win!');
				$('#one').children().css('border', '6px solid rgb(235, 148, 134)');
				$('#two').children().css('border', '6px solid rgb(235, 148, 134)');
				return 'dark win!'
			} else if ($('#one').attr('class').includes('square') && $('#two').attr('class').includes('square')){
				// console.log('square win!');
				$('#one').children().css('border', '6px solid rgb(235, 148, 134)');
				$('#two').children().css('border', '6px solid rgb(235, 148, 134)');
				return 'square win!'
			} else if ($('#one').attr('class').includes('circle') && $('#two').attr('class').includes('circle')){
				// console.log('circle win!');
				$('#one').children().css('border', '6px solid rgb(235, 148, 134)');
				$('#two').children().css('border', '6px solid rgb(235, 148, 134)');
				return 'circle win!'
			} else if ($('#one').attr('class').includes('light') && $('#two').attr('class').includes('light')){
				// console.log('light win!');
				$('#one').children().css('border', '6px solid rgb(235, 148, 134)');
				$('#two').children().css('border', '6px solid rgb(235, 148, 134)');
				return 'light win!'	
			} else if ($('#one').attr('class').includes('big') && $('#two').attr('class').includes('big')){
				// console.log('big win!');
				$('#one').children().css('border', '6px solid rgb(235, 148, 134)');
				$('#two').children().css('border', '6px solid rgb(235, 148, 134)');
				return 'big win!'
			} else if ($('#one').attr('class').includes('small') && $('#two').attr('class').includes('small')){
				// console.log('small win!');
				$('#one').children().css('border', '6px solid rgb(235, 148, 134)');
				$('#two').children().css('border', '6px solid rgb(235, 148, 134)');
				return 'small win!'
			}
		}	
		// two and four
		if (spotsInPlayId.includes('two') === true &&  spotsInPlayId.includes('four') === true){
		// console.log('numbers two and four');
			if($('#two').attr('class').includes('dark') && $('#four').attr('class').includes('dark')) {
				// console.log('dark win!');
				$('#two').children().css('border', '6px solid rgb(235, 148, 134)');
				$('#four').children().css('border', '6px solid rgb(235, 148, 134)');
				return 'dark win!'
			} else if ($('#two').attr('class').includes('square') && $('#four').attr('class').includes('square')){
				// console.log('square win!');
				$('#two').children().css('border', '6px solid rgb(235, 148, 134)');
				$('#four').children().css('border', '6px solid rgb(235, 148, 134)');
				return 'square win!'
			} else if ($('#two').attr('class').includes('circle') && $('#four').attr('class').includes('circle')){
				// console.log('circle win!');
				$('#two').children().css('border', '6px solid rgb(235, 148, 134)');
				$('#four').children().css('border', '6px solid rgb(235, 148, 134)');
				return 'circle win!'
			} else if ($('#two').attr('class').includes('light') && $('#four').attr('class').includes('light')){
				// console.log('light win!');
				$('#two').children().css('border', '6px solid rgb(235, 148, 134)');
				$('#four').children().css('border', '6px solid rgb(235, 148, 134)');
				return 'light win!'	
			} else if ($('#two').attr('class').includes('big') && $('#four').attr('class').includes('big')){
				// console.log('big win!');
				$('#two').children().css('border', '6px solid rgb(235, 148, 134)');
				$('#four').children().css('border', '6px solid rgb(235, 148, 134)');
				return 'big win!'
			} else if ($('#two').attr('class').includes('small') && $('#four').attr('class').includes('small')){
				// console.log('small win!');
				$('#two').children().css('border', '6px solid rgb(235, 148, 134)');
				$('#four').children().css('border', '6px solid rgb(235, 148, 134)');
				return 'small win!'
			}
		}	
	}

};

function choosePlacement(gamePiece, spotOnBoard){
	gamePiece = currentPiece;
	$(gamePiece).css('border', '1px solid rgb(0, 0, 0)');
	$(gamePiece).children().css('background-color', '#F9F8F8');
	spotOnBoard = this;
	$(gamePiece).appendTo($(spotOnBoard));
	$(spotOnBoard).addClass($(gamePiece).attr('class'));
	// get the ids of the spots currently in place
	spotsInPlayId.push($(spotOnBoard).attr('id'));
	checkWinner();
};


$('#A').on('click', selectPiece);

$('#B').on('click', selectPiece);

$('#C').on('click', selectPiece);

$('#D').on('click', selectPiece);



spotOne.on('click', choosePlacement);

spotTwo.on('click', choosePlacement);

spotThree.on('click', choosePlacement);

spotFour.on('click', choosePlacement);

	