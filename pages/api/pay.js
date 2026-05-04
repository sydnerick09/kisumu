export default async function handler(req, res) {
  try {
    const { amount, email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const response = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount: amount * 100,
      }),
    });

    const data = await response.json();

    // 🔥 IMPORTANT: log this in Vercel logs
    console.log("PAYSTACK RESPONSE:", data);

    res.status(200).json(data);

  } catch (error) {
    console.error("PAY ERROR:", error);
    res.status(500).json({ error: error.message });
  }
}