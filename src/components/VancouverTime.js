// VancouverTime.js
import React, { useState, useEffect } from 'react';

const VancouverTime = () => {
  const [vancouverDate, setVancouverDate] = useState('');
  const [vancouverTime, setVancouverTime] = useState('');

  const updateVancouverTime = () => {
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://worldtimeapi.org/api/timezone/America/Vancouver?format=json&api_key=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const vancouverDateTime = new Date(data.utc_datetime);
        setVancouverDate(vancouverDateTime.toLocaleDateString());
        setVancouverTime(vancouverDateTime.toLocaleTimeString());
      })
      .catch(error => console.error('Error fetching Vancouver time:', error));
  };

  useEffect(() => {
    updateVancouverTime();
    const updateInterval = 1000; // in milliseconds
    const intervalId = setInterval(updateVancouverTime, updateInterval);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div>{vancouverTime}</div>
    </div>
  );
};

export default VancouverTime;
