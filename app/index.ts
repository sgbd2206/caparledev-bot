import http, { Server } from 'http';
import express, { Application } from 'express';

import * as config from './config';
import { logger } from './config/logger';
import { dbConnection } from './config/dabatase';

import { Redis } from './utils/redis';

import { TwitterService } from './services/twitter.service';

const port: number = config.SERVER_PORT;
const app: Application = express();
const server: Server = http.createServer(app);

server.listen(port, async (): Promise<void> => {
	// Initialize Twitter application
	TwitterService.init(
		config.CONSUMER_KEY, config.CONSUMER_SECRET, config.ACCESS_TOKEN_KEY, config.ACCESS_TOKEN_SECRET,
	);

	// Initialize connection to Mongo database
	await dbConnection(config.DB_HOST, config.DB_PORT, config.DB_NAME, config.DB_USER, config.DB_PASSWORD);

	// Initialize connection to Redis database
	Redis.init(config.REDIS_HOST, config.REDIS_PORT);

	logger.info(`Server started - ${port}`);
});
