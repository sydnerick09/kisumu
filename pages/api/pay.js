import axios from "axios";

export default async function handler(req, res) {
  const { amount } = req.body;

  const response = await axios.post(
    "https://api.paystack.co/transaction/initialize",
    {
      email: "customer@email.com",
      amount: amount * 100,
      currency: "KES"
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`
      }
    }
  );

  res.status(200).json({
    url: response.data.data.authorization_url
  });
}