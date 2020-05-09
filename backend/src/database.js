const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI;
//console.log(URI);

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('DB connected!');
});