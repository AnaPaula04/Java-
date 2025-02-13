document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('inviteForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
                
        // Display thank you message
        alert(`Thank you! An invite has been sent!`);
        
        // Clear form fields
        form.reset();
    });
});