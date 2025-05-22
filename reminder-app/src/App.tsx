import React, { useEffect, useState } from 'react';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './models/reminder';
import reminderService from './services/reminder';
import { log } from 'console';
import NewReminder from './components/newReminder';

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  //const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminder();
    setReminders(reminders);
  };

  const removeReminder = (id: number) => {
   setReminders(reminders.filter(reminder => reminder.id !== id));
  };

  return (
    <div className="App">
      <NewReminder />
      <ReminderList items={reminders} onRemoveReminder={removeReminder}/>
    </div>
  );
}

export default App;
