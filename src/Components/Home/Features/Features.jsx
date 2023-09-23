import { useEffect, useState } from "react";
import Jobs from "../../Jobs/Jobs";
import Job from "../../Job/Job";


const Features = () => {
  const [jobs, setJobs] = useState([]);
  const [datalenght, setDatalength] = useState(4);


  useEffect(() => {
    fetch('jobs.json')
      .then(res => res.json())
      .then(data => setJobs(data))
  }, [])
  return (
    <div>
      <div>
        <h2 className="text-4xl text-center " > Featured Jobs {jobs.length} </h2>
        <p className="text-center" >Explore thousand of jobs opportuntis with all the information you need. Its your future</p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 shadow-slate-700 gap-6" >
        {
          jobs.slice(0, datalenght).map(job => <Job key={job.id} job={job} ></Job>)
        }
      </div>
      <div className={datalenght === jobs.length && 'hidden'} >
        <button className="btn btn-active btn-secondary" onClick={() => setDatalength(jobs.length)} >Show All</button>
      </div>
    </div>
  );
};

export default Features;