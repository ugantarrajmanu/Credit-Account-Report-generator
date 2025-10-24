const mongoose = require("mongoose");


// connect to the database
async function connect(uri) {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = { connect };
