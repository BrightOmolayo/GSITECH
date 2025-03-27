document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        let firstName = document.getElementById("first-name").value;
        let lastName = document.getElementById("last-name").value;
        let email = document.getElementById("email").value;
        let subject = document.getElementById("subject").value;
        let message = document.getElementById("message").value;

        let mailtoLink = `mailto:molayobright@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            Name: ${firstName} ${lastName}%0D%0AEmail: ${email}%0D%0AMessage: ${message}
        )}`;

        window.location.href = mailtoLink;
    });
});