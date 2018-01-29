const appPage = (req, res) => {
  res.render('app');
};

const projectsPage = (req, res) => {
  res.render('projects');
};

const notFound = (req, res) => {
  res.status(404);
  res.render('notFound');
};

const getProject = (req, res) => {
  res.json({ redirect: '/projectsPage', url: req.body.url });
};

module.exports.appPage = appPage;
module.exports.projectsPage = projectsPage;
module.exports.notFound = notFound;
module.exports.getProject = getProject;
