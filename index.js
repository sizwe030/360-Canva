document.addEventListener('DOMContentLoaded', function() {
    // Google Sign-In
    document.querySelector('.google-btn').addEventListener('click', function() {
        // Implement Google Sign-In logic here
        alert('Google Sign-In clicked');
    });

    // LinkedIn Sign-In
    document.querySelector('.linkedin-btn').addEventListener('click', function() {
        // Implement LinkedIn Sign-In logic here
        alert('LinkedIn Sign-In clicked');
    });

    // Email Sign-In
    document.querySelector('.email-btn').addEventListener('click', function() {
        // Show email sign-in form
        document.getElementById('email-signin-modal').style.display = 'block';
    });

    // Close modal
    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('email-signin-modal').style.display = 'none';
    });

    // Handle email sign-in form submission
    document.getElementById('email-signin-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = event.target[0].value;
        const password = event.target[1].value;
        // Implement authentication logic here
        alert(`Email: ${email}, Password: ${password}`);
        // Close modal after submission
        document.getElementById('email-signin-modal').style.display = 'none';
    });
});
