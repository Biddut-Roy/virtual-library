import { useState, useEffect } from 'react';

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

    alert('Button 1 clicked!');
  };

  const handleClickButton2 = () => {

    alert('Button 2 clicked!');
  };

  return (
    <div>
      {isButton1Enabled ? (
        <button
          onClick={handleClickButton1}
          className="btn-accent btn-sm rounded-lg hover:Enabled from 2 PM to 4 PM"
        >
          Join Conference
        </button>
      ) : (
        <button
          onClick={handleClickButton2}
          className="btn-accent btn-sm rounded-lg hover:Enabled outside 2 PM to 4 PM"
        >
          Join Conference(2 PM to 4 PM)
        </button>
      )}
    </div>
  );
};

export default TimeRestrictedButtons;
