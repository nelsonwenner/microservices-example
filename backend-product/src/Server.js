import { success } from 'consola';
import app from './App';

app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () =>
    success({message: `\nServer start with successfully on PORT ${process.env.SERVER_PORT}`, badge: true})
);