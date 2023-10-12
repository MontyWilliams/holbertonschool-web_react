import * as notifications from '../notifications'
import { schema, normalize } from 'normalizr';

function getAllNotificationsByUser(userId) {
  // return all objects from notifications file
  return notifications.filter((notification) => notification.author.id === userId)
  .map((notification) => notification.context);

}

const user = new schema.Entity('users');

const messages = new schema.Entity('messages', {}, {
  idAttribute: 'guid',
});

const notificationSchema = new schema.Entity('notifications', {
  author: user,
  context: messages,
});


module.exports = getAllNotificationsByUser;

 