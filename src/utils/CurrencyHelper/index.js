import numeral from 'numeral';
export const formatCurrencyWithDot = number => {
  if (!number) {
    return '';
  }
  return numeral(number).format('0,0')?.replace(/,/g, '.');
};

export const convertDotCurrencyToNumber = number => {
  if (!number) {
    return '';
  }
  const fm = number.replace(/\./g, '').replace(/,/g, '.');
  return fm;
};
