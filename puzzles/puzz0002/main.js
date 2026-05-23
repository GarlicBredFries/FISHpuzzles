let answer = "azerty"
let closes = ["frenchlayout"]

document.addEventListener('DOMContentLoaded', function () {
    var userInput = document.getElementById("inputBox");
    userInput.addEventListener("keydown", function(event) {
        document.getElementById("verdict").innerHTML = "";
        if (event.key === "Enter") {
            var userAns = userInput.value.replace(/\s/g, '').toLowerCase();
            ansCheck(userAns, answer, closes);
        }
    });
    document.getElementById("inputButton").addEventListener("click", function(event) {
        var userAns = userInput.value.replace(/\s/g, '').toLowerCase();
        ansCheck(userAns, answer, closes);
    });
});