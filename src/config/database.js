const mongoose = require('mongoose');

const connectDB = async () =>{
    await mongoose.connect(
       "mongodb+srv://m60419814:ltvaNX44PXUklQsY@cluster0.j4y6t.mongodb.net/devTind"
      // ltvaNX44PXUklQsY
    );
};

module.exports = connectDB;