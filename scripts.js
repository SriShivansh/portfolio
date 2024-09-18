document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Form submission ko rokne ke liye
    alert('Thank you for your message, ' + document.getElementById('name').value + '!');
});

emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(function() {
        alert('Message sent successfully!');
    }, function(error) {
        alert('Failed to send message. Error: ' + JSON.stringify(error));
    });
