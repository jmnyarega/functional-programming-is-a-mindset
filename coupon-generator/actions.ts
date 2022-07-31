// database
import data from "./fixtures";

import { filterCoupons, prepareEmails } from "./calculations";
import { TCoupon, TSubscriber } from "./types";

export const getSubscribers = (): Array<TSubscriber> => data.subscribers;
export const getCoupons = (): Array<TCoupon> => data.coupons;

export const sendEmail = () => {
  const coupons = getCoupons();
  const goodCoupons = filterCoupons(coupons, "good");
  const bestCoupons = filterCoupons(coupons, "best");
  const subscribers = getSubscribers();
  const emails = prepareEmails(subscribers, goodCoupons, bestCoupons);

  for (let i = 0; i < emails.length; i++) {
    console.log(emails);
  }
};

sendEmail();
