export const currencyNumberFormat = (number: number | bigint) => {
  return new Intl.NumberFormat("us-US", {
    style: "currency",
    currency: "USA",
  }).format(number);
};

export const fromatPhoneNumber = (phoneNumber: string) => {
  if (!phoneNumber) return phoneNumber;
  const phoneNumberReplace = phoneNumber.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumberReplace.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
};
