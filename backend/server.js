const dotenv = require('dotenv')
const express = require('express');
const cors = require('cors');
const reportRouter = require('./routes/report');
const { connect } = require('./config/db'); 

// configuration
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// middle-wares
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Running');
})

app.use('/api', reportRouter)

// connecting the database to server
connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    })
    .catch(err => {
        console.log('Database connection failed: ', err);
        process.exit(1);
    })

module.exports = app
