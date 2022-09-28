let jonSnowAttack = 25
let jamieLannisterAttack = 35

if (jonSnowAttack > jamieLannisterAttack) {
    console.log("Jon Snow has better attack than Jamie Lannister")
} else if (jamieLannisterAttack > jonSnowAttack) {
    console.log("Jamie Lannister has better attack than Jon Snow")
} else {
    console.log("Jamie Lannister has the same attack as Jon Snow")
}

let jonSnowHealth = 100
let jonSnowDefense = 0

//jamie lannister has attacked

if (jonSnowHealth <= jamieLannisterAttack) {
    jonSnowHealth = 0
    console.log("jon Snow has geen slain.")
} else {
    jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    //jonSnowHealth -= jamieLannisterAttack
    console.log(`Jon Snow's Health is down to ${jonSnowHealth}`)
    // console.log('here is health ' + jonSnowHealth)
    // console.log('here is health again', jonSnowHealth)
}

//Jon picks up a shield, add to his defense
jonSnowDefense += 25

//Jamie attacks again!
if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
    console.log("Jon Snow has been slain")
} else {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    console.log(`Jon Snow's Health is down to ${jonSnowHealth}`)
}