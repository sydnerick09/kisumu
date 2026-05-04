import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getBalance } from "../utils/balance";

export default function Dashboard() {
  const router = useRouter();

  const [withdrawals, setWithdrawals] = useState([]);
  const [popup, setPopup] = useState(null);
  const [balance, setBalance] = useState(0);

  // ✅ Load real balance
  useEffect(() => {
    setBalance(getBalance());
  }, []);

  const users = [
    { name: "James Mwangi", flag: "🇰🇪" },
    { name: "Faith Wanjiku", flag: "🇰🇪" },
    { name: "Peter Otieno", flag: "🇰🇪" },
    { name: "Mary Akinyi", flag: "🇰🇪" },
    { name: "John Kiptoo", flag: "🇰🇪" },
    { name: "David Ochieng", flag: "🇰🇪" },
    { name: "Samuel Mutua", flag: "🇰🇪" },
    { name: "Grace Njeri", flag: "🇰🇪" },
    { name: "Daniel Kimani", flag: "🇰🇪" },
    { name: "Esther Wambui", flag: "🇰🇪" },
    { name: "Paul Kiplagat", flag: "🇰🇪" },

    { name: "Kevin Kiprono", flag: "🇰🇪" },
    { name: "Dorcas Nasimiyu", flag: "🇰🇪" },
    { name: "Brian Muriuki", flag: "🇰🇪" },
    { name: "Agnes Wekesa", flag: "🇰🇪" },
    { name: "Victor Musyoka", flag: "🇰🇪" },
    { name: "Purity Jelagat", flag: "🇰🇪" },
    { name: "Dennis Omondi", flag: "🇰🇪" },
    { name: "Hannah Moraa", flag: "🇰🇪" },
    { name: "Eric Kipkemboi", flag: "🇰🇪" },
    { name: "Lilian Nyongesa", flag: "🇰🇪" },

    { name: "Aisha Bello", flag: "🇳🇬" },
    { name: "Kwame Mensah", flag: "🇬🇭" },
    { name: "Jean Baptiste", flag: "🇷🇼" },
    { name: "Ali Hassan", flag: "🇹🇿" },
    { name: "Abebe Bekele", flag: "🇪🇹" },
    { name: "John Smith", flag: "🇺🇸" }
  ];

  const timeAgo = (seconds) => {
    if (seconds < 60) return `${seconds} sec ago`;
    return `${Math.floor(seconds / 60)} min ago`;
  };

  const generateWithdrawal = () => {
    const user = users[Math.floor(Math.random() * users.length)];
    const amount = (Math.random() * 50 + 5).toFixed(2);

    return {
      text: `${user.flag} ${user.name} withdrew $${amount}`,
      time: 0
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newW = generateWithdrawal();

      setWithdrawals(prev => [
        newW,
        ...prev.map(w => ({ ...w, time: w.time + 3 })).slice(0, 5)
      ]);

      setPopup(newW.text);
      setTimeout(() => setPopup(null), 3000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const tasks = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    amount: (Math.random() * 5 + 1).toFixed(2)
  }));

  return (
    <div className="container">
      <h2>Welcome Back</h2>

      {/* ✅ Dynamic Balance */}
      <div className="card">
        Balance: ${balance}
      </div>

      <button onClick={() => router.push("/upgrade")}>
        Upgrade
      </button>

      <button onClick={() => router.push("/withdraw")}>
        Withdraw
      </button>

      {/* 🔥 LIVE WITHDRAWALS */}
      <div className="card">
        <h3>Live Withdrawals</h3>

        {withdrawals.map((w, i) => (
          <div key={i} className="withdraw-item">
            <span>{w.text}</span>
            <small>{timeAgo(w.time)}</small>
          </div>
        ))}
      </div>

      {/* 💸 MPESA STYLE POPUP */}
      {popup && (
        <div className="mpesa-popup">
          <strong>M-PESA</strong>
          <p>{popup}</p>
        </div>
      )}

      <h3>Tasks</h3>

      {tasks.map(task => (
        <div className="card" key={task.id}>
          Task {task.id} - ${task.amount}
          <br />
          <button onClick={() => router.push("/upgrade")}>
            Upgrade
          </button>
        </div>
      ))}
    </div>
  );
}