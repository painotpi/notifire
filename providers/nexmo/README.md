# Nodejs Nexmo Provider

A Nexmo SMS provider library for [@notifire/core](https://github.com/notifirehq/notifire)

## Usage

```javascript
import { NexmoProvider } from '@notifire/nodemailer';

const provider = new NexmoProvider({
  from: process.env.NODEMAILER_FROM_EMAIL,
  host: process.env.NODEMAILER_HOST,
  user: process.env.NODEMAILER_USERNAME,
  password: process.env.NODEMAILER_PASSWORD,
  port: process.env.NODEMAILER_PORT,
  secure: process.env.NODEMAILER_SECURE,
});
```
