import { useState, useEffect } from 'react';

export default function FullScreenButton(){
  const [isFull, setIsFull] = useState(false);

  function toggleFullScreen(){
    if(!isFull){
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

	useEffect(() => {
		if (document.addEventListener) {
			document.addEventListener("fullscreenchange", fullScreenChangeHandler);
		}
	}, [isFull]);

  function fullScreenChangeHandler(e: Event) {
    if(!document.fullscreenElement) {
      setIsFull(false);
      return;
    } else {
      setIsFull(true);
    }
  }

  return  <button className='border border-gray-600 px-5 py-2.5 rounded-lg' onClick={toggleFullScreen}>
            Full Screen
          </button>

}