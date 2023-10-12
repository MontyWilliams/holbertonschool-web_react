import * as notifications from '../notifications'

function getAllNotificationsByUser(userId) {
  // return all objects from notifications file
  return notifications.filter((notification) => notification.author.id === userId)
  .map((notification) => notification.context);

}

module.exports = getAllNotificationsByUser;

 