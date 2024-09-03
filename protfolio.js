document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (name && email && message) {
            alert('Thank you for your message, ' + name + '! I will get back to you soon.');
            form.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});
