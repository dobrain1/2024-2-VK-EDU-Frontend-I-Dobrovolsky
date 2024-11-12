import { ChaList } from './components/ChatList';
import { ChatListHeader } from './components/ChatListHeader';
import { NewChatButton } from './components/newChatButton';

import './index.css';

document.addEventListener("DOMContentLoaded", () => {
    const listHeader = document.getElementById("chat-list-header");
    listHeader.innerHTML = ChatListHeader();

    const newChatButtonContainer = document.getElementById("new-chat-button-container");
    newChatButtonContainer.innerHTML = NewChatButton();

    const chatList = document.getElementById("chat-list-container");
    chatList.innerHTML = ChaList();

    const messages = JSON.parse(localStorage.getItem("messages")) || [];

    function userMessages(User) {
        return messages.filter(message => message.chat === User);
    }

    const User1Messages = userMessages('User1');
    const User2Messages = userMessages('User2');
    const User3Messages = userMessages('User3');

    const User1MessagesCount = User1Messages.length;
    const User2MessagesCount = User2Messages.length;
    const User3MessagesCount = User3Messages.length;

    const user1MessageCount = document.getElementById("user1-message-count");
    const user2MessageCount = document.getElementById("user2-message-count");
    const user3MessageCount = document.getElementById("user3-message-count");

    user1MessageCount.innerText = User1MessagesCount;
    user2MessageCount.innerText = User2MessagesCount;
    user3MessageCount.innerText = User3MessagesCount;

    const User1LastMessageContainer = document.getElementById("chat1-last-message");
    const User2LastMessageContainer = document.getElementById("chat2-last-message");
    const User3LastMessageContainer = document.getElementById("chat3-last-message");

    const User1LastMessage = User1Messages.length > 0 
        ? (User1Messages[User1Messages.length - 1].text || "картинка") 
        : "Нет сообщений";
    const User2LastMessage = User2Messages.length > 0 
        ? (User2Messages[User2Messages.length - 1].text || "картинка") 
        : "Нет сообщений";
    const User3LastMessage = User3Messages.length > 0 
        ? (User3Messages[User3Messages.length - 1].text || "картинка") 
        : "Нет сообщений";

    User1LastMessageContainer.innerText = User1LastMessage;
    User2LastMessageContainer.innerText = User2LastMessage;
    User3LastMessageContainer.innerText = User3LastMessage;

    const shortName = (Message, MessageContainer) => {
        if (Message.length > 8) {
            MessageContainer.innerText = Message.replace(/\n/g, ' ').slice(0, 8) + "...";
        } else if (!Message) {
            MessageContainer.innerText = "картинка";
        } else {
            MessageContainer.innerText = Message;
        }
    };

    shortName(User1LastMessage, User1LastMessageContainer);
    shortName(User2LastMessage, User2LastMessageContainer);
    shortName(User3LastMessage, User3LastMessageContainer);

    const chat1Name = document.getElementById("chat1Name");
    const chat2Name = document.getElementById("chat2Name");
    const chat3Name = document.getElementById("chat3Name");

    const shortChatName = (chatContainer) => {
        if (chatContainer.innerText.length > 12) {
            chatContainer.innerText = chatContainer.innerText.slice(0, 12) + "...";
        }
    };

    shortChatName(chat1Name);
    shortChatName(chat2Name);
    shortChatName(chat3Name);

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
        defaultMessages.forEach((message) => saveMessage(message));
    };

    document.getElementById('add-default-messages').addEventListener('click', () => {
        initializeDefaultMessages();
        location.reload();
    });
    
});

