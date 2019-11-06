
window.addEventListener("DOMContentLoaded", function() {
    let checkBox = document.getElementById("rememberMe");

    if (localStorage.getItem("isChecked") === "true") {
        checkBox.checked = true;
    }

    checkBox.addEventListener("click", function() {
        localStorage.setItem("isChecked", true);
    });

    let persone = {
        name: "Alex",
        age: 25,
        tech: ["mobile", "notebook"]
    };

    let serializedPerson = JSON.stringify(persone);
    localStorage.setItem("Alex", serializedPerson);

    console.log(JSON.parse(localStorage.getItem("Alex")));
});