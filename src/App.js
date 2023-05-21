import React from 'react';
import Routing from "./Routes/Routes";


function App() {

//   const mongoose = require('mongoose');
// require('dotenv').config(); 


// // Connectez-vous à MongoDB en utilisant Mongoose
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error('Failed to connect to MongoDB', err));

  return (
    <Routing />
  );
}

export default App;
