import express from 'express';
//import remindersRouter from 'c:/wstsp/tsprepo/reminder-api//routers/reminders.ts';
//./routers/reminders';

const app = express();

//app.use('/reminders', remindersRouter);

app.get('/', (req, res) => {
    res.send('Hello WOrld, I am learning TypeScript. I Love Zeba since 2018. She is my soulmate.');
})

app.listen(8000, () => console.log('Server started--->>>...'));