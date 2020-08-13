const code = document.getElementById("entryCode");
const submitButton = document.getElementById("entryButton");

submitButton.addEventListener('click', button => {
    console.log("here");
    const pass = code.value;
    console.log(pass);
    if (pass == "Care" || pass == "care") {
        document.location.href = "rating.html";
    } else {
        alert("Wrong password");
    }
})