console.log('javascript connected')


/* rules:  100px = 1meter */


const accel = 9.8
const ball = document.getElementsByClassName('ball')[0]

let initialVelocity = -20
let finalVelocity


// v = a*t
function updateVelocity(timeSeconds) {
	finalVelocity = initialVelocity + accel*timeSeconds
	console.log(finalVelocity)
}


//calculates displacement with given time, acceleration, initial v
function dropBall(time) {
	let displacement //in meters
	displacement = initialVelocity*time + .5*accel*(time*time)
	console.log(displacement)
}


//animateDrop moves the ball based on how many seconds the object falls
function animateDrop(timeFalling) {
	console.log('starting drop')
	let timeFallingCentiseconds = timeFalling * 100
	let distanceDisplacement = 0  	// distance displacement is the number of pixels the object has moved since it's starting position
	let timeElapsedCentiseconds = 0  	// timeElapsed is the number of seconds passed, also used for counting how many loops are being made

	setInterval(function(timeFalling){
		if(timeElapsedCentiseconds< timeFallingCentiseconds){
			console.log('dropping ball!')
			distanceDisplacement = initialVelocity*timeElapsedCentiseconds + .5*accel*(timeElapsedCentiseconds*timeElapsedCentiseconds);
			ball.style.top = distanceDisplacement/10+'px';
			timeElapsedCentiseconds += 1
		}	
}, 10)
	
}

animateDrop(5)


