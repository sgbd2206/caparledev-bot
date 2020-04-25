import axios, { AxiosResponse, AxiosError } from 'axios';

import { CONSUMER_KEY, CONSUMER_SECRET } from '../config';
import { logger } from '../config/logger';

(async (): Promise<void> => {
	axios.post('https://api.twitter.com/oauth2/token', 'grant_type=client_credentials', {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		auth: {
			username: CONSUMER_KEY,
			password: CONSUMER_SECRET,
		},
	}).then((response: AxiosResponse): void => {
		logger.info(response.data);
	}).catch((error: AxiosError): void => {
		logger.error(error.response!.data);
	});
})();
