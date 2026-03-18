import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const message = process.env.WELCOME_MESSAGE;
    return message
      ? message
      : 'Hello from localhost, no Welcome Message env var';
  }
}
