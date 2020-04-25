import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

dotenv.config();

const paths: any = {
	test: '../../.env.test',
	development: '../../.env',
	production: '../.env.prod',
};

const configPath: string = path.resolve(__dirname, paths[process.env.NODE_ENV || 'development']);

const envConfig: dotenv.DotenvParseOutput = dotenv.parse(fs.readFileSync(configPath));

for (const k in envConfig) {
	process.env[k] = envConfig[k];
}

const e: any = process.env;

const ENV: string = e.NODE_ENV;
const SERVER_PORT: number = parseInt(e.SERVER_PORT || '7432', 10);
const LOG_FILE_DIR: string = e.LOG_FILE_DIR;
const CONSUMER_KEY: string = e.TWITTER_CONSUMER_KEY || '';
const CONSUMER_SECRET: string = e.TWITTER_CONSUMER_SECRET;
const ACCESS_TOKEN_KEY: string = e.TWITTER_ACCESS_TOKEN_KEY;
const ACCESS_TOKEN_SECRET: string = e.TWITTER_ACCESS_TOKEN_SECRET;
const ACTIVITY_ACCOUNT_BASE_URL: string = e.ACTIVITY_ACCOUNT_BASE_URL;
const ENVIRONMENT_NAME: string = e.ENVIRONMENT_NAME;
const BEARER_ACCESS_TOKEN: string = e.BEARER_ACCESS_TOKEN;
const TWITTER_CALLBACK_URL: string = e.TWITTER_CALLBACK_URL;
const DB_HOST: string = e.DB_HOST;
const DB_PORT: number = parseInt(e.DB_PORT, 10);
const DB_NAME: string = e.DB_NAME;
const DB_USER: string = e.DB_USER;
const DB_PASSWORD: string = e.DB_PASSWORD;
const BOT_TWITTER_NAME: string = e.BOT_TWITTER_NAME;
const REDIS_HOST: string = e.REDIS_HOST;
const REDIS_PORT: number = parseInt(e.REDIS_PORT, 10);

export {
	ENV, SERVER_PORT, LOG_FILE_DIR, CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN_KEY, ACCESS_TOKEN_SECRET,
	ACTIVITY_ACCOUNT_BASE_URL, ENVIRONMENT_NAME, BEARER_ACCESS_TOKEN, TWITTER_CALLBACK_URL, DB_HOST, DB_PORT,
	DB_NAME, DB_USER, DB_PASSWORD, BOT_TWITTER_NAME, REDIS_HOST, REDIS_PORT,
};