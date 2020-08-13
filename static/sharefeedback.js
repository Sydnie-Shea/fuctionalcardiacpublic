
//import { script } from "googleapis/build/src/apis/script";
const feedbackNButton = document.getElementById("feedbackN");
const feedbackButton = document.getElementById("feedback");
const feedbackYButton = document.getElementById("feedbackY");
const prompt = document.getElementById("prompt");
const feedbackText = document.getElementById("feedback_text");
const header = document.getElementById("header");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const submit = document.getElementById("submit");
const contact = document.getElementById("contact");
feedbackYButton.style.display = "none";
feedbackNButton.style.display = "none";
prompt.style.display = "none";

contact.style.display = "none";

submit.addEventListener('click', button => {
    phoneNum = phone.value;
    emailAdd = email.value;
    endOfEmail = "     phoneNum: "+phoneNum +"         email: " +emailAdd;
    console.log(endOfEmail);
    sendEmail(endOfEmail);
    contact.style.display="none";
})
feedbackYButton.addEventListener('click', button => {
    contact.style.display = "block";
    feedbackYButton.style.display = "none";
    feedbackNButton.style.display = "none";
    prompt.style.display = "none";
})

feedbackButton.addEventListener('click', button => {
    feedbackButton.style.display="none";
    feedbackText.style.display="none";
    header.style.display="none";
    feedbackYButton.style.display = "block";
    feedbackNButton.style.display = "block";
    prompt.style.display = "block";
})
feedbackNButton.addEventListener('click', button => {
    sendEmail("");
    // document.getElementById("feedback_text").outerHTML = "<div id='thankyou'>Thank you for sharing your input!</div>";
    // feedbackButton.style.display = "none";
    // heading = document.getElementsByTagName('h1')[0];
    // heading.style.display = 'none';

    // var info = document.location.href.split("?")[1].split('&');
    // var doct = info[0].split("=")[1];
    // var star = info[1].split("=")[1][4];
    // const emailText = encodeURIComponent(feedbackText.value);
    // const emailT = doct + ": " + star + " stars: " + emailText;
    // const urlT = "/_carryOut/" + emailT;
    // $.ajax({
    //     method:"POST",
    //     url: urlT,
    //     async: false,
    //     data: {emailText}
    // });
    // console.log("Sent email " + emailT);
    // setTimeout(function(){
    //     document.location.href = "/../static/rating.html";
    //     }, 3000);
    
    // return false;
})
function sendEmail(contactInfo) {
    document.getElementById("feedback_text").outerHTML = "<div id='thankyou'>Thank you for sharing your input!</div>";
    feedbackNButton.style.display = "none";
    feedbackYButton.style.display = "none";
    prompt.style.display = "none";
    heading = document.getElementsByTagName('h1')[0];
    heading.style.display = 'none';

    var info = document.location.href.split("?")[1].split('&');
    var doct = info[0].split("=")[1];
    var star = info[1].split("=")[1][4];
    const emailText = encodeURIComponent(feedbackText.value);
    const emailT = doct + ": " + star + " stars: " + emailText + "\n\n" + contactInfo;
    const urlT = "/_carryOut/" + emailT;
    $.ajax({
        method:"POST",
        url: urlT,
        async: false,
        data: {emailText}
    });
    console.log("Sent email " + emailT);
    setTimeout(function(){
        document.location.href = "/../static/rating.html";
        }, 3000);
    
    return false;
}