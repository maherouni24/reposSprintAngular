const Models = require("./../models");
const nodemailer = require("nodemailer");
const commande = require("../models/commande");
const Panier = Models.Paniers;
const user = Models.User;


exports.addPanier = async (req, res) => {
   var new_panier = {
    CourId: req.body.CourId,
     UserId : req.profile.id,
    
  };
  let panier = await Panier.create(new_panier)
    .then((rec) => {
      res.status(200).json({ message: "cours susscefully aad !", rec });
    })
    .catch((err) => {
        res.status(400).json({
          error: "You have already get this cours",
        });
      });
};
var total=0;
exports.panierByUser = (req, res) => {
   Panier.findAll({ where: { UserId: req.profile.id } })
      .then((panier) => {
      var longeur = panier.length;
        res.status(200).json({ panier,longeur })
        
      })
      .catch((err) => {
        res.status(400).json({
          error: err,
        });
      });
      
      next();
  };
  
