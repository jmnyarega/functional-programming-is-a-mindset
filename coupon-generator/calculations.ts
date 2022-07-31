import { message } from "./constants";
import { TCoupon, TMessage, TSubscriber } from "./types";

export const filterCoupons = (
  coupons: Array<TCoupon>,
  rank: string
): string[] => {
  return coupons
    .filter((coupon) => coupon.rank === rank)
    .map((cp) => cp.coupon);
};

export const getCouponRank = (subscriber: TSubscriber): string => {
  return subscriber.rec_count >= 10 ? "best" : "good";
};

export const generateEmail = (
  subscriber: TSubscriber,
  goods: string[],
  bests: string[]
): TMessage => {
  const rank = getCouponRank(subscriber);
  let e_message: TMessage;

  if (rank === "best") {
    e_message = {
      ...message,
      to: subscriber.email,
      body: message.body + " best coupons " + bests.join(", "),
    };
  }

  if (rank === "good") {
    e_message = {
      ...message,
      to: subscriber.email,
      body: message.body + " good coupons " + goods.join(", "),
    };
  }

  return e_message;
};

export const prepareEmails = (
  subscribers: Array<TSubscriber>,
  goods: string[],
  bests: string[]
): TMessage[] => {
  let emails: TMessage[] = [];
  for (let i = 0; i < subscribers.length; i++) {
    emails = [...emails, generateEmail(subscribers[i], goods, bests)];
  }
  return emails;
};
