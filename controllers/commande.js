const Models = require("./../models");
const Commande = Models.Commande;
const Cours = Models.Cours;
const User = Models.User;

exports.addCommande = async (req, res) => {
  var cours = req.body.cours;
  var coursjson = JSON.stringify(req.body.cours);
  var total = 0;

  const arr = Object.entries(cours);
  var bar = new Promise(async (resolve, reject) => {
    await cours.forEach(async (cour, index, array) => {
      console.log(cour);
      await Cours.findOne({ where: { id: cour } }).then((cours) => {
        if (!cours) {
          return res.status(400).json({
            error: "cours not found !",
          });
        }

        total = total + cours.dataValues.prix;
      });
      if (index === array.length - 1) resolve();
    });
  });
  bar.then(async () => {
    var new_Commande = {
      cours: coursjson,
      total: total,
      ownerId: req.profile.id,
    };

    await Commande.create(new_Commande)
      .then((rec) => {
        res.status(200).json({ message: "Commande susscefully saved !", rec });
      })
      .catch((err) => {
        res.status(400).json({
          error: err,
        });
      });
  });
};
exports.ComdByUser = (req, res) => {
  Commande.findAll({ where: { ownerId: req.profile.id } })
    .then((com) => {
      res.status(200).json({ com });
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
  next();
};
exports.ComdById = (req, res, next, id) => {
  Commande.findOne({ where: { id: id } }).then((commande) => {
    if (!commande) {
      return res.status(400).json({
        error: "comande not found !",
      });
    }
    req.commande = commande;
    next();
  });
};
exports.updateCom = async (req, res) => {
  let commande = req.commande;
  commande
    .update(req.body)
    .then((comd) => {
      res.json({ message: "commande updated successfully", comd });
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
  }
  exports.deleteCom = async (req, res, next) => {
    let commande = req.commande;
    commande
      .destroy()
      .then(() => {
        res.json({ message: "Commande deleted successfully" });
      })
      .catch((err) => {
        res.status(400).json({
          error: err,
        });
      });
  };
  exports.payCom = async (req, res) => {
    let user = req.profile;
    const sold = req.profile.sold; 
    console.log(sold)
    let commande = req.commande;
    console.log(commande)
      var commandePrice = commande.total
    var  payment= sold - commandePrice 
    console.log(commandePrice)
    if (payment<0) {
      return res.status(403).json({
        error: "You Sold insuf !! !",
      });
    }
    await user .update({ sold: payment });
    return res.status(200).json({
      message: "Commande paye",
    });
  }