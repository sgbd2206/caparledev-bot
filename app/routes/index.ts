import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { RegistrationRoute } from './registration.route';

/**
 * Global router configuration of the application
 *
 * @class
 */
class Routes {
	/**
	 * @param  {Application} app
	 *
	 * @returns void
	 */
	static init(app: express.Application): void {
		const router: express.Router = express.Router();

		// Express middleware
		app.use(bodyParser.urlencoded({ extended: true }));
		app.use(bodyParser.json());
		app.use(cookieParser());
		app.use(cors());

		// Endpoints
		app.use('/', new RegistrationRoute().router);

		// Static content
		app.use(express.static(path.join(__dirname, '../../public')));
	}
}

export { Routes };
