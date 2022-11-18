input.onGesture(Gesture.Shake, function () {
    Random = randint(0, 30)
    basic.showNumber(Random)
    if (Random <= 10) {
        basic.showLeds(`
            . . . # #
            . . # . .
            # # . . .
            . . # . .
            . . . # #
            `)
    }
    if (Random >= 10 && Random < 20) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (Random >= 20) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
})
let Random = 0
radio.setGroup(1)
basic.forever(function () {
	
})
