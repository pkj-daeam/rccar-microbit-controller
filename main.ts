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
    bigger = 0
} else {
    bigger = 1
}
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("a")
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendString("b")
    } else if (input.buttonIsPressed(Button.AB)) {
        radio.sendString("c")
    } else if (input.compassHeading() != setup) {
        if (bigger == 0) {
            if (input.compassHeading() < setup || input.compassHeading() > setupR) {
                radio.sendString("r")
            } else {
                radio.sendString("l")
            }
        } else {
            if (input.compassHeading() > setup || input.compassHeading() < setupR) {
                radio.sendString("r")
            } else {
                radio.sendString("l")
            }
        }
    }
})
