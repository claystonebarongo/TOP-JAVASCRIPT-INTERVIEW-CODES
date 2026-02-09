for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i)
    }, 1000)

}

// var has function scope, not block scope

// The loop finishes before setTimeout runs

// By the time the callback executes, i has already become 5

// All callbacks reference the same variable i



for (let i = 0; i < 5; i++) {

    setTimeout(function () {
        console.log(i)
    }, 1000)

}

// Why it works?

// let has block scope

// Each loop iteration gets its own i
