// pages/pattern.js
import { useRouter } from "next/router";
import { addBalance } from "../utils/balance";

export default function Pattern() {
  const router = useRouter();

  const completeAssessment = () => {
    addBalance(5);
    router.push("/bonus");
  };

  return (
    <div className="container">
      <h2>Pattern Recognition</h2>
      <div className="card">2,4,6,8 → 10</div>
      <button onClick={completeAssessment}>Complete Assessment</button>
    </div>
  );
}