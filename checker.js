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

function ansCheck(userAns,ans,closes) {
    verdict = document.getElementById("verdict");
    if (userAns === ans) {
        verdict.innerHTML = "Correct!";
    }
    else if (closes.includes(userAns)) {
        verdict.innerHTML = "You're on the right track, but you're not there yet.";
    }
    else {
        verdict.innerHTML += "Hmm... Not what I'm looking for.";
    }
}