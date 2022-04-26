let ir_de3recho = 0
let ir_izquierdo = 0
let tiempo = 0
basic.forever(function () {
    if (ir_izquierdo == 0 && ir_de3recho == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    } else if (ir_izquierdo == 1 && ir_de3recho == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorStop(maqueen.Motors.M2)
    } else if (ir_izquierdo == 0 && ir_de3recho == 1) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        maqueen.motorStop(maqueen.Motors.M1)
    }
    ir_de3recho = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    ir_izquierdo = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
})
