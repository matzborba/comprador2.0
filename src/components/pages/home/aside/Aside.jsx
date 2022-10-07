import { ActionCardAside } from "./actionCard/ActionCardAside";
import { ActionInfo } from "./actionInfo/ActionInfo";

function Aside() {
  return (
    <div className="flex w-full flex-col gap-4">
      <ActionCardAside />
      <ActionInfo />
    </div>
  );
}
export { Aside };
