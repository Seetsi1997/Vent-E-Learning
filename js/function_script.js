
// Home Section Starts
var menuBtn = document.querySelector('.main-navbar .menu-btn');
var menuList = document.querySelector('.main-navbar .nav-list');
var menuListItems = document.querySelectorAll('.nav-list li a');


function displayLocalTime() {
    // Time zone for Johannesburg
    const johannesburgTimezone = 'Africa/Johannesburg';
    // Get the current date and time
    const now = new Date();
    const options = {
        week: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
        weekday: "short",
        hour: '2-digit',
        minute: '2-digit',
        hour12: true, // Use 24-hour format
        timeZone: johannesburgTimezone,
    };

    const formattedTime = now.toLocaleTimeString('en-US', options);

    // Update the content of the <span> element with the local time
    const datetimeElement = document.getElementById('datetime');
    document.getElementById('year').innerText = now.getFullYear();
    datetimeElement.innerText = formattedTime;
}
// Call the function when the page loads
window.onload = displayLocalTime();


menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menuList.classList.toggle('active');
});

for (var i = 0; i < menuListItems.length; i++) {
    menuListItems[i].addEventListener('click', menuItemClicked);
}
function menuItemClicked() {
    menuBtn.classList.remove('active');
    menuList.classList.remove('active');
}

var homeSection = document.querySelector('.home');
window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction() {
    if (window.scrollY > 120) {
        homeSection.classList.add('active');
    }
    else {
        homeSection.classList.remove('active');
    }
}
// Home Section Ends

// Testimonials Section Starts
$('.testimonials-slider').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 13,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        }
    }
})
// Testimonials Section Ends
function chatOpen() {
    document.getElementById("chat-open").style.display = "none";
    document.getElementById("chat-close").style.display = "block";
    document.getElementById("chat-window1").style.display = "block";
  }
  function chatClose() {
    document.getElementById("chat-open").style.display = "block";
    document.getElementById("chat-close").style.display = "none";
    document.getElementById("chat-window1").style.display = "none";
  }

  function openWhatsApp(platform) {
     // Replace it with your phone number
    const phone_number = "+27609440410";
    // Customize with message and phone number
    const txtToShare = "Hello and welcome, We're looking forward to chatting with you on WhatsApp."; 
    if (platform === "web") {
        window.open(`https://api.whatsapp.com/send?phone=${phone_number}&text=${encodeURIComponent(txtToShare)}`);
    } else if (platform === "mobile") {
        window.open(`whatsapp://send?phone=${phone_number}&text=${encodeURIComponent(txtToShare)}`);
    }
}
function initializeMap() {
    // Correct coordinates for 1200 Sagwityi Street, Mayibuye, Commercia, Midrand, Gauteng
    const map = L.map('map', {
        center: [-25.9795, 28.1378], // Updated coordinates
        zoom: 10,
        attributionControl: false, 
        zoomControl: false // Disable the default zoom control
    }); 

    // Add a tile layer (e.g., OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Optional: Add a marker
    const marker = L.marker([-25.9795, 28.1378]).addTo(map);
    marker.bindPopup("1200 Sagwityi Street, Mayibuye, Commercia, Midrand, Gauteng, 1685, South Africa").openPopup();

    // Add a circular border
    const circle = L.circle([-25.9795, 28.1378], {
        color: ' #cadcfc', // Border color
        fillColor: '#004750af', // Fill color
        fillOpacity: 0.5, // Fill opacity
        radius: 500 // Radius in meters
    }).addTo(map);
}

// Call the function to initialize the map
window.onload = initializeMap();
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('splash-screen').style.opacity = '0';
        setTimeout(function() {
            document.getElementById('splash-screen').style.display = 'none';
            document.getElementById('home-screen').style.display = 'block';
        }, 1000);
    }, 3000); // Adjust the timeout duration as needed

    document.getElementById('openPopup').addEventListener('click', () => document.getElementById('modal-terms-conditions').style.display = 'flex');
    document.querySelector('.close-terms-conditions').addEventListener('click', () => document.getElementById('modal-terms-conditions').style.display = 'none');
});



