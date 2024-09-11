import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import NoPage from './pages/NoPage';
import Navigation from './pages/Navigation';

function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
