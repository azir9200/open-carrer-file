import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams;
  const idInt = parseInt(id);
  const job = jobs.find(job => job.id === idInt);
  console.log(job);
  const handleApplyJob = () => {
    // saveJobApplication(id);
    toast('You have application submit success. !!')
  }

  return (
    <div>

      <div className="grid grid-cols-4" >
        <div className="border md:col-span-3" ></div>

        <h2 className="text-4xl" >Details coming here... </h2>
        {/* <h2>Job Details of : {job.job_title} </h2> */}
        <div className="border" >
          <h2>Side things</h2>
          <button onClick={handleApplyJob} className="btn btn-primary w-full" >Apply Now</button>
        </div>
      </div>
      <ToastContainer />

    </div>
  );
};

export default JobDetails;