import { useRouter } from "next/router";
import axios from "axios";

export default function Upgrade() {
  const router = useRouter();

  const pay = async (amount) => {
    try {
      const res = await axios.post("/api/pay", {
        amount,
        email: "user@email.com" // ⚠️ REQUIRED for Paystack
      });

      // ✅ Correct response handling
      const paymentUrl = res.data?.data?.authorization_url;

      if (paymentUrl) {
        window.location.href = paymentUrl;
      } else {
        console.log(res.data);
        alert("Payment link not received");
      }

    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Payment failed");
    }
  };

  return (
    <div className="container">
      <h2>Choose Plan</h2>

      <div className="card" onClick={() => pay(5)}>
        Beginner - $5 / month
      </div>

      <div className="card" onClick={() => pay(10)}>
        Average - $10 / month
      </div>

      <div className="card" onClick={() => pay(13)}>
        Pro - $13 / month
      </div>

      <div className="card" onClick={() => pay(15)}>
        Expert - $15 / month
      </div>

      <button onClick={() => router.push("/dashboard")}>
        Back to Dashboard
      </button>
    </div>
  );
}