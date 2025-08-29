const index = (req, res) => {
    res.render("index");
};

const adventuretime = (req, res) => {
    res.render("adventuretime");
};

const deserted = (req, res) => {
    res.render("deserted");
};

const tweeter = (req, res) => {
    res.render("tweeter");
};

const arcadejam = (req, res) => {
    res.render("arcadejam");
};

const kingoftheball = (req, res) => {
    res.render("kingoftheball");
};

const drawwithfriends = (req, res) => {
    res.render("drawwithfriends");
};

const dynamicdash = (req, res) => {
    res.render("dynamicdash");
};

const audioviz = (req, res) => {
    res.render("audioviz");
};

const cookie = (req, res) => {
    res.render("cookie");
};

const devilfruit = (req, res) => {
    res.render("devilfruit");
};

const chessEnvironment = (req, res) => {
    res.render("chessenvironment");
};

const models = (req, res) => {
    res.render("3Dmodels");
};

const project = (req, res) => {
    res.render("project");
};

const resume = (req, res) => {
    res.render("resume");
};

const notFound = (req, res) => {
    res.status(404);
    res.render("notFound");
};

const getProject = (req, res) => {
    res.json({ redirect: "/project", url: req.body.url });
};

module.exports = {
    index,
    adventuretime,
    deserted,
    tweeter,
    arcadejam,
    kingoftheball,
    drawwithfriends,
    dynamicdash,
    audioviz,
    cookie,
    devilfruit,
    chessEnvironment,
    models,
    project,
    resume,
    notFound,
    getProject,
};
