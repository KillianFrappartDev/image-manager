const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Local imports
const uploadRoute = require('./routes/upload-route');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/upload', uploadRoute);

app.use((error, req, res, next) => {
  console.log(error);
  res.json({ message: error.message || 'An unknow error occured' });
});

app.listen(process.env.PORT || 5000, () => console.log(`Server running on port ${process.env.PORT || 5000}`));
