import React, { useEffect } from 'react'
import { apiRequest } from '../utils'
import { useState } from 'react'
import { JobCard } from '../components'
import { Loading } from '../components'
import { useSelector } from 'react-redux'


const Application = () =>
{
    const { user } = useSelector((state) => state.user);
    const [isFetching, setIsFetching] = useState(false)
    const [appliedJobs,setAppliedJobs] = useState([])


    const fetchJobs = async () =>{
        setIsFetching(true)
        try{
            const res = await apiRequest({
                url:"/user/applied-jobs",
                token:user?.token,
                method:"GET"
            })
            setIsFetching(false)
            setAppliedJobs(res?.jobs)
        }catch(error)
        {
            console.log(error)
        }

    }

    useEffect(()=>{
        fetchJobs()
    },[])

    return (
        isFetching ? (
          <Loading />
        ) : (
          <div className='w-full flex flex-wrap gap-4'>
            {appliedJobs.map((job, index) => {
              const newJob = {
                name: job?.company?.name,
                logo: job?.company?.profileUrl,
                ...job,
              };
              console.log(newJob)
              return <JobCard job={newJob} key={index} />;
            })}
          </div>
        )
      );
}

export default Application
