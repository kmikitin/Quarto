console.log('Connected!')

// GAME PIECES:
// each game piece div needs an event listener
// on the click the piece will be highlighted (salmon color)
//  -- this will need to be a function that toggles the border?

let currentPiece = '';

function changeBorder(evt){
	if($(evt.currentTarget).css('border') === '1px solid rgb(0, 0, 0)'){
		$(evt.currentTarget).css('border', '6px solid #EB9486')
		currentPiece = evt.currentTarget;
		// console.log($(evt.currentTarget).css('border'))
		// if the border is salmon and the user clicks again, change it back to black to deselect
	} else if ($(evt.currentTarget).css('border') === '6px solid rgb(235, 148, 134)'){
		$(evt.currentTarget).css('border', '1px solid rgb(0, 0, 0)')
		currentPiece = '';
	}
	console.log(this)
}

$('#A').on('click', changeBorder);

$('#B').on('click', changeBorder);

$('#C').on('click', changeBorder);

$('#D').on('click', changeBorder);

$('#E').on('click', changeBorder);

$('#F').on('click', changeBorder);

$('#G').on('click', changeBorder);

$('#H').on('click', changeBorder);

$('#I').on('click', changeBorder);

$('#J').on('click', changeBorder);

$('#K').on('click', changeBorder);

$('#L').on('click', changeBorder);

$('#M').on('click', changeBorder);

$('#N').on('click', changeBorder);

$('#O').on('click', changeBorder);

$('#P').on('click', changeBorder);

// when the piece is selected it is passed into a function as an argument
// *when piece is moved the inner circle color needs to be changed to white

// the second argument for that function will be the place on the board that the piece is going to
function choosePlacement(gamePiece, spotOnBoard){
	// grab the selected gamePiece
	gamePiece = currentPiece;
	console.log(gamePiece);
	$(gamePiece).css('border', '1px solid rgb(0, 0, 0)');
	// grab the selected spot
	console.log(this)
	spotOnBoard = this;
	// append the gamePiece to the spot
	$(gamePiece).appendTo($(spotOnBoard));
	// add the class of the game piece to the spot (classes will be checked by checkWinner)

}

// SPOTS ON THE BOARD:
// each spot on the board needs an event listener
$('#one').on('click', choosePlacement);

$('#two').on('click', choosePlacement);

$('#three').on('click', choosePlacement);

$('#four').on('click', choosePlacement);

$('#five').on('click', choosePlacement);

$('#six').on('click', choosePlacement);

$('#seven').on('click', choosePlacement);

$('#eight').on('click', choosePlacement);

$('#nine').on('click', choosePlacement);

$('#ten').on('click', choosePlacement);

$('#eleven').on('click', choosePlacement);

$('#twelve').on('click', choosePlacement);

$('#thirteen').on('click', choosePlacement);

$('#fourteen').on('click', choosePlacement);

$('#fifteen').on('click', choosePlacement);

$('#sixteen').on('click', choosePlacement);

function checkWinner(){

}


/*


need to make sure that more than one piece can't be selected: so they can select one, and deselect it, but not have mutliple selected at a time

checkWinner function will run through all possible win combinations ON EACH CLICK ON THE BOARD***

when a win is determined the winning pieces need to be highlighted, maybe a modal to announce it

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
flat
--make these all classes

How/what is the computer checking??
Append the classes of the incoming piece to the spot it's in?

How to make it so that more than one piece can't be selected at a time?
*/