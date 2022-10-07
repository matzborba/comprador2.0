import { OffersInfo } from "./offers/OffersInfo";
import { PurchaseInfo } from "./purchases/PurchaseInfo";

function BusinessInfo() {
  return (
    <div className="h-max-[210px] flex w-full gap-5">
      <PurchaseInfo />
      <OffersInfo />
    </div>
  );
}
export { BusinessInfo };
