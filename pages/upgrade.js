import axios from "axios";

const pay = async (amount) => {
  try {
    const res = await axios.post("/api/pay", { amount });

    if (res.data.url) {
      window.location.href = res.data.url; // THIS OPENS PAYSTACK
    } else {
      alert("Payment URL not received");
    }
  } catch (err) {
    console.log(err);
    alert("Payment failed");
  }
};