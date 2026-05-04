import { useRouter } from "next/router";

export default function Assessment() {
  const router = useRouter();

  return (
    <div className="container">
      <h2>Skill Assessment</h2>

      <p>
        • Text annotation & labeling <br/>
        • Sentence arrangement <br/>
        • Content classification <br/>
        • Data categorization <br/>
        • Pattern recognition
      </p>

      <button onClick={() => router.push("/dashboard")}>
        Start Assessment
      </button>
    </div>
  );
}