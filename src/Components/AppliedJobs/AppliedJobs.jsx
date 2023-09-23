import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
//import { getStoredJonApplication } from "../../Utlity/LocalStorage"


const AppliedJobs = () => {
  const jobs = useLoaderData();
  useEffect(() => {
    const storedJobIds = getStoredJonApplication;
    if (jobs.length > 0) {
      const JobsApplied = jobs.filter(job => storedJobId.includes(job.id))
    }

  }, [])
  return (
    <div>

    </div>
  );
};

export default AppliedJobs;