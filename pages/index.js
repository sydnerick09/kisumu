import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="container">
      <h1>Welcome to AI Task Platform</h1>

      <p>
        Earn by completing:
        <br />
        • Text annotation & labeling <br />
        • Sentence arrangement <br />
        • Content classification <br />
        • Data categorization <br />
        • Pattern recognition
      </p>

      <button onClick={() => router.push("/signup")}>
        Create Account
      </button>

      <p>Already have an account ©2026</p>
    </div>
  );
}