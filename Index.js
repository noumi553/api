const express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Noumi server");
});

const PORT = process.env.PORT || 3000;  // Heroku will provide its own PORT
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
