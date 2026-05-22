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