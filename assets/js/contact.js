// code from email.js console
(function () {
    emailjs.init("user_NAWAdgsufavTlIxvJLtsm");
})();

function displayResponse(resp) {

    if (resp.status === 412) {
        $(".response").html(`<p>Please enter a valid email address</p>`).addClass("red-resp").removeClass("green-resp");
    } else {
        $(".response").html(`<p> Thanks for entering your details</p>`).addClass("green-resp").removeClass("red-resp");
    }
}

function sendMail(form) {
    emailjs.send("customise", "customise", {
        "to_name": form.name.value,
        "to_email": form.email.value,
        "message": form.projectsummary.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                displayResponse(response);
            },

            function (error) {
                console.log("FAILED", error);
                displayResponse(error);
            }
        );
    return false;
}
