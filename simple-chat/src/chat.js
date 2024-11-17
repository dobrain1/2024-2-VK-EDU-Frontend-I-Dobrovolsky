import { ChatHeader } from './components/ChatHeader';
import './chat.css';
import { displayMessage } from './components/Messages';
import { MessageForm } from './components/MessageForm';

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const chatNameInfo = urlParams.get('chat');

    const messageForm = document.getElementById("message-form");
    messageForm.innerHTML = MessageForm();

    const messageInput = document.getElementById("message-input");
    const imageInput = document.getElementById("image-input");
    
    const header = document.getElementById("chat-header");
    header.innerHTML = ChatHeader();

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

    // const initializeDefaultMessages = () => {
    //     const defaultMessages = [
    //         {sender: "Собеседник", chat: 'User1', text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", time: new Date().toISOString()},
    //         {sender: "Собеседник", chat: 'User2', text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", time: new Date().toISOString()},
    //         {sender: "Собеседник", chat: 'User3', text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", time: new Date().toISOString()},
    //     ];
    //     if (localStorage.length === 0){
    //         defaultMessages.forEach((message) => saveMessage(message));
    //     }
    // };

    // initializeDefaultMessages();
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
