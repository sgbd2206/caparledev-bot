import { Registration, TweetObject } from '../types';
import { IRegistration } from '../types/models';

import { logger } from '../config/logger';

import { extractRegistrationData } from '../utils/helpers';
import { SUCCESS_REGISTER_MESSAGE } from '../utils/constants';

import { RegistrationModel } from '../models/registration.model';
import { TwitterService } from './twitter.service';

/**
 * Class responsible manage account subscription to tweet's notification
 */
class RegistrationService {
	/**
	 * Register an account for notification on new tweet containing the hashtag
	 *
	 * @param tweetObject
	 */
	public static async subscribe(tweetObject: TweetObject): Promise<void> {
		const registrationData: Registration = extractRegistrationData(tweetObject);

		const registration: IRegistration|null = await RegistrationModel.findOne({
			userId: registrationData.userId,
		});

		if (!registration) {
			RegistrationModel.create([registrationData])
				.then((result: IRegistration[]): void => {
					// Respond the tweet with a positive message
					TwitterService.replyToUser(result[0].tweetId, result[0].userScreenName, SUCCESS_REGISTER_MESSAGE);

					console.log('New registration!');
				})
				.catch((error: any): void => {
					logger.error(error);
				});
		}
	}
}

export { RegistrationService };
