import { config } from "dotenv";
import { Stripe } from "stripe";

config({ path: "../../.env" });
const { stripeKey, publishshableKey } = process.env;

const stripe = new Stripe(`${stripeKey}`, {
  apiVersion: "2023-08-16",
});

export class Subscription {
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
    console.log(session);

    return { session };
  }
}
