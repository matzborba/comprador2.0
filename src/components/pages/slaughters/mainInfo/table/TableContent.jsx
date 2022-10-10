import { ButtonToggleVision } from "@/components/widgets/atoms/button/toggleVision/ButtonToggleVision";

function TableContent() {
  return (
    <div className="mt-8 h-80 w-full ">
      <div className="flex justify-between">
        <div>
          <p className="text-2xl font-semibold leading-10">Todos os abates</p>
        </div>
        <div>
          <ButtonToggleVision />
        </div>
      </div>
    </div>
  );
}
export { TableContent };
