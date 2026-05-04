import axios from "axios";

export default function Upgrade() {

  const pay = async (amount) => {
    const res = await axios.post("/api/pay", { amount });
    window.location.href = res.data.url;
  };

  return (
    <div className="container">
      <h2>Choose Plan</h2>

      <div className="card" onClick={() => pay(5)}>Beginner - $5</div>
      <div className="card" onClick={() => pay(10)}>Average - $10</div>
      <div className="card" onClick={() => pay(13)}>Pro - $13</div>
      <div className="card" onClick={() => pay(15)}>Expert - $15</div>
    </div>
  );
}