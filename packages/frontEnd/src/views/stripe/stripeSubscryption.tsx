import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const SubscriptionForm = () => {
  const [stripeLoadStripe, setStripeLoadStripe] = useState("");

  useEffect(() => {
    async function getConf() {
      const r = await axios.get(
        "http://localhost:8080/api/v1/subscription/conf"
      );
      const { publishshableKey } = r.data;
      setStripeLoadStripe(publishshableKey);
    }

    getConf();
  });

  const stripePromise = loadStripe(`${stripeLoadStripe}`);

  async function handleClick() {
    const stripe = await stripePromise;
    const response = await axios.post(
      "http://localhost:8080/api/v1/subscription/create-checkout-session",
      { priceId: "price_1O0kHFEbggljtPojIWHdeidr" }
    );
    const { session } = response.data;
    console.log(session);

    if (response.data.error) {
      console.error("Response Error", response.data.error.message);
    }
    if (stripe) {
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      return result;
    }
  }

  return (
    <>
      <h1>React Stripe SuB</h1>
      {stripeLoadStripe && (
        <button role="link" onClick={handleClick}>
          Subscribe
        </button>
      )}
    </>
  );
};

export default SubscriptionForm;
