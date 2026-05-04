
// pages/categorization.js
import { useRouter } from "next/router";

export default function Categorization() {
  const router = useRouter();

  return (
    <div className="container">
      <h2>Data Categorization</h2>
      <div className="card">Apple, Banana → Fruits</div>
      <button onClick={() => router.push("/pattern")}>Next</button>
    </div>
  );
}