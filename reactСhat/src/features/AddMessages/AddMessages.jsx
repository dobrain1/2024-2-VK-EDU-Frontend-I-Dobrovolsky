import React from 'react'
import './AddMessages.scss'
import QuestionAnswer from'@mui/icons-material/QuestionAnswer'

export const AddMessages = () => {

    const updateMessages = (newMessage) => {
        const messages = JSON.parse(localStorage.getItem("messages")) || [];
        const updatedMessages = [...messages, newMessage];
        localStorage.setItem("messages", JSON.stringify(updatedMessages));
    }

    const initializeDefaultMessages = () => {
        const defaultMessages = [
            {sender: "sender", chatID: 1, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", image: null, time: new Date().toISOString()},
            {sender: "sender", chatID: 2, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", image: null, time: new Date().toISOString()},
            {sender: "sender", chatID: 3, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", image: null, time: new Date().toISOString()},
        ];
        defaultMessages.forEach((message) => updateMessages(message));
    };

    return (
        <button onClick={() => initializeDefaultMessages()} className="add-default-button">
            <QuestionAnswer></QuestionAnswer>
        </button>
    )
}
