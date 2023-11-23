import { useState, useEffect } from "react";
import useClassroom from "../Hooks/useClassroom";
import SeatComponent from "./SeatComponent";
import ErrorNotification from "./ErrorNotification";

export default function ClassroomContainer() {
  const { getClassMap, error } = useClassroom();
  const [classMap, setClassMap] = useState([]);

// TODO: See https://chat.openai.com/share/d8025e23-fed7-42be-b053-69b15eb4b991
  
  useEffect(() => {
    (async () => {
      const temp = await getClassMap("UA1350");
      temp.response.map.shift();
      setClassMap(temp.response.map);
    })();
  }, []);

  return (
    <>
      {(!classMap || error) && (
        <ErrorNotification errorMessage={"Could not retrieve classroom map."} />
      )}

      <div className="min-h-screen bg-base-200 flex flex-col items-center">
        <h1 className="text-5xl font-bold my-10">UA1350</h1>
        <div className="min-w-lg mx-auto">
          <div className="card  bg-base-100 shadow-xl w-full">
            <div className="card-body">
              <div className="grid grid-cols-5 gap-4">
                {!classMap
                  ? "Classroom not found"
                  : classMap.map((seat, index) => (
                      <SeatComponent key={index} seatInfo={seat} />
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
