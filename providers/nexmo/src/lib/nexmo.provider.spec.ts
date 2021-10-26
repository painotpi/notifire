import { NexmoProvider } from './nexmo.provider';

test('should trigger nexmo correctly', async () => {
  const provider = new NexmoProvider({
    apiKey: 'Nexmo.Key.1234',
    apiSecret: 'Nexmo.Secret.1234',
    from: '+1654321'
  });

  await provider.sendMessage({
    to: '+1123456',
    content: 'SMS Content'
  });

  const spy = jest
    .spyOn(provider['vonage']['message'], 'sendSms')
    .mockImplementation(async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return {} as any;
    })


  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveBeenCalledWith(
    '+1654321',
    '+1123456',
    'SMS Content',
    {},
    jest.fn()
  );
});
