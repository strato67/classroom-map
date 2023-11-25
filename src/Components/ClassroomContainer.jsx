import { useState, useEffect } from "react";
import useClassroom from "../Hooks/useClassroom";
import SeatComponent from "./SeatComponent";
import ErrorNotification from "./ErrorNotification";

export default function ClassroomContainer() {
  const { getClassMap, error } = useClassroom();
  const [classMap, setClassMap] = useState([]);

  const updateMap = async () => {
    const temp = await getClassMap("UA1350");
    temp.response.map.shift();
    setClassMap(temp.response.map);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateMap()
      forceUpdate();
    }, 5000);

    return () => {
      clearInterval(interval);
    }
  }, []);

  const forceUpdate = () => {
    setClassMap(prevState => [...prevState]);
  };

  return (
    <>
      {(!classMap || error) && (
        <ErrorNotification errorMessage={"Could not retrieve classroom map."} />
      )}

      <div className="min-h-screen bg-base-200 flex flex-col items-center">
        <h1 className="text-5xl font-bold my-10">UA1350</h1>
        <div className="min-w-lg mx-auto ">
          {classMap.length == 0 ? <span className="loading loading-spinner loading-lg mt-16"></span> :
            (<div className="card bg-base-100 shadow-xl w-full">

              <div className="card-body">

                <div className="grid grid-cols-7 gap-6 order-last">

                  {classMap.toReversed().map((seat, index) => (
                    <div key={index} className={index === 2 || index === 8 || index === 14 ? 'col-span-2' : ''}>
                      <SeatComponent seatInfo={seat} />
                    </div>

                  ))}
                </div>

              </div>
              <div className="divider"></div>
              <p className="text-center font-semibold text-xl pb-6">Front of Class</p>
            </div>)}

        </div>
      </div>
    </>
  );
}
