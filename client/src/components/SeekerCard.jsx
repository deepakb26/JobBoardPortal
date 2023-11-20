import { GoLocation } from "react-icons/go";
import moment from "moment";
import { Link } from "react-router-dom";

const SeekerCard = ({ seeker }) => {

console.log(seeker)
  return (
      <div
        className='w-full md:w-[16rem] 2xl:w-[18rem] h-[16rem] md:h-[18rem] bg-white flex flex-col justify-between shadow-lg 
                rounded-md px-3 py-5 '
      >
        <div className="w-full h-full flex flex-col justify-between">
        <div className='flex gap-3'>
          <img
            src={seeker?.profileUrl}
            alt={seeker?.firstName}
            className='w-14 h-14'
          />

            <div className='w-full h-16 flex flex-col justify-center'>
                <p className='w-full h-12 flex item-center text-lg font-semibold overflow-hidden leading-5 '>{seeker?.firstName}</p>
            </div>
        </div>

        <div className='py-3'>
          <p className='text-sm'>
            {seeker?.about.slice(0, 150) + "..."}
          </p>
        </div>

        </div>
        </div>
  );
};

export default SeekerCard;