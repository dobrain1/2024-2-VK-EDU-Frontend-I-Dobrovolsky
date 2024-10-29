import { ChatListHeader } from './components/ChatListHeader';
import { NewChatButton } from './components/newChatButton';

import './index.css';

document.addEventListener("DOMContentLoaded", () => {
    const listHeader = document.getElementById("chat-list-header");
    listHeader.innerHTML = ChatListHeader();

    const newChatButtonContainer = document.getElementById("new-chat-button-container");
    newChatButtonContainer.innerHTML = NewChatButton();
});

