// database
import data from "./fixtures";

// communicates with the outside world [ side effects ]
//   - http requests
//   - global variables

// constant =>  this is an action
import { emailTemplate } from "./constants";

import { filterCoupons, prepareEmails } from "./calculations";
import { TCoupon, TMail, TSubscriber } from "./types";

export const getSubscribers = (): TSubscriber[] => data.subscribers;
export const getCoupons = (): TCoupon[] => data.coupons;

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

  emails.forEach((email: TMail) => console.log(email));
};
