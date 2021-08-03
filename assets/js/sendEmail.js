function sendMail (contactForm) {
    emailjs.send("gmail", "your_11", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email_address.value,
        "player_request": contactForm.legend.value,
        "request_reason": contactForm.reason.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}