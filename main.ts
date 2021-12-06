input.onButtonPressed(Button.A, function () {
    music.playTone(415, music.beat(BeatFraction.Quarter))
    music.playTone(554, music.beat(BeatFraction.Quarter))
    music.playTone(698, music.beat(BeatFraction.Quarter))
    music.playTone(831, music.beat(BeatFraction.Half))
    music.playTone(698, music.beat(BeatFraction.Quarter))
    music.playTone(831, music.beat(BeatFraction.Half))
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
})
