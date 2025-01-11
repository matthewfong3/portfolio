const index = (req, res) => {
    res.render("index");
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
    project,
    resume,
    notFound,
    getProject
}