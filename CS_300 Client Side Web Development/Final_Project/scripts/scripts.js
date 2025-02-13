document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Display thank you message
        alert(`Thank you for your message, ${name}! We will get back to you at ${email} soon. Subject: ${subject}. Message: ${message}`);
        
        // Clear form fields
        form.reset();
    });
});