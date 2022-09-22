import { useRef, useEffect } from 'react'
// import { gsap } from "gsap";

export default function Parallax({ endOfParallax }) {
    const myRef = useRef()

  return (
    <>
        <header className="relative flex justify-center items-center preserve-3d h-full w-full">
            <div className={endOfParallax ? "sky-scrolled" : "sky-showing"}></div>
            <img 
              src="/clouds.png" 
              className={endOfParallax ? "hide-clouds" : "clouds"}
              alt="clouds image"
            />
            <img 
              src="/sun.png" 
              className="sun"
              alt="sun-image"
            />
            <img 
              src="/mountain_scene.png" 
              // className={contentVisible ? "hide-mountains" : "mountains"}
              className='mountains'
              alt="mountains image"
            />
            <img 
              src="/forest_path.png" 
              // className={contentVisible ? "hide-forest" : "forest"}
              className='forest'
              alt="forest image"
            />
            <h1 className="drop-shadow-2xl font-bold text-green-700 text-2xl lg:text-4xl absolute mb-96 text-center" ref={myRef}>Scroll down...</h1>
            <img src="/down_icon.png" alt="Down icon" className="h-18 w-18 animate-bounce mb-48" />
        </header>
        <div className="speed-1 h-full -z-10"></div>  
        <div className="speed-1 h-full -z-10"></div>  
        <div className={`speed-1 h-full -z-10 ${endOfParallax ? "transition ease-in bg-black duration-500" : "transition ease-in bg-transparent duration-500"} `}></div> 
    </>
  )
}
