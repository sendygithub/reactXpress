require("dotenv").config();
const app = require("./src/app");

app.listen(5000, () => {
  console.log("Server jalan di http://localhost:5000");
});
