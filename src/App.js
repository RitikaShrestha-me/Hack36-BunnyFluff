import React from "react";
// import express from 'express';

import './App.scss';
import './components/login/style.scss'

import Navbar from './components/Navbar'
import Routes from './Route'

import { BrowserRouter as Router } from 'react-router-dom'


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="contents">
          <Routes />
        </div>
      </div>
    </Router>
  );
}


// const userDB = require("./models/user");

// // const bodyParser = require('body-parser');
// const passwordHash = require('password-hash');

// const app = express();

// app.use(express.json());
// // app.use(bodyParser.urlencoded({ extended: true }));

// // Registering View Engine
// app.set('view engine', 'ejs');

// // Listen for requests
// const port = 3000;
// app.listen(port, async() => {
//     console.log(`Listening on port 3000!`);
// });

// //Middleware & Static files
// app.use(express.static('assets'));
// app.use(express.static('styles'));


// app.post('/registerUser', (req, res) => {
//   console.log(req.body);
//   const userName = req.body.userName;
//   const email = req.body.email;
//   const password = req.body.password;
//   const hashedPassword = passwordHash.generate(password);
//   const newUser = {
//       userName: userName,
//       email: email,
//       password: hashedPassword,
//   };

//   // Inserting User to database
//   userDB.insertUser(newUser).then(() => {
//       res.status(200).render('login', { title: 'Login' });
//   })

// });


// // onClicking Login Button
// app.post('/validateUser', (req, res) => {
//   console.log(req.body);

//   const userName = req.body.userName;
//   const password = req.body.password;

//   if(userName && password){
//       userDB.fetchUser(userName).then((response) => {
//           if(response && response.password){
//               // Verify Password Entered in Login Page
//               if(passwordHash.verify(password, response.password)){
//                   console.log("true");
//               }
//           } else {
//               res.render('register', { title: 'Register' });
//           }
//       });
//   }
// });



export default App;


