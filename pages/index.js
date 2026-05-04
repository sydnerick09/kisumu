import { useRouter } from "next/router";
import styles from "dule.css";

const tasks = [
  { icon: "✦", label: "Text Annotation & Labeling" },
  { icon: "✦", label: "Sentence Arrangement" },
  { icon: "✦", label: "Content Classification" },
  { icon: "✦", label: "Data Categorization" },
  { icon: "✦", label: "Pattern Recognition" },
];

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.page}>
      <div className={styles.background}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.grid} />
      </div>

      <main className={styles.container}>
        <div className={styles.badge}>AI-Powered Task Platform</div>

        <h1 className={styles.heading}>
          Complete Tasks.
          <br />
          <span className={styles.accent}>Earn Rewards.</span>
        </h1>

        <p className={styles.subheading}>
          Join thousands of contributors shaping the future of AI by completing
          simple, high-value data tasks from anywhere.
        </p>

        <ul className={styles.taskList}>
          {tasks.map((task) => (
            <li key={task.label} className={styles.taskItem}>
              <span className={styles.taskIcon}>{task.icon}</span>
              {task.label}
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button
            className={styles.primaryBtn}
            onClick={() => router.push("/signup")}
          >
            Create Free Account
            <span className={styles.arrow}>→</span>
          </button>

          <button
            className={styles.secondaryBtn}
            onClick={() => router.push("/login")}
          >
            Sign In
          </button>
        </div>

        <p className={styles.footer}>
          Trusted by 10,000+ contributors &nbsp;·&nbsp; © 2026 AI Task Platform
        </p>
      </main>
    </div>
  );
}