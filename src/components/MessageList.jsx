import { useState, useEffect } from "react";
import Message from "./Message";

const MessageList = ({ name, message }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (name && message) {
      setMessages([...messages, { name, message }]);
    }
  }, [name, message]);

  return (
    <>
      {messages.map((message, id) => (
        <Message key={id} name={message.name} message={message.message} />
      ))}
    </>
  );
};

export default MessageList;
