const Models = require("./../models");
const nodemailer = require("nodemailer");
const Reclamation = Models.Reclamation;

const User = Models.User;
const Cours = Models.Cours;
const Blog = Models.Blog;
const Comment = Models.Commentaire;
const like = Models.Like;
const Events = Models.Events;






exports.reclamationTotal = (req, res) => {
    Reclamation.findAll({
        })
      .then((reclamations) => {
        var Nombre  = reclamations.length;
     res.status(200).json({ Nombre });
      })
      .catch((err) => {
        res.status(400).json({
          error: err,
        });
      });
  };
  exports.AallUsers = async (req, res) => {
    User.findAll({
    })
  .then((user) => {
    var Nombre  = user.length;
 res.status(200).json({ Nombre });
  })
  .catch((err) => {
    res.status(400).json({
      error: err,
    });
  });
};
exports.AallCours = async (req, res) => {
    Cours.findAll({
    })
  .then((cours) => {
    var Nombre  = cours.length;
 res.status(200).json({ Nombre });
  })
  .catch((err) => {
    res.status(400).json({
      error: err,
    });
  });
}

exports.AallBlog = async (req, res) => {
    Blog.findAll({
    })
  .then((blog) => {
    var Nombre  = blog.length;
 res.status(200).json({ Nombre });
  })
  .catch((err) => {
    res.status(400).json({
      error: err,
    });
  });
}

exports.AallComment = async (req, res) => {
    Comment.findAll({
    })
  .then((com) => {
    var Nombre  = com.length;
 res.status(200).json({ Nombre });
  })
  .catch((err) => {
    res.status(400).json({
      error: err,
    });
  });
}
exports.Aalllike = async (req, res) => {
    like.findAll({
    })
  .then((like) => {
    var Nombre  = like.length;
 res.status(200).json({ Nombre });
  })
  .catch((err) => {
    res.status(400).json({
      error: err,
    });
  });
}
exports.AallEvent = async (req, res) => {
    Events.findAll({
    })
  .then((even) => {
    var Nombre  = even.length;
 res.status(200).json({ Nombre });
  })
  .catch((err) => {
    res.status(400).json({
      error: err,
    });
  });
}
    
/*
const reclamtions = await Reclamation.findAll({})
const response = []
reclamtions.forEach(Reclamation => {
    Reclamation.statut.forEach(valide => {
        response.push({valide})
    })
return response
})
  }*/