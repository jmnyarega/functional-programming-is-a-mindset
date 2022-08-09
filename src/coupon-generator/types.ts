export interface TCoupon {
  name: string;
  rank: string;
}

export interface TSubscriber {
  email: string;
  rec_count: number;
}

export interface TMail {
  from: string;
  subject: string;
  body: string;
  to: string;
}
