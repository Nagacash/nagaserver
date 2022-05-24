//import mongoose from 'mongoose';
import express from "express"
import cors from 'cors';
import path from 'path';


import cryptoTrack from './routes/cryptoTrack.js';

const PORT = 3002
const app = express();
//require('dotenv').config();


app.use(cors({
    credentials: true,
    origin: true
}));

app.use(express.json());

// mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`)
// .then(() => {console.log("we are connected to the database.")})
// .catch((error) => { console.log('an error occurred while connecting ot the db', error)})

app.use(express.static(path.resolve(__dirname, "./Client/build")));



// app.use(express.static(path.join(__dirname, 'build')));


// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.use('/api', cryptoTrack);

app.listen(PORT, () => {
    console.log(`The server is listening for requests on PORT: ${PORT}....`);
})
