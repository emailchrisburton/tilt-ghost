input.onGesture(Gesture.TiltLeft, function () {
    while (ghost > 0) {
        ghost += -1
        scrollbit.clear()
        scrollbit.setIcon(
        IconNames.Ghost,
        ghost,
        1,
        128
        )
        scrollbit.show()
    }
})
input.onGesture(Gesture.TiltRight, function () {
    while (ghost < 12) {
        ghost += 1
        scrollbit.clear()
        scrollbit.setIcon(
        IconNames.Ghost,
        ghost,
        1,
        128
        )
        scrollbit.show()
    }
})
let ghost = 0
ghost = 6
scrollbit.clear()
scrollbit.setIcon(
IconNames.Ghost,
ghost,
1,
128
)
scrollbit.show()
