import { ChannelTypeEnum, ISmsOptions, ISmsProvider } from '@notifire/core';
import Vonage from '@vonage/server-sdk';

export class NexmoProvider implements ISmsProvider {
  id = 'nexmo';
  channelType = ChannelTypeEnum.SMS as ChannelTypeEnum.SMS;
  vonage: Vonage;

  constructor(
    private config: {
      apiKey: string;
      apiSecret: string;
      from: string;
    }
  ) {
    this.vonage = new Vonage({
      apiKey: this.config.apiKey,
      apiSecret: this.config.apiSecret,
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async sendMessage(options: ISmsOptions): Promise<any> {
    return await new Promise((resolve, reject) => {
      this.vonage.message.sendSms(
        this.config.from,
        options.to,
        options.content,
        {},
        (err, data) => {
          if (err) reject(err);
          resolve(data);
        }
      );
    });
  }
}
