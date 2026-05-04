// utils/balance.js

// Get current balance
export const getBalance = () => {
  if (typeof window === "undefined") return 0;
  const balance = localStorage.getItem("balance");
  return balance ? Number(balance) : 0;
};

// Set balance manually
export const setBalance = (amount) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("balance", amount);
};

// Add money (used after assessment, tasks, etc.)
export const addBalance = (amount) => {
  const current = getBalance();
  const updated = current + amount;
  setBalance(updated);
  return updated;
};

// Subtract money (used for withdraw)
export const deductBalance = (amount) => {
  const current = getBalance();
  const updated = current - amount;

  if (updated < 0) {
    throw new Error("Insufficient balance");
  }

  setBalance(updated);
  return updated;
};

// Reset balance (optional, for testing/admin)
export const resetBalance = () => {
  localStorage.removeItem("balance");
};