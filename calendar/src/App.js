import React, { useState } from 'react';
import './App.css';

const calendarDates = Array(31)
  .fill(0)
  .map((e, i) => i);

function App() {
  const [choosingType, setChoosingType] = useState('start'); // start or end
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const updateDate = (selectedDay) => {
    // handle if user chose before current range
    if (startDate && selectedDay < startDate) {
      setStartDate(selectedDay);
      return setChoosingType('end');
    };

    // handle if user chose after current range
    if (endDate && selectedDay > endDate) {
      setEndDate(selectedDay);
      return setChoosingType('end');
    };

    if (choosingType === 'start') {
      setStartDate(selectedDay);
      return setChoosingType('end');
    };
    
    if (choosingType === 'end') {
      setEndDate(selectedDay);
    };
  };

  return <>
    <div className="date-chooser">
      <button
        className="date-chooser-button"
        onClick={() => setChoosingType('start')}
      >
        Start Date <span>{startDate}</span>
      </button>
      <button
        className="date-chooser-button"
        onClick={() => setChoosingType('end')}
      >
        End Date <span>{endDate}</span>
      </button>
    </div>

    <div className="calendar">
      {calendarDates.map((day, index) => {
        const dayNumber = day + 1;

        return (
          <button
            key={index}
            className="calendar-day"
            onClick={() => updateDate(dayNumber)}
          >
            {dayNumber + 1}
          </button>
        )
      })}
    </div>
  </>
}

export default App;
