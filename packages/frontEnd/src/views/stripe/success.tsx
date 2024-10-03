import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Success = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    async function retriveSession() {
      await axios.post(
        "http://localhost:8080/api/v1/subscription/retrieve-checkout-session",
        {
          sessionId,
        }
      );
    }

    retriveSession();
  });

  return (
    <div className="flex items-center justify-center h-screen bg-green-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Success!</h1>
        <p className="text-xl">Your operation was successful.</p>
        {sessionId ? `Session ID: ${sessionId}` : "No session ID found"}
      </div>
    </div>
  );
};

export default Success;
