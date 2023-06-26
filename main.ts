input.onButtonPressed(Button.A, function () {
    luminosidad += 32
    if (luminosidad > 255) {
        luminosidad = 255
    }
    led.setBrightness(luminosidad)
})
input.onButtonPressed(Button.AB, function () {
    luminosidad = 128
    led.setBrightness(luminosidad)
})
input.onButtonPressed(Button.B, function () {
    luminosidad += 0 - 32
    if (luminosidad < 0) {
        luminosidad = 0
    }
    led.setBrightness(luminosidad)
})
let luminosidad = 0
luminosidad = 128
basic.forever(function () {
    // Esto es opcional, pero puedes usarlo para mostrar la luminosidad actual en el display del micro:bit.
    basic.showNumber(luminosidad)
})
