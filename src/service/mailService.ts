import nodemailer from 'nodemailer';
import { MailDetails } from 'src/types/mailDetails';
import { MailResponse } from 'src/types/MailResponse';
import { getEmailMessages } from './dbService';

export const sendEmail = async (mailDetails: MailDetails): Promise<MailResponse> => {
  try {
    const testAccount = await nodemailer.createTestAccount();
    const transport = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    await transport.sendMail({
      from: mailDetails.sender,
      to: mailDetails.receipents,
      subject: mailDetails.subject,
      text: mailDetails.body,
      attachments: mailDetails.attachments,
    });

    return {
      data: {
        message: 'Test message successfully sent',
      },
      code: 200,
    };
  } catch (e) {
    throw new Error(e as string);
  }
};

export const getFilteredEmails = async (senderEmail?: string) => {
  try {
    const response = await getEmailMessages();
    const filteredResponse = senderEmail && response.filter((message) => message.sender === senderEmail);

    return {
      data: senderEmail ? filteredResponse : response,
      code: 200,
    };
  } catch (e) {
    throw new Error(e as string);
  }
};

export const scheduleEmail = async (mailDetails: MailDetails) => {};
