import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import '../App/App.css';

function Time() {
  const [time, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const timer = setInterval(() => {
      const currentDate = new Date().toLocaleString();
      setTime(currentDate);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column fullheight">
        <h2 className="text-center">Текущее время: {time}</h2>
        <Button caption="На главную" route="/" />
      </div>
    </>
  );
}

export default Time;
