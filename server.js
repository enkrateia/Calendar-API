const express = require('express');
const { connect } = require('mongoose');
const cors = require('cors');
const db = require('./app/config/db.config');

const app = express();

let corsOptions = {
  origin: 'http:localhost:8081',
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to the database!");
})
.catch(err => {
  console.log("Cannot connect to the database!", err);
  process.exit();
});

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome' });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
