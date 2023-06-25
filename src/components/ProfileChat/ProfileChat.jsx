import React, { useState } from "react"

const chat = ({ selectedContact }) => {
    const [messages, setMessages] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const message = event.target.message.value;
        if(message.trim() !== ''){
            setMessages([...messages, message]);
            event.target.message.value = '';
        }
    };

    return (
        <div>
            <h2>{selectedContact}</h2>
            <div>
                {messages.map((message, index) => (
                    <div key={index}>
                        {message}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="message" placeholder="Escribe un mensaje"/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default chat