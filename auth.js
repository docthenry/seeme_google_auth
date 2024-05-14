const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Replace with your actual credentials
const CLIENT_ID = '154671315913-fr2clrgb8hcali80v7u0se2al3hno6lc.apps.googleusercontent.com';
const CLIENT_SECRET = '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';

passport.use(new GoogleStrategy({
  clientID: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/google/callback', // Replace with your callback URL
  passReqToCallback: true
}, (req, accessToken, refreshToken, profile, done) => {
  // Logic to handle successful authentication (e.g., store user data)
  return done(null, profile);
}));

// Serialize and deserialize user data for session management (optional)
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport;
