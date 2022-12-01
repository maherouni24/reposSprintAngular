const Models = require("./../models");
const nodemailer = require("nodemailer");
const Events = Models.Events;
const user = Models.User;
const InscritEvent = Models.InscritEvent;
var callUser = require("./user");

exports.addEvent = async (req, res) => {
    const iscoash = req.profile.role == "coach";
  if (!iscoash) {
    return res.status(403).json({
      error: "You are  not authorized to perform this action !",
    });
  }
  var new_event = {
    nomEvent: req.body.nomEvent,
    prix: req.body.prix,
    type: req.body.type,
    date_debut: req.body.date_debut,
    date_fin: req.body.date_fin,
    ownerId: req.profile.id,
    
  };

  let events = await Events.create(new_event)
    .then((rec) => {
      res.status(200).json({ message: "cours susscefully saved !", rec });
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
};
exports.eventByUser = (req, res) => {
    Events.findAll({ where: { ownerId: req.profile.id } })
      .then((events) => {
        res.status(200).json({ events });
      })
      .catch((err) => {
        res.status(400).json({
          error: err,
        });
      });
      next();
  };
  exports.EventById = (req, res, next, id) => {
    Events.findOne({ where: { id: id } }).then((events) => {
      if (!events) {
        return res.status(400).json({
          error: "cours not found !",
        });
      }
      req.events = events;
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
    exports.updateEvents = async (req, res) => {
      const isOwner = req.profile.id == req.events.ownerId;
      if (!isOwner) {
        return res.status(403).json({
          error: "You are  not authorized to perform this action !",
        });
      }
     let events = req.events;
    const mailOptions = {
        from: "ahmed.dhambri@esprit.tn",
        to: "benismail.hechem@esprit.tn",
        subject: "Event",
        text: "apdate Event",
      };
    
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      events
      .update(req.body)
      .then((events) => {
        res.json({ message: "cours updated successfully", events });
      })
      .catch((err) => {
        res.status(400).json({
          error: err,
        });
      });
  };
  exports.inscritEvents = async (req, res) => {
    var inscription = {
      EventId: req.events.id,
      UserId: req.profile.id,
    };
    await InscritEvent.create(inscription)
      .then((rec) => {
        res.status(200).json({ message: "inscription added !", rec });
      })
      .catch((err) => {
        res.status(400).json({
          error: "You have already enrolled this Event !",
        });
      });
  };
  exports.getAllevent = (req, res) => {
    Events.findAll()
      .then((events) => {
        res.status(200).json({ events });
      })
      .catch((err) => {
        res.status(400).json({
          error: err,
        });
      });
  };

  
