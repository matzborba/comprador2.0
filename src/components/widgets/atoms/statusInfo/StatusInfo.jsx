import { useState, useEffect } from "react";

function StatusInfo({ status }) {
  const [color, setColor] = useState("");
  const [colorLabel, setColorLabel] = useState("");

  useEffect(() => {
    getColorByStatus();
  });

  function getColorByStatus() {
    if (status === "Aguardando") {
      setColor("#E9ECEF");
      setColorLabel("#6C757D");
    }
    if (status === "Vencido") {
      setColor("#F5D98C");
      setColorLabel("#B39243");
    }
    if (status === "Finalizada") {
      setColor("#B39243");
      setColorLabel("#70530D");
    }
  }

  return (
    <div
      className="mt-2 flex h-6 items-center rounded-xl px-3"
      style={{ backgroundColor: color }}
    >
      <p className="leading-2 text-xs font-bold" style={{ color: colorLabel }}>
        {status}
      </p>
    </div>
  );
}
export { StatusInfo };
