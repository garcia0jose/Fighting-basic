//collision
function rectangularCollision({rectangle1, rectangle2}){
	return(
		rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x && 
		rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width 
			&& rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y
			&& rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
		)
}

//determines winner of match based on health
function determineWinner({player, enemy, timerId}){
	clearTimeout(timerId)
	document.querySelector('#displayText').style.display = 'flex'
		//tie condition
		if(player.health === enemy.health){
			document.querySelector('#displayText').innerHTML = 'Tie'				
		//player win condition
		}else if(player.health > enemy.health){			
			document.querySelector('#displayText').innerHTML = 'Player 1 Wins'				
		//enemy win condition
		}else if(player.health < enemy.health){
			document.querySelector('#displayText').innerHTML = 'Player 2 Wins'
		}
}

let timer = 60
let timerID
function decreaseTimer(){
	if(timer > 0) {
		timerId = setTimeout(decreaseTimer, 1000)
		timer--
		document.querySelector('#timer').innerHTML = timer
			}
			if(timer === 0){
	
				determineWinner({player, enemy, timerId})
			}
		}