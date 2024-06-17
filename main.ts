radio.onReceivedNumber(function (receivedNumber) {
    state = receivedNumber
    if (receivedNumber == 0) {
        basic.clearScreen()
    }
    if (receivedNumber == 1) {
        basic.showArrow(ArrowNames.West)
    }
    if (receivedNumber == 2) {
        basic.showArrow(ArrowNames.East)
    }
    if (receivedNumber == 3) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    if (tail_light == 0) {
        tail_light = 1
    } else {
        tail_light = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (flash == 0) {
        flash = 1
    } else {
        flash = 0
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("reset")
})
let flash = 0
let tail_light = 0
let state = 0
radio.setGroup(89)
basic.showLeds(`
    . . . . .
    . . . # .
    . . # . .
    . # . . .
    . . . . .
    `)
basic.clearScreen()
basic.forever(function () {
    if (tail_light == 1 && state == 0) {
        if (flash == 1) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.clearScreen()
            basic.pause(200)
        } else if (flash == 0) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        }
    } else if (tail_light == 0 && state == 0) {
        basic.clearScreen()
    }
})
