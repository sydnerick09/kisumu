import { useRouter } from "next/router";
import axios from "axios";

export default function Upgrade() {
  const router = useRouter();

  const pay = async (amount) => {
    try {
      const res = await axios.post("/api/pay", { amount });

      if (res.data.url) {
        window.location.href = res.data.url;
      } else {
        alert("Payment link not received");
      }
    } catch (err) {
      console.log(err);
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