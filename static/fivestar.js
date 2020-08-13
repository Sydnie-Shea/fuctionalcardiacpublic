const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

yesButton.addEventListener('click', button => {
    var doctor = document.location.href.split("?")[1].split("=")[1];
    if (doctor) {
        var websiteNum = Math.floor(Math.random() * 4);
        if (websiteNum == 0) {
            if (doctor == "grumberg"){
                window.location.replace("https://www.vitals.com/doctors/Dr_Beatrice_Grumberg/write-review");
            } else if (doctor == "cohen") {
                window.location.replace("https://www.vitals.com/doctors/Dr_Yale_Cohen/write-review");
            } else if (doctor == "rosen"){
                window.location.replace("https://www.vitals.com/doctors/Dr_Eric_Rosen_2/write-review");
            }
        }
        else if (websiteNum == 1) {
            if (doctor == "grumberg"){
                window.location.replace("https://doctor.webmd.com/doctor/beatrice-grumberg-807479fb-9f84-4933-b999-4affa7165979-overview");
            } else if (doctor == "cohen") {
                window.location.replace("https://doctor.webmd.com/doctor/yale-cohen-b354ced1-d243-4607-8f3e-ee09e42758cd-overview");
            } else if (doctor == "rosen"){
                window.location.replace("https://doctor.webmd.com/doctor/eric-rosen-0508b163-63d6-4748-829d-85e732e85c0e-overview");
            }
        }
        else if (websiteNum == 2) {
            if (doctor == "grumberg"){
                window.location.replace("https://www.healthgrades.com/physician/dr-beatrice-grumberg-x3bcr");
            } else if (doctor == "cohen") {
                window.location.replace("https://www.healthgrades.com/physician/dr-yale-cohen-y24pp");
            } else if (doctor == "rosen"){
                window.location.replace("https://www.healthgrades.com/physician/dr-eric-rosen-23qcw");
            }            
        }
        else if (websiteNum == 3) {
            if (doctor == "grumberg"){
                window.location.replace("https://www.google.com/search?sxsrf=ALeKk01hBHTmMVduuwzV3gAi4gsRgsWyWQ%3A1594922325879&ei=VZUQX6iYNeyg_QaRzZD4Aw&q=beatrice+grumberg+md&oq=beatrice+grumberg+md&gs_lcp=CgZwc3ktYWIQAzILCC4QxwEQrwEQkwIyBggAEBYQHjICCCY6EAguEMcBEK8BELADECcQkwI6CQgAELADEAcQHjoJCAAQsAMQCBAeOgUIJhCwA1C3E1j6FmDfGmgBcAB4AIABmgGIAZsDkgEDMC4zmAEAoAEBqgEHZ3dzLXdpeg&sclient=psy-ab&ved=0ahUKEwjolrbVrNLqAhVsUN8KHZEmBD8Q4dUDCAw&uact=5");
            } else if (doctor == "cohen") {
                window.location.replace("https://www.google.com/search?q=yale+cohen+md&rlz=1C1SQJL_enUS807US807&oq=yale+cohen+md&aqs=chrome.0.69i59j46j69i59j0l2j69i60l3.2075j0j1&sourceid=chrome&ie=UTF-8");
            } else if (doctor == "rosen"){
                window.location.replace("https://www.google.com/search?rlz=1C1SQJL_enUS807US807&sxsrf=ALeKk012fyAMl7nDj58lk07llpyl_Qx4BA%3A1594922364534&ei=fJUQX9uEINGHggfF85HgDA&q=eric+rosen+md&oq=eric+rosen+md&gs_lcp=CgZwc3ktYWIQAzIECCMQJzIECCMQJzIECCMQJzICCAAyAggAMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeOgcIIxCwAxAnUPoGWPoGYO4MaAFwAHgAgAFuiAFukgEDMC4xmAEAoAEBqgEHZ3dzLXdpeg&sclient=psy-ab&ved=0ahUKEwjbsu3nrNLqAhXRg-AKHcV5BMwQ4dUDCAw&uact=5");
            }            
        }
    }
})

noButton.addEventListener('click', button => {
    document.getElementById("no").outerHTML = "<div id='thankyou'>Thank you!</div>";
    yesButton.style.display = "none";
    setTimeout(function(){
        document.location.href = "/../static/rating.html";
        }, 3000);
    
})
