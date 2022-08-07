import { TAffiliate } from "./types";

export const send_payouts = (affiliates: TAffiliate[]) => {
  const legible_affliates = get_legible_affliates(affiliates);
  legible_affliates.forEach(send_payout);
};

const send_payout = (affiliate: TAffiliate) =>
  console.log(
    `sending ${get_total_payout(affiliate)} to ${affiliate.bank_code}`
  );

const get_legible_affliates = (affiliates: TAffiliate[]): TAffiliate[] =>
  affiliates.filter(is_legible_for_payout);

const is_legible_for_payout = (affiliate: TAffiliate): boolean =>
  get_total_payout(affiliate) > 100;

const get_total_payout = (affiliate: TAffiliate) =>
  affiliate.sales * affiliate.commission + affiliate.owed;
