const mongoose = require('mongoose')
// data fetched from MongoDB
var wkaSchema = new mongoose.Schema({
    "Betreiber": String,
    "Bst_Nr": Number,
    "Bst_Name": String,
    "Ort": String,
    "Ortsteil": String,
    "Anl_Nr": Number,
    "Anl_Bez": String,
    "Genehmigt": String,
    "Ostwert": Number,
    "Nordwert": Number,
    "Latitude": Number,
    "Longitude": Number,
    "Kreis": String,
    "Geme_Kenn": Number,
    "PLZ": Number,
    "Inbetriebn": String,
    "Alt_an_anz": String,
    "Leistung": String,
    "Status": String,
    "Nabenhoehe": Number,
    "Rotordurch": Number,
    "LW_TAG": Number,
    "LW_Nacht": Number,
    "Stand_Abw": Number,
    "Wka_ID": Number
},
{ collection : 'wka' });

module.exports = mongoose.model('WKA', wkaSchema)