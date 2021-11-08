radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 10) {
        radio.setGroup(6)
    }
    if (receivedNumber == 0) {
        radio.setGroup(5)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
radio.setGroup(5)
basic.forever(function () {
	
})
