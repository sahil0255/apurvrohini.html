// Countdown Timer
function updateCountdown() {
    const eventDate = new Date("2025-09-25T00:00:00"); // Anniversary Date
    const currentDate = new Date();
    const timeDifference = eventDate - currentDate;

    if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById("countdownTimer").innerHTML = `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
    } else {
        document.getElementById("countdownTimer").innerHTML = "Our Anniversary is Here! ❤️";
    }
}

setInterval(updateCountdown, 1000);

// Love Percentage (I Love You Percentage)
let lovePercentage = 0;

function increaseLovePercentage() {
    if (lovePercentage < 100) {
        lovePercentage++;
        document.getElementById("lovePercentage").innerText = `${lovePercentage}%`;
    }
}

setInterval(increaseLovePercentage, 100);

// Question Interaction
document.getElementById("answer-btn").addEventListener("click", function() {
    const answer = prompt("Answer: Who does Apurv love most? (Your name!)");

    if (answer.toLowerCase() === "Rohini" || answer.toLowerCase() === "rohini") {
        alert("💖 Yes, Apurv loves you most!");
    } else {
        alert("💔 Hmm... Apurv loves you, but you're not the first choice 😉");
    }
});

