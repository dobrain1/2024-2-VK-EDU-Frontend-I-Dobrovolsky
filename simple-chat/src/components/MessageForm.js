export function MessageForm() {
    return `                
            <textarea id="message-input" class="message-input" placeholder="Введите сообщение" rows="1"></textarea>
            <input type="file" id="image-input" class="image-input" accept="image/*"">
            <button type="button" id="image-button" class="image-button material-icons">image</button>
            <button type="submit" class="send-button material-icons">send</button>
        `;
}