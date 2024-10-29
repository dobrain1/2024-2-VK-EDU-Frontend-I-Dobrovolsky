import { ChatListHeader } from './components/ChatListHeader';

import './index.css';

document.addEventListener("DOMContentLoaded", () => {
    const listHeader = document.getElementById("chat-list-header");
    listHeader.innerHTML = ChatListHeader();
});

