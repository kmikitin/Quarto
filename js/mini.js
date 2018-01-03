console.log('Connected!')

let currentPiece = '';
const spotsInPlay = [];

function selectPiece(evt){
	if($(evt.currentTarget).css('border') === '1px solid rgb(0, 0, 0)'){
		$(evt.currentTarget).css('border', '6px solid #EB9486')
		currentPiece = evt.currentTarget;
	} else if ($(evt.currentTarget).css('border') === '6px solid rgb(235, 148, 134)'){
		$(evt.currentTarget).css('border', '1px solid rgb(0, 0, 0)')
		currentPiece = '';
	};
};

$('#A').on('click', selectPiece);

$('#B').on('click', selectPiece);

$('#C').on('click', selectPiece);

$('#D').on('click', selectPiece);

function choosePlacement(gamePiece, spotOnBoard){
	gamePiece = currentPiece;
	$(gamePiece).css('border', '1px solid rgb(0, 0, 0)');
	$(gamePiece).children().css('background-color', '#F9F8F8');
	spotOnBoard = this;
	$(gamePiece).appendTo($(spotOnBoard));
	$(spotOnBoard).addClass($(gamePiece).attr('class'));
	spotsInPlay.push($(spotOnBoard));
}

$('#one').on('click', choosePlacement);

$('#two').on('click', choosePlacement);

$('#three').on('click', choosePlacement);

$('#four').on('click', choosePlacement);