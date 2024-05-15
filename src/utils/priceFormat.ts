export const priceFormat = (value: number) => {
  const formattedNumber = value
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return formattedNumber;
};
