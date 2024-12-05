import React, { useRef, useState} from 'react'
import './ChatForm.scss'
import {Button} from '../../shared'
import ImageIcon from'@mui/icons-material/Image'
import SendIcon from'@mui/icons-material/Send'

export const ChatForm = ({chatID, updateMessages}) => {

  const [messageText, setMessageText] = useState('');
  const [image, setImage] = useState();
  const fileInputRef = useRef(null);

  const sendMessage = (chatID) => {
    const text = messageText.trim();
    if (text || image){
      const message = {
        sender: "you",
        chatID: chatID,
        text: text || null,
        image: image || null,
        time: new Date().toISOString(),
      }

      updateMessages(message);
      setMessageText('')
      setImage(null)
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    sendMessage(chatID)
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(chatID);  
    }
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImage(reader.result)
      };
    }
  }

  const openFilePicker = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };


  return (
    <form className='message-form' onSubmit={handleSubmit}>
      <textarea 
        className="message-input" 
        placeholder="Введите сообщение" 
        rows="1"
        value={messageText}
        onKeyDown={handleKeyDown}
        onChange={(e) => setMessageText(e.target.value)}
      ></textarea>
      <input 
        type="file"
        ref={fileInputRef}
        className="message-image-input"
        accept='image/*"'
        onChange={handleFileChange}
      />
      <Button 
        type={"button"}
        place={'form'}
        customClickEvent={openFilePicker}
      >
        <ImageIcon></ImageIcon>
      </Button>
      <Button 
        type={"submit"}
        place={'form'}
      >
        <SendIcon></SendIcon>
      </Button>
    </form>
  )
}
