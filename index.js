const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5510;
const mongoURL = process.env.mongoURL;
const tripRoutes = require('./Routes/tripRoutes');

app.use(express.json());
app.use('/api', tripRoutes);


//connection to MongoDB
mongoose.connect(mongoURL)
.then(() => {
    console.log('Connected To DB');
})
.catch((err) => {
    console.log(err);
})


//server
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})