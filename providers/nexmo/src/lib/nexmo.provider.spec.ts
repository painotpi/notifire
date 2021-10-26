import { NexmoProvider } from './nexmo.provider';

const mockSendSms = jest.fn().mockReturnValue(() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return {} as any;
});

jest.mock('@vonage/server-sdk', () => {
  return jest.fn().mockImplementation(() => {
    return {
      message: {
        sendSms: mockSendSms,
      },
    };
  });
});

test('should trigger nexmo correctly', async () => {
  const provider = new NexmoProvider({
    apiKey: 'Nexmo.Key.1234',
    apiSecret: 'Nexmo.Secret.1234',
    from: '+1654321',
  });

  await provider.sendMessage({
    to: '+1123456',
    content: 'SMS Content',
  });

  expect(mockSendSms).toHaveBeenCalled();
});
