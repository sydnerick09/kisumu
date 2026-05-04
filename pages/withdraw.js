import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getBalance, deductBalance } from "../utils/balance";

export default function Withdraw() {
  const router = useRouter();

  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setBalance(getBalance());
  }, []);

  const handleWithdraw = () => {
    const value = Number(amount);

    if (!value || value <= 0) {
      setMessage("Enter valid amount");
      return;
    }

    if (value > balance) {
      setMessage("Insufficient balance");
      return;
    }

    try {
      const updated = deductBalance(value);
      setBalance(updated);
      setMessage("Withdrawal successful");

      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div className="container">
      <h2>Withdraw</h2>

      <p>Balance: ${balance}</p>

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br />

      <button onClick={handleWithdraw}>
        Withdraw
      </button>

      {message && <p>{message}</p>}
    </div>
  );
}