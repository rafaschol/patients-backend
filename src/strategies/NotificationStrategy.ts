interface NotificationStrategy {
  sendNotification(to: string, message: string): Promise<void>;
}

export default NotificationStrategy;
