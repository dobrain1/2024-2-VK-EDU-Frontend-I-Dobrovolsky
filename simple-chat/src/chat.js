import { ChatHeader } from './components/ChatHeader';
import './chat.css';

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const chatNameInfo = urlParams.get('chat');
    console.log(typeof chatNameInfo)

    const messageForm = document.getElementById("message-form");
    const messageInput = document.getElementById("message-input");
    const imageInput = document.getElementById("image-input");
    const messagesContainer = document.getElementById("messages-container");
    const header = document.getElementById("chat-header");
    const chatContainer = document.getElementById("chat-container");

    header.innerHTML = ChatHeader()

    const displayMessage = (message) => {
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

        messagesContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    };

    const loadMessages = () => {
        const messages = JSON.parse(localStorage.getItem("messages")) || [];
        messages.forEach(message => {
            if (message.chat === chatNameInfo) {
                displayMessage(message);
            }
        });
    };

    const saveMessage = (message) => {
        const messages = JSON.parse(localStorage.getItem("messages")) || [];
        messages.push(message);
        localStorage.setItem("messages", JSON.stringify(messages));
    };

    const initializeDefaultMessages = () => {
        const defaultMessages = [
            {sender: "Собеседник", chat: 'User1', text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", time: new Date().toISOString()},
            {sender: "Собеседник", chat: 'User2', text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", time: new Date().toISOString()},
            {sender: "Собеседник", chat: 'User3', text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", time: new Date().toISOString()},
        ];
        if (localStorage.length === 0){
            defaultMessages.forEach((message) => saveMessage(message));
        }
    };

    initializeDefaultMessages();
    loadMessages();

    const sendMessage = () => {
        const text = messageInput.value.trim();
        const message = {
            sender: "Ваше имя",
            chat: chatNameInfo,
            text: text,
            time: new Date().toISOString()
        };

        if (text) {
            displayMessage(message);
            saveMessage(message);
            messageInput.value = "";
        }
    };

    messageForm.addEventListener("submit", (e) => {
        e.preventDefault();
        sendMessage();
    });

    messageInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    document.getElementById("image-button").addEventListener("click", () => {
        imageInput.click();
    });

    imageInput.addEventListener("change", () => {
        const file = imageInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const message = {
                    sender: "Ваше имя",
                    image: reader.result,
                    chat: chatNameInfo,
                    time: new Date().toISOString()
                };
                displayMessage(message);
                saveMessage(message);
            };
            reader.readAsDataURL(file);
        }
    });

    const chatNameContainer = document.getElementById("chat-name");
    const chatName = chatNameContainer.childNodes[0].textContent

    if (chatName.length > 15) {
        chatNameContainer.childNodes[0].textContent = chatName.slice(0, 13) + "..."
    } else {
        chatNameContainer.childNodes[0].textContent = chatName
    }

    document.getElementById('delete-button').addEventListener('click', () => {
        localStorage.clear();
        location.reload();
    });
});
