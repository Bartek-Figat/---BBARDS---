import { config } from "dotenv";
import sgMail from "@sendgrid/mail";

config({ path: "../../.env" });
const { sendgridApi } = process.env;
sgMail.setApiKey(`${sendgridApi}`);

export class SendEmail {
  constructor() {}

  async confiramtion(
    email: string | undefined,
    authToken: string | undefined
  ): Promise<void> {
    const msg = {
      to: `${email}`,
      from: "team.bbards@gmail.com",
      subject: "Thank you for registering.",
      text: "Team bbards",
      html: `Hello.
          Thank you for registering. Please click the link to complete yor activation
          <a href='http://localhost:3000/#/activate/${authToken}'>Activation Link</a>`,
    };

    await sgMail.send(msg);
  }
}
