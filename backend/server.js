const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 5000;
app.get('/api', (req, res) => {
  res.json({message:"hello from backend"})
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); 