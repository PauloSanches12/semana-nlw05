import express, { json } from 'express';
import './database';
import { routes } from './routes';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import path from 'path';

const app = express();

//configuração para utilização do HTML nas rotas
app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

//rota para exibir pagina do cliente
app.get("/pages/client", (request, response) => {
    return response.render("html/client.html")
})

//rota para exibir pagina do administrador
app.get("/pages/admin", (request, response) => {
    return response.render("html/admin.html")
})

const http = createServer(app); //criando protocolo http
const io = new Server(http); //criando protocolo websocket

io.on("connection",(socket: Socket) => {
    // console.log("Se conectou!", socket.id);
})

app.use(json());

app.use(routes);

export { http, io }