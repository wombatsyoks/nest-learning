import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Tarara';
  }

  getName(): string {
    return "Man is a champe"
  }

  getSomething(): string{
    return "Thi sis it"
  }
}
