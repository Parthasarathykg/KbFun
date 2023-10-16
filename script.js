// Set the date we're counting down to
const birthday = new Date("2023-10-23T00:00:00");

// Update the countdown every second
const timer = setInterval(function () {
    const now = new Date();
    const timeRemaining = birthday - now;

    if (timeRemaining <= 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "Happy 30th Birthday!";
    } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}, 1000);
