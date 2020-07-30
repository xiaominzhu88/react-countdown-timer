import React, { useState, useEffect } from 'react';
import CustomCounter from './CustomCounter';

const CreateCustomCounter = () => {
  const [counterConfigured, setCounterConfigured] = useState(false);

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const [selectedDateTime, setSelectedDateTime] = useState(
    new Date().toString(),
  );

  useEffect(() => {
    if (date !== '' && time !== '') setSelectedDateTime(`${date}T${time}`);
    else {
      if (date === '') {
        if (time === '') {
          setSelectedDateTime(new Date().toString());
        } else {
          let d = new Date();
          setSelectedDateTime(
            `${d.getFullYear()}-${d.getMonth() < 9 ? '0' : ''}${
              d.getMonth() + 1
            }-${d.getDate()}T${time}`,
          );
        }
      } else {
        setSelectedDateTime(`${date}`);
      }
    }
  }, [date, time]);

  return (
    <div>
      {counterConfigured ? (
        <CustomCounter
          name={name}
          message={message}
          targetDate={new Date(selectedDateTime).getTime()}
          onClose={() => setCounterConfigured(false)}
        />
      ) : (
        <>
          <h1>Create your counter</h1>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ color: 'green' }}>
              Enter a name for your counter:{' '}
            </label>
            <input
              type="text"
              placeholder="name of your counter"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ color: 'green' }}>
              Enter a message you would want to be displayed:{' '}
            </label>
            <input
              type="text"
              placeholder="your display message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ color: 'green' }}>Select a target date: </label>
            <input
              type="date"
              placeholder="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
            &nbsp;
            <input
              type="time"
              placeholder="time"
              value={time}
              onChange={(event) => setTime(event.target.value)}
            />
            {date === '' && time === '' ? (
              <div style={{ color: 'hotpink', marginTop: '1em' }}>
                <small>Default: {selectedDateTime}</small>
              </div>
            ) : (
              ''
            )}
            {date !== '' ? (
              <div className="selectedDate">
                <small>Selected Date: {date}</small>
              </div>
            ) : (
              ''
            )}
            {time !== '' ? (
              <div className="selectedDate">
                <small>Selected Time: {time}</small>
              </div>
            ) : (
              ''
            )}
          </div>
          <button onClick={() => setCounterConfigured(true)}>Create</button>
        </>
      )}
    </div>
  );
};

export default CreateCustomCounter;
