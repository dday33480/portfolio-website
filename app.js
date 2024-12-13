const sections = document.querySelectorAll('.section');
const secButtons = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
const formSubmit = document.querySelector('.submit-btn');
const fullName = document.getElementById("name");
const company = document.getElementById("company");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");


// Page navigation

function PageNavigation() {
    //Button click active class
    for(let i = 0; i < secBtn.length; i++) {
        secBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            this.className += ' active-btn';
        })
    }

    //Section active class management
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id){
            //Remove active state
            secButtons.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //Hide inactive sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    }) 
    
}


PageNavigation();



// Email SMTP

function sendEmail() {

    // Get Environment Variables for mail server authentication
    const userEmail = process.env.ELASTICMAIL_USER_EMAIL;
    const password = process.env.ELASTICMAIL_PASSWORD;

    // Set email body format as const variable
    const bodyMessage = `Message from ${fullName.value} at ${company.value}<br> Email: ${email.value}<br><br><b><u>MESSAGE:</u></b><br>${message.value}`;

    //Connect to elasticmail host and prepare email for sending
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : userEmail,
        Password : password,
        To : userEmail,
        From : userEmail,
        Subject : subject.value,
        Body : bodyMessage
    })
        .then(message => {
                if(message == "OK") {
                    Swal.fire({
                        title: "Sent",
                        text: "Your email has successfully been sent",
                        icon: "success"
                    });
                }
                else {
                    Swal.fire({
                        title: "Failed",
                        text: "Your email has not been sent",
                        icon: "error"
                    });
                }
        });
}


// Checking and validating contact form inputs
function checkInputs() {
    const inputs = document.querySelectorAll('.field');

    for (const input of inputs) {
        //error handling in case of empty fields
        if (input.value == "") {
            input.classList.add("error");
            input.parentElement.classList.add("error");
        }

        //Call checkEmail function to validate email format
        if (inputs[2].value != "") {
            checkEmail();
        }

        inputs[2].addEventListener("keyup", () => {
            checkEmail();
        });

        //Manage field errors in case of empty field to filled field
        input.addEventListener("keyup", () => {
            if (input.value != "") {
                input.classList.remove("error");
                input.parentElement.classList.remove("error");
            }
            else {
                input.classList.add("error");
                input.parentElement.classList.add("error");
            }
        })
    }
}

//Check and validation of email format
function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const emailFormatErr = document.querySelector(".error-txt.email");

    //Error handling of email field
    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        //Error message in case of invalid email format
        if (email.value != "") {
            emailFormatErr.innerText = "Please enter a valid email address";
        }

        //Error message on case of empty email field
        else {
            emailFormatErr.innerText = "Email can't be blank";
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

//Form submission handling
formSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    checkInputs();

    //Call sendEmail function if none of the fields contain error
    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !company.classList.contains("error") 
        && !subject.classList.contains("error") && !message.classList.contains("error")) {
            sendEmail();
    }

});