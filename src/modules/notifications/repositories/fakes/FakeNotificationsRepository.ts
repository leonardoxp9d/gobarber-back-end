// 4.3.Finalizando back-end do app - 1.Prestador de serviços - 5.Refatorando testes

import { ObjectId } from 'mongodb';

import ICreateNotificationDTO from '@modules/notifications/dtos/ICreateNotificationDTO';
import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';

import Notification from '../../infra/typeorm/schemas/Notification';

class NotificationsRepository implements INotificationsRepository {
  private notifications: Notification[] = [];

  public async create({
    recipient_id,
    content,
  }: ICreateNotificationDTO): Promise<Notification> {
    const notification = new Notification();

    Object.assign(notification, { id: new ObjectId(), recipient_id, content });

    this.notifications.push(notification);

    return notification;
  }
}

export default NotificationsRepository;
 
