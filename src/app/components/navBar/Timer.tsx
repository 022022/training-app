import { useState, useEffect } from 'react';

export function Timer(){
  const [started, setStarted] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    // we only care that we can pass it to clearInterval() later) -> use automatically deduced type;

    if(started){
      timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);

  }, [started]);

  function startTimer(){
    setTime(0);
    setStarted(true);
  }

  function stopTimer(){
    setStarted(false);
    setTime(0);
  }

	function formatTime(time: number) {
		const hours = Math.floor(time / 3600);
		const minutes = Math.floor((time % 3600) / 60);
		const seconds = time % 60;

    if(hours > 24) {
      setTime(0);
    }

		return `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${
			seconds < 10 ? "0" + seconds : seconds
		}`;
	};

  return <div className='flex'>
    {started ?
      <>
        <div onClick={stopTimer}>{formatTime(time)}</div>
        <div onClick={startTimer}>Refresh</div>
      </>
    :
      <div onClick={startTimer}>Timer</div>
    }
  </div>
}