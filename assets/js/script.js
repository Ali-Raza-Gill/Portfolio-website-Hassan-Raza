function sendMail(){
    let parms = {
    name: document.getElementById("name").value,
    email : document.getElementById("email").value,
    message: document.getElementById("message").value,
    };
    emailjs.send("service_64ibym9","template_tl2kv5c", parms).then(alert("Email sent Successfully!!"))
}