import { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handelSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!stripe || !elements) return;
    setIsProcessing(true);
    const { error } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    if (error) {
      setMessage("Error Measseg");
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handelSubmit}>
      <PaymentElement />
      <button disabled={isProcessing} id="submit"></button>
      <span id="button-text">{isProcessing ? "Processing..." : "Pay now"}</span>
    </form>
  );
};

export default CheckOutForm;
