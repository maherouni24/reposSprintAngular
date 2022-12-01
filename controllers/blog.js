const Models = require("./../models");
const nodemailer = require("nodemailer");
const Blog = Models.Blog;
const User = Models.User;
const Commentaire = Models.Commentaire;
const Like = Models.Like;
const Favories = Models.Favories;

exports.addBlog = async (req, res) => {
  /*var file = req.files.image;
  var img_name = file.name;

  if (
    file.mimetype == "image/jpeg" ||
    file.mimetype == "image/png" ||
    file.mimetype == "image/gif"
  ) {*/
    //file.mv("public/image/" + img_name, function (err) {
      {
        Models.Blog.create({
          Titre: req.body.Titre,
          decription: req.body.decription,
          //image: img_name,
          idUser: req.profile.id,
        }).then((p) => {
          res.send(p);
        });
      }
  //  });
 // }
};

exports.BlogByUser = (req, res) => {
  Blog.findAll({ where: { idUser: req.profile.id } })
    .then((blog) => {
      res.status(200).json({ blog });
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
  next();
};

exports.blogsById = (req, res, next, id) => {
  Blog.findOne({ where: { id: id } }).then((blog) => {
    if (!blog) {
      return res.status(400).json({
        error: "blog not found !",
      });
    }
    req.blog = blog;
    next();
  });
};

exports.updateBlog = async (req, res) => {
  const isOwner = req.profile.id == req.blog.idUser;
  if (!isOwner) {
    return res.status(403).json({
      error: "You are  not authorized to perform this action !",
    });
  }
  let blog = req.blog;
  blog
    .update(req.body)
    .then((blog) => {
      res.json({ message: "Blog updated successfully", blog });
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
};
exports.addComment = async (req, res) => {
  var comment = {
    decription: req.body.decription,
    idpub: req.blog.id,
    idUser: req.profile.id,
  };
  await Commentaire.create(comment)
    .then((rec) => {
      res.status(200).json({ message: "comment susscefully added !", rec });
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
};
exports.deleteComment = async (req, res) => {
  let comment = await Commentaire.findOne({
    where: { id: req.params.idComment },
  }).then((comment) => {
    if (!comment) {
      return res.status(400).json({
        error: "comment not found",
      });
    }
    comment
      .destroy()
      .then(() => {
        res.json({ message: "comment deleted successfully" });
      })
      .catch((err) => {
        res.status(400).json({
          error: err,
        });
      });
  });
};
exports.addLike = async (req, res) => {
  var like = {
    BlogId: req.blog.id,
    UserId: req.profile.id,
  };
  await Like.create(like)
    .then((rec) => {
      res.status(200).json({ message: "like susscefully saved !", rec });
    })
    .catch((err) => {
      res.status(400).json({
        error: "You have already liked this blog",
      });
    });
};
exports.removeLike = async (req, res) => {
  let like = await Like.findOne({
    where: { BlogId: req.blog.id, UserId: req.profile.id },
  }).then((like) => {
    if (!like) {
      return res.status(400).json({
        error: "like not found",
      });
    }
    like
      .destroy()
      .then(() => {
        res.json({ message: "like removed successfully" });
      })
      .catch((err) => {
        res.status(400).json({
          error: err,
        });
      });
  });
};
exports.addFav = async (req, res) => {
  var Favorie = {
    BlogId: req.blog.id,
    UserId: req.profile.id,
  };
  await Favories.create(Favorie)
    .then((rec) => {
      res.status(200).json({ message: "Favorie susscefully saved !", rec });
    })
    .catch((err) => {
      res.status(400).json({
        error: "You have already Favorie this blog",
      });
    });
};

exports.removeFavorie = async (req, res) => {
  let favories = await Favories.findOne({
    where: { BlogId: req.blog.id, UserId: req.profile.id },
  }).then((Favorie) => {
    if (!Favorie) {
      return res.status(400).json({
        error: "favorie not found",
      });
    }
    Favorie
      .destroy()
      .then(() => {
        res.json({ message: "Favorie removed successfully" });
      })
      .catch((err) => {
        res.status(400).json({
          error: err,
        });
      });
  });
};

exports.getAllblog = (req, res) => {
  Blog.findAll()
    .then((blogs) => {
      res.status(200).json({ blogs });
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
};
