// server.js (Backend logic)

const express = require('express');
const app = express();
const port = 3000;

// Simulated mentor data (from DB in a real app)
const mentorData = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "123-456-7890",
  place: "Tech Company",
  hobbies: "Reading, Mentoring",
  image: "/images/mentor-image.jpg" // Image path for static folder
};

// Serve the mentor data as JSON at the '/api/mentor' endpoint
app.get('/api/mentor', (req, res) => {
  res.json(mentorData);
});

// Serve static files like images, CSS, JS
app.use(express.static('public'));

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// mentor-profile.js (Frontend logic)

fetch('/api/mentor')
  .then(response => response.json())
  .then(data => {
    // Populate the page with the mentor's data
    document.getElementById('mentor-name').innerText = data.name;
    document.getElementById('mentor-email').innerText = data.email;
    document.getElementById('mentor-phone').innerText = data.phone;
    document.getElementById('mentor-place').innerText = data.place;
    document.getElementById('mentor-hobbies').innerText = data.hobbies;
    document.getElementById('mentor-image').src = data.image;
  })
  .catch(error => {
    console.error('Error fetching mentor data:', error);
    alert('Failed to load mentor data');
  });
