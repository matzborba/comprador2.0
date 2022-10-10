import { OffersInfo } from "./offers/OffersInfo";
import { PurchaseInfo } from "./purchases/PurchaseInfo";

function BusinessInfo() {
  return (
    <div className="mt-4 flex w-full items-start gap-5">
      <PurchaseInfo />
      <OffersInfo />
    </div>
  );
}
export { BusinessInfo };
