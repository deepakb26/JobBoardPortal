import { useEffect, useState } from "react";
import { apiRequest } from "../utils";
import { useSelector } from "react-redux";
import { Loading } from "../components";

const SeekerCard = ({ id }) => {
  const { user } = useSelector((state) => state.user);
  const [applicants, setApplicants] = useState([]);

  const getApplicantDetails = async () => {
    try {
      const res = await apiRequest({ url: "/jobs/get-job-detail/" + id, method: "GET" });
      await Promise.all(
        (res?.data?.application || []).map(async (applicant) => {
          const result = await apiRequest({
            url: "/user/get-user-details/" + applicant,
            token: user?.token,
            method: "GET",
          });
          console.log("Processing applicant:", applicant);
          console.log("Result:", result);

          if (result?.seeker && !applicants.some((existingSeeker) => existingSeeker._id === result?.seeker._id)) {
            console.log('hi')
            setApplicants((prevApplicants) => [...prevApplicants, result.seeker]);
          }
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getApplicantDetails();
  }, [id]);



  return (
    <div className='flex flex-wrap'>
      {applicants.length === 0 ? (
        <Loading />
      ) : (
        <>
          {applicants
            .filter((seeker, index, self) => self.findIndex((s) => s._id === seeker._id) === index)
            .map((seeker, index) => (
              <div
                key={index}
                className='w-full md:w-[16rem] 2xl:w-[18rem] h-[16rem] md:h-[18rem] bg-white flex flex-col justify-between shadow-lg rounded-md px-3 py-5'
                style={{ margin: '0.5rem' }}
              >
                <div className='w-full h-full flex flex-col justify-between'>
                  <div className='flex gap-3'>
                    <img src={seeker?.profileUrl} alt={seeker?.firstName} className='w-14 h-14' />
                    <div className='w-full h-16 flex flex-col justify-center'>
                      <p className='w-full h-12 flex item-center text-lg font-semibold overflow-hidden leading-5 '>
                        {seeker?.firstName}
                      </p>
                    </div>
                  </div>
                  <div className='py-3'>
                    <p className='text-sm'>
                      {seeker?.about ? seeker.about.slice(0, 150) + "..." : "No information available"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
}
  


export default SeekerCard;
