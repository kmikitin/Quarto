console.log('Connected!')

// GAME PIECES:
// each game piece div needs an event listener
// on the click the piece will be highlighted (salmon color)
//  -- this will need to be a function that toggles the border?

function changeBorder(evt){
	if($(evt.currentTarget).css('border') === '1px solid rgb(0, 0, 0)'){
		$(evt.currentTarget).css('border', '6px solid #EB9486')
		// console.log($(evt.currentTarget).css('border'))
		// if the border is salmon and the user clicks again, change it back to black to deselect
	} else if ($(evt.currentTarget).css('border') === '6px solid rgb(235, 148, 134)'){
		$(evt.currentTarget).css('border', '1px solid rgb(0, 0, 0)')
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


}

// SPOTS ON THE BOARD:
// each spot on the board needs an event listener
$('#one').on('click', (evt)=>{
	console.log('clicked!');
	console.log(evt.currentTarget);
	$('#A').css('border', '1px solid rgb(0, 0, 0)');
	$(evt.currentTarget).append($('#A'));
	console.log(this)
})

$('#eight').on('click', (evt)=>{
	$(evt.currentTarget).append($('#P'));
})

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