const mongoose = require('mongoose');
const URI = process.env.ENV_MONGODB_URI;
//console.log(URI);

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('DB connected!');
});