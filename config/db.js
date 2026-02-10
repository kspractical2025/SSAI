const mongoose = require("mongoose");
const connectDB = () => {
    mongoose.connect("Process.env.MONGODBCON")
    .then(() => {
        console.log("DB connection is established.");
    })
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });
};

module.exports = connectDB;