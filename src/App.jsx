import Quiz from './components/Quiz';
// import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <>
    <Routes>
        {/* <Route exact path="/" element={<h3>Nice</h3>} />
        <Route path="/about" element={<h2>SDa</h2>} /> */}
        <Route path="/" element={<Quiz/>} />
    </Routes>
    </>
    </BrowserRouter>
  )
}

export default App
