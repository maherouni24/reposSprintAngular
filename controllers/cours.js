const Models = require("./../models");
const nodemailer = require("nodemailer");
const Cours = Models.Cours;
const user = Models.User;
const InscritCours = Models.InscritCours;
var callUser = require("./user");

exports.addCours = async (req, res) => {
  const isteacher = req.profile.role == "teacher";
  if (!isteacher) {
    return res.status(403).json({
      error: "You are  not authorized to perform this action !",
    });
  }
  var new_cours = {
    nomMatier: req.body.nomMatier,
    prix: req.body.prix,
    type: req.body.type,
    date_debut: req.body.date_debut,
    date_fin: req.body.date_fin,
    statut: false,
    ownerId: req.profile.id,
  };

  let cours = await Cours.create(new_cours)
    .then((rec) => {
      res.status(200).json({ message: "cours susscefully saved !", rec });
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
};
exports.courssByUser = (req, res) => {
  Cours.findAll({ where: { ownerId: req.profile.id } })
    .then((cours) => {
      res.status(200).json({ cours });
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
  next();
};
exports.coursById = (req, res, next, id) => {
  Cours.findOne({ where: { id: id } }).then((cours) => {
    if (!cours) {
      return res.status(400).json({
        error: "cours not found !",
      });
    }
    req.cours = cours;
    next();
  });
};
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ahmed.dhambri@esprit.tn",
    pass: "dhambriy2011", // naturally, replace both with your real credentials or an application-specific password
  },
});
exports.updateCours = async (req, res) => {
  const isOwner = req.profile.id == req.cours.ownerId;
  if (!isOwner) {
    return res.status(403).json({
      error: "You are  not authorized to perform this action !",
    });
  }
  let cours = req.cours;
  const mailOptions = {
    from: "ahmed.dhambri@esprit.tn",
    to: "Maddouri.ghofran@esprit.tn",
    subject: "Cours",
    text: "apdate Cours",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  cours
    .update(req.body)
    .then((cours) => {
      res.json({ message: "cours updated successfully", cours });
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
};

exports.Archivescours = async (req, res) => {
  const isOwner = req.profile.id == req.cours.ownerId;
  if (!isOwner) {
    return res.status(403).json({
      error: "You are  not authorized to perform this action !",
    });
  }
  let cours = req.cours;
  if (cours.statut == true) {
    return res.status(400).json({
      error: "You have already approved this cours !",
    });
  }
  cours.update({ statut: true });
  const mailOptions = {
    from: "ahmed.dhambri@esprit.tn",
    to: "ahmed.dhambriy@gmail.com",
    subject: "Cours",
    text: "Cours ou formation est annuleé",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  cours
    .save()
    .then((rec) => {
      res.status(200).json({ message: "Cours ou formation est annuleé", rec });
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
};
exports.inscritCours = async (req, res) => {
  var inscription = {
    CourId: req.cours.id,
    UserId: req.profile.id,
  };
  await InscritCours.create(inscription)
    .then((rec) => {
      res.status(200).json({ message: "cours susscefully saved !", rec });
    })
    .catch((err) => {
      res.status(400).json({
        error: "You have already enrolled this course !",
      });
    });
};
exports.getAllcours = (req, res) => {
  Cours.findAll()
    .then((cours) => {
      res.status(200).json({ cours });
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
};
