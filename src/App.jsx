import { useState } from 'react';
import './App.css'
import CreateMessage from './components/CreateMessage'
import MessageList from './components/MessageList'

function App() {
  const [textInput, setTextInput] = useState('');
  const [message, setMessage] = useState([]);
  let name = 'Jasontje'

  return (
    <>
      <CreateMessage setTextInput={setTextInput} textInput={textInput} setMessage={setMessage} />
      <MessageList name={name} message={message}/>
    </>
  )
}

export default App
