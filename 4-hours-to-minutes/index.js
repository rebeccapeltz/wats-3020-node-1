/* This app will convert minutes to hours and minutes.  If no integer is supplied, a 
usage message will be logged.  If an integer is supplied, the hours are calculated using
the division operator `/` and the minutes are calculated using the modulo `%` operator.  
In addition the pluarality of the units (hour/hours and minute/minutes) are calculated based
on the value of the hours or minutes.
*/
let getargs = require("../modules/getargs/index.js")

let input = getargs.getIntegerArg()

// test that input is a number

if ( isNaN(input) || !Number.isInteger(input)) {
  console.log("usage: node 4-hours-to-minutes/index.js <integer>")
} else {
 let hours = (input/60).toFixed(0)
  let minutes = input % 60
  let hrs = hours > 1 ? "hours" : "hour"
  let mins = minutes > 1 ? "minutes" : "minute"
  console.log(`${input} minutes is ${hours} ${hrs} ${minutes} ${mins} `)
}

process.exit()