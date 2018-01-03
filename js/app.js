console.log('Connected!')

let currentPiece = '';
const spotsInPlayId = [];
const spotOne = $('#one');
const spotTwo = $('#two');
const spotThree = $('#three');
const spotFour = $('#four');
const spotFive = $('#five');
const spotSix = $('#six')
const spotSeven = $('#seven')
const spotEight = $('#eight')
const spotNine = $('#nine')
const spotTen = $('#ten')
const spotEleven = $('#eleven')
const spotTwelve = $('#twelve')
const spotThirteen = $('#thirteen')
const spotFourteen = $('#fourteen')
const spotFifteen = $('#fifteen')
const spotSixteen = $('#sixteen')

function selectPiece(evt){
	// when the user selects a piece, highlight it by changing the border to salmon
	if($(evt.currentTarget).css('border') === '1px solid rgb(0, 0, 0)'){
		$(evt.currentTarget).css('border', '6px solid #EB9486')
		currentPiece = evt.currentTarget;
		// console.log($(evt.currentTarget).css('border'))
		// if the border is salmon and the user clicks again, change it back to black to deselect
	} else if ($(evt.currentTarget).css('border') === '6px solid rgb(235, 148, 134)'){
		$(evt.currentTarget).css('border', '1px solid rgb(0, 0, 0)')
		currentPiece = '';
	};
	// console.log(this);
};

// the pseudocode and notes on how this works are inside of 'mini.js'
// checkWinner function will run through all possible win combinations ON EACH CLICK ON THE BOARD***
function checkWinner(){
	// this is me figuring stuff out:
	// // what type of data is spotsInPlay
	// console.log(typeof spotsInPlay[i]);
	// // what info lives in there? Where is the class?
	// console.log(spotsInPlay[i]);
	// // get the classes of the spotsInPlay
	// console.log($(spotsInPlay)[i].attr('class'));
	// console.log($(spotsInPlay)[i].attr('class').includes('hole'))
	function compareQualities(spot1, spot2, spot3, spot4, quality){
		return $(spot1).attr('class').includes(quality) && $(spot2).attr('class').includes(quality) && $(spot3).attr('class').includes(quality) && $(spot4).attr('class').includes(quality)
	};

	function highlightWin(spot1, spot2, spot3, spot4){
		spot1.children().css('border', '6px solid rgb(235, 148, 134)');
		spot2.children().css('border', '6px solid rgb(235, 148, 134)');
		spot3.children().css('border', '6px solid rgb(235, 148, 134)');
		spot4.children().css('border', '6px solid rgb(235, 148, 134)');
	};
	
	for(let i = 0; i < spotsInPlayId.length; i++){
	// 1 3 6 10
		if(spotsInPlayId.includes('one') === true &&  spotsInPlayId.includes('three') === true && spotsInPlayId.includes('six') === true && spotsInPlayId.includes('ten') === true){
			console.log('numbers 1 3 6 10');
			if(compareQualities(spotOne, spotThree, spotSix, spotTen, 'dark')) {
				highlightWin(spotOne, spotThree, spotSix, spotTen);
				// have to return to exit the loop
				return 'dark win!';
			} else if (compareQualities(spotOne, spotThree, spotSix, spotTen, 'square')){
				// console.log('square win!');
				highlightWin(spotOne, spotThree, spotSix, spotTen);
				return 'square win!'
			} else if (compareQualities(spotOne, spotThree, spotSix, spotTen, 'circle')){
				// console.log('circle win!');
				highlightWin(spotOne, spotThree, spotSix, spotTen);
				return 'circle win!'
			} else if (compareQualities(spotOne, spotThree, spotSix, spotTen, 'light')){
				// console.log('light win!');
				highlightWin(spotOne, spotThree, spotSix, spotTen);
				return 'light win!'	
			} else if (compareQualities(spotOne, spotThree, spotSix, spotTen, 'big')){
				// console.log('big win!');
				highlightWin(spotOne, spotThree, spotSix, spotTen);
				return 'big win!'
			} else if (compareQualities(spotOne, spotThree, spotSix, spotTen, 'small')){
				// console.log('small win!');
				highlightWin(spotOne, spotThree, spotSix, spotTen);
				return 'small win!'
			} else if (compareQualities(spotOne, spotThree, spotSix, spotTen, 'hole')){
				highlightWin(spotOne, spotThree, spotSix, spotTen);
				return 'hole win!'
			}else if (compareQualities(spotOne, spotThree, spotSix, spotTen, 'smooth')){
				highlightWin(spotOne, spotThree, spotSix, spotTen);
				return 'smooth win!'
			}
		}

		// 1 2 4 7
		if(spotsInPlayId.includes('one') === true &&  spotsInPlayId.includes('two') === true && spotsInPlayId.includes('four') === true && spotsInPlayId.includes('seven') === true){
			console.log('numbers 1 2 4 7');
			if(compareQualities(spotOne, spotTwo, spotFour, spotSeven, 'dark')) {
				highlightWin(spotOne, spotTwo, spotFour, spotSeven);
				// have to return to exit the loop
				return 'dark win!';
			} else if (compareQualities(spotOne, spotTwo, spotFour, spotSeven, 'square')){
				// console.log('square win!');
				highlightWin(spotOne, spotTwo, spotFour, spotSeven);
				return 'square win!'
			} else if (compareQualities(spotOne, spotTwo, spotFour, spotSeven, 'circle')){
				// console.log('circle win!');
				highlightWin(spotOne, spotTwo, spotFour, spotSeven);
				return 'circle win!'
			} else if (compareQualities(spotOne, spotTwo, spotFour, spotSeven, 'light')){
				// console.log('light win!');
				highlightWin(spotOne, spotTwo, spotFour, spotSeven);
				return 'light win!'	
			} else if (compareQualities(spotOne, spotTwo, spotFour, spotSeven, 'big')){
				// console.log('big win!');
				highlightWin(spotOne, spotTwo, spotFour, spotSeven);
				return 'big win!'
			} else if (compareQualities(spotOne, spotTwo, spotFour, spotSeven, 'small')){
				// console.log('small win!');
				highlightWin(spotOne, spotTwo, spotFour, spotSeven);
				return 'small win!'
			} else if (compareQualities(spotOne, spotTwo, spotFour, spotSeven, 'hole')){
				highlightWin(spotOne, spotTwo, spotFour, spotSeven);
				return 'hole win!'
			}else if (compareQualities(spotOne, spotTwo, spotFour, spotSeven, 'smooth')){
				highlightWin(spotOne, spotTwo, spotFour, spotSeven);
				return 'smooth win!'
			}
		}
	}				

// Possible ways to win:
// 10 13 15 16
// 7 11 14 16
// 1 5 12 16
// 7 8 9 10
// 3 5 8 11
// 6 9 12 14
// 4 8 12 15
// 2 5 9 13

// Qualitites to check to win;
// big
// small
// square
// circle
// hole 
// flat
// dark
// light
// --make these all classes

};

