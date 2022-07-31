export interface TCoupon {
  coupon: string;
  rank: string;
}

export interface TSubscriber {
  email: string;
  rec_count: number;
}

export interface TMessage {
  from: string;
  subject: string;
  body: string;
  to: string;
}
