import { TCoupon, TMail, TSubscriber } from "./types";

// calculations defines the business rules for the application
// Here, decisions are made

export const filterCoupons = (coupons: TCoupon[], rank: string): string[] =>
  coupons
    .filter((coupon: TCoupon) => coupon.rank === rank)
    .map((coupon: TCoupon) => coupon.name);

export const getCouponRank = (subscriber: TSubscriber): string =>
  subscriber.rec_count >= 10 ? "best" : "good";

const hasRank = (rank: string, value: string): boolean => rank === value;

const getEmailBody = (
  body: string,
  bests: string[],
  goods: string[],
  rank: string
): string => {
  if (hasRank(rank, "best")) return `${body} best coupon ${bests.join(",")}`;
  if (hasRank(rank, "good")) return `${body} good coupon ${goods.join(",")}`;
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
  subscribers: TSubscriber[],
  goods: string[],
  bests: string[],
  emailTemplate: TMail
): TMail[] =>
  subscribers.map((sub) => generateEmail(sub, goods, bests, emailTemplate));
