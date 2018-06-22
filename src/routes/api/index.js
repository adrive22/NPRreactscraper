const router = require("express").Router();
const articleRoutes = require("./articleroutes");

router.use("/article", articleRoutes);

module.exports = router;

