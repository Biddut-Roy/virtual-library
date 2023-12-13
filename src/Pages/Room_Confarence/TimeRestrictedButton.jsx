import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const TimeRestrictedButtons = () => {
  const [isButton1Enabled, setIsButton1Enabled] = useState(false);

  useEffect(() => {
    const isCurrentTimeInRange = () => {
      const currentHour = new Date().getHours();
      return currentHour >= 14 && currentHour < 16;
    };

    setIsButton1Enabled(isCurrentTimeInRange());


    const intervalId = setInterval(() => {
      setIsButton1Enabled(isCurrentTimeInRange());
    }, 60000);

  
    return () => clearInterval(intervalId);
  }, []);

  const handleClickButton1 = () => {

    alert('Join Now');
  };

  const handleClickButton2 = () => {

    alert('Wrong time , please  join a Right time!');
  };

  return (
    <div>
      {isButton1Enabled ? (
        <button
          onClick={handleClickButton1}
          className="btn-accent btn-sm rounded-lg"
        >
          <NavLink to={"/conference"}>Join Conference</NavLink>
        </button>
      ) : (
        <button
          onClick={handleClickButton2}
          className="btn-accent btn-sm rounded-lg"
        >
          
          Join Conference(2 PM to 4 PM)
        </button>
      )}
    </div>
  );
};

export default TimeRestrictedButtons;
