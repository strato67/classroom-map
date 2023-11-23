import { MdEventSeat } from "react-icons/md";

// TODO: See issue https://github.com/saadeghi/daisyui/issues/388

export default function SeatComponent({ seatInfo }) {
  return (
    <>
      <div
        className="lg:tooltip"
        data-tip={
          seatInfo == "none"
            ? `Empty Seat`
            : `Student Name: ${seatInfo.fullName} Preferred Name: ${seatInfo.prefName} \n Pronouns: ${seatInfo.pronouns}`
        }
      >
        <div className="avatar">
          <div className="w-24 rounded text-center">
            <MdEventSeat size={96} color={seatInfo == "none" ? `` : `green`} />
          </div>
        </div>
      </div>
    </>
  );
}
