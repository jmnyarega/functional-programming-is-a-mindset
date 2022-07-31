import { TCoupon, TMessage, TSubscriber } from "./types";

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
  emailTemplate: TMessage
): TMessage => {
  const rank = getCouponRank(subscriber);
  let e_message: TMessage;

  if (rank === "best") {
    e_message = {
      ...emailTemplate,
      to: subscriber.email,
      body: emailTemplate.body + " best coupons " + bests.join(", "),
    };
  }

  if (rank === "good") {
    e_message = {
      ...emailTemplate,
      to: subscriber.email,
      body: emailTemplate.body + " good coupons " + goods.join(", "),
    };
  }

  return e_message;
};

export const prepareEmails = (
  subscribers: Array<TSubscriber>,
  goods: string[],
  bests: string[],
  emailTemplate: TMessage
): TMessage[] =>
  subscribers.map((sub) => generateEmail(sub, goods, bests, emailTemplate));
