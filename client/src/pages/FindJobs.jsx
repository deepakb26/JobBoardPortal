import React,{useEffect, useState} from 'react'
import { useLocation, useNavigate} from 'react-router-dom/dist'
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Header } from '../components'
import { ListBox,JobCard, CustomButton   } from '../components'
import { jobTypes } from '../utils/data';
import { experience,jobs} from "../utils/data";
import { apiRequest, updateURL } from '../utils';

const FindJobs = () => {
  const [sort, setSort] = useState('Newest')
  const [page, setPage] = useState(1)
  const [numPage, setNumPage] = useState(1)
  const [recordsCount, setRecordsCount] = useState(0)
  const [data, setData] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [jobLocation, setJobLocation] = useState("")
  const [filterJobTypes, setFilterJobTypes] = useState([])
  const [filterExp, setFilterExp] = useState([])
  const [expVal,setExpVal] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  
  const fetchJobs = async()=>{
    setIsFetching(true)
    const newURL = updateURL({
      pageNum:page,
      query:searchQuery,
      cmpLoc:jobLocation,
      sort:sort,
      navigate:navigate,
      location:location,
      jType:filterJobTypes,
      exp:filterExp
    });

    try{
      const res = await apiRequest({
        url:"/jobs" + newURL,
        method:"GET"
      });

      setNumPage(res?.numOfPage);
      setRecordsCount(res?.totalJobs);
      setData(res?.data);

      setIsFetching(false)
    }
    catch(error)
    {
      console.log(error)
    }
  }
  const filterJobs = (val) => {
    if (filterJobTypes?.includes(val)) {
      setFilterJobTypes(filterJobTypes.filter((el) => el != val));
    } else {
      setFilterJobTypes([...filterJobTypes, val]);
    }
  };

  const filterExperience = async (e) => {
    if(expVal?.includes(e)){
      setExpVal(expVal?.filter((el) => el!=e));
    } else{
      setExpVal([...expVal, e]);
    }
  };

  const handleSearchSubmit = async(e) =>{
    e.preventDefault();
    await fetchJobs();
  }

  const handleShowMore = async (e) =>{
    e.preventDefault();
    setPage((prev) => prev + 1)
  }

  useEffect(() => {
    if(expVal.length > 0){
      let newExpVal = [];

      expVal?.map((el) => {
        const newEl = el?.split("-");
        newExpVal.push(Number(newEl[0]),Number(newEl[1]))
      })

      newExpVal?.sort((a,b) => a - b);

      setFilterExp(`${newExpVal[0]} - ${newExpVal[newExpVal?.length -1]}`)

    }
  },[expVal]);

  useEffect(()=>{
    fetchJobs();
  },[sort,filterJobTypes,filterExp,page])


  return <div>
    <Header title ='Take the next step in your career'
    type="home"
    handleClick={handleSearchSubmit}
    searchQuery = {searchQuery}
    setSearchQuery = {setSearchQuery}
    location = {jobLocation}
    setLocation={setJobLocation}
    />
    <div className='container mx-auto flex gap-6 2xl:gap-10 md:px-5 py-0 md:py-6 bg-[#f7fdfd]'>
    <div className='hidden md:flex flex-col w-1/6 h-fit bg-white shadow-sm'>
    <p className='text-lg font-semibold text-slate-600'>Filter Search</p>
    <div className='py-2'>
    <div className='flex justify-between mb-3'>
    <p className='flex items-center gap-2 font-semibold'>
      <BiBriefcaseAlt2 />
      Job Type
    </p>
    <button>
      <MdOutlineKeyboardArrowDown />
    </button>
      </div>

    <div className='flex flex-col gap-2'>
      {jobTypes.map((jtype,index)=>(
        <div key={index} className='flex gap-2 text-sm md:text-base '>
          <input
            type='checkbox'
            value={jtype}
            className='w-4 h-4'
            onChange={(e) => filterJobs(e.target.value)}
          />
          <span>{jtype}</span>
        </div>
      ))}
    </div>
    </div>

    <div className='py-2 mt-4'>
      <div className='flex justify-between mb-3'>
        <p className='flex items-center gap-2 font-semibold'>
          <BsStars />
          Experience
        </p>
        <button>
          <MdOutlineKeyboardArrowDown />
        </button>
      </div>
      <div className='flex flex-col gap-2'>
        {experience.map((exp) => (
          <div key={exp.title} className='flex gap-3'>
            <input
              type='checkbox'
              value={exp?.value}
              className='w-4 h-4'
              onChange={(e) => filterExperience(e.target.value)}
            />
            <span>{exp.title}</span>
          </div>
        ))}
      </div>
    </div>
    </div>

    <div className='w-full md:w-5/6 px-5 md:px-0'>
      <div className='flex items-center justify-between mb-4'>
      <p className='text-sm md:text-base'>
        Showing: <span className='font-semibold'>{recordsCount}</span> Jobs Available
      </p>
      <div className='flex flex-col md:flex-row gap-0 md:gap-2 md:items-center'>
        <p className='text-sm md:text-base'>Sort By:</p>
        <ListBox sort={sort} setSort={setSort} />
      </div> 
      </div>
      <div className='w-full flex flex-wrap gap-4'>
        {data.map((job, index) => {
          const newJob = {
            name:job?.company?.name,
            logo:job?.company?.profileUrl,
            ...job,
          }
          return <JobCard job={newJob} key={index} />
        })} 
      </div>
      {numPage > page && !isFetching && (
        <div className='w-full flex items-center justify-center pt-16'>
          <CustomButton
            onClick = {handleShowMore} title='Load More' containerStyles={`text-blue-600 py-1.5 px-5 focus:outline-nonehover:bg-blue-700 hover:text-white rounded-full text-base borderborder-blue-600`}
          />
        </div>
        )}
      </div>
    </div>
  </div>
}

export default FindJobs