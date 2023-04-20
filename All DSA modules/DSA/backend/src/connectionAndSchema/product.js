const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
 name: { type: String}, 
 description: { type: String},
 price: { type: String}
});
module.exports = mongoose.model("products", productSchema);
