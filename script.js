document.addEventListener("DOMContentLoaded", function () {
    const showButton = document.getElementById("showDownloads");
    const fileTypeButtons = document.querySelectorAll(".file-type-button");
    const fileLists = document.querySelectorAll(".file-list");

    showButton.addEventListener("click", function () {
        const downloadsSection = document.getElementById("downloads");
        downloadsSection.style.display = "block";
    });

    fileTypeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const target = button.getAttribute("data-target");

            fileLists.forEach(function (list) {
                list.style.display = "none";
            });

            const listToDisplay = document.getElementById(target);
            listToDisplay.style.display = "block";
        });
    });
});
