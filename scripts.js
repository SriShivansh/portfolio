document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation (you can expand this)
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        // Here you could also implement form submission logic (e.g., AJAX)
        this.reset(); // Clear the form
    } else {
        alert('Please fill out all fields.');
    }
});
