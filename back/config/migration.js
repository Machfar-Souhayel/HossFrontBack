// exporting Data To Atlas
const insertData = async (req, res) => {
    let arrayOfWka = [];
    try{
      fs.readFile('public/data/wka.json', 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      arrayOfWka = JSON.parse(data);
      
      arrayOfWka.forEach(element => {
        delete element._id
        console.log(element)
        new Wka(element).save();
      });
      
      res.status(200).json({
        success: "True",
        data : arrayOfWka
        }); 
      });
    } catch(err){
      err => console.log(err);
    }
  };