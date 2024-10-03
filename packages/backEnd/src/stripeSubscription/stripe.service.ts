import { config } from "dotenv";
import { getDb } from "../db/mongo";
import { Index } from "../enum/index";
import { Stripe } from "stripe";
import { User, Token } from "../user/dto/user";
import { ObjectId } from "mongodb";

config({ path: "../../.env" });
const { stripeKey, publishshableKey } = process.env;

const stripe = new Stripe(`${stripeKey}`, {
  apiVersion: "2023-08-16",
});

export class Subscription {
  private collection = getDb().collection<User>(Index.Users);
  private subscriptionCollection = getDb().collection(Index.SUBSCRIPTION);
  async conf() {
    return { publishshableKey };
  }
  async createCustomers() {
    const customer = await stripe.customers.create({
      description: "Customer with id",
      email: "from api",
    });

    return { id: customer.id };
  }

  async createSubscription({ priceId }: { priceId: string }) {
    const customerId = await this.createCustomers();
    const subscription = await stripe.subscriptions.create({
      customer: customerId.id,
      items: [{ price: priceId }],
    });

    return subscription.id;
  }

  async cancelSubscription({ id }: { id: string }): Promise<void> {
    await stripe.subscriptions.cancel(`${id}`);
  }

  async resumeSubscription({ id }: { id: string }): Promise<void> {
    await stripe.subscriptions.resume(`${id}`, {
      billing_cycle_anchor: "now",
    });
  }

  async createSubscriptionSession({ priceId }: any): Promise<{ session: any }> {
    console.log(priceId);
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: `${priceId}`, quantity: 1 }],
      success_url:
        "http://localhost:3000/---BBARDS---/#/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "http://localhost:3000/---BBARDS---/#/canceled",
    });

    return { session };
  }

  async retrieveSubscriptionSession(
    { sessionId }: any,
    { decoded: { token } }: Token
  ): Promise<{ session: any }> {
    const user: User | null = await this.collection.findOne({
      _id: new ObjectId(token),
    });

    const session: Stripe.Checkout.Session =
      await stripe.checkout.sessions.retrieve(`${sessionId}`);

    const invoice = await stripe.invoices.create({
      customer: `${session.customer}`,
      collection_method: "send_invoice",
      days_until_due: 30,
    });

    // Generate a PDF from the invoice
    //     const browser = await puppeteer.launch();
    //     const page = await browser.newPage();
    //     await page.goto(invoice.hosted_invoice_url);
    //     await page.pdf({ path: 'invoice.pdf' });

    const customerDetails = {
      customerId: user?._id,
      email: session.customer_details?.email,
      name: session.customer_details?.name,
      postalCode: session.customer_details?.address?.postal_code,
      sessionId: session.id,
      customer: session.customer,
      created: session.created,
      expiresAt: session.expires_at,
    };

    await this.subscriptionCollection.insertOne({ ...customerDetails });
    await stripe.invoices.retrieve(`${invoice.id}`);

    return { session };
  }
}
