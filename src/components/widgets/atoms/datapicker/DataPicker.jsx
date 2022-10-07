import ReactDatePicker from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

function DataPicker() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className=" relative flex w-full items-center">
      <ReactDatePicker
        className="m-0 flex h-10 w-full cursor-pointer select-none items-center rounded-md border border-neutra-400 p-0 pl-8 text-sm outline-none"
        name="date"
        locale={ptBR}
        selected={startDate}
        onChange={date => setStartDate(date)}
        dateFormat="P"
      />
      <div className="absolute top-0 bottom-0 ml-2 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 16 16"
        >
          <g fill="#212529" clipPath="url(#clip0_2066_851)">
            <path d="M14.218 1h-1.143V.429h-1.142V1H8.504V.429H7.361V1H3.933V.429H2.79V1H1.647A1.715 1.715 0 00-.067 2.714v10.857a1.715 1.715 0 001.714 1.715h12.571a1.715 1.715 0 001.715-1.715V2.714A1.715 1.715 0 0014.218 1zM1.647 2.143H2.79v.571h1.143v-.571H7.36v.571h1.143v-.571h3.429v.571h1.143v-.571h1.142a.571.571 0 01.572.571V4.43H1.075V2.714a.572.572 0 01.572-.571zm12.571 12H1.647a.571.571 0 01-.572-.572v-8H14.79v8a.571.571 0 01-.572.572z"></path>
            <path d="M2.79 6.72h1.143v1.143H2.79V6.72zM5.647 6.72H6.79v1.143H5.647V6.72zM9.076 6.72h1.142v1.143H9.076V6.72zM11.933 6.72h1.142v1.143h-1.142V6.72zM2.79 9.006h1.143v1.143H2.79V9.006zM5.647 9.006H6.79v1.143H5.647V9.006zM9.076 9.006h1.142v1.143H9.076V9.006zM11.933 9.006h1.142v1.143h-1.142V9.006zM2.79 11.292h1.143v1.142H2.79v-1.142zM5.647 11.292H6.79v1.142H5.647v-1.142zM9.076 11.292h1.142v1.142H9.076v-1.142zM11.933 11.292h1.142v1.142h-1.142v-1.142z"></path>
          </g>
          <defs>
            <clipPath id="clip0_2066_851">
              <path fill="#fff" d="M0 0H16V16H0z"></path>
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export { DataPicker };
