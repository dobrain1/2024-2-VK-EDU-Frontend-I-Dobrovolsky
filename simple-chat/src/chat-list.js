import { ChatListHeader } from './components/ChatListHeader';

import './chat-list.css';

document.addEventListener("DOMContentLoaded", () => {
    const listHeader = document.getElementById("chat-list-header");
    listHeader.innerHTML = ChatListHeader();
});

