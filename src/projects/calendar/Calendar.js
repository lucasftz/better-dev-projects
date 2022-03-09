import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import './Calendar.css'

const calendarDates = Array(31)
  .fill(0)
  .map((e, i) => i);

function Calendar() {
  const [choosingType, setChoosingType] = useState('start'); // start or end
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [hoverDate, setHoverDate] = useState(null);

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

  const checkInBetween = (day) => {
    if (startDate && !endDate) return startDate < day && day < hoverDate;
    return startDate < day && day < endDate;
  };

  return <div className="calendar-picker">
    <StyledDateChooser>
      <StyledDateChooserBtn
        onClick={() => setChoosingType('start')}
        isChoosing={choosingType === 'start'}
      >
        Start Date <span>{startDate}</span>
      </StyledDateChooserBtn>

      <StyledDateChooserBtn
        onClick={() => setChoosingType('end')}
        isChoosing={choosingType === 'end'}
      >
        End Date <span>{endDate}</span>
      </StyledDateChooserBtn>
    </StyledDateChooser>

    <StyledCalendar>
      {calendarDates.map((day, index) => {
        const dayNumber = day + 1;

        let isBetween = checkInBetween(dayNumber);

        let isSelected = dayNumber === startDate || dayNumber === endDate;

        return (
          <StyledCalendarDay
            key={index}
            isBetween={isBetween}
            isSelected={isSelected}
            onClick={() => updateDate(dayNumber)}
            onMouseOver={() => setHoverDate(dayNumber)}
          >
            {dayNumber + 1}
          </StyledCalendarDay>
        )
      })}
    </StyledCalendar>
  </div>
}

export default Calendar;

const StyledDateChooser = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const StyledDateChooserBtn = styled.button`
  color: #0b204c;
  text-transform: uppercase;
  flex: 1;
  padding: 15px;
  background: none;
  cursor: pointer;
  border: none;
  border-bottom: 2px solid rgba(11, 32, 76, 0.2);
  outline: none;
  border-color: ${props => (props.isChoosing ? '#0b204c' : 'none')};

  span {
    display: block;
    min-height: 60px;
    font-size: 50px;
  }
`;

const StyledCalendar = styled.div`
  max-width: 400px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  background: #0b204c;
  color: #fff;
  padding: 20px;
`;

const StyledCalendarDay = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  transition: 0.3s ease background;
  border: none;
  outline: none;
  cursor: pointer;
  color: #8096c1;
  background: none;

  ${props => {
    return props.isBetween && css`
      background: #254381 !important;
      color: #eee;
    `
  }}

  ${props => {
    return props.isSelected && css`
      background: #1a1a1a !important;
      color: #eee;
    `
  }}

  &:hover {
    color: #eee;
    background: #254381;
  }
`;