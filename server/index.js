const express = require("express");
const app = express();
const port = parseInt(process.argv[2]);

app.use(express.static("public"));
app.get("/", homepage);
app.listen(port, () => {console.log("$(port) ağ kapısından sunuluyor.");});

function homepage(req, res) {
  res.sendFile("public/index.html");
}
