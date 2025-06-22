const form = document.getElementById("registration-form");
const feedbackDiv = document.getElementById("form-feedback");

form.addEventListener("submit", function(event){
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const email = document.getElementById("email").value.trim();

        let isValid = true;
        let messages = [];
            // validate username
        if(username.length < 3){
              isValid = false;
              messages.push("username must be atleast 3 characters");
        }
        //    validate email
        if(!email.includes("@") || !email.includes(".")){
              isValid = false;
              messages.push("email must contain '@'sign and '.' ");
        }
        //  validate password
        if(password.length < 8){
            isValid = false;
            messages.push("password should be at least 8 characters long");
        }

        //  display feedback
        feedbackDiv.style.display = "block";
       if(isValid){
        feedbackDiv.textContent = "Registration Successful!";
        feedbackDiv.style.color = "#28a745";
       }else {
        feedbackDiv.innerHTML = messages.join("<br>");
        feedbackDiv.style.color =  "#dc3545";
       }
});
