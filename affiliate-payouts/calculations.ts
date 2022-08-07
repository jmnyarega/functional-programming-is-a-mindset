import { TAffiliate } from "./types";

export const get_legible_affliates = (affiliates: TAffiliate[]): TAffiliate[] =>
  affiliates.filter(is_legible_for_payout);

export const is_legible_for_payout = (affiliate: TAffiliate): boolean =>
  get_total_payout(affiliate) > 100;

export const get_total_payout = (affiliate: TAffiliate) =>
  affiliate.sales * affiliate.commission + affiliate.owed;
