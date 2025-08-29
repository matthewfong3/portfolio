const controllers = require("./controllers");

const router = (app) => {
    app.get("/", controllers.htmlHandler.index);
    app.get("/AdventureTime", controllers.htmlHandler.adventuretime);
    app.get("/Deserted", controllers.htmlHandler.deserted);
    app.get("/tweeter", controllers.htmlHandler.tweeter);
    app.get("/arcadejam", controllers.htmlHandler.arcadejam);
    app.get("/KingOfTheBall", controllers.htmlHandler.kingoftheball);
    app.get("/audioviz", controllers.htmlHandler.audioviz);
    app.get("/DrawWithFriends", controllers.htmlHandler.drawwithfriends);
    app.get("/DynamicDash", controllers.htmlHandler.dynamicdash);
    app.get("/cookie", controllers.htmlHandler.cookie);
    app.get("/DevilFruit", controllers.htmlHandler.devilfruit);
    app.get("/ChessEnvironment", controllers.htmlHandler.chessEnvironment);
    app.get("/3Dmodels", controllers.htmlHandler.models);
    app.get("/project", controllers.htmlHandler.project);
    app.get("/resume", controllers.htmlHandler.resume);
    app.get("/*", controllers.htmlHandler.notFound);

    app.post("/getProject", controllers.htmlHandler.getProject);
};

module.exports = router;
