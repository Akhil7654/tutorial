const Mongoose = require ("mongoose")
const schema = Mongoose.Schema;
Mongoose.connect("mongodb+srv://AKHIL:hey007123@cluster0.rnux5pm.mongodb.net/LoanDB?retryWrites=true&w=majority")
const loanSchema = new schema({
    name : {type: String,required :true},
    amount : {type: Number,required :true},
    interest :{type: Number,required :true},
    period :{type: String,required :true}
})
var dloan = Mongoose.model("Dloan",loanSchema);
module.exports = {dloan}