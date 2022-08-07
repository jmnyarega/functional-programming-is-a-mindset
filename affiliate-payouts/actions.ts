import { get_legible_affliates, get_total_payout } from "./calculations";
import { TAffiliate } from "./types";

export const send_payouts = (affiliates: TAffiliate[]) => {
  const legible_affliates = get_legible_affliates(affiliates);
  legible_affliates.forEach(send_payout);
};

const send_payout = (affiliate: TAffiliate) =>
  console.log(
    `sending ${get_total_payout(affiliate)} to ${affiliate.bank_code}`
  );
