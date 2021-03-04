const router = require("express").Router();
const axios = require("axios");

router.get("/api/getIssues", (req, res) => {
    console.log("Request", req.body)
    axios.get("https://api.github.com/repos/walmartlabs/thorax/issues").then(data => {
        let issues = data.data;
        res.json(issues);
    });
    


})

module.exports = router;