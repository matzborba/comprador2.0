import { MainInfoSlaughter } from "./mainInfo/MainInfoSlaughter";
import { TableContent } from "./mainInfo/table/TableContent";

function SlaughtersContent() {
  return (
    <div className="w-full">
      <MainInfoSlaughter />
      <TableContent />
    </div>
  );
}

export { SlaughtersContent };
