(function(){
    emailjs.init("user_NAWAdgsufavTlIxvJLtsm");
})();

function sendMail(form) {
    emailjs.send("customise", "customise", {
        "to_name": form.name.value,
        "to_email": form.email.value,
        "message": form.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            $("p", ".response").append("Thanks for contacting us!");
            // $("p", ".error").addclass(".error-message");
        },
        
        function(error) {
            debugger;
            if (error.status === 412) {
                console.log("hi")
            // $("p", ".response").append("Please enter a valid Email Address");
            document.getElementsByClassName("response").innerHTML = "Please enter a valid Email Address"
                // $("#gh-user-data").html(
                //     `<h2>No info found for user ${username}</h2>`);
            // } else if(errorResponse ===403) {
            //     var resetTime = new Date(errorResponse.getResponseHeader('X-RateLimit-Reset')*1000);
            //     $("gh-user-data").html(`<h4>Too many Requists  ,wait until ${resetTime.toLocalTimeString()}</h4>`)
            //     console.log(errorResponse);
            //     $("#gh-user-data").html(
            //         `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
             }
        }
    );
    return false;  // To block from loading a new page
}

document.getElementById("submitButton").onclick = function(){

}