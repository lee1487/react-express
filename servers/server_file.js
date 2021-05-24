const express = require("express");
const app = express();
const port = process.env.PORT || 3003;
const route = require("./routes/index_file");
app.use(express.static("assets"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", route);

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
