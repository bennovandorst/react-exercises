import { useState, useEffect } from "react";
import Message from "./Message";

const TodoList = ({message }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (message) {
      setMessages([...messages, { message }]);
    }
  }, [message]);

  return (
    <>
      {messages.map((message, id) => (
        <Message key={id} message={message.message} />
      ))}
    </>
  );
};

export default TodoList;
