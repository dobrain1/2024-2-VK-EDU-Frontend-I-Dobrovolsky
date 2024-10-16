export function Header(screen) {
    const header = document.getElementById('chat-header')
    if (screen === 'chat') {
        header.innerHTML = `                
            <a href="chat-list.html"><span class="back-button material-icons">arrow_back</span></a>
            <div class="user-container">
                <span class="avatar material-icons">account_circle</span> 
                <div class="user-info">
                    <h2 class="chat-name">Дженнифер</h2>
                    <span class="last-seen">Был(а) в сети 5 минут назад</span>
                </div>
            </div>
            <div class="functional-icons">
                <span class="search-button material-icons">search</span>
                <span class="more-button material-icons">more_vert</span>
            </div>
            `;
    } else if (screen === 'chat-list') {
        header.innerHTML = `            
            <span class="burger-button material-icons">menu</span>
            <div class="user-container">
                <h2>Messanger app</h2>
            </div>
            <div class="functional-icons">
                <span class="search-button material-icons">search</span>
            </div>
            `;
    }

    return header;
}