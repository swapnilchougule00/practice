import { useEffect, useRef, useState } from "react";

const StopWatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const startTimeref = useRef();
  const timeoutref = useRef();
  useEffect(() => {
    if (isRunning) {
      timeoutref.current = setInterval(() => {
        setTime(Date.now() - startTimeref.current);
      }, 10);
    }
    return () => {
      clearInterval(timeoutref.current);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
    startTimeref.current = Date.now() - time;
  };
  const handleStop = () => {
    setIsRunning(false);
  };
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatDate = (time) => {
    const minute = Math.floor((time / (1000 * 60)) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const miliSeconds = Math.floor((time % 1000) / 10);

    return `${minute}: ${seconds}: ${miliSeconds}`;
  };
  return (
    <div>
      <p>{formatDate(time)}</p>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default StopWatch;
