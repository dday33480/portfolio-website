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
    fetch('credentials.json')
        .then((response) => response.json())
        .then((json) => {
            const userEmail = json.email
            const password = json.password;

    const bodyMessage = `Message from ${fullName.value} at ${company.value}<br> Email: ${email.value}<br><br><b><u>MESSAGE:</u></b><br>${message.value}`;

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
    });
}

function checkInputs() {
    const inputs = document.querySelectorAll('.field');

    for (const input of inputs) {
        if (input.value == "") {
            input.classList.add("error");
            input.parentElement.classList.add("error");
        }

        if (inputs[2].value != "") {
            checkEmail();
        }

        inputs[2].addEventListener("keyup", () => {
            checkEmail();
        });

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

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const emailFormatErr = document.querySelector(".error-txt.email");

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            emailFormatErr.innerText = "Please enter a valid email address";
        }
        else {
            emailFormatErr.innerText = "Email can't be blank";
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

formSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !company.classList.contains("error") 
        && !subject.classList.contains("error") && !message.classList.contains("error")) {
            sendEmail();
    }

});