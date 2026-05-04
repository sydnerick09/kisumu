export default async function handler(req, res) {
  try {
    const { amount, email } = req.body;

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

    res.status(200).json(data); // ✅ DO NOT CHANGE THIS
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}