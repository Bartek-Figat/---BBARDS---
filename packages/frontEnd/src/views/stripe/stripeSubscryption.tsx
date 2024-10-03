import { useEffect, useState } from "react";
import { FaCarSide } from "react-icons/fa";
import { loadStripe } from "@stripe/stripe-js";
import { useSubscriptionConfQuery } from "../../api/services/api";
import axios from "axios";
import { SubscriptionCard } from "./checkOutForm";

const SubscriptionForm = () => {
  const [stripeLoadStripe, setStripeLoadStripe] = useState("");

  const {
    data: conf,
    isLoading,
    isError,
    isSuccess,
  } = useSubscriptionConfQuery("");

  useEffect(() => {
    async function getConf() {
      const { publishshableKey } = conf;
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
      <SubscriptionCard />
    </>
  );
};

export default SubscriptionForm;
