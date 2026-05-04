import axios from "axios";

export default async function handler(req, res) {
  const { amount } = req.body;

  try {
    const response = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      {
        email: "testuser@email.com",
        amount: amount * 100,
        currency: "KES",
        callback_url: process.env.NEXT_PUBLIC_BASE_URL
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`,
          "Content-Type": "application/json"
        }
      }
    );

    const url = response.data.data.authorization_url;

    return res.status(200).json({ url });

  } catch (error) {
    return res.status(500).json({
      error: error.response?.data || error.message
    });
  }
}