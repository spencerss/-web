let r = Math.random()
console.log(r)

// [min,max)
function random(min,max) {
    // [min,max]
	// return Math.floor(Math.random() * (max - min+1)) + min
	return Math.floor(Math.random() * (max - min)) + min
}

for(let i = 0; i < 20; i++) {
    let result = random(1,100)
    console.log(result)
}