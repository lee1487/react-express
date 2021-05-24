const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/topic", (req, res) => {
  fs.readdir("data", (err, files) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
    res.json({
      topics: files,
      title: "Welcome",
      description: "Hello, Javascript for Server",
    });
  });
});

router.post("/topic", (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  fs.writeFile("data/" + title, description, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }

    res.send("Success!!");
  });
});

router.get("/topic/:id", (req, res) => {
  let id = req.params.id;

  fs.readFile("data/" + id, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
    res.json({ title: id, description: data });
  });
});

module.exports = router;
