import { useEffect, useState } from "react";
import Jobs from "../../Jobs/Jobs";
import Job from "../../Job/Job";


const Features = () => {
  const [jobs, setJobs] = useState([]);

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
      <div>
        {
          jobs.map(job => <Job key={job.id} job={job} ></Job>)
        }
      </div>
    </div>
  );
};

export default Features;