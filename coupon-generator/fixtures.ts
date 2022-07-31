// this is my mock database

export default {
  subscribers: [
    { email: "one@mail.com", rec_count: 10 },
    { email: "two@mail.com", rec_count: 0 },
    { email: "three@mail.com", rec_count: 20 },
    { email: "four@mail.com", rec_count: 30 },
    { email: "five@mail.com", rec_count: 1 },
    { email: "six@mail.com", rec_count: 5 },
  ],
  coupons: [
    { coupon: "A", rank: "best" },
    { coupon: "B", rank: "best" },
    { coupon: "C", rank: "best" },
    { coupon: "D", rank: "good" },
    { coupon: "E", rank: "good" },
    { coupon: "F", rank: "bad" },
    { coupon: "G", rank: "bad" },
  ],
};
