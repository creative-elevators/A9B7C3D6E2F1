// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// overlay menu
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
}


/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// lightbox gallery
$(document).on("click", '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

// counts
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter');
  
    counters.forEach(counter => {
      const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = target / 200;
  
        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          setTimeout(updateCounter, 10);
        } else {
          counter.innerText = target;
        }
      };
  
      updateCounter();
    });
  });

  // Services section
  document.addEventListener("DOMContentLoaded", function () {
    const readMoreButtons = document.querySelectorAll(".read-more-btn");
  
    readMoreButtons.forEach((btn) => {
      btn.addEventListener("click", function (event) {
        event.preventDefault();
        const textElement = this.previousElementSibling;
        const fullText = textElement.getAttribute("data-full-text");
  
        // Allow rendering of HTML tags for lists
        if (textElement.innerHTML === fullText) {
          textElement.innerHTML =
            textElement.getAttribute("data-short-text") ||
            textElement.innerHTML.split("...")[0] + "...";
          this.textContent = "Read More";
        } else {
          textElement.setAttribute("data-short-text", textElement.innerHTML);
          textElement.innerHTML = fullText;
          this.textContent = "Read Less";
        }
      });
    });
  });



  // Initialize EmailJS
emailjs.init("YOUR_PUBLIC_KEY"); // Replace "YOUR_PUBLIC_KEY" with your EmailJS public key

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from refreshing the page

  // Collect form data
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Send email via EmailJS
  emailjs
    .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      name: name,
      phone: phone,
      email: email,
      message: message,
    })
    .then(
      function (response) {
        alert("Email sent successfully!");
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        alert("Failed to send email. Please try again.");
        console.error("FAILED...", error);
      }
    );
});




const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Route to handle form submission
app.post('/send-email', async (req, res) => {
  const { name, phone, email, message } = req.body;

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com', // Replace with your email
      pass: 'your-email-password', // Replace with your email password
    },
  });

  // Email options
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'creativeelevatorss@gmail.com', // Replace with your recipient email
    subject: 'New Contact Form Submission',
    text: `
      Name: ${name}
      Phone: ${phone}
      Email: ${email}
      Message: ${message}
    `,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    res.send('Email sent successfully!');
  } catch (error) {
    console.error(error);
    res.send('Failed to send email. Please try again.');
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

  
  
document.querySelector('.btn-box a').addEventListener('click', function (e) {
  e.preventDefault();
  // Redirect to the gallery page
  window.location.href = 'gallery.html'; // Replace 'gallery.html' with the actual URL of your gallery page
});

  
  
document.querySelector('.btn-box a').addEventListener('click', function (e) {
  e.preventDefault();

  // Find all hidden rows or gallery items
  const hiddenRows = document.querySelectorAll('.row.hidden');

  // Remove the 'hidden' class to make them visible
  hiddenRows.forEach(row => {
    row.classList.remove('hidden');
  });

  // Optionally hide the "View All" button after expanding
  this.style.display = 'none';
});

  

function togglePhotos(button) {
  const morePhotos = button.closest('.category').querySelector('.more-photos');
  if (morePhotos.style.display === 'none') {
    morePhotos.style.display = 'flex';
    button.textContent = 'View Less';
  } else {
    morePhotos.style.display = 'none';
    button.textContent = 'View More';
  }
}
