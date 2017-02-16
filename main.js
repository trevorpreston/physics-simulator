console.log('javascript connected')

const accel = 9.8

let initialVelocity = 0
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

dropBall(10)