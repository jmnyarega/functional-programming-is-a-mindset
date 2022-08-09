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
    { name: "A", rank: "best" },
    { name: "B", rank: "best" },
    { name: "C", rank: "best" },
    { name: "D", rank: "good" },
    { name: "E", rank: "good" },
    { name: "F", rank: "bad" },
    { name: "G", rank: "bad" },
  ],
};
