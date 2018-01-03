console.log('Connected!')

let currentPiece = '';
const spotsInPlayId = [];

function selectPiece(evt){
	if($(evt.currentTarget).css('border') === '1px solid rgb(0, 0, 0)'){
		$(evt.currentTarget).css('border', '6px solid #EB9486')
		currentPiece = evt.currentTarget;
	} else if ($(evt.currentTarget).css('border') === '6px solid rgb(235, 148, 134)'){
		$(evt.currentTarget).css('border', '1px solid rgb(0, 0, 0)')
		currentPiece = '';
	};
};

function checkWinner(){
	for(let i = 0; i < spotsInPlayId.length; i++){
		// check each of the 4 board configurations that make a win
		// get the classes of each of the spots being checked
		// look for matches of one of the six possibilities
		// one and three
		// console.log(i)
		if(spotsInPlayId.includes('one') === true &&  spotsInPlayId.includes('three') === true){
		// console.log('numbers 1 and 3');
			if($('#one').attr('class').includes('dark') && $('#three').attr('class').includes('dark')) {
				console.log('dark win!');
				// have to return to exit the loop
				return 'dark win!'
			} else if ($('#one').attr('class').includes('square') && $('#three').attr('class').includes('square')){
				console.log('square win!');
				return 'square win!'
			} else if ($('#one').attr('class').includes('circle') && $('#three').attr('class').includes('circle')){
				console.log('circle win!');
				return 'circle win!'
			} else if ($('#one').attr('class').includes('light') && $('#three').attr('class').includes('light')){
				console.log('light win!');
				return 'light win!'	
			} else if ($('#one').attr('class').includes('big') && $('#three').attr('class').includes('big')){
				console.log('big win!');
				return 'big win!'
			} else if ($('#one').attr('class').includes('small') && $('#three').attr('class').includes('small')){
				console.log('small win!');
				return 'small win!'
			}
		}			
		// three and four
		if (spotsInPlayId.includes('three') === true &&  spotsInPlayId.includes('four') === true) {
		// console.log('numbers three and four');
			if($('#three').attr('class').includes('dark') && $('#four').attr('class').includes('dark')) {
				console.log('dark win!');
			} else if ($('#three').attr('class').includes('square') && $('#four').attr('class').includes('square')){
				console.log('square win!');
			} else if ($('#three').attr('class').includes('circle') && $('#four').attr('class').includes('circle')){
				console.log('circle win!');
			} else if ($('#three').attr('class').includes('light') && $('#four').attr('class').includes('light')){
				console.log('light win!');	
			} else if ($('#three').attr('class').includes('big') && $('#four').attr('class').includes('big')){
				console.log('big win!');
			} else if ($('#three').attr('class').includes('small') && $('#four').attr('class').includes('small')){
				console.log('small win!');
			}
		}		
		// one and two 
		if (spotsInPlayId.includes('one') === true &&  spotsInPlayId.includes('two') === true) {
		// console.log('numbers one and two');	
			if($('#one').attr('class').includes('dark') && $('#two').attr('class').includes('dark')) {
				console.log('dark win!');
			} else if ($('#one').attr('class').includes('square') && $('#two').attr('class').includes('square')){
				console.log('square win!');
			} else if ($('#one').attr('class').includes('circle') && $('#two').attr('class').includes('circle')){
				console.log('circle win!');
			} else if ($('#one').attr('class').includes('light') && $('#two').attr('class').includes('light')){
				console.log('light win!');	
			} else if ($('#one').attr('class').includes('big') && $('#two').attr('class').includes('big')){
				console.log('big win!');
			} else if ($('#one').attr('class').includes('small') && $('#two').attr('class').includes('small')){
				console.log('small win!');
			}
		}	
		// two and four
		if (spotsInPlayId.includes('two') === true &&  spotsInPlayId.includes('four') === true){
		console.log('numbers two and four');
			if($('#two').attr('class').includes('dark') && $('#four').attr('class').includes('dark')) {
				console.log('dark win!');
			} else if ($('#one').attr('class').includes('square') && $('#four').attr('class').includes('square')){
				console.log('square win!');
			} else if ($('#two').attr('class').includes('circle') && $('#four').attr('class').includes('circle')){
				console.log('circle win!');
			} else if ($('#two').attr('class').includes('light') && $('#four').attr('class').includes('light')){
				console.log('light win!');	
			} else if ($('#two').attr('class').includes('big') && $('#four').attr('class').includes('big')){
				console.log('big win!');
			} else if ($('#two').attr('class').includes('small') && $('#four').attr('class').includes('small')){
				console.log('small win!');
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

	// when a win is determined the winning pieces need to be highlighted, maybe a modal to announce it
	// Possible ways to win:
	// 1 3
	// 3 4
	// 1 2
	// 2 4
	
	// Qualitites to check to win;
	// big
	// small
	// square
	// circle
	// dark
	// light

$('#A').on('click', selectPiece);

$('#B').on('click', selectPiece);

$('#C').on('click', selectPiece);

$('#D').on('click', selectPiece);



$('#one').on('click', choosePlacement);

$('#two').on('click', choosePlacement);

$('#three').on('click', choosePlacement);

$('#four').on('click', choosePlacement);

	