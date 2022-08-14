import { filter } from "../_internals/arrays/_filter";
import { map } from "../_internals/arrays/_map";
import { is_equal } from "../_internals/_isEqual";
import { TCoupon, TMail, TSubscriber } from "./types";

// calculations defines the business rules for the application
// Here, decisions are made

export const is_rank = (coupon: TCoupon, rank: string) => coupon.rank === rank;
export const filterCoupons = (coupons: TCoupon[], rank: string): string[] => {
  const filtered: TCoupon[] = filter(coupons, (coupon) =>
    is_rank(coupon, rank)
  );
  return map(filtered, (cpn: TCoupon) => cpn.name);
};

export const getCouponRank = (subscriber: TSubscriber): string =>
  subscriber.rec_count >= 10 ? "best" : "good";

const getEmailBody = (
  body: string,
  bests: string[],
  goods: string[],
  rank: string
): string => {
  if (is_equal(rank, "best")) return `${body} best coupon ${bests.join(",")}`;
  if (is_equal(rank, "good")) return `${body} good coupon ${goods.join(",")}`;
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
  map(subscribers, (sub: TSubscriber) =>
    generateEmail(sub, goods, bests, emailTemplate)
  );
