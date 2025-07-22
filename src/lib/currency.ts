// Currency utilities for RWF (Rwandan Franc)

export const formatRWF = (amount: number): string => {
  return new Intl.NumberFormat('rw-RW', {
    style: 'currency',
    currency: 'RWF',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatPrice = (amount: number | undefined | null): string => {
  if (amount === undefined || amount === null) {
    return '0 RWF';
  }
  return `${amount.toLocaleString()} RWF`;
};

// Convert USD to RWF (approximate rate)
export const usdToRwf = (usdAmount: number): number => {
  const exchangeRate = 1300; //
  return Math.round(usdAmount * exchangeRate);
};