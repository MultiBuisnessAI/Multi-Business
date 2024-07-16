// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Merci pour votre message !');
        });
    }

    const chatButton = document.getElementById('chat-button');
    if (chatButton) {
        chatButton.addEventListener('click', function() {
            alert('Le chat en direct est en cours de développement.');
        });
    }
});
