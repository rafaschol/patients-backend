import NotificationStrategy from "./NotificationStrategy";

class NotificationContext {
  private strategy: NotificationStrategy;

  constructor(strategy: NotificationStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: NotificationStrategy) {
    this.strategy = strategy;
  }

  public async sendNotification(to: string, message: string) {
    this.strategy.sendNotification(to, message);
  }
}

export default NotificationContext;
