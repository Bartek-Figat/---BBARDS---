export const data = {
  free: {
    name: "free plan",
    price: "00",
    options: [
      {
        text: "1 Regular Ad for 7 days",
        isAvailable: true,
      },
      {
        text: "No Credit card required",
        isAvailable: false,
      },
      {
        text: "No Top or Featured Ad",
        isAvailable: false,
      },
      {
        text: "No Ad will be bumped up",
        isAvailable: false,
      },
      {
        text: "Limited Support",
        isAvailable: true,
      },
    ],
  },
  standard: {
    name: "standard plan",
    price: "23",
    options: [
      {
        text: "1 Recom Ad for 30 days",
        isAvailable: true,
      },
      {
        text: "No Featured Ad isAvailable",
        isAvailable: false,
      },
      {
        text: "No Ad will be bumped up",
        isAvailable: false,
      },
      {
        text: "No Top Ad isAvailable",
        isAvailable: false,
      },
      {
        text: "Basic Support",
        isAvailable: true,
      },
    ],
  },
  premium: {
    name: "premium plan",
    price: "49",
    options: [
      {
        text: "1 Featured Ad for 60 days",
        isAvailable: true,
      },
      {
        text: "Access to All features",
        isAvailable: true,
      },
      {
        text: "With Recommended",
        isAvailable: true,
      },
      {
        text: "Ad Top Category",
        isAvailable: true,
      },
      {
        text: "Priority Support",
        isAvailable: true,
      },
    ],
  },
};
