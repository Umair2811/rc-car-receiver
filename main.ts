radio.onReceivedString(function (receivedString) {
    let value = 0
    let name = ""
    if (name == "X") {
        X_Value = value
    } else {
        if (name == "Y") {
            Y_Value = value
        }
    }
})
let right_wheel = 0
let left_wheel = 0
let Y_Value = 0
let X_Value = 0
basic.showIcon(IconNames.No)
radio.setGroup(1)
X_Value = 0
Y_Value = 0
basic.forever(function () {
    left_wheel = Y_Value + X_Value
    right_wheel = Y_Value - X_Value
    if (left_wheel > 0) {
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, left_wheel)
    } else {
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, Math.abs(left_wheel))
    }
    if (right_wheel > 0) {
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, right_wheel)
    } else {
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, Math.abs(right_wheel))
    }
})
