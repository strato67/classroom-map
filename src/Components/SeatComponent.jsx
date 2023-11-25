import { FaSquare } from "react-icons/fa6";

export default function SeatComponent({ seatInfo }) {
  return (
    <>
      <div
        className="md:tooltip before:whitespace-pre before:content-[attr(data-tip)]"
        data-tip={
          seatInfo == "none"
            ? `Empty Seat`
            : `Student Name: ${seatInfo.fullName} \nPreferred Name: ${seatInfo.prefName} \nPronouns: ${seatInfo.pronouns}`
        }
      >
        <div className="avatar">
          <div className="w-24 rounded text-center">
            <FaSquare size={96} color={seatInfo == "none" ? `gray` : `#8781AD`} />
          </div>
        </div>
      </div>
    </>
  );
}
