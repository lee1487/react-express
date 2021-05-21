const express = require("express");
const app = express();
const port = process.env.PORT || 3003;

app.use(express.static("assets"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello home page");
});

app.get("/dynamic", (req, res) => {
  let lis = "";
  for (let i = 0; i < 5; i++) {
    lis += "<li>coding</li>";
  }
  let time = Date();
  let output = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        Hello, Dynamic!
        <ul>
          ${lis}
        </ul>
        ${time}
    </body>
    </html>
    `;
  res.send(output);
});

app.get("/route", (req, res) => {
  res.send("Hello Router, <img src='/images/route.jpg'/>");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login please</h1>");
});

app.use("/api", (req, res) => res.json({ username: "bryan" }));

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
