import './App.css';
import Parallax from './components/Parallax';
import Content from './components/Content'
import { useState } from 'react'

function App() {
  const [endOfParallax, setEndOfParallax] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)

  return (
    <div className="relative bg-black text-white tracking-wide">
      <div className="h-screen w-screen overflow-y-auto overflow-x-hidden perspective scroll-smooth">
        <Parallax 
          contentVisible={contentVisible} 
          endOfParallax={endOfParallax} 
        />
        <Content 
          setEndOfParallax={setEndOfParallax} 
          setContentVisible={setContentVisible} 
        />
      </div>
    </div>
  );
}

export default App;
