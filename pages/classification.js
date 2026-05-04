// pages/classification.js
import { useRouter } from "next/router";

export default function Classification() {
  const router = useRouter();

  return (
    <div className="container">
      <h2>Content Classification</h2>
      <div className="card">"I love this!" → Positive</div>
      <button onClick={() => router.push("/categorization")}>Continue</button>
    </div>
  );
}