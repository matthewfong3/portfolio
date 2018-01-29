const controllers = require('./controllers');

const router = (app) => {
  app.post('/getProject', controllers.getProject);
  app.get('/projectsPage', controllers.projectsPage);
  app.get('/', controllers.appPage);
  app.get('/*', controllers.notFound);
};

module.exports = router;
