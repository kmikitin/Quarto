console.log('Connected!')

$('#A').on('click', ()=>{
	console.log('clicked!')
})

/*
start button will begin the game (run initial functions)

each game piece div needs an event listener
each spot on the board needs an event listener

on the click the piece will be highlighted (salmon color)
 -- this will need to be a function that toggles the border?
when the piece is selected it it passed into a function as an argument
*when piece is moved the inner circle color needs to be changed to white

the second argument for that function will be the place on the board that the piece is going to

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

*/