// Set the date we're counting down to
const birthday = new Date("2023-10-23T01:26:10");

function updateCountdown() {
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

        document.getElementById("timer").style.animation = "countdownFade 0.5s";
        document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

// Initial animation
document.querySelector(".countdown").style.animation = "countdownFade 2s";

// Update the countdown every second
const timer = setInterval(updateCountdown, 1000);

// Initial countdown update
updateCountdown();

// Simulated conversation data in JavaScript
const conversation = [
    { sender: "Prabha", text: "Hi there! It's almost Kannabhiran's big day! 🎉" },
    { sender: "Partha", text: "Yes, we can't wait to celebrate! 🥳" },
    { sender: "Rukumani", text: "I hope he's ready for the big 3-0! 😄" },
    { sender: "Rashmi", text: "Haha, it's going to be a blast! 🎈" },
    { sender: "Prabha", text: "Get ready to say goodbye to your 20s, Kannabhiran! 😜" },
    { sender: "Partha", text: "Aarambikalaangala..." }
];

const chatContainer = document.querySelector(".chat");

function addMessageWithDelayAndThinking(message, index) {
    setTimeout(() => {
        // Add "thinking" bubble with the sender's name
        const thinkingBubble = document.createElement("div");
        thinkingBubble.className = `message thinking ${message.sender === "Partha" ? "users" : "friends"}`;
        thinkingBubble.innerHTML = `${message.sender} is typing <span class="thinking-dots">...</span>`;
        chatContainer.appendChild(thinkingBubble);

        setTimeout(() => {
            // Remove the "thinking" bubble
            chatContainer.removeChild(thinkingBubble);

            // Add the actual message
            const messageDiv = document.createElement("div");
            messageDiv.className = `message ${message.sender === "Partha" ? "user" : "friend"}`;
            messageDiv.innerHTML = `<div class="sender">${message.sender}:</div><div class="text">${message.text}</div>`;
            chatContainer.appendChild(messageDiv);

            // Scroll to the bottom of the chat container
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }, 2000); // 2-second delay before the message
    }, (index * 4000) + 2000); // 2-second delay for the thinking bubble
}

// Iterate through conversation and add messages with "thinking" bubbles
conversation.forEach((message, index) => {
    addMessageWithDelayAndThinking(message, index);
});






