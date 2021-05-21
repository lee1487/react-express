const express = require("express");
const app = express();
const port = process.env.PORT || 3003;

app.use(express.json());
app.use("/api", (req, res) => res.json({ username: "bryan" }));

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
