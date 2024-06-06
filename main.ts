let definir_brilho = 0
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
    definir_brilho = input.soundLevel()
})
