def on_gesture_shake():
    radio.send_string("d")
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

bigger = 0
radio.set_group(123)
setup = input.compass_heading()
setupR = input.compass_heading() + 180
setupL = input.compass_heading() - 180
if setupR > 360:
    setupR += -360
if setupL < 0:
    setupL += 360
if 0 < setup - setupR:
    bigger = 0
else:
    bigger = 1

def on_forever():
    basic.pause(1000)
    if input.button_is_pressed(Button.A):
        radio.send_string("a")
    elif input.button_is_pressed(Button.B):
        radio.send_string("b")
    elif input.button_is_pressed(Button.AB):
        radio.send_string("c")
    elif input.compass_heading() != setup:
        if bigger == 0:
            if input.compass_heading() < setup or input.compass_heading() > setupR:
                radio.send_string("r")
            else:
                radio.send_string("l")
        elif input.compass_heading() > setup or input.compass_heading() < setupR:
            radio.send_string("r")
        else:
            radio.send_string("l")
basic.forever(on_forever)
