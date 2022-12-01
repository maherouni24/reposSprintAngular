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
    Reclamation.findAll({})
      .then((reclamations) => {
    var Nombre_Reclamtion  = reclamations.length;
      })
    User.findAll({})
  .then((user) => {
    var Nombre_User  = user.length;})
   Cours.findAll({})
  .then((cours) => {
    var Nombre_Cours  = cours.length;})
    Blog.findAll({
    })
  .then((blog) => {
    var Nombre_blog  = blog.length;})
    Comment.findAll({
    })
  .then((com) => {
    var Nombre_commentaires  = com.length;})
    like.findAll({
    })
  .then((like) => {
    var Nombre_like  = like.length;})

    Events.findAll({
    })
  .then((even) => {
    var Nombre_Event  = even.length;})
 res.status(200).json({ delta });
 
}
  