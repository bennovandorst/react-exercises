import { useState } from 'react';
import './App.css'
import CreateMessage from './components/CreateTodo'
import MessageList from './components/TodoList'

function App() {
  const [textInput, setTextInput] = useState('');
  const [message, setMessage] = useState([]);

  return (
    <>
      <h1>Benno's To Do Lijstje</h1>
      <CreateMessage setTextInput={setTextInput} textInput={textInput} setMessage={setMessage} />
      <MessageList message={message}/>
    </>
  )
}

export default App
