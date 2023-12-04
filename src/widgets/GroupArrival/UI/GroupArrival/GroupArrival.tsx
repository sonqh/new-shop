import groupArrivalFrame from "@/assets/images/group-arrival-frame.png";
import groupArrival from "@/assets/images/group-arrival.png";
import highlightArrivalLabel from "@/assets/images/highlight-arrival-label.png";
import highlightArrival from "@/assets/images/highlight-arrival.png";
import theDJ from "@/assets/images/The-DJ.png";
import newArrival1 from "@/assets/images/new-arrival-1.png";
import newArrival2 from "@/assets/images/new-arrival-2.png";
import newArrival3 from "@/assets/images/new-arrival-3.png";
import newArrival4 from "@/assets/images/new-arrival-4.png";
import { FC } from "react";
import "./GroupArrival.css";

const GroupArrival: FC = () => {
  return (
    <div className="group-arrival">
      <img src={groupArrival} alt="Group Arrival" className="mx-20 w-2/3" />
      <div className="image-container grid">
        <div className="relative">
          <img
            src={groupArrivalFrame}
            alt="Group Arrival Frame"
            className="absolute w-full top-0 left-0 h-full"
          />
          <div className="px-20 py-10 space-x-9  grid grid-cols-[2.4fr,1fr] gap-4">
            <div className="flex">
              <img
                src={newArrival1}
                alt="New Arrival 1"
                className="relative w-1/4 min-w-40"
              />
              <img
                src={newArrival2}
                alt="New Arrival 2"
                className="relative w-1/4 min-w-40"
              />
              <img
                src={newArrival3}
                alt="New Arrival 3"
                className="relative w-1/4 min-w-40"
              />
              <img
                src={newArrival4}
                alt="New Arrival 4"
                className="relative w-1/4 min-w-40"
              />
            </div>

            <div className="relative">
              <div>
                <img
                  src={highlightArrival}
                  alt="Highlight Arrival"
                  className="absolute w-96 max-w-md highlight-img"
                  style={{
                    bottom: "-40px",
                    maxWidth: "clamp(50%, 24svw, 100%)",
                  }}
                />
                <div className="relative w-full" style={{ bottom: "-120px" }}>
                  <img
                    src={highlightArrivalLabel}
                    alt="Highlight Arrival Label"
                    className="w-full max-w-md"
                  />
                  <span
                    className="absolute text-white text-center font-bold w-44 "
                    style={{
                      top: "50%",
                      left: "35%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <img src={theDJ} className="w-full" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupArrival;
