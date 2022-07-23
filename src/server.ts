import express from 'express';

const port = 3333;
const app = express();

app.get("/", (request, response) => {
    return response.send("Hello World Jackson");
});

app.listen(port, () => {
    return `Server on port ${port}`;
});
