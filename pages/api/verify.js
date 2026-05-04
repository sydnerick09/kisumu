import axios from "axios";

export default async function handler(req, res) {
  const { reference } = req.query;

  if (!reference) {
    return res.status(400).json({
      success: false,
      message: "Missing payment reference"
    });
  }

  try {
    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`
        }
      }
    );

    const data = response.data.data;

    // Check payment status
    if (data.status === "success") {
      return res.status(200).json({
        success: true,
        message: "Payment verified successfully",
        amount: data.amount / 100,
        currency: data.currency,
        email: data.customer.email,
        reference: data.reference
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Payment not successful"
      });
    }

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Verification failed",
      error: error.message
    });
  }
}