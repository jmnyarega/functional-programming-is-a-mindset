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

const getEmailBody = (
  body: string,
  bests: string[],
  goods: string[],
  rank: string
): string => {
  if (rank === "best") {
    return `${body} best coupon ${bests.join(",")}`;
  } else if (rank === "good") {
    return `${body} best coupon ${goods.join(",")}`;
  }
  return "";
};

export const generateEmail = (
  subscriber: TSubscriber,
  goods: string[],
  bests: string[],
  emailTemplate: TMail
): TMail => ({
  ...emailTemplate,
  to: subscriber.email,
  body: getEmailBody(
    emailTemplate.body,
    bests,
    goods,
    getCouponRank(subscriber)
  ),
});

export const prepareEmails = (
  subscribers: Array<TSubscriber>,
  goods: string[],
  bests: string[],
  emailTemplate: TMail
): TMail[] =>
  subscribers.map((sub) => generateEmail(sub, goods, bests, emailTemplate));
