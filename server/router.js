const controllers = require("./controllers");

const router = (app) => {
    app.get("/", controllers.htmlHandler.index);
    app.get("/project", controllers.htmlHandler.project);
    app.get("/resume", controllers.htmlHandler.resume);
    app.get("/*", controllers.htmlHandler.notFound);

    app.post("/getProject", controllers.htmlHandler.getProject);
};

module.exports = router;