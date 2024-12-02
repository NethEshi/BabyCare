const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const vaccineNotification = require('./schedulers/vaccineNotification');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(bodyParser.json());

const url = process.env.MONGO_URL;

const authRoute = require('./routes/authRoute');
app.use('/auth', authRoute);

const refRouter = require('./routes/refRoute');
app.use('/ref', refRouter);

const otpRouter = require('./routes/otpRoute');
app.use('/otp', otpRouter);

const mohRouter = require('./routes/mohRoute');
app.use('/moh', mohRouter);

const babyRouter = require('./routes/babyRoute');
app.use('/baby', babyRouter);

const HealthReportRouter = require('./routes/healthReportRoute');
app.use('/healthReport', HealthReportRouter);

const weight_heightRouter = require('./routes/weight_heightRoute');
app.use('/weight_height', weight_heightRouter);

const vaccinationRouter = require('./routes/vaccinationRoute');
app.use('/vaccination', vaccinationRouter);

mongoose.connect(url)
.then(() => {console.log("MongoDB is connected...")
    vaccineNotification();
})
.catch((err) => console.log(err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});