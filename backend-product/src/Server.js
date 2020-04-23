import app from './app';

app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
    console.log('\nServer start with successfully!');
});