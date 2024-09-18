document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Form submission ko rokne ke liye
    alert('Thank you for your message, ' + document.getElementById('name').value + '!');
});
