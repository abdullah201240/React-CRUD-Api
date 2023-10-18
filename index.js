import express from "express";
import mongoose from 'mongoose'; 
import routes from './routes/routes.js';
import bodyParser from 'body-parser'
const app = express();
 
app.use(bodyParser.json());
app.use("/api",routes );

const port = process.env.PORT || 8080; 

const mongoURI = 'mongodb://127.0.0.1:27017/products';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB!');
});





// Use your routes
app.use('/', routes);



// app.get("/", (req, res) => {
//   res.send('{"message":"Welcome to DressStore application"}');
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
