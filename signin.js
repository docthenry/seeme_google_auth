const express = require('express');
const passport = require('./auth'); 

const app = express();

// Set up session management (optional, for maintaining login state)
app.use(require('express-session')({ secret: 'your_secret_key' }));

app.use(passport.initialize());
app.use(passport.session());

// Route to initiate Google Sign-in
app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

// Callback route where Google redirects after login
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  // User successfully authenticated, redirect to your app's homepage or profile
  res.redirect('/');
});

// Other app routes...

app.listen(3000, () => console.log('Server listening on port 3000'));
