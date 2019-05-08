import app from "./app.js";

const PORT = 4000;

const handleListening = () => console.log(`Server is listing ${PORT} port`);

app.listen(PORT, handleListening);