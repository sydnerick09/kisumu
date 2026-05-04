// pages/sentence.js
import { useRouter } from "next/router";

export default function Sentence() {
  const router = useRouter();

  return (
    <div className="container">
      <h2>Sentence Arrangement</h2>
      <div className="card">store / went / she / to / the</div>
      <p>Answer: She went to the store.</p>
      <button onClick={() => router.push("/classification")}>Next</button>
    </div>
  );
}