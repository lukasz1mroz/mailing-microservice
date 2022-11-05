type Attachment = {
  filename: string;
  path: string;
};

export type MailDetails = {
  sender: string;
  receipents: string | Array<string>;
  subject?: string;
  body?: string;
  attachments?: Array<Attachment>;
};
