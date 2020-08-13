var stars = document.getElementsByClassName("star");
var doctorForm;
var doctor;

doctorForm = document.getElementById("chooseDoctor");
doctorForm.addEventListener("mouseover", setDoctor);



stars[0].addEventListener('click', noDoctor);
stars[1].addEventListener('click', noDoctor);
stars[2].addEventListener('click', noDoctor);
stars[3].addEventListener('click', noDoctor);
stars[4].addEventListener('click', noDoctor);

function redirect(e) {
    if (doctor) {
        var starId = e.target.id;
        document.location.href = "review.html/?doctor="+encodeURIComponent(doctor) + 
         '&star='+encodeURIComponent(starId);
    } else{
        alert("Please select a doctor to review");
    }
}

function noDoctor() {
    if (!doctor) {
        alert("Please select a doctor to review");
    }
}

function hoverStar(e) {
    var endStar = e.target;
    var i = 0;
    for (; i<stars.length; i++) {
        stars[i].style.color = "gold";
        stars[i].innerHTML = "&#9733;"
        if (endStar === stars[i]) {
            i++;
            break;
        };
    }
    for (; i<stars.length; i++) {
        stars[i].style.color = "white";
        stars[i].innerHTML = "&#9734;";
    }
}

function setDoctor(e) {
    e.target.click();
    doctor = doctorForm.doctor.value;
    for (var i=0; i<stars.length; i++) {
        stars[i].addEventListener("mouseover", hoverStar);
    }
    stars[0].addEventListener('click', redirect);
    stars[1].addEventListener('click', redirect);
    stars[2].addEventListener('click', redirect);
    stars[3].addEventListener('click', redirect);
    stars[4].addEventListener('click', function() {
        document.location.href = "fivestar.html/?doctor="+encodeURIComponent(doctor);
    });
}
