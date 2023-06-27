input.onGesture(Gesture.Shake, function () {
    radio.sendString("d")
})
let bigger = 0
radio.setGroup(123)
let setup = input.compassHeading()
let setupR = input.compassHeading() + 180
let setupL = input.compassHeading() - 180
if (setupR > 360) {
    setupR += -360
}
if (setupL < 0) {
    setupL += 360
}
if (0 < setup - setupR) {
    bigger = 1
} else {
    bigger = 0
}
basic.forever(function () {
    basic.pause(1000)
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendString("c")
        basic.pause(100)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendString("b")
        basic.pause(100)
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendString("a")
        basic.pause(100)
    }
    if (input.compassHeading() != setup) {
        if (bigger == 0) {
            if (input.compassHeading() < setup && input.compassHeading() > setupR) {
                radio.sendString("r")
            } else {
                radio.sendString("l")
            }
        } else if (bigger == 1) {
            if (input.compassHeading() > setup || input.compassHeading() < setupR) {
                radio.sendString("r")
            } else {
                radio.sendString("l")
            }
        }
    }
})
