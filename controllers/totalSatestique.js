const Models = require("./../models");
const Cours = Models.Cours;
const User = Models.User;
const Event = Models.Events;
const Reclamation = Models.Reclamation;
const Blog = Models.Blog;
var callUser = require("./user");

exports.getStat = async (req, res) => {
  const isadmin = req.profile.role == "admin";
  if (!isadmin) {
    return res.status(403).json({
      error: "You are  not authorized to perform this action !",
    });
  }
  let totalUsers = await User.findAll();
  let totalStudent = await User.findAll({ where: { role: "student" } });
  let totalTeachers = await User.findAll({ where: { role: "teacher" } });
  let totalCoachs = await User.findAll({ where: { role: "coach" } });
  let totalCourses = await Cours.findAll();
  let totalBlogs = await Blog.findAll();
  let totalEvents = await Event.findAll();
  let totalReclamations = await Reclamation.findAll();
  let totalValidReclamations = await Reclamation.findAll({
    where: { statut: true },
  });
  let totalNotValideReclamation = await Reclamation.findAll({
    where: { statut: false },
  });

  var statistiques = {
    totalUsers: totalUsers.length,
    totalStudents: totalStudent.length,
    totalTeachers: totalTeachers.length,
    totalCoachs: totalCoachs.length,
    totalCourses: totalCourses.length,
    totalBlogs: totalBlogs.length,
    totalEvents: totalEvents.length,
    totalReclamations: totalReclamations.length,
    totalValidReclamations: totalValidReclamations.length,
    totalNotValideReclamations: totalNotValideReclamation.length,
  };
  return res.status(200).json(statistiques);
};
