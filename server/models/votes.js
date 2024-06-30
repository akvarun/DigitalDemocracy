const mongoose = require('mongoose')

const VoteSchema = new mongoose.Schema({
rollnumber: String, 
headboy: String, 
headgirl: String, 
headboyasst: String, 
headgirlasst: String, 
house: String, 
househeadboy: String, 
househeadgirl: String, 
househeadboyasst: String, 
househeadgirlasst: String
})
const VoteModel = mongoose.model("votes",VoteSchema)
module.exports = VoteModel