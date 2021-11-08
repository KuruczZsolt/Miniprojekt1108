radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        i = game.createSprite(4, 2)
    }
    if (receivedNumber == 1) {
        i.move(1)
        a += 1
    }
    if (receivedNumber == 2) {
        i.move(-1)
        a += -1
    }
})
let i: game.LedSprite = null
radio.setGroup(5)
let a = 0
i = game.createSprite(2, 2)
basic.forever(function () {
    if (a == 5) {
        radio.setGroup(6)
        radio.sendNumber(10)
        a = 0
        i.delete()
        radio.setGroup(5)
        radio.sendNumber(10)
    }
})
