var rows = 10;

var cols = 10;

var squareSize = 50;

var gameBoardContainer = document.getElementById("gameboard");

for (columnIndex = 0; columnIndex < cols; columnIndex++) { 
	for (verticalIndex = 0; verticalIndex < rows; verticalIndex++) {
		
		var square = document.createElement("div");
		gameBoardContainer.appendChild(square);

        square.id = 's' + verticalIndex + columnIndex;			
		
		var topPosition = verticalIndex * squareSize;
		var leftPosition = columnIndex * squareSize;			
		
		square.style.top = topPosition + 'px';
		square.style.left = leftPosition + 'px';						
	}
}

var hitCount = 0;
var clickcounter = 0;

var gameBoard = [
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,1,1,1,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[0,0,0,1,0,0,1,0,0,0],
				[0,0,0,1,0,0,1,0,1,0],
				[0,0,0,1,0,0,0,0,1,0],
				[0,0,0,1,0,0,0,0,1,0],
				[0,0,0,1,0,0,0,0,1,0],
				[0,0,0,0,0,1,1,0,0,0]
				]


gameBoardContainer.addEventListener("click", fireTorpedo, false);


function fireTorpedo(e) {
	console.log("test 1")
	clickcounter++
	document.getElementById("counterInfo").innerHTML = clickcounter;
	if (clickcounter === 46) {alert("you used all your torpedos, you lose");
	location.reload();
		}
    
	if (e.target !== e.currentTarget) {
		console.log("test 2")
		}
        
		var row = e.target.id.substring(1,2);
		var col = e.target.id.substring(2,3);
        
		if (gameBoard[row][col] == 0) {
			e.target.style.background = 'lightblue';
			
			gameBoard[row][col] = 3;
			
		} else if (gameBoard[row][col] == 1) {
			console.log("test 3")
			e.target.style.background = 'red';
			
			gameBoard[row][col] = 2;
			
			hitCount++;
			console.log(hitCount);
			console.log(maxMissleCount);

			if (hitCount == 17) {
				alert("Good job you've destroyed all of the enemies battleships! You've won!");
			}
			
		} else if (gameBoard[row][col] > 1) {
			alert("Remember you are limited on your torpedos! You already fired at this location. Don't waste anymore");
		}		
    }
    e.stopPropagation();

