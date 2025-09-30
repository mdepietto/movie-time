const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(
  cors({
    // frontend url will be reading the data
    origin: ['http://localhost:3000']
  })
)

app.get('/', async (req, res) => {
  res.json({ message: 'hello there' });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});