const Wka = require("../models/wkaModel");
const wkaHelper = require('../helpers/wkaHelper');

// Getting All Data From MongoDB
const getAllWka = async (req, res) => {
  try {
    const wkas = await Wka.find();
    const requestParameters = req.query;

    const filteredData = await wkaHelper.filterDataMethod(wkas, requestParameters);

    res.status(200).json({
      success: "True",
      count: filteredData.length,
      params: requestParameters,
      FilteredData : filteredData
    }); 
  } catch(err){
    err => console.log(err);
  }
};

module.exports = {
  getAllWka
};