// JavaScript for basic form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for validation

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const place = document.getElementById('place').value;

    if (firstName && lastName && phone && email && place) {
        alert('Form submitted successfully!');
        window.location.href = "profile.html"; // Redirect to profile page after submission
    } else {
        alert('Please fill out all fields!');
    }
});
