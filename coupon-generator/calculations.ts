import { TCoupon, TMail, TSubscriber } from "./types";

// calculations defines the business rules for the application
// Here, decisions are made

export const filterCoupons = (
  coupons: Array<TCoupon>,
  rank: string
): string[] =>
  coupons.filter((coupon) => coupon.rank === rank).map((cp) => cp.coupon);

export const getCouponRank = (subscriber: TSubscriber): string =>
  subscriber.rec_count >= 10 ? "best" : "good";

export const generateEmail = (
  subscriber: TSubscriber,
  goods: string[],
  bests: string[],
  emailTemplate: TMail
): TMail => {
  const rank = getCouponRank(subscriber);
  let email: TMail;

  if (rank === "best") {
    email = {
      ...emailTemplate,
      to: subscriber.email,
      body: emailTemplate.body + " best coupons " + bests.join(", "),
    };
  }

  if (rank === "good") {
    email = {
      ...emailTemplate,
      to: subscriber.email,
      body: emailTemplate.body + " good coupons " + goods.join(", "),
    };
  }

  return email;
};

export const prepareEmails = (
  subscribers: Array<TSubscriber>,
  goods: string[],
  bests: string[],
  emailTemplate: TMail
): TMail[] =>
  subscribers.map((sub) => generateEmail(sub, goods, bests, emailTemplate));
