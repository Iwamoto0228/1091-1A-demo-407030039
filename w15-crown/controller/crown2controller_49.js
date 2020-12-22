const Clothing_49 = require('../models/ClothingModel_xx');

exports.getHomepage = async (req, res) => {
  let data = {};
  try {
    await Clothing_49.fetchHomePage().then(([rows]) => {
      console.log(JSON.stringify(rows));
      data.clothing = rows;
      // res.json(rows);
    });
  } catch (err) {
    console.log(err);
  }

  res.render('crown2_49', {
    title: 'LiuTaiKang , 407030039',
    data: data.clothing,
  });
};
