import http, { Server } from 'http';
import express, { Application } from "express";

const port: number = 4900;

const app: Application = express();

const server: Server = http.createServer(app);

server.listen(port, (): void => {
	console.log('Server started at the port 4900');
});
