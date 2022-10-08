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
    if (status === "Recusado") {
      setColor("#F5D98C");
      setColorLabel("#B39243");
    }
    if (status === "Finalizada") {
      setColor("#B39243");
      setColorLabel("#70530D");
    }
    if (status === "Em producao") {
      setColor("#74BDD9");
      setColorLabel("#347C97");
    }
    if (status === "Disponivel") {
      setColor("#A3E2B4");
      setColorLabel("#55A96C");
    }
    if (status === "Aceito") {
      setColor("#A3E2B4");
      setColorLabel("#55A96C");
    }
  }

  return (
    <div
      className="my-1 flex h-7 items-center rounded-2xl px-3"
      style={{ backgroundColor: color }}
    >
      <p
        className="leading-2 w-20 text-center text-xs font-bold"
        style={{ color: colorLabel }}
      >
        {status}
      </p>
    </div>
  );
}
export { StatusInfo };
