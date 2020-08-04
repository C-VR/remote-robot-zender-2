radio.setGroup(1)
let snelheid = 50
let achtersnelheid = 25
let draaisnelheid = 25
basic.forever(function () {
    if (gamePad.keyState(GamerBitPin.P8)) {
        radio.sendValue("Voor", snelheid)
    } else if (gamePad.keyState(GamerBitPin.P13)) {
        radio.sendValue("Achter", achtersnelheid)
    } else if (gamePad.keyState(GamerBitPin.P15)) {
        radio.sendValue("Rechts", draaisnelheid)
    } else if (gamePad.keyState(GamerBitPin.P14)) {
        radio.sendValue("Links", draaisnelheid)
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendValue("Toeter", snelheid)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendValue("Sirene", snelheid)
    } else {
        radio.sendValue("Stop", 0)
    }
})
