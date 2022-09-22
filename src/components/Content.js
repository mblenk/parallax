import { useRef, useEffect } from 'react'

export default function About( { setEndOfParallax }) {
  const myRef = useRef()
  
  useEffect(() => {
      const observer = new IntersectionObserver((entries, observer) => {
        const entryOne = entries[0];
        setEndOfParallax(entryOne.isIntersecting);
      });
      observer.observe(myRef.current, { threshold: 1.0 });
  }, []);


  return (
    <div className="bg-black py-24 relative m-0 overflow-y-hidden" id="about" >
        <div className="w-full mx-auto lg:flex relative sm:gap-12 lg:gap-8" >
            <div className="m-0 mx-auto lg:w-3/4 text-center">
              <h1 className="text-white text-3xl md:text-5xl font-bold mt-4" ref={myRef}>This is a Parallax scroll effect created from 4 separate images and a div tag</h1>
              <br />
              <p className="text-white md:text-3xl">Your content would fade in here...</p>
            </div>
        </div>
    </div>
  )
}

