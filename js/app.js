console.log('Connected!')

let currentPiece = '';
let spotsInPlayId = [];
const spotOne = $('#one');
const spotTwo = $('#two');
const spotThree = $('#three');
const spotFour = $('#four');
const spotFive = $('#five');
const spotSix = $('#six');
const spotSeven = $('#seven');
const spotEight = $('#eight');
const spotNine = $('#nine');
const spotTen = $('#ten');
const spotEleven = $('#eleven');
const spotTwelve = $('#twelve');
const spotThirteen = $('#thirteen');
const spotFourteen = $('#fourteen');
const spotFifteen = $('#fifteen');
const spotSixteen = $('#sixteen');
const theModal = $('.modal');
const modalText = $('.modal-text');

function selectPiece(evt){
	// when the user selects a piece, highlight it by changing the border to salmon
	if($(evt.currentTarget).css('border') === '1px solid rgb(0, 0, 0)'){
		$(evt.currentTarget).css('border', '6px solid rgb(235, 148, 134)')
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

	function showModal(quality){
		modalText.text('Four ' + quality + ' in a row, you win!');
		theModal.css('display', 'block');
		$('.modal-overlay').css('display', 'block');
		$('#close-modal').remove();
	};
	
	for(let i = 0; i < spotsInPlayId.length; i++){
	// 1 3 6 10
		if(spotsInPlayId.includes('one') === true &&  spotsInPlayId.includes('three') === true && spotsInPlayId.includes('six') === true && spotsInPlayId.includes('ten') === true){
			console.log('numbers 1 3 6 10');
			if(compareQualities(spotOne, spotThree, spotSix, spotTen, 'dark')) {
				highlightWin(spotOne, spotThree, spotSix, spotTen);
				showModal('purple pieces');
				// have to return to exit the loop
				return 'dark win!';
			} else if (compareQualities(spotOne, spotThree, spotSix, spotTen, 'square')){
				// console.log('square win!');
				highlightWin(spotOne, spotThree, spotSix, spotTen);
				showModal('square pieces');
				return 'square win!'
			} else if (compareQualities(spotOne, spotThree, spotSix, spotTen, 'circle')){
				// console.log('circle win!');
				highlightWin(spotOne, spotThree, spotSix, spotTen);
				showModal('circle pieces');
				return 'circle win!'
			} else if (compareQualities(spotOne, spotThree, spotSix, spotTen, 'light')){
				// console.log('light win!');
				highlightWin(spotOne, spotThree, spotSix, spotTen);
				showModal('yellow pieces');
				return 'light win!'	
			} else if (compareQualities(spotOne, spotThree, spotSix, spotTen, 'big')){
				// console.log('big win!');
				highlightWin(spotOne, spotThree, spotSix, spotTen);
				showModal('big pieces');
				return 'big win!'
			} else if (compareQualities(spotOne, spotThree, spotSix, spotTen, 'small')){
				// console.log('small win!');
				highlightWin(spotOne, spotThree, spotSix, spotTen);
				showModal('small pieces');
				return 'small win!'
			} else if (compareQualities(spotOne, spotThree, spotSix, spotTen, 'hole')){
				highlightWin(spotOne, spotThree, spotSix, spotTen);
				showModal('hollow pieces');
				return 'hole win!'
			}else if (compareQualities(spotOne, spotThree, spotSix, spotTen, 'smooth')){
				highlightWin(spotOne, spotThree, spotSix, spotTen);
				showModal('smooth pieces');
				return 'smooth win!'
			}
		}

		// 1 2 4 7
		if(spotsInPlayId.includes('one') === true &&  spotsInPlayId.includes('two') === true && spotsInPlayId.includes('four') === true && spotsInPlayId.includes('seven') === true){
			console.log('numbers 1 2 4 7');
			if(compareQualities(spotOne, spotTwo, spotFour, spotSeven, 'dark')) {
				highlightWin(spotOne, spotTwo, spotFour, spotSeven);
				showModal('purple pieces')
				// have to return to exit the loop
				return 'dark win!';
			} else if (compareQualities(spotOne, spotTwo, spotFour, spotSeven, 'square')){
				// console.log('square win!');
				highlightWin(spotOne, spotTwo, spotFour, spotSeven);
				showModal('square pieces');
				return 'square win!'
			} else if (compareQualities(spotOne, spotTwo, spotFour, spotSeven, 'circle')){
				// console.log('circle win!');
				highlightWin(spotOne, spotTwo, spotFour, spotSeven);
				showModal('circle pieces');
				return 'circle win!'
			} else if (compareQualities(spotOne, spotTwo, spotFour, spotSeven, 'light')){
				// console.log('light win!');
				highlightWin(spotOne, spotTwo, spotFour, spotSeven);
				showModal('yellow pieces');
				return 'light win!'	
			} else if (compareQualities(spotOne, spotTwo, spotFour, spotSeven, 'big')){
				// console.log('big win!');
				highlightWin(spotOne, spotTwo, spotFour, spotSeven);
				showModal('big pieces');
				return 'big win!'
			} else if (compareQualities(spotOne, spotTwo, spotFour, spotSeven, 'small')){
				// console.log('small win!');
				highlightWin(spotOne, spotTwo, spotFour, spotSeven);
				showModal('small pieces');
				return 'small win!'
			} else if (compareQualities(spotOne, spotTwo, spotFour, spotSeven, 'hole')){
				highlightWin(spotOne, spotTwo, spotFour, spotSeven);
				showModal('hollow pieces');
				return 'hole win!'
			}else if (compareQualities(spotOne, spotTwo, spotFour, spotSeven, 'smooth')){
				highlightWin(spotOne, spotTwo, spotFour, spotSeven);
				showModal('smooth pieces');
				return 'smooth win!'
			}
		}

		// 10 13 15 16
		if(spotsInPlayId.includes('ten') === true &&  spotsInPlayId.includes('thirteen') === true && spotsInPlayId.includes('fifteen') === true && spotsInPlayId.includes('sixteen') === true){
			console.log('numbers 10 13 15 16');
			if(compareQualities(spotTen, spotThirteen, spotFifteen, spotSixteen, 'dark')) {
				highlightWin(spotTen, spotThirteen, spotFifteen, spotSixteen);
				showModal('purple pieces');
				// have to return to exit the loop
				return 'dark win!';
			} else if (compareQualities(spotTen, spotThirteen, spotFifteen, spotSixteen, 'square')){
				// console.log('square win!');
				highlightWin(spotTen, spotThirteen, spotFifteen, spotSixteen);
				showModal('square pieces');
				return 'square win!'
			} else if (compareQualities(spotTen, spotThirteen, spotFifteen, spotSixteen, 'circle')){
				// console.log('circle win!');
				highlightWin(spotTen, spotThirteen, spotFifteen, spotSixteen);
				showModal('circle pieces');
				return 'circle win!'
			} else if (compareQualities(spotTen, spotThirteen, spotFifteen, spotSixteen, 'light')){
				// console.log('light win!');
				highlightWin(spotTen, spotThirteen, spotFifteen, spotSixteen);
				showModal('yellow pieces');
				return 'light win!'	
			} else if (compareQualities(spotTen, spotThirteen, spotFifteen, spotSixteen, 'big')){
				// console.log('big win!');
				highlightWin(spotTen, spotThirteen, spotFifteen, spotSixteen);
				showModal('big pieces');
				return 'big win!'
			} else if (compareQualities(spotTen, spotThirteen, spotFifteen, spotSixteen, 'small')){
				// console.log('small win!');
				highlightWin(spotTen, spotThirteen, spotFifteen, spotSixteen);
				showModal('small pieces');
				return 'small win!'
			} else if (compareQualities(spotTen, spotThirteen, spotFifteen, spotSixteen, 'hole')){
				highlightWin(spotTen, spotThirteen, spotFifteen, spotSixteen);
				showModal('hollow pieces');
				return 'hole win!'
			}else if (compareQualities(spotTen, spotThirteen, spotFifteen, spotSixteen, 'smooth')){
				highlightWin(spotTen, spotThirteen, spotFifteen, spotSixteen);
				showModal('smooth pieces');
				return 'smooth win!'
			}
		}

		// 7 11 14 16
		if(spotsInPlayId.includes('seven') === true &&  spotsInPlayId.includes('eleven') === true && spotsInPlayId.includes('fourteen') === true && spotsInPlayId.includes('sixteen') === true){
			console.log('numbers 7 11 14 16');
			if(compareQualities(spotSeven, spotEleven, spotFourteen, spotSixteen, 'dark')) {
				highlightWin(spotSeven, spotEleven, spotFourteen, spotSixteen);
				showModal('purple pieces');
				// have to return to exit the loop
				return 'dark win!';
			} else if (compareQualities(spotSeven, spotEleven, spotFourteen, spotSixteen, 'square')){
				// console.log('square win!');
				highlightWin(spotSeven, spotEleven, spotFourteen, spotSixteen);
				showModal('square pieces');
				return 'square win!'
			} else if (compareQualities(spotSeven, spotEleven, spotFourteen, spotSixteen, 'circle')){
				// console.log('circle win!');
				highlightWin(spotSeven, spotEleven, spotFourteen, spotSixteen);
				showModal('circle pieces');
				return 'circle win!'
			} else if (compareQualities(spotSeven, spotEleven, spotFourteen, spotSixteen, 'light')){
				// console.log('light win!');
				highlightWin(spotSeven, spotEleven, spotFourteen, spotSixteen);
				showModal('yellow pieces');
				return 'light win!'	
			} else if (compareQualities(spotSeven, spotEleven, spotFourteen, spotSixteen, 'big')){
				// console.log('big win!');
				highlightWin(spotSeven, spotEleven, spotFourteen, spotSixteen);
				showModal('big pieces');
				return 'big win!'
			} else if (compareQualities(spotSeven, spotEleven, spotFourteen, spotSixteen, 'small')){
				// console.log('small win!');
				highlightWin(spotSeven, spotEleven, spotFourteen, spotSixteen);
				showModal('small pieces');
				return 'small win!'
			} else if (compareQualities(spotSeven, spotEleven, spotFourteen, spotSixteen, 'hole')){
				highlightWin(spotSeven, spotEleven, spotFourteen, spotSixteen);
				showModal('hollow pieces');
				return 'hole win!'
			}else if (compareQualities(spotSeven, spotEleven, spotFourteen, spotSixteen, 'smooth')){
				highlightWin(spotSeven, spotEleven, spotFourteen, spotSixteen);
				showModal('smooth pieces');
				return 'smooth win!'
			}
		}

		// 1 5 12 16
		if(spotsInPlayId.includes('one') === true &&  spotsInPlayId.includes('five') === true && spotsInPlayId.includes('twelve') === true && spotsInPlayId.includes('sixteen') === true){
			console.log('numbers 1 5 12 16');
			if(compareQualities(spotOne, spotFive, spotTwelve, spotSixteen, 'dark')) {
				highlightWin(spotOne, spotFive, spotTwelve, spotSixteen);
				showModal('purple pieces');
				// have to return to exit the loop
				return 'dark win!';
			} else if (compareQualities(spotOne, spotFive, spotTwelve, spotSixteen, 'square')){
				// console.log('square win!');
				highlightWin(spotOne, spotFive, spotTwelve, spotSixteen);
				showModal('square pieces');
				return 'square win!'
			} else if (compareQualities(spotOne, spotFive, spotTwelve, spotSixteen, 'circle')){
				// console.log('circle win!');
				highlightWin(spotOne, spotFive, spotTwelve, spotSixteen);
				showModal('circle pieces');
				return 'circle win!'
			} else if (compareQualities(spotOne, spotFive, spotTwelve, spotSixteen, 'light')){
				// console.log('light win!');
				highlightWin(spotOne, spotFive, spotTwelve, spotSixteen);
				showModal('yellow pieces');
				return 'light win!'	
			} else if (compareQualities(spotOne, spotFive, spotTwelve, spotSixteen, 'big')){
				// console.log('big win!');
				highlightWin(spotOne, spotFive, spotTwelve, spotSixteen);
				showModal('big pieces');
				return 'big win!'
			} else if (compareQualities(spotOne, spotFive, spotTwelve, spotSixteen, 'small')){
				// console.log('small win!');
				highlightWin(spotOne, spotFive, spotTwelve, spotSixteen);
				showModal('small pieces');
				return 'small win!'
			} else if (compareQualities(spotOne, spotFive, spotTwelve, spotSixteen, 'hole')){
				highlightWin(spotOne, spotFive, spotTwelve, spotSixteen);
				showModal('hollow pieces');
				return 'hole win!'
			}else if (compareQualities(spotOne, spotFive, spotTwelve, spotSixteen, 'smooth')){
				highlightWin(spotOne, spotFive, spotTwelve, spotSixteen);
				showModal('smooth pieces');
				return 'smooth win!'
			}
		}

		// 7 8 9 10
		if(spotsInPlayId.includes('seven') === true &&  spotsInPlayId.includes('eight') === true && spotsInPlayId.includes('nine') === true && spotsInPlayId.includes('ten') === true){
			console.log('numbers 7 8 9 10');
			if(compareQualities(spotSeven, spotEight, spotNine, spotTen, 'dark')) {
				highlightWin(spotSeven, spotEight, spotNine, spotTen);
				showModal('purple pieces');
				// have to return to exit the loop
				return 'dark win!';
			} else if (compareQualities(spotSeven, spotEight, spotNine, spotTen, 'square')){
				// console.log('square win!');
				highlightWin(spotSeven, spotEight, spotNine, spotTen);
				showModal('square pieces');
				return 'square win!'
			} else if (compareQualities(spotSeven, spotEight, spotNine, spotTen, 'circle')){
				// console.log('circle win!');
				highlightWin(spotSeven, spotEight, spotNine, spotTen);
				showModal('circle pieces');
				return 'circle win!'
			} else if (compareQualities(spotSeven, spotEight, spotNine, spotTen, 'light')){
				// console.log('light win!');
				highlightWin(spotSeven, spotEight, spotNine, spotTen);
				showModal('yellow pieces');
				return 'light win!'	
			} else if (compareQualities(spotSeven, spotEight, spotNine, spotTen, 'big')){
				// console.log('big win!');
				highlightWin(spotSeven, spotEight, spotNine, spotTen);
				showModal('big pieces');
				return 'big win!'
			} else if (compareQualities(spotSeven, spotEight, spotNine, spotTen, 'small')){
				// console.log('small win!');
				highlightWin(spotSeven, spotEight, spotNine, spotTen);
				showModal('small pieces');
				return 'small win!'
			} else if (compareQualities(spotSeven, spotEight, spotNine, spotTen, 'hole')){
				highlightWin(spotSeven, spotEight, spotNine, spotTen);
				showModal('hollow pieces');
				return 'hole win!'
			}else if (compareQualities(spotSeven, spotEight, spotNine, spotTen, 'smooth')){
				highlightWin(spotSeven, spotEight, spotNine, spotTen);
				showModal('smooth pieces');
				return 'smooth win!'
			}
		}

		// 3 5 8 11
		if(spotsInPlayId.includes('three') === true &&  spotsInPlayId.includes('five') === true && spotsInPlayId.includes('eight') === true && spotsInPlayId.includes('eleven') === true){
			console.log('numbers 3 5 8 11');
			if(compareQualities(spotThree, spotFive, spotEight, spotEleven, 'dark')) {
				highlightWin(spotThree, spotFive, spotEight, spotEleven);
				showModal('purple pieces');
				// have to return to exit the loop
				return 'dark win!';
			} else if (compareQualities(spotThree, spotFive, spotEight, spotEleven, 'square')){
				// console.log('square win!');
				highlightWin(spotThree, spotFive, spotEight, spotEleven);
				showModal('square pieces');
				return 'square win!'
			} else if (compareQualities(spotThree, spotFive, spotEight, spotEleven, 'circle')){
				// console.log('circle win!');
				highlightWin(spotThree, spotFive, spotEight, spotEleven);
				showModal('circle pieces');
				return 'circle win!'
			} else if (compareQualities(spotThree, spotFive, spotEight, spotEleven, 'light')){
				// console.log('light win!');
				highlightWin(spotThree, spotFive, spotEight, spotEleven);
				showModal('yellow pieces');
				return 'light win!'	
			} else if (compareQualities(spotThree, spotFive, spotEight, spotEleven, 'big')){
				// console.log('big win!');
				highlightWin(spotThree, spotFive, spotEight, spotEleven);
				showModal('big pieces');
				return 'big win!'
			} else if (compareQualities(spotThree, spotFive, spotEight, spotEleven, 'small')){
				// console.log('small win!');
				highlightWin(spotThree, spotFive, spotEight, spotEleven);
				showModal('small pieces');
				return 'small win!'
			} else if (compareQualities(spotThree, spotFive, spotEight, spotEleven, 'hole')){
				highlightWin(spotThree, spotFive, spotEight, spotEleven);
				showModal('hollow pieces');
				return 'hole win!'
			}else if (compareQualities(spotThree, spotFive, spotEight, spotEleven, 'smooth')){
				highlightWin(spotThree, spotFive, spotEight, spotEleven);
				showModal('smooth pieces');
				return 'smooth win!'
			}
		}

		// 6 9 12 14
		if(spotsInPlayId.includes('six') === true &&  spotsInPlayId.includes('nine') === true && spotsInPlayId.includes('twelve') === true && spotsInPlayId.includes('fourteen') === true){
			console.log('numbers 6 9 12 14');
			if(compareQualities(spotSix, spotNine, spotTwelve, spotFourteen, 'dark')) {
				highlightWin(spotSix, spotNine, spotTwelve, spotFourteen);
				showModal('purple pieces');
				// have to return to exit the loop
				return 'dark win!';
			} else if (compareQualities(spotSix, spotNine, spotTwelve, spotFourteen, 'square')){
				// console.log('square win!');
				highlightWin(spotSix, spotNine, spotTwelve, spotFourteen);
				showModal('square pieces');
				return 'square win!'
			} else if (compareQualities(spotSix, spotNine, spotTwelve, spotFourteen, 'circle')){
				// console.log('circle win!');
				highlightWin(spotSix, spotNine, spotTwelve, spotFourteen);
				showModal('circle pieces');
				return 'circle win!'
			} else if (compareQualities(spotSix, spotNine, spotTwelve, spotFourteen, 'light')){
				// console.log('light win!');
				highlightWin(spotSix, spotNine, spotTwelve, spotFourteen);
				showModal('yellow pieces');
				return 'light win!'	
			} else if (compareQualities(spotSix, spotNine, spotTwelve, spotFourteen, 'big')){
				// console.log('big win!');
				highlightWin(spotSix, spotNine, spotTwelve, spotFourteen);
				showModal('big pieces');
				return 'big win!'
			} else if (compareQualities(spotSix, spotNine, spotTwelve, spotFourteen, 'small')){
				// console.log('small win!');
				highlightWin(spotSix, spotNine, spotTwelve, spotFourteen);
				showModal('small pieces');
				return 'small win!'
			} else if (compareQualities(spotSix, spotNine, spotTwelve, spotFourteen, 'hole')){
				highlightWin(spotSix, spotNine, spotTwelve, spotFourteen);
				showModal('hollow pieces');
				return 'hole win!'
			}else if (compareQualities(spotSix, spotNine, spotTwelve, spotFourteen, 'smooth')){
				highlightWin(spotSix, spotNine, spotTwelve, spotFourteen);
				showModal('smooth pieces');
				return 'smooth win!'
			}
		}

		// 4 8 12 15
		if(spotsInPlayId.includes('four') === true &&  spotsInPlayId.includes('eight') === true && spotsInPlayId.includes('twelve') === true && spotsInPlayId.includes('fifteen') === true){
			console.log('numbers 4 8 12 15');
			if(compareQualities(spotFour, spotEight, spotTwelve, spotFifteen, 'dark')) {
				highlightWin(spotFour, spotEight, spotTwelve, spotFifteen);
				showModal('purple pieces');
				// have to return to exit the loop
				return 'dark win!';
			} else if (compareQualities(spotFour, spotEight, spotTwelve, spotFifteen, 'square')){
				// console.log('square win!');
				highlightWin(spotFour, spotEight, spotTwelve, spotFifteen);
				showModal('square pieces');
				return 'square win!'
			} else if (compareQualities(spotFour, spotEight, spotTwelve, spotFifteen, 'circle')){
				// console.log('circle win!');
				highlightWin(spotFour, spotEight, spotTwelve, spotFifteen);
				showModal('circle pieces');
				return 'circle win!'
			} else if (compareQualities(spotFour, spotEight, spotTwelve, spotFifteen, 'light')){
				// console.log('light win!');
				highlightWin(spotFour, spotEight, spotTwelve, spotFifteen);
				showModal('yellow pieces');
				return 'light win!'	
			} else if (compareQualities(spotFour, spotEight, spotTwelve, spotFifteen, 'big')){
				// console.log('big win!');
				highlightWin(spotFour, spotEight, spotTwelve, spotFifteen);
				showModal('big pieces');
				return 'big win!'
			} else if (compareQualities(spotFour, spotEight, spotTwelve, spotFifteen, 'small')){
				// console.log('small win!');
				highlightWin(spotFour, spotEight, spotTwelve, spotFifteen);
				showModal('small pieces');
				return 'small win!'
			} else if (compareQualities(spotFour, spotEight, spotTwelve, spotFifteen, 'hole')){
				highlightWin(spotFour, spotEight, spotTwelve, spotFifteen);
				showModal('hollow pieces');
				return 'hole win!'
			}else if (compareQualities(spotFour, spotEight, spotTwelve, spotFifteen, 'smooth')){
				highlightWin(spotFour, spotEight, spotTwelve, spotFifteen);
				showModal('smooth pieces');
				return 'smooth win!'
			}
		}

		// 2 5 9 13
		if(spotsInPlayId.includes('two') === true &&  spotsInPlayId.includes('five') === true && spotsInPlayId.includes('nine') === true && spotsInPlayId.includes('thirteen') === true){
			console.log('numbers 2 5 9 13');
			if(compareQualities(spotTwo, spotFive, spotNine, spotThirteen, 'dark')) {
				highlightWin(spotTwo, spotFive, spotNine, spotThirteen);
				showModal('purple pieces');
				// have to return to exit the loop
				return 'dark win!';
			} else if (compareQualities(spotTwo, spotFive, spotNine, spotThirteen, 'square')){
				// console.log('square win!');
				highlightWin(spotTwo, spotFive, spotNine, spotThirteen);
				showModal('square pieces');
				return 'square win!'
			} else if (compareQualities(spotTwo, spotFive, spotNine, spotThirteen, 'circle')){
				// console.log('circle win!');
				highlightWin(spotTwo, spotFive, spotNine, spotThirteen);
				showModal('circle pieces');
				return 'circle win!'
			} else if (compareQualities(spotTwo, spotFive, spotNine, spotThirteen, 'light')){
				// console.log('light win!');
				highlightWin(spotTwo, spotFive, spotNine, spotThirteen);
				showModal('yellow pieces');
				return 'light win!'	
			} else if (compareQualities(spotTwo, spotFive, spotNine, spotThirteen, 'big')){
				// console.log('big win!');
				highlightWin(spotTwo, spotFive, spotNine, spotThirteen);
				showModal('big pieces');
				return 'big win!'
			} else if (compareQualities(spotTwo, spotFive, spotNine, spotThirteen, 'small')){
				// console.log('small win!');
				highlightWin(spotTwo, spotFive, spotNine, spotThirteen);
				showModal('small pieces');
				return 'small win!'
			} else if (compareQualities(spotTwo, spotFive, spotNine, spotThirteen, 'hole')){
				highlightWin(spotTwo, spotFive, spotNine, spotThirteen);
				showModal('hollow pieces');
				return 'hole win!'
			}else if (compareQualities(spotTwo, spotFive, spotNine, spotThirteen, 'smooth')){
				highlightWin(spotTwo, spotFive, spotNine, spotThirteen);
				showModal('smooth pieces');
				return 'smooth win!'
			}
		}
	}				
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

// after win new game button will reset the board and move pieces back to their container
function resetGame(){
	// console.log('clicked!')
	for(let i = 0; i < spotsInPlayId.length; i++){
		let id = '#' + spotsInPlayId[i]
		// console.log(id)
		$(id).children().css('border', '1px solid rgb(0, 0, 0)').appendTo($('.game-pieces'))
	};
	$('.inner-circle').css('background-color', '#7E7F9A');
	$('.spot').removeClass().addClass('spot');
	$('.modal-overlay').css('display', 'none');
	theModal.css('display', 'none');
	spotsInPlayId = [];
};

// this button reveals the modal that tells you how to play, also reveals the overlay that keeps folks from clicking on anything but the close button
$('#begin-game').on('click', ()=>{
	// console.log('clicked')
	theModal.css('display', 'block');
	$('.modal-overlay').css('display', 'block');
	$('#begin-game').remove()
	$('#new-game').css('display', 'inline')
})

// this button 'closes' the modal, and then changes the text for the next pop up
$('#close-modal').on('click', ()=>{
	theModal.css('display', 'none');
	$('.modal-overlay').css('display', 'none');
	modalText.text('Player two choose a placement')
})

// $('#close-modal').on('keydown', ()=>{
// 	theModal.css('display', 'none');
// 	$('.modal-overlay').css('display', 'none');
// 	modalText.text('Player two choose a placement')
// })

// this button reveals the modal again
$('.game-pieces').one('click', ()=>{
	// console.log('clicked')
	theModal.css('display', 'block');
	$('.modal-overlay').css('display', 'block');
})


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


// button to reset the board
$('#new-game').on('click', resetGame)


/*
How to make it so that more than one piece can't be selected at a time?

need to make sure that more than one piece can't be selected: so they can select one, and deselect it, but not have mutliple selected at a time

pieces can still be moved when placed on the board! Need to make them unclickable once they are placed. 
*/