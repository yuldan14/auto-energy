import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Scheduler = () => {
  const [device, setDevice] = useState('');
  const [time, setTime] = useState('');
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    // Mengambil jadwal dari server saat komponen dimuat
    const fetchSchedules = async () => {
      const response = await axios.get('http://localhost:3001/schedules');
      setSchedule(response.data);
    };
    
    fetchSchedules();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSchedule = { device, time };

    // Mengirim data ke server
    const response = await axios.post('http://localhost:3001/schedules', newSchedule);
    
    // Menambahkan jadwal baru ke state lokal dengan ID yang dihasilkan oleh server
    setSchedule([...schedule, { ...newSchedule, id: response.data.id }]);
    
    // Mengosongkan input
    setDevice('');
    setTime('');
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/schedules/${id}`);
    setSchedule(schedule.filter(item => item.id !== id));
  };

  return (
    <div id="scheduler">
      <h2>Jadwalkan Penggunaan Energi</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nama Perangkat (mis. AC, Lampu)"
          value={device}
          onChange={(e) => setDevice(e.target.value)}
          required
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <button type="submit">Jadwalkan</button>
      </form>
      <h3>Jadwal Penggunaan Energi</h3>
      <ul>
        {schedule.map((item) => (
          <li key={item.id}>
            {item.device} - {item.time}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Scheduler;
