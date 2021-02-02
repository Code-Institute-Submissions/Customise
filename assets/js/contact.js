(function () {
    emailjs.init("user_NAWAdgsufavTlIxvJLtsm");
})();

function displayResponse(resp) {

    if (resp.status === 412) {
        $(".response").html(`<p>Please enter a valid email address</p>`).addClass("red-resp").removeClass("green-resp");
        
    } else {
        $(".response").html(`<p> Thanks for entering your details</p>`).addClass("green-resp").removeClass("red-resp");
        ;
        

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
                //  $("p", ".response").html(`<p> Thanks for entering your details ${response} </p>`)
                // $("p", ".error").addclass(".error-message");
                displayResponse(response);
            },

            function (error) {
                console.log("FAILED", error);

                displayResponse(error);
                // console.log("hi");
                // $("p", ".response").append("Please enter a valid Email Address");
                // document.getElementsByClassName("response").innerHTML = "<p>Please enter a valid Email Address</p>";
                // $("#gh-user-data").html(
                //     `<h2>No info found for user ${username}</h2>`);
                // } else if(errorResponse ===403) {
                //     var resetTime = new Date(errorResponse.getResponseHeader('X-RateLimit-Reset')*1000);
                //     $("gh-user-data").html(`<h4>Too many Requists  ,wait until ${resetTime.toLocalTimeString()}</h4>`)
                //     console.log(errorResponse);
                //     $("#gh-user-data").html(
                //         `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);

            }
        );
    return false;  // To block from loading a new page
}