// when the piece is selected it is passed into a function as an argument
// *when piece is moved the inner circle color needs to be changed to white

// the second argument for that function will be the place on the board that the piece is going to
function choosePlacement(gamePiece, spotOnBoard){
	// grab the selected gamePiece
	gamePiece = currentPiece;
	// console.log(gamePiece);
	$(gamePiece).css('border', '1px solid rgb(0, 0, 0)');
	$(gamePiece).children().css('background-color', '#F9F8F8');
	// grab the selected spot
	// console.log(this)
	spotOnBoard = this;
	// append the gamePiece to the spot
	$(gamePiece).appendTo($(spotOnBoard));
	// add the class of the game piece to the spot (classes will be checked by checkWinner)
	// console.log($(gamePiece).attr('class'))
	$(spotOnBoard).addClass($(gamePiece).attr('class'));
	spotsInPlayId.push($(spotOnBoard).attr('id'));
	checkWinner();
};

// GAME PIECES:
// each game piece div needs an event listener
// on the click the piece will be highlighted (salmon color)
//  -- this will need to be a function that toggles the border?
$('#A').on('click', selectPiece);

$('#B').on('click', selectPiece);

$('#C').on('click', selectPiece);

$('#D').on('click', selectPiece);

$('#E').on('click', selectPiece);

$('#F').on('click', selectPiece);

$('#G').on('click', selectPiece);

$('#H').on('click', selectPiece);

$('#I').on('click', selectPiece);

$('#J').on('click', selectPiece);

$('#K').on('click', selectPiece);

$('#L').on('click', selectPiece);

$('#M').on('click', selectPiece);

$('#N').on('click', selectPiece);

$('#O').on('click', selectPiece);

$('#P').on('click', selectPiece);

// SPOTS ON THE BOARD:
// each spot on the board needs an event listener
spotOne.on('click', choosePlacement);

spotTwo.on('click', choosePlacement);

spotThree.on('click', choosePlacement);

spotFour.on('click', choosePlacement);

spotFive.on('click', choosePlacement);

spotSix.on('click', choosePlacement);

spotSeven.on('click', choosePlacement);

spotEight.on('click', choosePlacement);

spotNine.on('click', choosePlacement);

spotTen.on('click', choosePlacement);

spotEleven.on('click', choosePlacement);

spotTwelve.on('click', choosePlacement);

spotThirteen.on('click', choosePlacement);

spotFourteen.on('click', choosePlacement);

spotFifteen.on('click', choosePlacement);

spotSixteen.on('click', choosePlacement);


/*
How to make it so that more than one piece can't be selected at a time?

need to make sure that more than one piece can't be selected: so they can select one, and deselect it, but not have mutliple selected at a time

pieces can still be moved when placed on the board! Need to make them unclickable once they are placed. 

after win new game button will reset the board and move pieces back to their container

GAME LOGIC:

Possible ways to win:
1 3 6 10
1 2 4 7
10 13 15 16
7 11 14 16
1 5 12 16
7 8 9 10
3 5 8 11
6 9 12 14
4 8 12 15
2 5 9 13

Qualitites to check to win;
big
small
square
circle
hole 
smooth
dark
light
--make these all classes
*/