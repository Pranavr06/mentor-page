const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mentorDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Database connection error:", err));

// Create a Mentor schema (simplified version for this example)
const mentorSchema = new mongoose.Schema({
  username: String,
  password: String
});

// Create a Mentor model
const Mentor = mongoose.model('Mentor', mentorSchema);

// POST route to handle login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const mentor = await Mentor.findOne({ username });

    if (!mentor) {
      return res.status(400).send("Username or password is incorrect");
    }

    // Compare the password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, mentor.password);

    if (!isMatch) {
      return res.status(400).send("Username or password is incorrect");
    }

    // Successful login
    res.send("Login successful!");
  } catch (error) {
    res.status(500).send("Server error");
  }
});

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting the default way
  
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;
  
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `username=${username}&password=${password}`
    })
    .then(response => response.text())
    .then(data => {
      if (data === "Login successful!") {
        window.location.href = "mentor-profile.html"; // Redirect to mentor profile page
      } else {
        alert(data); // Show error message
      }
    })
    .catch(error => console.log('Error:', error));
  });
  