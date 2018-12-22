import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = "mobile-flacards-asyncItemkey";

function getDate(){
	let date = new Date();
	date.setDate(date.getDate() + 1);
	date.setHours(8);
	date.setMinutes(0);
	date.setSeconds(0);
	return date;
}

function createNotification() {
	return {
		title : 'Take the quiz!',
		body : "Don't forget to take the quiz for today!",
		ios : {
			sound : true
		}, 
		android : {
			sound : true, 
			priority : 'high',
			sticky : false,
			vibrate : true
		}
	}
}

export default function setLocalNotificationForTomorrow() {
	Notifications.cancelAllScheduledNotificationsAsync()
		.then(
			Permissions.askAsync(Permissions.NOTIFICATIONS)
				.then(({status})=> {
					if(status === 'granted'){ 
						Notifications.scheduleLocalNotificationAsync(
							createNotification(),
							{
								time : getDate(), 
								repeat : 'day'
							}
						).then(notificationId => {
							AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(notificationId));
						})
					}
				})
		)
}