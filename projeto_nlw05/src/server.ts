import express, { request, response } from 'express';

const app = express();

app.get("/", (request, response) => {
    return response.status(200).json({message: "Olá mundo!"})
})

app.post("/create", (request, response) => {
    return response.json({message: "Criado!"});
})

app.listen(3333, () => console.log("Server is running on port 3333"));