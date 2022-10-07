import ProgressBar from "react-customizable-progressbar";
import "./ProgressChartOffers.module.css";

function ProgressChartOffers({ text, value, color }) {
  return (
    <div className="relative flex w-auto justify-between">
      <ProgressBar
        progress={value}
        radius={100}
        strokeWidth={18}
        strokeColor={color}
        strokeLinecap="round"
        trackStrokeWidth={18}
        trackStrokeColor="fff"
      >
        <div className="righ-0 absolute top-4 my-auto mx-0 w-full justify-center text-center">
          <p className="font-semibold">{value}</p>
          <p className="text-xs font-normal">{text}</p>
        </div>
      </ProgressBar>
    </div>
  );
}

export { ProgressChartOffers };
