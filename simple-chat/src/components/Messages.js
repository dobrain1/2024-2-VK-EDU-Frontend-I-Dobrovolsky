
const messagesContainer = document.getElementById("messages-container");
const chatContainer = document.getElementById("chat-container");

export function displayMessage(message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");

    if (message.sender === "Ваше имя") {
        messageElement.classList.add("sender");
    } else {
        messageElement.classList.add("receiver");
    }

    const time = new Date(message.time).toLocaleTimeString(); 
    messageElement.innerHTML = `
        <div class="message-content">
        ${message.text ? `<p>${message.text}</p>` : `<img src="${message.image}" alt="Image">`}
            <div class="message-info">
                <span class="message-time">${time}</span>
                ${message.sender === "Ваше имя" ? '<span class="message-check material-icons">done</span>' : ''}
            </div>
        </div>
    `;
    messageElement.classList.add("show");
    messageElement.classList.add("animate");

    messagesContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
};