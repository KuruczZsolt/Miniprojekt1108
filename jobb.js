radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 10) {
        j = game.createSprite(0, 2)
    }
    if (receivedNumber == 1) {
        j.move(1)
        a += 1
    }
    if (receivedNumber == 2) {
        j.move(-1)
        a += -1
    }
})
let j: game.LedSprite = null
radio.setGroup(6)
let a = 0
basic.forever(function () {
    if (a == -1) {
        radio.setGroup(5)
        radio.sendNumber(0)
        a = 0
        j.delete()
        radio.setGroup(6)
        radio.sendNumber(0)
    }
})
