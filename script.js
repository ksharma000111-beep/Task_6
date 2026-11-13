function showProfile(id) {


    let profile = document.getElementById("profile" + id);


    let allProfiles = document.querySelectorAll(".extra-info");


    allProfiles.forEach(function (item) {

        if (item !== profile) {
            item.style.display = "none";
        }

    });


    if (profile.style.display === "block") {

        profile.style.display = "none";

    } else {

        profile.style.display = "block";

    }

}
