import * as notifications from '../notifications'
import { schema, normalize } from 'normalizr';

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid',
});

const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

export const normalizedData = normalize(notifications, [notification]);

export function getAllNotificationsByUser(userId) {
  return Object.values(normalizedData.entities.notifications)
    .filter((note) => note.author == userId)
    .map((note) => normalizedData.entities.messages[note.context]);
}
