import React, { useEffect, useState } from 'react';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './models/reminder';
import reminderService from './services/reminder';
import { log } from 'console';
import NewReminder from './components/newReminder';

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminder();
    setReminders(reminders);
  };

  const removeReminder = (id: number) => {
   setReminders(reminders.filter(reminder => reminder.id !== id));
   console.log(id);
  };

  const addReminder = async (tittle: string) => {
    const newReminder = await reminderService.addReminder(tittle);
    //setReminders([newReminder, ...reminders]);
    console.log(tittle);
  }

  return (
    <div className="App">
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder}/>
    </div>
  );
}

export default App;
