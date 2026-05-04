// pages/bonus.js
import { useRouter } from "next/router";

export default function Bonus() {
  const router = useRouter();

  return (
    <div className="container">
      <h2>🎉 Bonus Added!</h2>
      <div className="card">$5 has been added to your balance.</div>
      <button onClick={() => router.push("/dashboard")}>Go to Dashboard</button>
    </div>
  );
}
