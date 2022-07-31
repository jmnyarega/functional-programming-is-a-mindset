// database
import data from "./fixtures";

// communicates with the outside world [ side effects ]
//   - http requests
//   - global variables

// constant =>  this is an action
import { emailTemplate } from "./constants";

import { filterCoupons, prepareEmails } from "./calculations";
import { TCoupon, TSubscriber } from "./types";

export const getSubscribers = (): Array<TSubscriber> => data.subscribers;
export const getCoupons = (): Array<TCoupon> => data.coupons;

export const sendEmail = () => {
  const coupons = getCoupons();
  const goodCoupons = filterCoupons(coupons, "good");
  const bestCoupons = filterCoupons(coupons, "best");
  const subscribers = getSubscribers();
  const emails = prepareEmails(
    subscribers,
    goodCoupons,
    bestCoupons,
    emailTemplate
  );

  emails.forEach((email) => console.log(email));
};
