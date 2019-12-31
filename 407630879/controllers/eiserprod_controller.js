const model = require("../models/eiserprod_models");

exports.getcombined = async (req, res, next) => {
  let featured, newed;
  try {
    const getFeatured = await model.fetchFeatured().then(([rows]) => {
      featured = rows;
    });
    const getNewed = await model.fetchNew().then(([rows]) => {
      newed = rows;
    });
  } catch (err) {
    console.log(err);
  }

  res.render("combinedProd", {
    fdata: featured,
    ndata: newed
  });
};

exports.getefeatured = async (req, res, next) => {
  let featured;
  try {
    const getFeatured = await model.fetchFeatured().then(([rows]) => {
      featured = rows;
    });
  } catch (err) {
    console.log(err);
  }

  res.render("featuredProd", {
    fdata: featured
  });
};

exports.getnew = async (req, res, next) => {
  let newed;
  try {
    const getNewed = await model.fetchNew().then(([rows]) => {
      newed = rows;
    });
  } catch (err) {
    console.log(err);
  }

  res.render("newProd", {
    ndata: newed
  });
};
